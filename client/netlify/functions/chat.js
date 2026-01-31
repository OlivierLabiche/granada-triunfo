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
        knowledgeContext = '\n\nINFORMATIONS PERTINENTES :\n' +
          results.map((text, i) => `${i + 1}. ${text}`).join('\n');
      }
    }

    const systemPrompt = `Tu es MariIA, l'assistante de Marie à Grenade. Tu parles comme une amie bienveillante.

RÈGLE N°1 - CONCISION : Réponds en 2-3 phrases MAXIMUM. PAS de liste numérotée. PAS de "n'hésitez pas". PAS de WhatsApp sauf si tu n'as PAS la réponse.

AUTRES RÈGLES :
- JAMAIS inventer d'informations, adresses, prix, horaires ou distances.
- Réponds UNIQUEMENT avec les informations ci-dessous.
- Si tu n'as pas l'info : "Contactez Marie : https://wa.me/34661558334"
- Ne JAMAIS inventer de temps de trajet. Dis 'à proximité' si la distance n'est pas indiquée.
- INTENTION : 'j'ai chaud' = veut se rafraîchir (clim/ventilateur). 'j'ai froid' = veut se réchauffer (chauffage).

Langue : ${language || 'FR'}
${knowledgeContext}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
      model: "claude-3-5-sonnet-latest",
        max_tokens: 300,
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
