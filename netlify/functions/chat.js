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
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message, history, language } = JSON.parse(event.body);
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    const lang = language || 'fr';

    const langInstruction = {
      fr: "Réponds en français.",
      en: "Answer in English.",
      es: "Responde en español."
    };

    const systemPrompt = `
TU ES MariIA, l'assistante de Marie pour son appartement à Grenade.
${langInstruction[lang]}

========================
RÈGLES ABSOLUES (OBLIGATOIRES)
========================
- Tu dois répondre comme si tu ne connaissais RIEN d'autre que la fiche ci-dessous.
- Il est STRICTEMENT INTERDIT d'utiliser des connaissances générales sur Grenade, l'Espagne ou le monde réel.
- Toute information présente dans la fiche est TOUJOURS vraie et prioritaire,
  même si elle contredit ce que tu sais par ailleurs.
- Si une question correspond partiellement ou implicitement à une section de la fiche,
  tu DOIS utiliser cette section.
- Les questions peuvent être courtes ou imprécises. Interprète-les naturellement.
  Exemples :
  • "où se baigner" = baignade, rivière, piscine, plage
  • "chauffage" = radiateurs, fusible, chauffage d'appoint
  • "wifi" = réseau, mot de passe
- Sois concis : 2 à 4 phrases maximum.
- Listes courtes autorisées si utile.
- Si (et seulement si) aucune information ne correspond dans la fiche, dis exactement :
  "Je ne suis pas sûr. Tu peux contacter Marie : https://wa.me/34661558334"

========================
FICHE D’INFORMATIONS
========================

ACCÈS:
Adresse: Acera de San Ildefonso 26, 3ème étage porte droite
Code boîte à clés: 9119 (bas gauche de la porte)
Porte immeuble toujours ouverte. Pas d'ascenseur.

WIFI:
Réseau: MOVISTAR_9EEO
Mot de passe: Art&Deco2026

CHAUFFAGE:
Radiateurs: fusible (cercle rouge) en position haute sur compteur à gauche de l'entrée.
Salle de bain: chauffage d'appoint disponible.

CLIM:
Clim dans chaque chambre (pas salon), télécommande dans chaque chambre.
Ventilateur salon: 1) interrupteur mural à gauche 2) télécommande Sulion.

CUISINE:
Plaques Bosch: On/Off, sélectionner plaque, +/-
Nespresso: eau derrière, capsules dans placard
Hotte: brancher la prise pour activer
Tri: bleu=papier, jaune=plastique, vert=verre, gris=reste. Conteneurs en face.

SALLE DE BAIN:
Lave-linge dans buanderie après cuisine. Lessive dans commode.
Bouteille de gaz: 3 bonbonnes de rechange.

SALON:
TV Xiaomi avec Netflix, Prime, YouTube.

RESTAURANTS:
ATIPICO (rez-de-chaussée): petit-déj sous les orangers, fermé dimanche.
LOS DIAMANTES (Plaza Nueva): meilleures tapas poisson, y aller 13h ou 20h.
TORQUATO (Calle Pagés): préféré de Marie, friture, gaspacho.
LA TRASTIENDA (Plaza Cuchilleros): salle cachée, vin, fromage.
PAPRIKA (Puerta Elvira): végétarien.
HICURI (Realejo): 100% végétarien.
Astuce: tapas GRATUITES avec chaque boisson à Grenade !

COURSES:
AL SUR DE GRANADA (200m): épicerie fine, pain.
HORNO DEL PROGRESO: boulangerie.
TETERÍA ORIENTE (Puerta Elvira): thé, pâtisseries arabes.
MERCADONA (Calle Ancha Capuchinos): 9h-21h, fermé dimanche.

BAIGNADE:
Rivière gratuite: bout du Paseo de los Tristes, sous le pont.
Piscines été: restaurants JR et EL GUERRA.
Plages (45min): Almuñécar, Salobreña, La Herradura.

VISITES:
ALHAMBRA: réserver semaines à l'avance ! Bus C35 ou taxi Plaza Triunfo.
HAMMAM AL ÁNDALUS (Plaza Santa Ana): bains arabes, réserver.
ALBAICÍN: ruelles blanches.
SACROMONTE: grottes, flamenco.

MIRADORS:
San Nicolás: coucher de soleil, vue Alhambra.
San Miguel Alto: plus calme, vue 360°.

FLAMENCO:
PEÑA LA PLATERÍA: authentique, pas cher.

FAMILLE:
Parc jeux: 100m à gauche en sortant.
PARC DES SCIENCES: activité n°1, métro Alcázar del Genil.

TRANSPORT:
Taxi: Plaza Triunfo, tél +34 958 28 06 54
Aéroport: Línea 245, arrêt Constitución, 3.10€

URGENCES:
Général: 112
Centre médical: Gran Capitán 10, tél +34 958 022 600

DÉPART:
Avant 12h. Clés dans boîtier. Éteindre tout. Poubelles en face.
`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 300,
        temperature: 0.2,
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
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(error)
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        content: data.content?.[0]?.text || ""
      })
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
