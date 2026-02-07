import React, { useState, useRef, useEffect } from "react";

// ============================================
// ICÔNES SVG
// ============================================
const Icon = ({
  children,
  className = "w-5 h-5",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </Icon>
);
const KeyIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </Icon>
);
const WifiIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </Icon>
);
const ChefHatIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M6 13.87A4 4 0 0112 6a4 4 0 016 3.87V20H6v-6.13z" />
  </Icon>
);
const SofaIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 11a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zM4 16v2m16-2v2" />
  </Icon>
);
const BathIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 12h16M6 12V6a2 2 0 012-2h1m5 14v2m-4-2v2" />
  </Icon>
);
const MapPinIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </Icon>
);
const BotIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4m-4 4h.01M16 15h.01" />
  </Icon>
);
const SendIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </Icon>
);
const SparklesIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </Icon>
);
const CopyIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </Icon>
);
const CheckIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M5 13l4 4L19 7" />
  </Icon>
);
const NavigationIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </Icon>
);
const FlameIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
  </Icon>
);
const TvIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <path d="M17 2l-5 5-5-5" />
  </Icon>
);
const FanIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M12 12c-2-2.67-6-6-6-6s4 .67 6 4c2-3.33 6-4 6-4s-4 3.33-6 6zm0 0c2 2.67 6 6 6 6s-4-.67-6-4c-2 3.33-6 4-6 4s4-3.33 6-6z" />
  </Icon>
);
const SnowflakeIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M12 2v20m5-17l-5 5-5-5m10 14l-5-5-5 5M2 12h20M5 7l5 5-5 5m14-10l-5 5 5 5" />
  </Icon>
);
const UtensilsIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </Icon>
);
const BusIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M8 6v6m8-6v6M2 12h20M6 18h.01M18 18h.01" />
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </Icon>
);
const ThermometerIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
  </Icon>
);
const MessageCircleIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </Icon>
);
const UsersIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
  </Icon>
);
const AlertIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Icon>
);
const RecycleIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </Icon>
);
const MapIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </Icon>
);
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </Icon>
);

// ============================================
// CONFIGURATION
// ============================================
const HOST_NAME = "Marie";
const HOST_PHOTO = "/images/host_marie.jpg";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Acera+de+San+Ildefonso+26+Granada+Spain";
const MYMAPS_URL = "https://www.google.com/maps/d/u/0/viewer?mid=1qrG_alXS7iEoRPprpKYbHQW75Uz8PmE";
const WIFI_INFO = { network: "MOVISTAR_9EEO", password: "Art&Deco2026" };

const ADDRESS = {
  street: "Acera de San Ildefonso nº 26",
  floor: {
    fr: "3ème étage – porte droite",
    en: "3rd floor – right door",
    es: "3ª planta – puerta derecha"
  },
  keyCode: "9119",
};

const PHOTOS: Record<string, string> = {
  boite_cles: "/images/boite_cles.jpg",
  wifi_qr: "/images/wifi_qr.jpg",
  extincteur: "/images/extincteur.jpg",
  first_aid: "/images/first_aid.jpg",
  plaques: "/images/plaques.jpg",
  nespresso: "/images/nespresso.jpg",
  radiateur: "/images/radiateur.jpg",
  telecommande_clim: "/images/telecommande_clim.jpg",
  lave_linge: "/images/lave_linge.jpg",
  compteur: "/images/compteur.jpg",
  chauffage_appoint: "/images/chauffage_appoint.jpg",
  jeux_enfants: "/images/jeux_enfants.jpg",
  parc: "/images/parc.jpg",
};

// ============================================
// TRADUCTIONS
// ============================================
const translations: Record<string, Record<string, string>> = {
  fr: {
    welcome: "Bienvenue à Grenade",
    subtitle: "Un havre de calme au cœur de l'Albayzin",
    assistant: "MariIA",
    assistant_subtitle: "Posez vos questions en temps réel",
    access: "Arrivée",
    wifi: "WiFi",
    kitchen: "Cuisine",
    living: "Salon",
    bathroom: "Salle de bain",
    family: "En famille",
    explorer: "Explorer",
    transport: "Transport",
    checkout: "Départ",
    contact: "Contact",
    map: "Carte",
    access_desc: "Codes & accès",
    wifi_desc: "Connexion",
    kitchen_desc: "Équipements",
    living_desc: "TV & confort",
    bathroom_desc: "Buanderie",
    family_desc: "Enfants",
    explorer_desc: "Toutes les adresses",
    transport_desc: "Se déplacer",
    checkout_desc: "Urgences",
    map_desc: "Interactive",
    open_mymaps: "Ouvrir ma carte interactive",
    shops_title: "Commerces & Courses",
    welcome_bot: "🌸 ¡Hola! Je suis MariIA, votre assistante virtuelle.\n\nMarie, votre hôte, vit à Grenade depuis 25 ans. Elle m'a transmis tous ses conseils et ses adresses préférées pour vous faire vivre le meilleur séjour.\n\n💡 Je suis une IA : mes réponses peuvent parfois être imprécises. En cas de doute, contactez Marie !",
    contact_marie: "Contacter Marie",
    ask_question: "Posez votre question...",
    access_title: "Arrivée",
    address_label: "Adresse",
    floor_label: "Étage",
    keycode_label: "Code boîte à clés",
    keycode_location: "en bas à gauche de la porte d'entrée de l'appartement, au 3ème étage",
    building_door: "La porte de l'immeuble reste toujours ouverte",
    no_elevator: "Pas d'ascenseur (3ème étage)",
    open_maps: "Ouvrir dans Maps",
    wifi_title: "WiFi",
    network_label: "Réseau",
    password_label: "Mot de passe",
    kitchen_title: "Équipements Cuisine",
    induction_title: "Plaques Induction",
    induction_desc: "Marque Bosch. Appuyez sur On/Off, sélectionnez la plaque, puis +/-.",
    nespresso_title: "Cafetière Nespresso",
    nespresso_desc: "Réservoir d'eau à l'arrière. Capsules disponibles dans le placard.",
    trash_title: "Tri des déchets",
    trash_blue: "Bleu : Papier/Carton",
    trash_yellow: "Jaune : Plastiques/Conserves",
    trash_green: "Vert : Verre",
    trash_gray: "Gris : Reste",
    trash_location: "Conteneurs en face de l'immeuble",
    living_title: "Salon & Confort",
    heating_title: "Chauffage",
    heating_desc: "Pour activer les radiateurs, mettez le fusible (cercle rouge) en position haute sur le compteur.",
    ac_title: "Climatisation",
    ac_desc: "Disponible dans chaque chambre. Utilisez la télécommande dédiée.",
    fan_title: "Ventilateur de plafond",
    fan_desc: "Activez d'abord l'interrupteur mural à gauche, puis utilisez la télécommande Sulion (vitesse 1-6).",
    tv_title: "Smart TV",
    tv_desc: "Interface Xiaomi avec Netflix, Prime Video et YouTube pré-installés.",
    bathroom_title: "Salle de bain & Lessive",
    washing_title: "Lave-linge",
    washing_desc: "Situé dans la buanderie après la cuisine. Lessive dans le tiroir de la commode.",
    bathroom_heater_title: "Chauffage d'appoint - Salle de bain",
    family_title: "Pour les enfants",
    toys_title: "Jeux & Livres",
    toys_desc: "Une sélection est disponible dans le placard du salon.",
    playground_title: "Parc de jeux",
    playground_desc: "Situé à 100m à gauche en sortant de l'immeuble.",
    explorer_title: "Visites & Restaurants",
    my_favorites: "Mes Restaurants Favoris",
    must_see: "À ne pas manquer",
    atipico_desc: "Petit-déjeuner sous les orangers, toasts tomate.",
    atipico_addr: "Rez-de-chaussée de l'immeuble",
    diamantes_desc: "Les meilleures tapas de poisson. Allez-y tôt !",
    diamantes_addr: "Plaza Nueva",
    torquato_desc: "Terrasse dans l'Albaicin, friture de poisson.",
    torquato_addr: "Calle Pagés",
    alhambra_desc: "Réservez vos billets des semaines à l'avance !",
    mirador_desc: "La plus belle vue sur l'Alhambra au coucher de soleil.",
    hammam_desc: "Bains arabes traditionnels pour se détendre.",
    transport_title: "Transports",
    taxi_title: "Taxis",
    taxi_desc: "Station à 4 min à pied (Calle San Juan de Dios).",
    bus_title: "Bus",
    bus_desc: "Arrêt \"Triunfo\" à 5 min à pied. Lignes vers le centre et l'Alhambra.",
    airport_title: "Aéroport",
    airport_desc: "Navette Ligne 245, arrêt \"Constitución\". 3,10€.",
    map_title: "Adresses de Marie",
    map_intro: "Découvrez tous mes coups de cœur sur ma carte personnalisée !",
    open_map: "Ouvrir la carte",
    alsur_desc: "Épicerie fine, pain artisanal, vins et fromages locaux.",
    alsur_addr: "200m de l'appartement",
    horno_desc: "Excellente boulangerie traditionnelle.",
    horno_addr: "Real de Cartuja, 13",
    teteria_desc: "Thés à la menthe et pâtisseries arabes.",
    teteria_addr: "Acera de la Merced, 4",
    mercadona_desc: "Grand supermarché (fermé le dimanche).",
    mercadona_addr: "Calle Ancha de Capuchinos, 15",
    emergencies_title: "Urgences",
    general_emergency: "Général",
    medical_center: "Centre Médical",
    checkout_title: "Check-out",
    checkout_time: "Départ avant 12h00",
    checkout_keys: "Remettre les clés dans le boîtier",
    checkout_lights: "Éteindre toutes les lumières et le chauffage",
    checkout_trash: "Jeter les ordures dans les conteneurs en face",
  },
  en: {
    welcome: "Welcome to Granada",
    subtitle: "A peaceful haven in the heart of Albayzin",
    assistant: "MariIA",
    assistant_subtitle: "Ask your questions in real time",
    access: "Arrival",
    wifi: "WiFi",
    kitchen: "Kitchen",
    living: "Living room",
    bathroom: "Bathroom",
    family: "Family",
    explorer: "Explore",
    transport: "Transport",
    checkout: "Checkout",
    contact: "Contact",
    map: "Map",
    access_desc: "Codes & access",
    wifi_desc: "Connection",
    kitchen_desc: "Equipment",
    living_desc: "TV & comfort",
    bathroom_desc: "Laundry",
    family_desc: "Kids",
    explorer_desc: "All addresses",
    transport_desc: "Getting around",
    checkout_desc: "Emergencies",
    map_desc: "Interactive",
    open_mymaps: "Open my interactive map",
    shops_title: "Shops & Groceries",
    welcome_bot: "🌸 ¡Hola! I'm MariIA, your virtual assistant.\n\nMarie, your host, has been living in Granada for 25 years. She shared all her tips and favorite spots with me to help you have the best stay.\n\n💡 I'm an AI: my answers may sometimes be inaccurate. When in doubt, contact Marie!",
    contact_marie: "Contact Marie",
    ask_question: "Ask your question...",
    access_title: "Arrival",
    address_label: "Address",
    floor_label: "Floor",
    keycode_label: "Key box code",
    keycode_location: "bottom left of the apartment entrance door, on the 3rd floor",
    building_door: "The building door is always open",
    no_elevator: "No elevator (3rd floor)",
    open_maps: "Open in Maps",
    wifi_title: "WiFi",
    network_label: "Network",
    password_label: "Password",
    kitchen_title: "Kitchen Equipment",
    induction_title: "Induction Hob",
    induction_desc: "Bosch brand. Press On/Off, select the plate, then +/-.",
    nespresso_title: "Nespresso Machine",
    nespresso_desc: "Water tank at the back. Capsules available in the cupboard.",
    trash_title: "Waste sorting",
    trash_blue: "Blue: Paper/Cardboard",
    trash_yellow: "Yellow: Plastics/Cans",
    trash_green: "Green: Glass",
    trash_gray: "Gray: Other waste",
    trash_location: "Bins across from the building",
    living_title: "Living Room & Comfort",
    heating_title: "Heating",
    heating_desc: "To activate the radiators, set the fuse (red circle) to the high position on the meter.",
    ac_title: "Air Conditioning",
    ac_desc: "Available in each bedroom. Use the dedicated remote control.",
    fan_title: "Ceiling Fan",
    fan_desc: "First turn on the wall switch on the left, then use the Sulion remote (speed 1-6).",
    tv_title: "Smart TV",
    tv_desc: "Xiaomi interface with Netflix, Prime Video and YouTube pre-installed.",
    bathroom_title: "Bathroom & Laundry",
    washing_title: "Washing Machine",
    washing_desc: "Located in the laundry room after the kitchen. Detergent in the dresser drawer.",
    bathroom_heater_title: "Space Heater - Bathroom",
    family_title: "For Children",
    toys_title: "Games & Books",
    toys_desc: "A selection is available in the living room closet.",
    playground_title: "Playground",
    playground_desc: "Located 100m to the left when leaving the building.",
    explorer_title: "Visits & Restaurants",
    my_favorites: "My Favorite Restaurants",
    must_see: "Must See",
    atipico_desc: "Breakfast under the orange trees, tomato toast.",
    atipico_addr: "Ground floor of the building",
    diamantes_desc: "The best fish tapas. Go early!",
    diamantes_addr: "Plaza Nueva",
    torquato_desc: "Terrace in the Albaicin, fried fish.",
    torquato_addr: "Calle Pagés",
    alhambra_desc: "Book your tickets weeks in advance!",
    mirador_desc: "The most beautiful view of the Alhambra at sunset.",
    hammam_desc: "Traditional Arab baths to relax.",
    transport_title: "Transportation",
    taxi_title: "Taxis",
    taxi_desc: "Station 4 min walk (Calle San Juan de Dios).",
    bus_title: "Bus",
    bus_desc: "\"Triunfo\" stop 5 min walk. Lines to the center and Alhambra.",
    airport_title: "Airport",
    airport_desc: "Shuttle Line 245, \"Constitución\" stop. €3.10.",
    map_title: "Marie's Addresses",
    map_intro: "Discover all my favorites on my personalized map!",
    open_map: "Open the map",
    alsur_desc: "Gourmet grocery, artisan bread, local wines and cheeses.",
    alsur_addr: "200m from the apartment",
    horno_desc: "Excellent traditional bakery.",
    horno_addr: "Real de Cartuja, 13",
    teteria_desc: "Mint teas and Arab pastries.",
    teteria_addr: "Acera de la Merced, 4",
    mercadona_desc: "Large supermarket (closed on Sundays).",
    mercadona_addr: "Calle Ancha de Capuchinos, 15",
    emergencies_title: "Emergencies",
    general_emergency: "General",
    medical_center: "Medical Center",
    checkout_title: "Check-out",
    checkout_time: "Departure before 12:00 PM",
    checkout_keys: "Return the keys to the box",
    checkout_lights: "Turn off all lights and heating",
    checkout_trash: "Throw garbage in the bins across the street",
  },
  es: {
    welcome: "Bienvenido a Granada",
    subtitle: "Un remanso de paz en el corazón del Albayzín",
    assistant: "MariIA",
    assistant_subtitle: "Haz tus preguntas en tiempo real",
    access: "Llegada",
    wifi: "WiFi",
    kitchen: "Cocina",
    living: "Salón",
    bathroom: "Baño",
    family: "En familia",
    explorer: "Explorar",
    transport: "Transporte",
    checkout: "Salida",
    contact: "Contacto",
    map: "Mapa",
    access_desc: "Códigos y acceso",
    wifi_desc: "Conexión",
    kitchen_desc: "Equipamiento",
    living_desc: "TV y confort",
    bathroom_desc: "Lavandería",
    family_desc: "Niños",
    explorer_desc: "Todas las direcciones",
    transport_desc: "Moverse",
    checkout_desc: "Urgencias",
    map_desc: "Interactivo",
    open_mymaps: "Abrir mi mapa interactivo",
    shops_title: "Comercios y Compras",
    welcome_bot: "🌸 ¡Hola! Soy MariIA, tu asistente virtual.\n\nMarie, tu anfitriona, vive en Granada desde hace 25 años. Me ha transmitido todos sus consejos y direcciones favoritas para que disfrutes de la mejor estancia.\n\n💡 Soy una IA: mis respuestas pueden ser imprecisas a veces. En caso de duda, ¡contacta a Marie!",
    contact_marie: "Contactar a Marie",
    ask_question: "Haz tu pregunta...",
    access_title: "Llegada",
    address_label: "Dirección",
    floor_label: "Planta",
    keycode_label: "Código de la caja de llaves",
    keycode_location: "abajo a la izquierda de la puerta del apartamento, en el 3er piso",
    building_door: "La puerta del edificio siempre está abierta",
    no_elevator: "Sin ascensor (3ª planta)",
    open_maps: "Abrir en Maps",
    wifi_title: "WiFi",
    network_label: "Red",
    password_label: "Contraseña",
    kitchen_title: "Equipamiento de Cocina",
    induction_title: "Placa de Inducción",
    induction_desc: "Marca Bosch. Pulsa On/Off, selecciona la placa, luego +/-.",
    nespresso_title: "Cafetera Nespresso",
    nespresso_desc: "Depósito de agua en la parte trasera. Cápsulas disponibles en el armario.",
    trash_title: "Reciclaje",
    trash_blue: "Azul: Papel/Cartón",
    trash_yellow: "Amarillo: Plásticos/Latas",
    trash_green: "Verde: Vidrio",
    trash_gray: "Gris: Resto",
    trash_location: "Contenedores frente al edificio",
    living_title: "Salón y Confort",
    heating_title: "Calefacción",
    heating_desc: "Para activar los radiadores, pon el fusible (círculo rojo) en posición alta en el contador.",
    ac_title: "Aire Acondicionado",
    ac_desc: "Disponible en cada habitación. Usa el mando a distancia dedicado.",
    fan_title: "Ventilador de techo",
    fan_desc: "Primero enciende el interruptor de pared a la izquierda, luego usa el mando Sulion (velocidad 1-6).",
    tv_title: "Smart TV",
    tv_desc: "Interfaz Xiaomi con Netflix, Prime Video y YouTube preinstalados.",
    bathroom_title: "Baño y Lavandería",
    washing_title: "Lavadora",
    washing_desc: "Situada en el lavadero después de la cocina. Detergente en el cajón de la cómoda.",
    bathroom_heater_title: "Calefactor - Baño",
    family_title: "Para los niños",
    toys_title: "Juegos y Libros",
    toys_desc: "Una selección está disponible en el armario del salón.",
    playground_title: "Parque infantil",
    playground_desc: "Situado a 100m a la izquierda al salir del edificio.",
    explorer_title: "Visitas y Restaurantes",
    my_favorites: "Mis Restaurantes Favoritos",
    must_see: "Imprescindibles",
    atipico_desc: "Desayuno bajo los naranjos, tostadas de tomate.",
    atipico_addr: "Planta baja del edificio",
    diamantes_desc: "Las mejores tapas de pescado. ¡Ve temprano!",
    diamantes_addr: "Plaza Nueva",
    torquato_desc: "Terraza en el Albaicín, pescado frito.",
    torquato_addr: "Calle Pagés",
    alhambra_desc: "¡Reserva tus entradas con semanas de antelación!",
    mirador_desc: "La vista más bonita de la Alhambra al atardecer.",
    hammam_desc: "Baños árabes tradicionales para relajarse.",
    transport_title: "Transportes",
    taxi_title: "Taxis",
    taxi_desc: "Parada a 4 min a pie (Calle San Juan de Dios).",
    bus_title: "Autobús",
    bus_desc: "Parada \"Triunfo\" a 5 min a pie. Líneas al centro y la Alhambra.",
    airport_title: "Aeropuerto",
    airport_desc: "Lanzadera Línea 245, parada \"Constitución\". 3,10€.",
    map_title: "Direcciones de Marie",
    map_intro: "¡Descubre todos mis favoritos en mi mapa personalizado!",
    open_map: "Abrir el mapa",
    alsur_desc: "Tienda gourmet, pan artesanal, vinos y quesos locales.",
    alsur_addr: "200m del apartamento",
    horno_desc: "Excelente panadería tradicional.",
    horno_addr: "Real de Cartuja, 13",
    teteria_desc: "Tés de menta y pasteles árabes.",
    teteria_addr: "Acera de la Merced, 4",
    mercadona_desc: "Gran supermercado (cerrado los domingos).",
    mercadona_addr: "Calle Ancha de Capuchinos, 15",
    emergencies_title: "Urgencias",
    general_emergency: "General",
    medical_center: "Centro Médico",
    checkout_title: "Check-out",
    checkout_time: "Salida antes de las 12:00",
    checkout_keys: "Devolver las llaves en la caja",
    checkout_lights: "Apagar luces y calefacción",
    checkout_trash: "Tirar basura en los contenedores de enfrente",
  }
};

// Suggestions par langue
const allSuggestions: Record<string, string[]> = {
  fr: [
    "Code WiFi ?", "Comment entrer ?", "Où manger ce soir ?", "Un resto végétarien ?", "Tapas gratuites ?",
    "Où boire un thé ?", "Hammam ?", "Où faire les courses ?", "Du bon pain ?",
    "Comment marche la clim ?", "Comment marche le chauffage ?", "Changer le gaz ?", "Visiter l'Alhambra ?",
    "Coucher de soleil ?", "Spectacle flamenco ?", "Se détendre ?", "Où se baigner ?",
    "Activités enfants ?", "Parc pour enfants ?", "Prendre un taxi ?", "Navette aéroport ?",
    "Sierra Nevada ?", "Urgences ?", "Heure checkout ?"
  ],
  en: [
    "WiFi code?", "How to enter?", "Where to eat tonight?", "Vegetarian restaurant?", "Free tapas?",
    "Where to drink tea?", "Hammam?", "Where to shop?", "Good bread?",
    "How does AC work?", "How does heating work?", "Change gas bottle?", "Visit Alhambra?",
    "Sunset spot?", "Flamenco show?", "Relax activity?", "Where to swim?",
    "Kids activities?", "Playground?", "Get a taxi?", "Airport shuttle?",
    "Sierra Nevada?", "Emergencies?", "Checkout time?"
  ],
  es: [
    "¿Código WiFi?", "¿Cómo entrar?", "¿Dónde cenar?", "¿Restaurante vegetariano?", "¿Tapas gratis?",
    "¿Dónde tomar té?", "¿Hammam?", "¿Dónde comprar?", "¿Buen pan?",
    "¿Cómo funciona el aire?", "¿Cómo funciona la calefacción?", "¿Cambiar gas?", "¿Visitar Alhambra?",
    "¿Atardecer?", "¿Flamenco?", "¿Relajarse?", "¿Dónde bañarse?",
    "¿Actividades niños?", "¿Parque infantil?", "¿Taxi?", "¿Bus aeropuerto?",
    "¿Sierra Nevada?", "¿Urgencias?", "¿Hora checkout?"
  ]
};

const getRandomSuggestions = (count: number, lang: string = "fr", exclude?: string) => {
  const suggestions = allSuggestions[lang] || allSuggestions.fr;
  const filtered = exclude ? suggestions.filter(s => s !== exclude) : suggestions;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// ============================================
// COMPOSANTS DE BASE
// ============================================
const Card = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl shadow-sm border border-amber-100 p-4 mb-4 ${onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""} ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-semibold text-amber-800 mb-3 pb-2 border-b border-amber-200">
    {children}
  </h2>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
        <span className="text-amber-600 mt-0.5">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Photo = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div
    className={`rounded-lg overflow-hidden border border-amber-100 bg-gray-100 ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover"
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  </div>
);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md hover:bg-amber-100 transition-colors"
    >
      {copied ? (
        <CheckIcon className="w-4 h-4 text-green-600" />
      ) : (
        <CopyIcon className="w-4 h-4 text-amber-600" />
      )}
    </button>
  );
};

const PlaceCard = ({
  name,
  description,
  address,
  price,
}: {
  name: string;
  description: string;
  address?: string;
  price?: string;
}) => (
  <div className="border-l-4 border-amber-400 pl-3 py-2 mb-3 relative group">
    <h4 className="font-semibold text-amber-800">{name}</h4>
    <p className="text-sm text-gray-600">{description}</p>
    {address && <p className="text-xs text-gray-500 mt-1">📍 {address}</p>}
    {price && <p className="text-xs text-amber-600 mt-1">💰 {price}</p>}
  </div>
);

// ============================================
// PAGES
// ============================================
const HomePage = ({
  onNavigate,
  language,
  t,
}: {
  onNavigate: (section: string) => void;
  language: string;
  t: (key: string) => string;
}) => (
  <div className="py-4">
    <div className="text-center mb-6">
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-amber-200 shadow-md bg-amber-100">
        <img
          src={HOST_PHOTO}
          alt={HOST_NAME}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23fcd34d"/><text x="50" y="60" text-anchor="middle" font-size="40" fill="%23b45309">M</text></svg>';
          }}
        />
      </div>
      <h1 className="text-2xl font-bold text-amber-800">{t('welcome')}</h1>
      <p className="text-gray-600 mt-1 text-sm px-4">{t('subtitle')}</p>
    </div>

    <Card
      onClick={() => onNavigate("assistant")}
      className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-amber-100 rounded-full">
          <BotIcon className="w-6 h-6 text-amber-700" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-amber-800">{t('assistant')}</h3>
          <p className="text-sm text-gray-600">{t('assistant_subtitle')}</p>
        </div>
        <SparklesIcon className="w-5 h-5 text-amber-500" />
      </div>
    </Card>

    <div className="grid grid-cols-2 gap-3">
      {[
        { id: "access", icon: KeyIcon, label: t('access'), desc: t('access_desc') },
        { id: "wifi", icon: WifiIcon, label: t('wifi'), desc: t('wifi_desc') },
        { id: "kitchen", icon: ChefHatIcon, label: t('kitchen'), desc: t('kitchen_desc') },
        { id: "living", icon: SofaIcon, label: t('living'), desc: t('living_desc') },
        { id: "bathroom", icon: BathIcon, label: t('bathroom'), desc: t('bathroom_desc') },
        { id: "family", icon: UsersIcon, label: t('family'), desc: t('family_desc') },
        { id: "explorer", icon: MapPinIcon, label: t('explorer'), desc: t('explorer_desc') },
        { id: "transport", icon: BusIcon, label: t('transport'), desc: t('transport_desc') },
        { id: "checkout", icon: AlertIcon, label: t('checkout'), desc: t('checkout_desc') },
      ].map((item) => {
        const IconComponent = item.icon;
        return (
          <Card
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="text-center py-4"
          >
            <IconComponent className="w-7 h-7 mx-auto text-amber-600 mb-2" />
            <p className="font-medium text-amber-800 text-sm">{item.label}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </Card>
        );
      })}
      
      <a
        href={MYMAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-xl shadow-sm border border-amber-100 p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow text-center py-4"
      >
        <MapIcon className="w-7 h-7 mx-auto text-amber-600 mb-2" />
        <p className="font-medium text-amber-800 text-sm">{t('map')}</p>
        <p className="text-xs text-gray-500">{t('map_desc')}</p>
      </a>
    </div>

    <Card className="mt-4 bg-amber-50">
      <div className="flex items-start gap-3">
        <MapPinIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-amber-800">{ADDRESS.street}</p>
          <p className="text-sm text-gray-600">{ADDRESS.floor[language as keyof typeof ADDRESS.floor] || ADDRESS.floor.fr}</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-amber-700 mt-2 hover:underline"
          >
            <NavigationIcon className="w-4 h-4" /> {t('open_maps')}
          </a>
        </div>
      </div>
    </Card>
  </div>
);

interface Message {
  role: string;
  content: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

// ============================================
// RÉPONSES LOCALES AVEC VIDÉOS (côté client)
// ============================================
const VIDEO_URLS: Record<string, string> = {
  gaz: 'https://www.youtube.com/embed/0tTqNYdg21E',
  canapeLit: 'https://www.youtube.com/embed/1CgXvn7n3KM',
};

const localResponses: Record<string, { keywords: Record<string, string[]>; response: Record<string, string> }> = {
  gaz: {
    keywords: {
      fr: ['gaz', 'bouteille', 'bonbonne', 'chauffe-eau', 'eau chaude'],
      en: ['gas', 'bottle', 'water heater', 'hot water', 'propane'],
      es: ['gas', 'botella', 'bombona', 'calentador', 'agua caliente']
    },
    response: {
      fr: "🎬 Voici la vidéo explicative pour changer la bouteille de gaz :",
      en: "🎬 Here is the video tutorial to change the gas bottle:",
      es: "🎬 Aquí tienes el video explicativo para cambiar la botella de gas:"
    }
  },
  canapeLit: {
    keywords: {
      fr: ['canapé', 'canape', 'canapé-lit', 'canapé lit', 'sofa', 'convertible', 'déplier', 'deplier', 'couchage', 'lit du salon', 'dormir salon'],
      en: ['sofa', 'sofa bed', 'couch', 'pull out', 'pullout', 'unfold', 'sleeper', 'sleeping sofa'],
      es: ['sofá', 'sofa', 'sofá cama', 'sofa cama', 'desplegar', 'cama del salón', 'cama salon']
    },
    response: {
      fr: "🛋️ Voici la vidéo pour déplier le canapé-lit :\n\n💡 Les draps, oreillers et couettes se trouvent sous la méridienne (chaise longue).",
      en: "🛋️ Here is the video to unfold the sofa bed:\n\n💡 Sheets, pillows and duvets are under the chaise longue.",
      es: "🛋️ Aquí tienes el video para desplegar el sofá cama:\n\n💡 Las sábanas, almohadas y edredones están debajo de la chaise longue."
    }
  }
};

const AssistantPage = ({ language, t }: { language: string; t: (key: string) => string }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t('welcome_bot') },
  ]);
  const [suggestions, setSuggestions] = useState(() => getRandomSuggestions(5, language));
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSuggestions(getRandomSuggestions(5, language));
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setMessages([{ role: "assistant", content: t('welcome_bot') }]);
  }, [language]);

  const logConversation = (question: string, answer: string, lang: string) => {
    try {
      const params = new URLSearchParams({
        question: question.substring(0, 500),
        answer: answer.substring(0, 1000),
        language: lang,
        timestamp: new Date().toISOString()
      });
      fetch(`https://script.google.com/macros/s/AKfycbwpAaA8ddhCbMSGQRfVrJpeuAwH8jRVi8GDxmpDrsfhQI_O98ipK7tkIzgcITkwN31s/exec?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      }).catch(() => {});
    } catch (error) {
      console.error('Logging failed:', error);
    }
  };

  // Fonction pour trouver une réponse locale
const findLocalResponse = (message: string, lang: string): { response: string; videoUrl?: string } | null => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, data] of Object.entries(localResponses)) {
      const keywords = data.keywords[lang] || data.keywords.fr;
      if (keywords.some(kw => {
        const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        return regex.test(lowerMessage);
      })) {
        return {
          response: data.response[lang] || data.response.fr,
          videoUrl: VIDEO_URLS[key]
        };
      }
    }
    return null;
  };
    const lowerMessage = message.toLowerCase();
    
    for (const [key, data] of Object.entries(localResponses)) {
      const keywords = data.keywords[lang] || data.keywords.fr;
      if (keywords.some(kw => {
        const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        return regex.test(lowerMessage);
      })) {
        return {
          response: data.response[lang] || data.response.fr,
          isGas: key === 'gaz'
        };
      }
    }
    return null;
  };

  const sendMessage = async (overrideMessage?: string) => {
    const userMessage = (overrideMessage || input).trim();
    if (!userMessage || isLoading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setSuggestions(getRandomSuggestions(5, language, overrideMessage));
    setIsLoading(true);

    // Chercher une réponse locale d'abord
    const localResult = findLocalResponse(userMessage, language);
    
    if (localResult) {
      if (localResult.isGas) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: localResult.response, 
          hasVideo: true, 
          videoUrl: 'https://www.youtube.com/embed/0tTqNYdg21E' 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: localResult.response }]);
      }
      logConversation(userMessage, localResult.response, language);
      setIsLoading(false);
      return;
    }

    // Sinon, appel API
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages.slice(1), language }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
        logConversation(userMessage, data.content, language);
      }
    } catch (error) {
      console.error("Chat error:", error);
    }

    setIsLoading(false);
  };

  const renderMessageWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        const cleanUrl = part.replace(/[.,!?;:]$/, '');
        const suffix = part.slice(cleanUrl.length);

        if (cleanUrl === "https://wa.me/34661558334") {
          return (
            <React.Fragment key={i}>
              <a
                href={cleanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 mt-2 no-underline"
              >
                <span>📱</span> {t('contact_marie')}
              </a>
              {suffix}
            </React.Fragment>
          );
        }
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-amber-600 underline hover:text-amber-800 break-all">
            {part}
          </a>
        );
      }
      // Parser le **gras** en <strong>
      return part.split(/\*\*(.*?)\*\*/g).map((segment, j) =>
        j % 2 === 1 ? <strong key={`${i}-${j}`}>{segment}</strong> : segment
      );
    });
  };

  return (
    <div className="flex flex-col h-full bg-amber-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.role === "user" ? "bg-amber-600 text-white rounded-tr-none" : "bg-white text-gray-800 border border-amber-100 rounded-tl-none"}`}>
                <div className="whitespace-pre-wrap">{renderMessageWithLinks(msg.content)}</div>
                {i === 0 && (
                  <a href="https://wa.me/34661558334" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors">
                    <MessageCircleIcon className="w-4 h-4" />
                    {t('contact_marie')}
                  </a>
                )}
                {msg.hasVideo && msg.videoUrl && (
                  <div className="mt-3 aspect-video rounded-lg overflow-hidden border border-amber-100">
                    <iframe src={msg.videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-amber-100 rounded-2xl rounded-tl-none px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 bg-white border-t border-amber-100">
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestions.map((s) => (
            <button key={s} onClick={() => sendMessage(s)} className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full hover:bg-amber-200 transition-colors">
              {s}
            </button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('ask_question')}
            className="flex-1 bg-amber-50 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="p-2 bg-amber-600 text-white rounded-full disabled:opacity-50 hover:bg-amber-700 transition-colors">
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [view, setView] = useState("home");
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("app_lang");
    if (saved) return saved;
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith("es")) return "es";
    if (navLang.startsWith("en")) return "en";
    return "fr";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", language);
  }, [language]);

  const t = (key: string) => translations[language]?.[key] || translations.fr[key] || key;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] h-[850px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-gray-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

        <header className="bg-white border-b border-amber-100 p-4 pt-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            {view !== "home" && (
              <button onClick={() => setView("home")} className="p-1 rounded-full hover:bg-amber-50">
                <HomeIcon className="w-5 h-5 text-amber-800" />
              </button>
            )}
            <h2 className="font-bold text-amber-900">{view === "home" ? t('welcome') : t(view)}</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-amber-50 rounded-lg p-1 border border-amber-100">
              {["fr", "en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[10px] font-bold rounded uppercase transition-colors ${language === lang ? "bg-amber-600 text-white" : "text-amber-800 hover:bg-amber-100"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <BotIcon className="w-5 h-5 text-amber-600" />
          </div>
        </header>

        <main className="h-[calc(100%-70px)] overflow-y-auto custom-scrollbar">
          {view === "home" && <HomePage onNavigate={setView} language={language} t={t} />}
          {view === "assistant" && <AssistantPage language={language} t={t} />}
          
          {view === "access" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('access_title')}</SectionTitle>
                <BulletList items={[
                  `${t('address_label')} : ${ADDRESS.street}`,
                  ADDRESS.floor[language as keyof typeof ADDRESS.floor] || ADDRESS.floor.fr,
                  `${t('keycode_label')} : ${ADDRESS.keyCode} (${t('keycode_location')})`,
                  t('building_door'),
                  t('no_elevator'),
                ]} />
                <Photo src={PHOTOS.boite_cles} alt="Key box" className="mt-4" />
              </Card>
            </div>
          )}
          
          {view === "wifi" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('wifi_title')}</SectionTitle>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{t('network_label')}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono text-amber-900">{WIFI_INFO.network}</p>
                      <CopyButton text={WIFI_INFO.network} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{t('password_label')}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono text-amber-900">{WIFI_INFO.password}</p>
                      <CopyButton text={WIFI_INFO.password} />
                    </div>
                  </div>
                  <Photo src={PHOTOS.wifi_qr} alt="WiFi QR Code" className="mt-2" />
                </div>
              </Card>
            </div>
          )}
          
          {view === "kitchen" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('kitchen_title')}</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <FlameIcon className="w-4 h-4" /> {t('induction_title')}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{t('induction_desc')}</p>
                    <Photo src={PHOTOS.plaques} alt="Induction hob" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <UtensilsIcon className="w-4 h-4" /> {t('nespresso_title')}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{t('nespresso_desc')}</p>
                    <Photo src={PHOTOS.nespresso} alt="Nespresso" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <RecycleIcon className="w-4 h-4" /> {t('trash_title')}
                    </h4>
                    <BulletList items={[t('trash_blue'), t('trash_yellow'), t('trash_green'), t('trash_gray'), t('trash_location')]} />
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {view === "living" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('living_title')}</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <ThermometerIcon className="w-4 h-4" /> {t('heating_title')}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{t('heating_desc')}</p>
                    <Photo src={PHOTOS.compteur} alt="Meter" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <SnowflakeIcon className="w-4 h-4" /> {t('ac_title')}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{t('ac_desc')}</p>
                    <Photo src={PHOTOS.telecommande_clim} alt="AC Remote" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <FanIcon className="w-4 h-4" /> {t('fan_title')}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{t('fan_desc')}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <TvIcon className="w-4 h-4" /> {t('tv_title')}
                    </h4>
                    <p className="text-sm text-gray-600">{t('tv_desc')}</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {view === "bathroom" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('bathroom_title')}</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">{t('washing_title')}</h4>
                    <p className="text-sm text-gray-600 mb-3">{t('washing_desc')}</p>
                    <Photo src={PHOTOS.lave_linge} alt="Washing machine" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">{t('bathroom_heater_title')}</h4>
                    <Photo src={PHOTOS.chauffage_appoint} alt="Space heater" />
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {view === "family" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('family_title')}</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">{t('toys_title')}</h4>
                    <p className="text-sm text-gray-600 mb-3">{t('toys_desc')}</p>
                    <Photo src={PHOTOS.jeux_enfants} alt="Games" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">{t('playground_title')}</h4>
                    <p className="text-sm text-gray-600 mb-3">{t('playground_desc')}</p>
                    <Photo src={PHOTOS.parc} alt="Playground" />
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {view === "explorer" && (
            <div className="p-4 space-y-4">
              <a href={MYMAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md">
                <ExternalLinkIcon className="w-5 h-5" />
                {t('open_mymaps')}
              </a>
              
              <Card>
                <SectionTitle>{t('explorer_title')}</SectionTitle>
                <div className="space-y-4">
                  <h3 className="font-bold text-amber-900 border-l-4 border-amber-600 pl-2">{t('my_favorites')}</h3>
                  <PlaceCard name="ATIPICO" description={t('atipico_desc')} address={t('atipico_addr')} />
                  <PlaceCard name="Los Diamantes" description={t('diamantes_desc')} address={t('diamantes_addr')} />
                  <PlaceCard name="Torquato" description={t('torquato_desc')} address={t('torquato_addr')} />

                  <h3 className="font-bold text-amber-900 border-l-4 border-amber-600 pl-2 mt-6">{t('must_see')}</h3>
                  <PlaceCard name="L'Alhambra" description={t('alhambra_desc')} />
                  <PlaceCard name="Mirador San Nicolás" description={t('mirador_desc')} />
                  <PlaceCard name="Hammam Al Ándalus" description={t('hammam_desc')} />
                  
                  <h3 className="font-bold text-amber-900 border-l-4 border-amber-600 pl-2 mt-6">{t('shops_title')}</h3>
                  <PlaceCard name="AL SUR DE GRANADA" description={t('alsur_desc')} address={t('alsur_addr')} />
                  <PlaceCard name="HORNO DEL PROGRESO" description={t('horno_desc')} address={t('horno_addr')} />
                  <PlaceCard name="Tetería Oriente" description={t('teteria_desc')} address={t('teteria_addr')} />
                  <PlaceCard name="Mercadona" description={t('mercadona_desc')} address={t('mercadona_addr')} />
                </div>
              </Card>
            </div>
          )}
          
          {view === "transport" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('transport_title')}</SectionTitle>
                <div className="space-y-4">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">{t('taxi_title')}</h4>
                    <p className="text-sm text-gray-600">{t('taxi_desc')}</p>
                    <a href="tel:+34958280654" className="text-amber-700 font-bold text-sm block mt-1">📞 +34 958 28 06 54</a>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">{t('bus_title')}</h4>
                    <p className="text-sm text-gray-600">{t('bus_desc')}</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">{t('airport_title')}</h4>
                    <p className="text-sm text-gray-600">{t('airport_desc')}</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {view === "checkout" && (
            <div className="p-4 space-y-4">
              <Card className="bg-red-50 border-red-100">
                <SectionTitle>{t('emergencies_title')}</SectionTitle>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-red-600 uppercase font-bold">{t('general_emergency')}</p>
                    <p className="text-2xl font-bold text-red-800">112</p>
                  </div>
                  <div>
                    <p className="text-xs text-red-600 uppercase font-bold">{t('medical_center')}</p>
                    <p className="text-sm text-red-800 font-medium">Gran Capitán, 10</p>
                    <a href="tel:+34958022600" className="text-red-700 font-bold">+34 958 022 600</a>
                  </div>
                </div>
              </Card>
              <Card>
                <SectionTitle>{t('checkout_title')}</SectionTitle>
                <BulletList items={[t('checkout_time'), t('checkout_keys'), t('checkout_lights'), t('checkout_trash')]} />
              </Card>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
