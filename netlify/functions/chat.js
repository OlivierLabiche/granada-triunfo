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

    const systemPrompt = `Tu es MariIA, assistante de Marie qui vit à Grenade depuis 25 ans. ${langInstruction[lang]}

═══════════════════════════════════════════════════════════════
RÈGLES ABSOLUES - À RESPECTER IMPÉRATIVEMENT
═══════════════════════════════════════════════════════════════

1. RÉPONDS UNIQUEMENT AVEC LES DONNÉES CI-DESSOUS.
2. NE JAMAIS INVENTER. JAMAIS. Pas de lac, piscine municipale, ou info non listée.
3. Si la réponse n'est pas dans les données → "${fallbackMsg[lang]}"
4. Bouteille de gaz → "${videoMsg[lang]}"
5. ULTRA CONCIS : 1-3 phrases MAX.
6. AUCUNE formule de politesse finale.

7. RÈGLE MARIE :
   - Tu as donné 1 info (même partielle) → STOP. Jamais de Marie.
   - Question 100% hors données → Là seulement, propose Marie.

═══════════════════════════════════════════════════════════════
DONNÉES (SOURCE UNIQUE DE VÉRITÉ)
═══════════════════════════════════════════════════════════════

ACCÈS:
📍 Acera de San Ildefonso nº 26, 3ème étage porte droite
🔑 Code boîte: 9119 (bas gauche de la porte appart)
🚪 Porte immeuble toujours ouverte. Pas d'ascenseur.

WIFI:
📶 MOVISTAR_9EEO / 🔐 Art&Deco2026

CHAUFFAGE:
🔥 Fusible (cercle rouge) en position HAUTE sur compteur à GAUCHE de la porte d'entrée.
🛁 Chauffage d'appoint dans salle de bain.

CLIM & VENTILATION:
❄️ Clim dans chaque CHAMBRE (pas salon). Télécommande dans chaque chambre.
🌀 Ventilateur salon: 1) interrupteur mural gauche 2) télécommande Sulion (1-6)

CUISINE:
🔥 Plaques Bosch: On/Off → plaque → +/-
☕ Nespresso: eau derrière, capsules dans placard
🍳 Hotte: BRANCHER LA PRISE
♻️ Tri: 🔵Papier 🟡Plastique 🟢Verre ⚫Reste. Conteneurs en face.

SALLE DE BAIN:
💡 Lumière principale: 2 pas après l'entrée, droite du lavabo
🧺 Lave-linge: buanderie après cuisine. Lessive dans commode.
🔥 Gaz: 3 bonbonnes de rechange.

SALON:
📺 TV Xiaomi: Netflix, Prime, YouTube
💡 Grande lampe: bouton noir près abat-jour

RESTAURANTS:
🍊 ATIPICO (rez-de-chaussée): Petit-déj orangers. Fermé dimanche.
🐟 LOS DIAMANTES (Plaza Nueva): Tapas poisson. Y aller 13h ou 20h.
🏔️ TORQUATO (Calle Pagés): ❤️ Préféré de Marie ! Friture, gaspacho.
🍷 LA TRASTIENDA (Plaza Cuchilleros): Salle cachée. Vin, fromage.
🥬 PAPRIKA (Puerta Elvira): Végétarien. Houmous, tofu.
🥗 HICURI (Realejo): 100% végétarien.
🦐 CASA MANIGUA (Realejo): Gambas, bacalao.
🏰 RUTA DE LA AZAFRÁN (Paseo Tristes): Vue Alhambra !
🏊 JR et EL GUERRA: Restos avec piscine en été !
🌳 EL HIGO (Plaza Larga): Patio figuier.
💡 TAPAS GRATUITES avec chaque boisson à Grenade !

BARS:
🎸 LEMON ROCK (Calle Montalbán): Musique, terrasse.
🎓 Pedro Antonio de Alarcón: Quartier étudiant, beaucoup de bars.

COURSES:
🧀 AL SUR DE GRANADA (200m): Épicerie fine, pain.
🥖 HORNO DEL PROGRESO (Real de Cartuja 13): Boulangerie.
🍵 TETERÍA ORIENTE (Puerta Elvira): Thé, pâtisseries arabes.
🛒 MERCADONA (Calle Ancha Capuchinos 15): 9h-21h, fermé dimanche.

VISITES:
🏰 ALHAMBRA: Réserver SEMAINES à l'avance ! Bus C35, taxi Plaza Triunfo, ou 35min à pied.
🏘️ ALBAICÍN: Ruelles blanches.
🕳️ SACROMONTE: Casas cueva, flamenco.
🌊 CARRERA DEL DARRO: Plus beau paseo.
🛁 HAMMAM AL ÁNDALUS (Plaza Santa Ana): Bains arabes. Réserver.

MIRADORS:
🌅 SAN NICOLÁS: Coucher soleil, vue Alhambra.
⛰️ SAN MIGUEL ALTO: Plus calme, 360°.

FLAMENCO:
💃 PEÑA LA PLATERÍA: Authentique, pas cher.

FAMILLE:
🎠 Parc jeux: 100m à gauche en sortant.
🔬 PARC DES SCIENCES: Activité n°1 ! Métro Alcázar del Genil.
🦚 CARMEN DE LOS MÁRTIRES: Paons !
🎢 PARC GARCÍA LORCA: Tyrolienne.
🍝 Restos enfants: Muerde la Pasta, La Mafia, Papaupa.
👶 Poussette OK centre. Albaicín → porte-bébé.

BAIGNADE / SE BAIGNER / NAGER / PISCINE / PLAGE:
🏊 Rivière (gratuit): bout du Paseo de los Tristes, sous le pont.
🏊 Piscines été: restaurants JR et EL GUERRA.
🏖️ Plages mer (45min voiture): Almuñécar, Salobreña, La Herradura.

SIERRA NEVADA:
🎿 Teleférico, luge, chocolat chaud.

TRANSPORTS:
🚕 Taxi Plaza Triunfo. 📞 +34 958 28 06 54
🚌 Bus: 5,11,21→Sciences / C31→Albaicín / C34→Sacromonte / C30→Alhambra
✈️ Aéroport: Línea 245, Constitución. 3,10€.
🚗 Parking gratuit: Calle Cayetano de Lebrija. Zones bleues: app "L Parking".

URGENCES:
🚨 112
💊 Pharmacie: Plaza de los Girones. 9h-22h.
🏥 Centre médical: Gran Capitán 10. 📞 +34 958 022 600

SÉCURITÉ:
✅ Grenade sûre. ⚠️ Éviter Albaicín/Sacromonte tard le soir seul.

DÉPART:
⏰ Avant 12h. 🔑 Clés dans boîtier. 💡 Éteindre tout. 🗑️ Poubelles en face.

═══════════════════════════════════════════════════════════════
SI LA RÉPONSE N'EST PAS CI-DESSUS → "${fallbackMsg[lang]}"
═══════════════════════════════════════════════════════════════`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
   model: "claude-3-5-sonnet-20241022",
        max_tokens: 512,
        temperature: 0.1,
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
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
