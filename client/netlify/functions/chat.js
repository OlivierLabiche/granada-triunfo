// Cache du host Pinecone entre les invocations
let pineconeHost = null;

async function getPineconeHost(apiKey) {
  if (pineconeHost) return pineconeHost;
  const res = await fetch('https://api.pinecone.io/indexes/mariia-knowledge', {
    headers: { 'Api-Key': apiKey }
  });
  const data = await res.json();
  pineconeHost = data.host;
  return pineconeHost;
}

async function searchKnowledge(query, apiKey) {
  try {
    const host = await getPineconeHost(apiKey);
    const res = await fetch(`https://${host}/records/namespaces/default/search`, {
      method: 'POST',
      headers: {
        'Api-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          top_k: 5,
          inputs: { text: query }
        },
        fields: ['text', 'category']
      })
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (data.result && data.result.hits) {
      return data.result.hits.map(hit => hit.fields?.text || '').filter(Boolean);
    }
    return [];
  } catch (err) {
    console.error('Pinecone search error:', err);
    return [];
  }
}

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { message, history, language } = JSON.parse(event.body);
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    const pineconeKey = process.env.PINECONE_API_KEY;

    if (!anthropicKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    // Recherche sémantique dans Pinecone
    let knowledgeContext = '';
    if (pineconeKey) {
      const results = await searchKnowledge(message, pineconeKey);
      if (results.length > 0) {
        knowledgeContext = '\n\nINFORMATIONS PERTINENTES (extraites de la base de connaissances) :\n' +
          results.map((text, i) => `${i + 1}. ${text}`).join('\n');
      }
    }

    const systemPrompt = `Tu es MariIA, l'assistante virtuelle de Marie. Marie vit à Grenade depuis 25 ans et t'a transmis tous ses conseils. Tu parles comme une amie bienveillante. Si tu ne sais pas quelque chose, tu donnes TOUJOURS le lien WhatsApp de Marie : https://wa.me/34661558334

RÈGLES ABSOLUES - À SUIVRE IMPÉRATIVEMENT :

1. Tu ne dois JAMAIS inventer d'informations. JAMAIS.
2. Tu réponds UNIQUEMENT avec les informations fournies ci-dessous.
3. Si une question porte sur quelque chose qui N'EST PAS dans les informations ci-dessous, tu réponds TOUJOURS : "Je n'ai pas cette information précise. Contactez Marie directement, elle sera ravie de vous aider ! 📱 WhatsApp : https://wa.me/34661558334"
4. Ne jamais inventer : des étapes, des procédures, des adresses, des prix, des horaires, des noms, des codes, des numéros.
5. En cas de doute, redirige vers l'application ou vers Marie. MIEUX VAUT NE PAS RÉPONDRE QUE DE DONNER UNE FAUSSE INFO.
6. RÈGLE SUR LES DISTANCES : Ne JAMAIS inventer de temps de trajet ou de distances. Si une distance n'est pas explicitement indiquée, dis simplement 'à proximité' ou 'dans le quartier'.
7. CONCISION OBLIGATOIRE : Maximum 2-3 phrases courtes. JAMAIS de liste numérotée. JAMAIS de "n'hésitez pas à me recontacter". Ne mentionne WhatsApp que si tu n'as PAS la réponse.

Réponds dans la langue suivante: ${language || 'FR'}. Si français, réponds en français. Si EN, reply in English. Si ES, responde en español.
${knowledgeContext}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
  model: "claude-3-5-haiku-latest",
        max_tokens: 200,
        temperature: 0,
        system: systemPrompt,
        messages: [
          ...(history || []).map((msg) => ({
            role: msg.role === "user" ? "user" : "assistant",
            content: msg.content,
          })),
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { statusCode: response.status, headers, body: JSON.stringify(error) };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ content: data.content[0].text })
    };

  } catch (error) {
    console.error("Chat function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
