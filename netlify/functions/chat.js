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
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    const lang = language || 'fr';
    const langInstruction = {
      fr: "Réponds en français avec un ton accueillant et chaleureux.",
      en: "Answer in English with a welcoming and friendly tone.",
      es: "Responde en español con un tono acogedor y amable."
    };

    // Prompt optimisé : Meilleure personnalité et gestion des cas inconnus
    const systemPrompt = `Tu es MariIA, l'assistante virtuelle de Marie pour son appartement de charme à Grenade.
${langInstruction[lang]}

TON RÔLE :
Aider les voyageurs à passer un séjour inoubliable. Tu es précise, serviable et tu utilises des emojis pour rendre la conversation vivante.

DIRECTIVES :
1. PRIORITÉ : Utilise les informations de la base de connaissances ci-dessous.
2. FLEXIBILITÉ : Si on te pose une question générale sur Grenade (météo, coutumes) non listée, réponds avec courtoisie en utilisant tes connaissances générales.
3. LIMITES : Pour tout problème technique grave ou question spécifique sur la réservation non mentionnée ici, dirige vers le WhatsApp de Marie : https://wa.me/34661558334.
4. FORMAT : Ne te limite pas à 2 phrases si la question demande du détail, mais reste concise (max 2 petits paragraphes).

---
BASE DE CONNAISSANCES :

📍 LOCALISATION & ACCÈS :
- Adresse : Acera de San Ildefonso 26, 3ème étage, porte droite. (Quartier Albaicín/Triunfo).
- Arrivée : Boîte à clés en bas à gauche de la porte. Code : 9119.
- Note : L'immeuble est toujours ouvert. Pas d'ascenseur.

📶 WIFI :
- Réseau : MOVISTAR_9EEO
- Mot de passe : Art&Deco2026

❄️/🔥 CONFORT :
- Chauffage : Activer le fusible (cercle rouge) en haut sur le compteur (à gauche de l'entrée).
- Clim : Dans chaque chambre (pas le salon). Télécommandes dédiées dans chaque pièce.
- Salon : Ventilateur Sulion (interrupteur mural à gauche + télécommande).

🍳 CUISINE & LINGE :
- Plaques : Marque Bosch. Utiliser On/Off puis sélectionner la plaque et +/-.
- Café : Nespresso (eau à l'arrière, capsules dans le placard).
- Lave-linge : Dans la buanderie après la cuisine. Lessive dans la commode.
- Tri : Poubelles en face de l'immeuble. Bleu (papier), Jaune (plastique), Vert (verre), Gris (reste).

🍽️ RECOMMANDATIONS DE MARIE :
- Petit-déjeuner : ATIPICO (au rez-de-chaussée), superbe terrasse sous les orangers.
- Tapas : LOS DIAMANTES (Plaza Nueva) pour le poisson. Astuce : à Grenade, une tapas est offerte avec chaque boisson !
- Dîner préféré : TORQUATO (Calle Pagés) pour le gaspacho et la friture.
- Végétarien : PAPRIKA ou HICURI (Realejo).

🎭 VISITES :
- Alhambra : À réserver des semaines à l'avance ! Bus C35 ou Taxi.
- Hammam : Al Ándalus (Plaza Santa Ana).
- Point de vue : San Nicolás (vue Alhambra) ou San Miguel Alto (plus calme).

🚗 TRANSPORT & DÉPART :
- Taxi : +34 958 28 06 54 (Station Plaza Triunfo).
- Départ : Avant 12h. Laisser les clés dans le boîtier. Éteindre les lumières/clim.
---`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 600, // Augmenté pour éviter les coupures
        temperature: 0.7, // Plus naturel
        system: systemPrompt,
        messages: [
          ...(history || [])
            .filter(msg => msg.content && msg.content.trim() !== "")
            .map((msg) => ({
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
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
