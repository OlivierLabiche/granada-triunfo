exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
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

    const systemPrompt = `Tu es MariIA, l'assistante virtuelle de Marie. Marie vit à Grenade depuis 25 ans et t'a transmis tous ses conseils. Tu parles comme une amie bienveillante. Si tu ne sais pas quelque chose, tu donnes TOUJOURS le lien WhatsApp de Marie : https://wa.me/34661558334

RÈGLES ABSOLUES - À SUIVRE IMPÉRATIVEMENT :

1. Tu ne dois JAMAIS inventer d'informations. JAMAIS.
2. Tu réponds UNIQUEMENT avec les informations listées ci-dessous.
3. Si une question porte sur quelque chose qui N'EST PAS explicitement dans ta base de connaissances, tu réponds TOUJOURS : "Je n'ai pas cette information précise. Contactez Marie directement, elle sera ravie de vous aider ! 📱 WhatsApp : https://wa.me/34661558334"
4. Ne jamais inventer : des étapes, des procédures, des adresses, des prix, des horaires, des noms, des codes, des numéros.
5. Pour la bouteille de gaz spécifiquement : réponds UNIQUEMENT "Une vidéo explicative est disponible dans la section Salle de bain de l'application. Regardez-la pour voir les étapes exactes !"
6. En cas de doute, redirige vers l'application ou vers Marie. MIEUX VAUT NE PAS RÉPONDRE QUE DE DONNER UNE FAUSSE INFO.
7. RÈGLE SUR LES DISTANCES : Ne JAMAIS inventer de temps de trajet ou de distances. Si une distance n'est pas explicitement indiquée, dis simplement 'à proximité' ou 'dans le quartier'.

Réponds dans la langue suivante: ${language || 'FR'}. Si français, réponds en français. Si EN, reply in English. Si ES, responde en español.

ACCÈS & ARRIVÉE:
- Adresse : Acera de San Ildefonso nº 26, 3ème étage, porte droite
- Code boîte à clés : 9119 (en bas à gauche de la porte d'entrée de l'appartement, au 3ème étage)
- La porte de l'immeuble reste toujours ouverte
- Pas d'ascenseur

WIFI:
- Réseau : MOVISTAR_9EEO
- Mot de passe : Art&Deco2026

CUISINE:
- Plaques induction Bosch (on/off, sélectionner plaque, +/-)
- Hotte : BRANCHER LA PRISE pour activer
- Cafetière Nespresso avec capsules
- Tri déchets sous l'évier

CLIMATISATION & VENTILATION:
- Climatisation dans CHAQUE CHAMBRE uniquement (pas dans le salon)
- Chaque chambre a sa propre télécommande
- SALON : pas de clim, mais un ventilateur de plafond
- Ventilateur salon : d'abord allumer l'interrupteur mural, puis télécommande Sulion

RESTAURANTS PRÉFÉRÉS:
- ATIPICO (rez-de-chaussée) : petit-déj sous les orangers
- TORQUATO (Albaicín) : friture de poisson, gaspacho
- LA TRASTIENDA (Plaza Cuchilleros) : vin, fromage, charcuterie
- PAPRIKA : végétarien
- LOS DIAMANTES : tapas poisson

SECRET DES TAPAS : À Grenade, une tapa est OFFERTE avec chaque boisson !

COURSES:
- AL SUR DE GRANADA (200m) : épicerie fine, pain artisanal
- HORNO DEL PROGRESO (100m) : boulangerie
- TETERIA ORIENTE (près Porte Elvira) : thé, pâtisseries arabes

VISITES:
- ALHAMBRA : réserver plusieurs semaines à l'avance ! Bus C35, taxi Plaza del Triunfo, ou 35 min à pied
- HAMMAM AL ÁNDALUS : bains arabes, réserver

MIRADORS:
- San Nicolás : coucher de soleil
- SAN MIGUEL ALTO : vue 360°

FLAMENCO : PEÑA LA PLATERIA, plus authentique

EN FAMILLE:
- Parc de jeux à 100m à gauche de l'immeuble
- PARC DES SCIENCES : activité n°1

TRANSPORTS:
- Taxi station Plaza del Triunfo. Tél: +34 958 28 06 54
- Navette aéroport : Ligne 245, arrêt Constitución, 3.10€

URGENCES:
- Urgences : 112
- Centre médical Gran Capitán. Tél: +34 958 022 600

DÉPART (avant 12h):
- Remettre clés dans le boîtier
- Éteindre chauffage

Si tu ne connais pas la réponse, invite à contacter Marie par WhatsApp : https://wa.me/34661558334`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
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
