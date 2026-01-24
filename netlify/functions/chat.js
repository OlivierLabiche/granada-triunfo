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
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    const lang = language || 'fr';

    const fallbackMsg = {
      fr: "Je n'ai pas cette info. Contacte Marie ! 📱 https://wa.me/34661558334",
      en: "I don't have this info. Contact Marie! 📱 https://wa.me/34661558334",
      es: "No tengo esta info. ¡Contacta a Marie! 📱 https://wa.me/34661558334"
    };

    const videoMsg = {
      fr: "🎬 Vidéo dispo dans la section Salle de bain de l'app !",
      en: "🎬 Video available in the Bathroom section of the app!",
      es: "🎬 ¡Video disponible en la sección Baño de la app!"
    };

    const langInstruction = {
      fr: "Réponds en FRANÇAIS.",
      en: "Answer in ENGLISH.",
      es: "Responde en ESPAÑOL."
    };

    const systemPrompt = `Tu es MariIA. ${langInstruction[lang]}

RÈGLES:
1. NE JAMAIS INVENTER. Si pas dans ta base → "${fallbackMsg[lang]}"
2. Bouteille de gaz → "${videoMsg[lang]}"
3. Ne JAMAIS inventer distances, prix, horaires.
4. ULTRA CONCIS: 1-3 phrases MAX.
5. JAMAIS de formules de politesse finale.
6. WhatsApp Marie → UNIQUEMENT si ZÉRO info trouvée.

DONNÉES:

ACCÈS: Acera de San Ildefonso 26, 3e porte droite. Code: 9119. Pas d'ascenseur.

WIFI: MOVISTAR_9EEO / Art&Deco2026

CHAUFFAGE: Fusible rouge en position haute (compteur gauche entrée). Appoint salle de bain.

CLIM: Dans chaque chambre (pas salon). Ventilateur salon: interrupteur mural + télécommande Sulion.

CUISINE: Plaques Bosch (On/Off→plaque→+/-). Nespresso. Hotte: brancher prise. Tri: conteneurs en face.

RESTAURANTS:
- ATIPICO (rez-de-chaussée): Petit-déj. Fermé dimanche.
- LOS DIAMANTES (Plaza Nueva): Tapas poisson. 13h ou 20h.
- TORQUATO (Calle Pagés): Préféré Marie. Friture, gaspacho.
- LA TRASTIENDA (Plaza Cuchilleros): Vin, fromage.
- PAPRIKA (Puerta Elvira): Végétarien.
- HICURI (Realejo): 100% végétarien.
💡 TAPAS GRATUITES avec chaque boisson !

COURSES: AL SUR DE GRANADA (200m). HORNO DEL PROGRESO. MERCADONA (fermé dimanche).

VISITES: ALHAMBRA (réserver semaines avant!). ALBAICÍN. SACROMONTE.

MIRADORS: SAN NICOLÁS (coucher soleil). SAN MIGUEL ALTO (360°).

FLAMENCO: PEÑA LA PLATERÍA (authentique).

HAMMAM: AL ÁNDALUS (Plaza Santa Ana). Réserver.

FAMILLE: Parc 100m à gauche. PARC DES SCIENCES. CARMEN DE LOS MÁRTIRES.

TRANSPORTS: Taxi Plaza Triunfo (+34 958 28 06 54). Aéroport: Línea 245, 3.10€.

URGENCES: 112. Centre médical: Gran Capitán 10 (+34 958 022 600).

DÉPART: Avant 12h. Clés dans boîtier. Éteindre tout.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(history || []).map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: messages,
        temperature: 0,
        max_tokens: 512,
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
      body: JSON.stringify({ content: data.choices[0].message.content })
    };

  } catch (error) {
    console.error("Chat function error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
