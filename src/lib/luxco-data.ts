export const contact = {
  whatsapp: ["+22890856826", "+22896618353"],
  whatsappDisplay: ["+228 90 85 68 26", "+228 96 61 83 53"],
  email: "koami66@gmail.com",
  address: "Kégué, Togo",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Chambres", href: "#chambres" },
  { label: "Place des Fêtes", href: "#evenements" },
  { label: "Stockage", href: "#stockage" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export type Room = {
  id: string;
  badge: string;
  title: string;
  description: string;
  price: number;
  specs: { icon: string; label: string }[];
  image: string;
};

export const rooms: Room[] = [
  {
    id: "duplex-deluxe",
    badge: "Premium",
    title: "Chambre Salon Deluxe Duplex",
    description:
      "Un duplex pensé pour offrir un niveau supérieur de confort et d'élégance, avec volumes généreux, salon lumineux et chambre en mezzanine.",
    price: 50000,
    specs: [
      { icon: "bed", label: "1 Chambre" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "Duplex" },
      { icon: "users", label: "2 Pers." },
    ],
    image: "img_3.jpeg",
  },
  {
    id: "standard",
    badge: "Populaire",
    title: "Chambre Salon Standard",
    description:
      "Un espace moderne et parfaitement aménagé pour une vie quotidienne sereine, idéal pour une personne seule ou un couple.",
    price: 40000,
    specs: [
      { icon: "bed", label: "1 Chambre" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "Standard" },
      { icon: "users", label: "2 Pers." },
    ],
    image: "img_4.jpeg",
  },
  {
    id: "vip-3ch",
    badge: "VIP",
    title: "Trois Chambres Salon Duplex (VIP)",
    description:
      "Le summum du luxe chez LUXCO : trois chambres spacieuses, deux salons majestueux et une conception intérieure pour un art de vivre exclusif.",
    price: 125000,
    specs: [
      { icon: "bed", label: "3 Chambres" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "VIP" },
      { icon: "users", label: "6 Pers." },
    ],
    image: "img_5.jpeg",
  },
  {
    id: "vip-2ch",
    badge: "Familial",
    title: "Deux Chambres Salon Duplex (VIP)",
    description:
      "Un duplex VIP pour résidents exigeants : deux chambres élégantes, un salon en double hauteur et une architecture intérieure raffinée.",
    price: 100000,
    specs: [
      { icon: "bed", label: "2 Chambres" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "VIP" },
      { icon: "users", label: "4 Pers." },
    ],
    image: "img_6.jpeg",
  },
  {
    id: "deluxe-3ch",
    badge: "Familial",
    title: "Trois Chambres Salon Deluxe",
    description:
      "Trois chambres soigneusement aménagées et un salon moderne, pour une atmosphère haut de gamme idéale pour les familles.",
    price: 65000,
    specs: [
      { icon: "bed", label: "3 Chambres" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "Deluxe" },
      { icon: "users", label: "6 Pers." },
    ],
    image: "img_7.jpeg",
  },
  {
    id: "deluxe-2ch",
    badge: "Confort",
    title: "Deux Chambres Salon Deluxe",
    description:
      "Un salon raffiné, deux chambres confortables et une finition premium, pour un cadre de vie où luxe et fonctionnalité se rencontrent.",
    price: 55000,
    specs: [
      { icon: "bed", label: "2 Chambres" },
      { icon: "sofa", label: "1 Salon" },
      { icon: "layout", label: "Deluxe" },
      { icon: "users", label: "4 Pers." },
    ],
    image: "img_8.jpeg",
  },
];

export type PricingCategory = {
  id: string;
  label: string;
  nightly: number;
  weekly: number;
  biweekly: number;
  threeWeeks: number;
  monthly: number;
};

export const pricing: PricingCategory[] = [
  {
    id: "duplex",
    label: "Duplex",
    nightly: 50000,
    weekly: 175000,
    biweekly: 250000,
    threeWeeks: 350000,
    monthly: 450000,
  },
  {
    id: "standard",
    label: "Standard",
    nightly: 40000,
    weekly: 125000,
    biweekly: 215000,
    threeWeeks: 290000,
    monthly: 350000,
  },
  {
    id: "vip-3",
    label: "3 Ch. VIP",
    nightly: 125000,
    weekly: 380000,
    biweekly: 550000,
    threeWeeks: 750000,
    monthly: 1000000,
  },
  {
    id: "vip-2",
    label: "2 Ch. VIP",
    nightly: 100000,
    weekly: 300000,
    biweekly: 425000,
    threeWeeks: 625000,
    monthly: 825000,
  },
  {
    id: "3ch-std",
    label: "3 Ch. Std",
    nightly: 65000,
    weekly: 250000,
    biweekly: 450000,
    threeWeeks: 575000,
    monthly: 650000,
  },
  {
    id: "2ch-std",
    label: "2 Ch. Std",
    nightly: 55000,
    weekly: 200000,
    biweekly: 350000,
    threeWeeks: 480000,
    monthly: 550000,
  },
];

export const features = [
  { icon: "wifi", title: "Wi-Fi Haut Débit" },
  { icon: "snowflake", title: "Climatisation" },
  { icon: "utensils", title: "Cuisine Équipée" },
  { icon: "shield", title: "Sécurité 24h/24" },
  { icon: "tv", title: "Smart TV" },
  { icon: "car", title: "Parking" },
];

export const services = [
  {
    icon: "broom",
    title: "Ménage Régulier",
    description: "Service d'entretien disponible pour un séjour sans souci.",
  },
  {
    icon: "concierge",
    title: "Conciergerie",
    description: "Assistance personnalisée pour répondre à vos besoins.",
  },
  {
    icon: "calendar",
    title: "Réservation Flexible",
    description: "Séjour court ou longue durée selon vos envies.",
  },
  {
    icon: "lock",
    title: "Espaces Sécurisés",
    description: "Surveillance et accès contrôlé pour votre tranquillité.",
  },
];

export const testimonials = [
  {
    text: "Un séjour exceptionnel ! L'appartement était impeccable, moderne et très bien équipé. La localisation à Kégué est parfaite. Je reviendrai sans hésiter.",
    author: "Marie K.",
    role: "Séjour de 2 semaines — 3 Chambres VIP",
  },
  {
    text: "Service impeccable et appartements très confortables. L'équipe est réactive et professionnelle. Je recommande vivement LUXCO.",
    author: "Jean-Pierre A.",
    role: "Séjour d'affaires — 1 mois",
  },
  {
    text: "Nous avons célébré notre événement familial dans la salle des fêtes. Un cadre magnifique et un service de qualité. Merci à toute l'équipe !",
    author: "Ablavi D.",
    role: "Événement familial",
  },
];

export const galleryImages = [
  "img_9.jpeg",
  "img_10.jpeg",
  "img_22.jpeg",
  "img_23.jpeg",
  "img_24.jpeg",
  "img_25.jpeg",
  "img_26.jpeg",
  "img_27.jpeg",
  "img_28.jpeg",
  "img_29.jpeg",
  "img_30.jpeg",
  "img_31.jpeg",
];

export const eventImages = ["img_32.jpeg", "img_33.jpeg", "img_34.jpeg", "img_35.jpeg"];

export const storageItem = {
  title: "Grand Magasin de Stockage",
  price: 150000,
  description:
    "Grand espace de stockage sécurisé, idéal pour marchandises, matériel ou archives.",
  image: "img_36.jpeg",
};
