const { Pinecone } = require('@pinecone-database/pinecone');

const chunks = [
  {
    id: 'acces',
    text: "Accès à l'appartement: Adresse: Acera de San Ildefonso 26, 3ème étage porte droite. Code boîte à clés: 9119 (en bas à gauche de la porte). La porte de l'immeuble est toujours ouverte. Il n'y a pas d'ascenseur.",
    category: 'logement'
  },
  {
    id: 'wifi',
    text: "WiFi de l'appartement: Réseau: MOVISTAR_9EEO. Mot de passe: Art&Deco2026.",
    category: 'logement'
  },
  {
    id: 'chauffage',
    text: "Chauffage de l'appartement: Les radiateurs s'activent avec le fusible (cercle rouge) en position haute sur le compteur à gauche de l'entrée. Attention: ne pas confondre avec la clim (dans les chambres uniquement) qui sert pour le froid ET le chaud. Un chauffage d'appoint est disponible dans la salle de bain.",
    category: 'logement'
  },
  {
    id: 'clim',
    text: "Climatisation de l'appartement: Il y a la clim dans chaque chambre (pas dans le salon), avec une télécommande dans chaque chambre. La clim sert pour le froid ET le chaud. Pour le ventilateur du salon: 1) utiliser l'interrupteur mural à gauche 2) puis la télécommande Sulion.",
    category: 'logement'
  },
  {
    id: 'cuisine',
    text: "Cuisine de l'appartement: Plaques Bosch: appuyer sur On/Off, sélectionner la plaque, puis +/- pour la puissance. Nespresso: l'eau se remplit par derrière, les capsules sont dans le placard. Hotte: il faut brancher la prise pour l'activer. Tri des déchets: bleu=papier, jaune=plastique, vert=verre, gris=reste. Les conteneurs sont en face de l'immeuble en sortant.",
    category: 'logement'
  },
  {
    id: 'salle-de-bain',
    text: "Salle de bain et linge: Le lave-linge se trouve dans la buanderie après la cuisine. La lessive est dans la commode. Il y a 3 bonbonnes de gaz de rechange pour l'eau chaude.",
    category: 'logement'
  },
  {
    id: 'draps-canape',
    text: "Draps pour le canapé-lit: Les draps, oreillers et couettes pour le canapé-lit se trouvent sous la méridienne (chaise longue du salon).",
    category: 'logement'
  },
  {
    id: 'salon',
    text: "Salon de l'appartement: TV Xiaomi avec Netflix, Prime Video et YouTube disponibles.",
    category: 'logement'
  },
  {
    id: 'restaurants-tapas',
    text: "Restaurants et tapas à Grenade: ATIPICO se trouve au rez-de-chaussée de l'immeuble, parfait pour le petit-déjeuner sur la terrasse extérieure sous les orangers, fermé le dimanche. LOS DIAMANTES à Plaza Nueva propose les meilleures tapas de poisson, y aller vers 13h ou 20h. TORCUATO sur Calle Pagés est le préféré de Marie: friture, gazpacho, avec une terrasse dans l'Albaicín. LA TRASTIENDA à Plaza Cuchilleros a une salle cachée, spécialisée vin et fromage. Astuce: les tapas sont GRATUITES avec chaque boisson commandée à Grenade !",
    category: 'restaurants'
  },
  {
    id: 'restaurants-vegetariens',
    text: "Restaurants végétariens à Grenade: PAPRIKA se trouve à Cuesta de Abarqueros 3, à 5 minutes à pied de l'appartement. Restaurant végétarien ouvert tous les jours de 13h00 à 16h30 et de 20h00 à 23h30. Réservation conseillée. HICURI dans le quartier du Realejo est 100% végétarien.",
    category: 'restaurants'
  },
  {
    id: 'paella',
    text: "Paella à Grenade: Pour déguster une paella, deux bonnes adresses: Maese Pío Arrocería (20-30€) à Placeta del Pulgar, ou Restaurante Los Manueles (10-20€) sur Calle Reyes Católicos. Temps de préparation 20-30 minutes, il est conseillé de réserver et commander la paella à l'avance.",
    category: 'restaurants'
  },
  {
    id: 'courses',
    text: "Courses et commerces à Grenade: AL SUR DE GRANADA à 200m de l'appartement pour l'épicerie fine et le pain. HORNO DEL PROGRESO à Calle Real de Cartuja 13 est une boulangerie. MERCADONA à Calle Ancha de Capuchinos est un supermarché ouvert de 9h à 21h, fermé le dimanche, à 500m. Il y a aussi une petite épicerie à 5 minutes à pied: Calle Real de Cartuja 55.",
    category: 'commerces'
  },
  {
    id: 'teterias',
    text: "Calle de las Teterías: La rue Calderería Nueva est la célèbre Calle de las Teterías à Grenade. On y trouve de nombreux salons de thé, des boutiques de douceurs et d'artisanat arabe. TETERÍA ORIENTE se trouve à Acera de la Merced 4 (près de Puerta Elvira) pour du thé et des pâtisseries arabes.",
    category: 'commerces'
  },
  {
    id: 'baignade',
    text: "Baignade et plages: Pour se baigner gratuitement en rivière: aller au bout du Paseo de los Tristes, sous le pont. Piscines d'été dans les restaurants JR et EL GUERRA. Les plages sont à 45 minutes en voiture: Almuñécar, Salobreña, La Herradura.",
    category: 'activites'
  },
  {
    id: 'visites-generales',
    text: "Visites principales à Grenade: L'ALHAMBRA est incontournable mais il faut réserver des semaines à l'avance ! On y accède en bus C35 ou en taxi depuis Plaza Triunfo. Le HAMMAM AL ÁNDALUS à Plaza Santa Ana propose des bains arabes (réserver à l'avance). L'ALBAICÍN est le quartier aux ruelles blanches. Le SACROMONTE est le quartier des grottes et du flamenco.",
    category: 'visites'
  },
  {
    id: 'alhambra-sans-billets',
    text: "Alhambra sans billets: Si vous n'avez pas de billets pour l'Alhambra, vous pouvez quand même en profiter: monter par la Cuesta de Gómerez, passer par les remparts jusqu'au Palais de Charles Quint (gratuit), puis redescendre par la Cuesta de los Chinos, un chemin peu fréquenté dans la nature qui commence après le restaurant Las Mimbres. Prévoir des chaussures confortables.",
    category: 'visites'
  },
  {
    id: 'bus-albaicin',
    text: "Bus pour l'Albaicín: Pour monter dans l'Albaicín depuis le centre, prendre les minibus urbains (petits bus rouges). La ligne C31 monte au Mirador de San Nicolás. Conseil: monter en minibus et redescendre à pied dans les ruelles !",
    category: 'transport'
  },
  {
    id: 'miradors',
    text: "Miradors et points de vue à Grenade: Le Mirador de San Nicolás offre une vue magnifique sur l'Alhambra, idéal pour le coucher de soleil. Accessible à pied depuis l'appartement en 15-20 minutes (avec des pentes). Le Mirador de San Miguel Alto est plus calme avec une vue à 360°. Accès à pied en 30 minutes (très pentu) ou en bus N9 (arrêt Constitución2-Triunfo).",
    category: 'visites'
  },
  {
    id: 'flamenco',
    text: "Flamenco à Grenade: La PEÑA LA PLATERÍA à Placeta de Toqueros 7 est le lieu le plus authentique et pas cher pour voir du flamenco. À 20 minutes à pied de l'appartement ou en minibus C31 jusqu'à Plaza Nueva. Programme sur http://www.laplateria.org.es/. Réservation conseillée. Ouvert du mercredi au dimanche. On peut aussi y manger des tapas et profiter de la vue sur l'Alhambra.",
    category: 'activites'
  },
  {
    id: 'famille',
    text: "Activités en famille à Grenade: Un parc de jeux se trouve à 100 mètres à gauche en sortant de l'immeuble. Le PARC DES SCIENCES est l'activité n°1 pour les familles, accessible en métro (arrêt Alcázar del Genil).",
    category: 'activites'
  },
  {
    id: 'transport',
    text: "Transport à Grenade: Taxi: la station est à Plaza Triunfo, à 3 minutes à pied. Téléphone: +34 958 28 06 54. On peut aussi arrêter un taxi dans la rue (lumière verte = disponible). L'application Pidetaxi est disponible. Pour l'aéroport: navette Línea 245, arrêt Constitución, 3,10€. Plus d'infos: https://www.granadadirect.com/transporte/autobuses-aeropuerto-granada/. Le taxi vers l'aéroport coûte 30-40€.",
    category: 'transport'
  },
  {
    id: 'parking',
    text: "Où se garer à Grenade: La rue de l'appartement est en zone bleue (horodateur), comme les rues adjacentes. Le parking APK2 Triunfo est à 5 minutes à pied (réservation possible via l'application pour un tarif réduit). Stationnement gratuit possible dans la zone du Callejón de Lebrija, à 15 minutes à pied de l'appartement.",
    category: 'transport'
  },
  {
    id: 'sierra-nevada',
    text: "Sierra Nevada: La station de ski est à 45 minutes en voiture de Grenade. Bus ALSA disponible depuis la gare routière. Pour skier: forfait, météo et location de matériel sur sierranevada.es. En été: activités, randonnées et nature (voir la section 'Été' du site).",
    category: 'activites'
  },
  {
    id: 'theatre',
    text: "Théâtre à Grenade: Les théâtres célèbres sont l'Isabel la Católica et le Teatro Alhambra. La Estupenda est une petite salle à 5 minutes à pied de l'appartement. Programmation sur https://espaciolaestupenda.com.",
    category: 'activites'
  },
  {
    id: 'garcia-lorca',
    text: "Federico García Lorca à Grenade: L'un des plus grands poètes et dramaturges espagnols du XXe siècle, inspiré par la culture andalouse. Arrêté et assassiné en 1936 au début de la guerre civile. Le Centre culturel García Lorca se trouve Plaza de la Romanilla (expositions, théâtre). Sa maison natale, la Huerta de San Vicente, est dans le parc García Lorca. Bus U3 depuis l'arrêt Severo Ochoa.",
    category: 'visites'
  },
  {
    id: 'urgences',
    text: "Urgences et santé à Grenade: Numéro d'urgence général: 112. Centre médical: Gran Capitán 10, téléphone +34 958 022 600. Attention: les urgences sont disponibles uniquement à partir de 15h.",
    category: 'urgences'
  },
  {
    id: 'depart',
    text: "Départ de l'appartement: Le départ doit se faire avant 12h. Remettre les clés dans le boîtier à clés. Éteindre tout (lumières, chauffage, clim). Mettre les poubelles dans les conteneurs en face de l'immeuble.",
    category: 'logement'
  }
];

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    const pineconeKey = process.env.PINECONE_API_KEY;
    if (!pineconeKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'PINECONE_API_KEY manquante' }) };
    }

    const pc = new Pinecone({ apiKey: pineconeKey });
    const index = pc.index('mariia-knowledge');

    const batchSize = 10;
    let total = 0;

    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      await index.upsertRecords(batch);
      total += batch.length;
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: `${total} chunks envoyés à Pinecone avec succès !` 
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
