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

  try {
    const { message, history, language } = JSON.parse(event.body);
    const apiKey = process.env.ANTHROPIC_API_KEY;
    const lang = language || 'fr';

    const systemPrompt = `Tu es MariIA, l'assistante personnelle de Marie pour son appartement à Grenade.
Réponds en ${lang === 'fr' ? 'français' : lang === 'es' ? 'espagnol' : 'anglais'}.

TON OBJECTIF : 
Aider le voyageur en utilisant la base de données ci-dessous. Sois chaleureuse et utilise des emojis. 

RÈGLES CRITIQUES :
1. Si la réponse est dans la base de données, DONNE-LA, même si la question est formulée différemment (ex: "se baigner" pour "rivière").
2. Ne sois pas trop brève : donne des détails utiles (adresses, horaires).
3. Si l'info est totalement absente, propose de contacter Marie : https://wa.me/34661558334.

---
BASE DE DONNÉES DE L'APPARTEMENT :

📍 ADRESSE & ARRIVÉE (Check-in) :
- Lieu : Acera de San Ildefonso 26, 3ème étage droite.
- Accès : Boîte à clés (code 9119) située en bas à gauche de la porte. Pas d'ascenseur.

📶 WIFI :
- Réseau : MOVISTAR_9EEO / Pass : Art&Deco2026

🏊 BAIGNADE, NAGER & FRAÎCHEUR :
- Rivière (gratuit) : Au bout du "Paseo de los Tristes", sous le pont. Parfait pour se baigner.
- Piscines (été) : Restaurants "JR" et "EL GUERRA" proposent des piscines accessibles aux clients.
- Plages (45min en voiture) : Almuñécar, Salobreña et La Herradura.

🍽️ RESTAURANTS & TAPAS :
- Tapas offertes : À Grenade, une tapas est gratuite avec chaque boisson !
- Poisson : LOS DIAMANTES (Plaza Nueva).
- Préféré de Marie : TORQUATO (Calle Pagés).
- Petit-déjeuner : ATIPICO (au rez-de-chaussée).

❄️ CLIM & CHAUFFAGE :
- Clim : Dans chaque chambre (télécommandes sur place). Pas de clim dans le salon.
- Chauffage : fusible (cercle rouge) en position haute sur le compteur à l'entrée.

🧹 DÉPART (Check-out) :
- Heure : Avant 12h.
- Procédure : Éteindre clim/lumières, clés dans le boîtier, poubelles dans les conteneurs en face.
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
        max_tokens: 800,
        temperature: 0.7, // Important pour le lien logique "baigner" -> "rivière"
        system: systemPrompt,
        messages: [
          ...(history || []).map(msg => ({ role: msg.role === "user" ? "user" : "assistant", content: msg.content })),
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();
    return { statusCode: 200, headers, body: JSON.stringify({ content: data.content[0].text }) };

  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
