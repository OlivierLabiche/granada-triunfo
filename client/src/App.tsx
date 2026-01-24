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
const PhoneIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </Icon>
);
const MenuIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);
const XIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M6 18L18 6M6 6l12 12" />
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
const WashingMachineIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 3v3" />
  </Icon>
);
const TrashIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </Icon>
);
const BuildingIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
  </Icon>
);
const LandmarkIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3l9-5z" />
  </Icon>
);
const PlaneIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
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
const MapIcon = ({ className }: { className?: string }) => <Icon className={className}><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></Icon>;

// ============================================
// CONFIGURATION
// ============================================
const HOST_NAME = "Marie";
const HOST_PHOTO = "/images/host_marie.jpg";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Acera+de+San+Ildefonso+26+Granada+Spain";
const WIFI_INFO = { network: "MOVISTAR_9EEO", password: "Art&Deco2026" };

const ADDRESS = {
  street: "Acera de San Ildefonso nº 26",
  floor: "3ème étage – porte droite",
  keyCode: "9119",
};

const translations: any = {
  fr: {
    welcome: "Bienvenue à Grenade",
    assistant: "MariIA",
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
    map: "Mes Adresses",
    access_desc: "Codes & accès",
    wifi_desc: "Connexion",
    kitchen_desc: "Équipements",
    living_desc: "TV & confort",
    bathroom_desc: "Buanderie",
    family_desc: "Enfants",
    explorer_desc: "Restos & visites",
    transport_desc: "Se déplacer",
    checkout_desc: "Urgences",
    welcome_bot: "🌸 ¡Hola! Je suis MariIA, votre assistante virtuelle.\n\nMarie, votre hôte, vit à Grenade depuis 25 ans. Elle m'a transmis tous ses conseils et ses adresses préférées pour vous faire vivre le meilleur séjour.\n\n💡 Je suis une IA : mes réponses peuvent parfois être imprécises. En cas de doute, contactez Marie !",
    contact_marie: "Contacter Marie"
  },
  en: {
    welcome: "Welcome to Granada",
    assistant: "MariIA",
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
    map: "My Favorites",
    access_desc: "Codes & access",
    wifi_desc: "Connection",
    kitchen_desc: "Equipment",
    living_desc: "TV & comfort",
    bathroom_desc: "Laundry",
    family_desc: "Kids",
    explorer_desc: "Food & visits",
    transport_desc: "Getting around",
    checkout_desc: "Emergencies",
    welcome_bot: "🌸 ¡Hola! I'm MariIA, your virtual assistant.\n\nMarie, your host, has been living in Granada for 25 years. She shared all her tips and favorite spots with me to help you have the best stay.\n\n💡 I'm an AI: my answers may sometimes be inaccurate. When in doubt, contact Marie!",
    contact_marie: "Contact Marie"
  },
  es: {
    welcome: "Bienvenido a Granada",
    assistant: "MariIA",
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
    map: "Mis Direcciones",
    access_desc: "Códigos y acceso",
    wifi_desc: "Conexión",
    kitchen_desc: "Equipamiento",
    living_desc: "TV y confort",
    bathroom_desc: "Lavandería",
    family_desc: "Niños",
    explorer_desc: "Restaurantes y visitas",
    transport_desc: "Moverse",
    checkout_desc: "Urgencias",
    welcome_bot: "🌸 ¡Hola! Soy MariIA, tu asistente virtual.\n\nMarie, tu anfitriona, vive en Granada desde hace 25 años. Me ha transmitido todos sus consejos y direcciones favoritas para que disfrutes de la mejor estancia.\n\n💡 Soy una IA : mis respuestas pueden ser imprecisas a veces. En caso de duda, ¡contacta a Marie!",
    contact_marie: "Contactar a Marie"
  }
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
// KNOWLEDGE BASE POUR L'IA
// ============================================
const KNOWLEDGE_BASE = `
Tu es Marie, l'hôte de l'appartement Airbnb à Grenade.

INFORMATIONS CLÉS:
- Adresse : Acera de San Ildefonso nº 26, 3ème étage, porte droite
- Code boîte à clés : 9119 (en bas à gauche de la porte d'entrée de l'immeuble)
- La porte d'entrée de l'immeuble reste toujours ouverte
- WiFi : MOVISTAR_9EEO / Art&Deco2026
- Ascenseur : oui

CUISINE:
- Plaques induction Bosch (bouton on/off, sélectionner plaque, régler avec +/-)
- Lave-vaisselle disponible, tablettes sous l'évier
- Hotte aspirante : BRANCHER LA PRISE pour activer l'extracteur
- Cafetière Nespresso (réservoir eau à l'arrière)
- Bouilloire électrique
- Provisions : thé, miel, sucre, huile, vinaigre, épices, sel, pâtes
- Grand placard en bois : interrupteur lumière sur sa droite

SALON:
- Radiateurs dans chaque pièce (bouton on/off et +/-)
- Pour allumer les radiateurs : mettre en position haute le fusible avec cercle rouge sur le compteur à gauche de la porte d'entrée
- Climatisation réversible dans les chambres (bouton orange pour allumer)
- Ventilateur plafond : télécommande blanche Sulion, vitesse 1-6
- Deux autres ventilateurs dans buanderie et placard salon
- Smart TV Xiaomi : Netflix, Prime Video, YouTube
- Grand placard avec cintres et espace valises
- Oreillers, draps, couvertures pour canapé-lit sous la méridienne

SALLE DE BAIN:
- Interrupteur gauche : lumière d'appoint
- À droite du lavabo : lumière principale + VMC
- Chauffage d'appoint disponible
- Lave-linge dans la laverie après la cuisine
- Produits lessive dans le tiroir de la commode
- Chauffe-eau au gaz : peut nécessiter changement de bouteille

SÉCURITÉ:
- Extincteur près de la porte d'entrée, sous le compteur
- Trousse premiers soins sous le lavabo salle de bain
- URGENCES : 112

EN FAMILLE:
- Jeux et livres pour enfants dans l'appartement
- Parc de jeux à 100m à gauche en sortant

RESTAURANTS & COMMERCES:
- ATIPICO : au rez-de-chaussée de l'immeuble, toasts tomate, jus orange frais. Fermé dimanche.
- PAPAS ELVIRA : cuisine marocaine, gâteaux maison. 1-10€. Calle Elvira, 9
- FOCACCERIA SICILIANA : pizzas focaccias. 10-20€. Fermé mercredi. Calle Elvira, 117
- AYLIN ART CUISINE : cuisine raffinée. 20-30€. Av. de la Constitución, 12
- Tetería Oriente : thés, milk-shakes. Acera de la Merced, 4
- HORNO DEL PROGRESO : boulangerie, madeleines, pain huile d'olive. Real de Cartuja, 13
- Mercadona : supermarché 9h-21h (fermé dimanche). Calle Ancha de Capuchinos, 15
- Kiki : poulets rôtis, churros. Real de Cartuja, 26

MONUMENTS:
- Hospital Real : ancien hôpital des Rois Catholiques, beaux patios
- Puerta Elvira : porte du XIe siècle, ancienne entrée principale
- Librería Inusual : librairie avec patio. Calle Natalio Rivas, 7
- La Estupenda : petit théâtre à 300m. C. Real de Cartuja, 37

TRANSPORTS:
- Bus : arrêt TRIUNFO à 5 min à pied
- Métro : Caleta à 15 min à pied
- Taxis : station à 4 min, Calle San Juan de Dios. Tél: +34 958 28 06 54
- Parking : zone horodatée + Parking Triunfo
- Navette aéroport : Ligne 245, arrêt Constitución. 3,10€, 40 min

DÉPART (avant 12h):
- Remettre clés dans le boîtier
- Jeter les ordures
- Éteindre le chauffage

URGENCES:
- Urgences générales : 112
- Centre médical Gran Capitán : Calle Gran Capitán, 10. Urgences à partir de 15h. Tél: +34 958 022 600
- Pharmacie : Plaza de San Isidro 6, 9h-22h (fermé dimanche)

RÈGLES: Réponds uniquement avec ces infos. Si tu ne sais pas, invite à contacter Marie par WhatsApp.
`;

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
      <h1 className="text-2xl font-bold text-amber-800">
        {t('welcome')}
      </h1>
      <p className="text-gray-600 mt-1 text-sm px-4">
        Un havre de calme au cœur de l'Albayzin
      </p>
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
          <p className="text-sm text-gray-600">
            Posez vos questions en temps réel
          </p>
        </div>
        <SparklesIcon className="w-5 h-5 text-amber-500" />
      </div>
    </Card>

    <div className="grid grid-cols-2 gap-3">
      {[
        {
          id: "access",
          icon: KeyIcon,
          label: t('access'),
          desc: t('access_desc'),
        },
        { id: "wifi", icon: WifiIcon, label: t('wifi'), desc: t('wifi_desc') },
        {
          id: "kitchen",
          icon: ChefHatIcon,
          label: t('kitchen'),
          desc: t('kitchen_desc'),
        },
        { id: "living", icon: SofaIcon, label: t('living'), desc: t('living_desc') },
        {
          id: "bathroom",
          icon: BathIcon,
          label: t('bathroom'),
          desc: t('bathroom_desc'),
        },
        { id: "family", icon: UsersIcon, label: t('family'), desc: t('family_desc') },
        {
          id: "explorer",
          icon: MapPinIcon,
          label: t('explorer'),
          desc: t('explorer_desc'),
        },
        {
          id: "transport",
          icon: BusIcon,
          label: t('transport'),
          desc: t('transport_desc'),
        },
        { id: "map", icon: MapIcon, label: t('map'), desc: "Adresses" },
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
    </div>

    <Card className="mt-4 bg-amber-50">
      <div className="flex items-start gap-3">
        <MapPinIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-amber-800">{ADDRESS.street}</p>
          <p className="text-sm text-gray-600">{ADDRESS.floor}</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-amber-700 mt-2 hover:underline"
          >
            <NavigationIcon className="w-4 h-4" /> Ouvrir dans Maps
          </a>
        </div>
      </div>
    </Card>
  </div>
);

const allSuggestions: Record<string, string[]> = {
  fr: [
    "Code WiFi ?", "Comment entrer ?", "Où manger ce soir ?", "Un resto végétarien ?", "Tapas gratuites ?",
    "Où boire un thé ?", "Un bar sympa ?", "Bonne paella ?", "Où faire les courses ?", "Du bon pain ?",
    "Comment marche la clim ?", "Comment marche le chauffage ?", "Changer le gaz ?", "Visiter l'Alhambra ?",
    "Coucher de soleil ?", "Spectacle flamenco ?", "Se détendre ?", "Où se baigner ?", "Chemin secret ?",
    "Activités enfants ?", "Parc pour enfants ?", "Prendre un taxi ?", "Navette aéroport ?", "Bus Albaicín ?",
    "Sierra Nevada ?", "Où se garer ?", "Urgences ?", "Pharmacie ?", "Heure checkout ?", "Sécurité la nuit ?"
  ],
  en: [
    "WiFi code?", "How to enter?", "Where to eat tonight?", "Vegetarian restaurant?", "Free tapas?",
    "Where to drink tea?", "Nice bar?", "Good paella?", "Where to shop?", "Good bread?",
    "How does AC work?", "How does heating work?", "Change gas bottle?", "Visit Alhambra?",
    "Sunset spot?", "Flamenco show?", "Relax activity?", "Where to swim?", "Secret path?",
    "Kids activities?", "Playground?", "Get a taxi?", "Airport shuttle?", "Albaicín bus?",
    "Sierra Nevada?", "Where to park?", "Emergencies?", "Pharmacy?", "Checkout time?", "Safe at night?"
  ],
  es: [
    "¿Código WiFi?", "¿Cómo entrar?", "¿Dónde cenar?", "¿Restaurante vegetariano?", "¿Tapas gratis?",
    "¿Dónde tomar té?", "¿Un bar?", "¿Buena paella?", "¿Dónde comprar?", "¿Buen pan?",
    "¿Cómo funciona el aire?", "¿Cómo funciona la calefacción?", "¿Cambiar gas?", "¿Visitar Alhambra?",
    "¿Atardecer?", "¿Flamenco?", "¿Relajarse?", "¿Dónde bañarse?", "¿Camino secreto?",
    "¿Actividades niños?", "¿Parque infantil?", "¿Taxi?", "¿Bus aeropuerto?", "¿Bus Albaicín?",
    "¿Sierra Nevada?", "¿Dónde aparcar?", "¿Urgencias?", "¿Farmacia?", "¿Hora checkout?", "¿Seguro de noche?"
  ]
};

const getRandomSuggestions = (count: number, lang: string = "fr") => {
  const suggestions = allSuggestions[lang] || allSuggestions.fr;
  const shuffled = [...suggestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

interface Message {
  role: string;
  content: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

const AssistantPage = () => {
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

  const t = (key: string) => translations[language][key] || key;

  const logConversation = async (question: string, answer: string, lang: string) => {
    console.log("Logging conversation:", { question, answer, lang });
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxRruJ2jtKXE2HLZtgZ7h47Ftz97j4aS0lSwY7NA0LXGdZWINB9tqn6k5oakS2CTLmj/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question, 
          answer, 
          language: lang
        })
      });
      console.log("Log request sent (no-cors mode)");
    } catch (error) {
      console.error('Logging failed:', error);
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: translations[language].welcome_bot,
    },
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

  const sendMessage = async (overrideMessage?: string) => {
    const userMessage = (overrideMessage || input).trim();
    if (!userMessage || isLoading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setSuggestions(getRandomSuggestions(5, language));
    setIsLoading(true);

    const gasKeywords = ['gaz', 'bouteille', 'bonbonne', 'chauffe-eau', 'eau chaude'];
    const isGasQuestion = gasKeywords.some(kw => userMessage.toLowerCase().includes(kw));

    if (isGasQuestion) {
      const assistantResponse = '🎬 Voici la vidéo explicative pour changer la bouteille de gaz :';
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantResponse,
        hasVideo: true,
        videoUrl: 'https://www.youtube.com/embed/0tTqNYdg21E'
      }]);
      logConversation(userMessage, assistantResponse, language);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages.slice(1),
          selectedLanguage: language
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantResponse = data.content;
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: assistantResponse },
        ]);
        logConversation(userMessage, assistantResponse, language);
        setIsLoading(false);
        return;
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
        // Clean the URL of trailing punctuation
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
                <span>📱</span> {language === "fr" ? "Contacter Marie sur WhatsApp" : language === "es" ? "Contactar a Marie por WhatsApp" : "Contact Marie on WhatsApp"}
              </a>
              {suffix}
            </React.Fragment>
          );
        }
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800 break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col h-full bg-amber-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === "user"
                    ? "bg-amber-600 text-white rounded-tr-none"
                    : "bg-white text-gray-800 border border-amber-100 rounded-tl-none"
                }`}
              >
                <div className="whitespace-pre-wrap">{renderMessageWithLinks(msg.content)}</div>
                {i === 0 && (
                  <a
                    href="https://wa.me/34661558334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircleIcon className="w-4 h-4" />
                    {t('contact_marie')}
                  </a>
                )}
                {msg.hasVideo && msg.videoUrl && (
                  <div className="mt-3 aspect-video rounded-lg overflow-hidden border border-amber-100">
                    <iframe
                      src={msg.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full hover:bg-amber-200 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-1 bg-amber-50 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-amber-600 text-white rounded-full disabled:opacity-50 hover:bg-amber-700 transition-colors"
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
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

  const t = (key: string) => translations[language][key] || key;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] h-[850px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-gray-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

        <header className="bg-white border-b border-amber-100 p-4 pt-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            {view !== "home" && (
              <button
                onClick={() => setView("home")}
                className="p-1 rounded-full hover:bg-amber-50"
              >
                <HomeIcon className="w-5 h-5 text-amber-800" />
              </button>
            )}
            <h2 className="font-bold text-amber-900">
              {view === "home" ? t('welcome') : t(view)}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-amber-50 rounded-lg p-1 border border-amber-100">
              {["fr", "en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[10px] font-bold rounded uppercase transition-colors ${
                    language === lang
                      ? "bg-amber-600 text-white"
                      : "text-amber-800 hover:bg-amber-100"
                  }`}
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
          {view === "assistant" && <AssistantPage />}
          {view === "access" && (
            <div className="p-4 space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <Card>
                <SectionTitle>{t('access')}</SectionTitle>
                <BulletList
                  items={[
                    `Adresse : ${ADDRESS.street}`,
                    ADDRESS.floor,
                    `Code boîte à clés : ${ADDRESS.keyCode}`,
                    "La porte de l'immeuble reste toujours ouverte",
                    "Pas d'ascenseur (3ème étage)",
                  ]}
                />
                <Photo
                  src={PHOTOS.boite_cles}
                  alt="Boîte à clés"
                  className="mt-4"
                />
              </Card>
            </div>
          )}
          {view === "wifi" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>{t('wifi')}</SectionTitle>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Réseau
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono text-amber-900">
                        {WIFI_INFO.network}
                      </p>
                      <CopyButton text={WIFI_INFO.network} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Mot de passe
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono text-amber-900">
                        {WIFI_INFO.password}
                      </p>
                      <CopyButton text={WIFI_INFO.password} />
                    </div>
                  </div>
                  <Photo
                    src={PHOTOS.wifi_qr}
                    alt="WiFi QR Code"
                    className="mt-2"
                  />
                </div>
              </Card>
            </div>
          )}
          {view === "kitchen" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Équipements Cuisine</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <FlameIcon className="w-4 h-4" /> Plaques Induction
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Marque Bosch. Appuyez sur On/Off, sélectionnez la plaque,
                      puis +/-.
                    </p>
                    <Photo src={PHOTOS.plaques} alt="Plaques" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <UtensilsIcon className="w-4 h-4" /> Cafetière Nespresso
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Réservoir d'eau à l'arrière. Capsules disponibles dans le
                      placard.
                    </p>
                    <Photo src={PHOTOS.nespresso} alt="Nespresso" />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <RecycleIcon className="w-4 h-4" /> Tri des déchets
                    </h4>
                    <BulletList
                      items={[
                        "Bleu : Papier/Carton",
                        "Jaune : Plastiques/Conserves",
                        "Vert : Verre",
                        "Gris : Reste",
                        "Conteneurs en face de l'immeuble",
                      ]}
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}
          {view === "living" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Salon & Confort</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <ThermometerIcon className="w-4 h-4" /> Chauffage
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Pour activer les radiateurs, mettez le fusible (cercle
                      rouge) en position haute sur le compteur.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Photo src={PHOTOS.compteur} alt="Compteur" />
                      <Photo src={PHOTOS.radiateur} alt="Radiateur" />
                    </div>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <SnowflakeIcon className="w-4 h-4" /> Climatisation
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Disponible dans chaque chambre. Utilisez la télécommande
                      dédiée.
                    </p>
                    <Photo
                      src={PHOTOS.telecommande_clim}
                      alt="Télécommande Clim"
                    />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <FanIcon className="w-4 h-4" /> Ventilateur de plafond
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Activez d'abord l'interrupteur mural à gauche, puis utilisez
                      la télécommande Sulion (vitesse 1-6).
                    </p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-amber-800 mb-2">
                      <TvIcon className="w-4 h-4" /> Smart TV
                    </h4>
                    <p className="text-sm text-gray-600">
                      Interface Xiaomi avec Netflix, Prime Video et YouTube
                      pré-installés.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {view === "bathroom" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Salle de bain & Lessive</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">
                      Lave-linge
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Situé dans la buanderie après la cuisine. Lessive dans le
                      tiroir de la commode.
                    </p>
                    <Photo src={PHOTOS.lave_linge} alt="Lave-linge" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">
                      Chauffage d'appoint
                    </h4>
                    <Photo
                      src={PHOTOS.chauffage_appoint}
                      alt="Chauffage Appoint"
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}
          {view === "family" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Pour les enfants</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">
                      Jeux & Livres
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Une sélection est disponible dans le placard du salon.
                    </p>
                    <Photo src={PHOTOS.jeux_enfants} alt="Jeux" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">
                      Parc de jeux
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Situé à 100m à gauche en sortant de l'immeuble.
                    </p>
                    <Photo src={PHOTOS.parc} alt="Parc" />
                  </div>
                </div>
              </Card>
            </div>
          )}
          {view === "explorer" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Visites & Restaurants</SectionTitle>
                <div className="space-y-4">
                  <h3 className="font-bold text-amber-900 border-l-4 border-amber-600 pl-2">
                    Mes Restaurants Favoris
                  </h3>
                  <PlaceCard
                    name="ATIPICO"
                    description="Petit-déjeuner sous les orangers, toasts tomate."
                    address="Rez-de-chaussée de l'immeuble"
                  />
                  <PlaceCard
                    name="Los Diamantes"
                    description="Les meilleures tapas de poisson. Allez-y tôt !"
                    address="Plaza Nueva"
                  />
                  <PlaceCard
                    name="Torquato"
                    description="Terrasse dans l'Albaicin, friture de poisson."
                    address="Calle Pagés"
                  />

                  <h3 className="font-bold text-amber-900 border-l-4 border-amber-600 pl-2 mt-6">
                    À ne pas manquer
                  </h3>
                  <PlaceCard
                    name="L'Alhambra"
                    description="Réservez vos billets des semaines à l'avance !"
                  />
                  <PlaceCard
                    name="Mirador San Nicolás"
                    description="La plus belle vue sur l'Alhambra au coucher de soleil."
                  />
                  <PlaceCard
                    name="Hammam Al Ándalus"
                    description="Bains arabes traditionnels pour se détendre."
                  />
                </div>
              </Card>
            </div>
          )}
          {view === "transport" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Transports</SectionTitle>
                <div className="space-y-4">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">Taxis</h4>
                    <p className="text-sm text-gray-600">
                      Station à 4 min à pied (Calle San Juan de Dios).
                    </p>
                    <a
                      href="tel:+34958280654"
                      className="text-amber-700 font-bold text-sm block mt-1"
                    >
                      📞 +34 958 28 06 54
                    </a>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">Bus</h4>
                    <p className="text-sm text-gray-600">
                      Arrêt "Triunfo" à 5 min à pied. Lignes vers le centre et
                      l'Alhambra.
                    </p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">Aéroport</h4>
                    <p className="text-sm text-gray-600">
                      Navette Ligne 245, arrêt "Constitución". 3,10€.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {view === "map" && (
            <div className="p-4 space-y-4">
              <Card>
                <SectionTitle>Commerces & Adresses</SectionTitle>
                <div className="space-y-4">
                  <PlaceCard
                    name="AL SUR DE GRANADA"
                    description="Épicerie fine, pain artisanal, vins et fromages locaux."
                    address="200m de l'appartement"
                  />
                  <PlaceCard
                    name="HORNO DEL PROGRESO"
                    description="Excellente boulangerie traditionnelle."
                    address="Real de Cartuja, 13"
                  />
                  <PlaceCard
                    name="Tetería Oriente"
                    description="Thés à la menthe et pâtisseries arabes."
                    address="Acera de la Merced, 4"
                  />
                  <PlaceCard
                    name="Mercadona"
                    description="Grand supermarché (fermé le dimanche)."
                    address="Calle Ancha de Capuchinos, 15"
                  />
                </div>
              </Card>
            </div>
          )}
          {view === "checkout" && (
            <div className="p-4 space-y-4">
              <Card className="bg-red-50 border-red-100">
                <SectionTitle>Urgences</SectionTitle>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-red-600 uppercase font-bold">
                      Général
                    </p>
                    <p className="text-2xl font-bold text-red-800">112</p>
                  </div>
                  <div>
                    <p className="text-xs text-red-600 uppercase font-bold">
                      Centre Médical
                    </p>
                    <p className="text-sm text-red-800 font-medium">
                      Gran Capitán, 10
                    </p>
                    <a
                      href="tel:+34958022600"
                      className="text-red-700 font-bold"
                    >
                      +34 958 022 600
                    </a>
                  </div>
                </div>
              </Card>
              <Card>
                <SectionTitle>Check-out</SectionTitle>
                <BulletList
                  items={[
                    "Départ avant 12h00",
                    "Remettre les clés dans le boîtier",
                    "Éteindre toutes les lumières et le chauffage",
                    "Jeter les ordures dans les conteneurs en face",
                  ]}
                />
              </Card>
            </div>
          )}
        </main>

        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-900 rounded-full z-20"></footer>
      </div>
    </div>
  );
}
