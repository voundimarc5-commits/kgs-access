export interface Offer {
  id: string;
  name: string;
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  features: { en: string; fr: string }[];
  idealFor: { en: string; fr: string }[];
  notIncluded?: { en: string; fr: string }[];
  keyBenefits?: { en: string; fr: string }[];
  addon?: {
    name: string;
    price: { en: string; fr: string };
    features: { en: string; fr: string }[];
  };
  price: { en: string; fr: string };
  subscription?: { en: string; fr: string };
  valueProposition: { en: string; fr: string };
}

export const offerEntry: Offer = {
  id: "entry",
  name: "KGS Entry",
  tagline: {
    en: "Smart access. Simple. Reliable.",
    fr: "Accès intelligent. Simple. Fiable.",
  },
  description: {
    en: "Upgrade your property with a modern smart lock system — simple, secure, and ready to use. Designed for individuals and small property owners who want to replace traditional keys with a smarter, more convenient access solution — without complexity.",
    fr: "Modernisez votre bien avec un système de serrure intelligente — simple, sécurisé et prêt à l'emploi. Conçu pour les particuliers et petits propriétaires qui veulent remplacer les clés traditionnelles par une solution d'accès plus intelligente — sans complexité.",
  },
  features: [
    { en: "Smart lock installation (code, card, fingerprint)", fr: "Installation serrure intelligente (code, carte, empreinte)" },
    { en: "Secure access without physical keys", fr: "Accès sécurisé sans clés physiques" },
    { en: "Clean and professional installation", fr: "Installation propre et professionnelle" },
    { en: "Local support during setup", fr: "Support local pendant l'installation" },
  ],
  idealFor: [
    { en: "Apartments", fr: "Appartements" },
    { en: "Small Airbnb units", fr: "Petits logements Airbnb" },
    { en: "Personal properties", fr: "Biens personnels" },
  ],
  notIncluded: [
    { en: "Remote access via internet", fr: "Accès à distance via internet" },
    { en: "Centralized dashboard", fr: "Tableau de bord centralisé" },
    { en: "Advanced management features", fr: "Fonctionnalités de gestion avancées" },
  ],
  price: { en: "From €209", fr: "À partir de 209 €" },
  valueProposition: {
    en: "No more keys. Just simple, secure access.",
    fr: "Plus de clés. Juste un accès simple et sécurisé.",
  },
};

export const offerRemote: Offer = {
  id: "remote",
  name: "KGS Remote",
  tagline: {
    en: "Control your property from anywhere.",
    fr: "Contrôlez votre bien depuis n'importe où.",
  },
  description: {
    en: "Take your property to the next level with remote access control. Manage access in real-time — wherever you are. Perfect for property owners who want flexibility, automation, and peace of mind.",
    fr: "Passez à la vitesse supérieure avec le contrôle d'accès à distance. Gérez les accès en temps réel — où que vous soyez. Parfait pour les propriétaires qui veulent flexibilité, automatisation et tranquillité d'esprit.",
  },
  features: [
    { en: "Smart lock + gateway installation", fr: "Installation serrure + passerelle" },
    { en: "Remote access via mobile app", fr: "Accès à distance via application mobile" },
    { en: "Real-time control (open / close remotely)", fr: "Contrôle en temps réel (ouvrir / fermer à distance)" },
    { en: "Access management (guests, staff, tenants)", fr: "Gestion des accès (invités, personnel, locataires)" },
  ],
  idealFor: [
    { en: "Airbnb hosts", fr: "Hôtes Airbnb" },
    { en: "Property managers", fr: "Gestionnaires de biens" },
    { en: "Multi-property owners", fr: "Propriétaires multi-biens" },
  ],
  addon: {
    name: "KGS Support+",
    price: { en: "9.99 €/month", fr: "9,99 €/mois" },
    features: [
      { en: "Technical support", fr: "Support technique" },
      { en: "Help with setup & usage", fr: "Aide à la configuration et à l'utilisation" },
      { en: "Guidance on access management", fr: "Accompagnement en gestion d'accès" },
      { en: "Troubleshooting assistance", fr: "Assistance au dépannage" },
    ],
  },
  price: { en: "From €299", fr: "À partir de 299 €" },
  valueProposition: {
    en: "Manage access from anywhere — no stress, no delays.",
    fr: "Gérez les accès où que vous soyez — sans stress, sans délai.",
  },
};

export const offerOS: Offer = {
  id: "os",
  name: "KGS OS",
  tagline: {
    en: "Your properties. One system. Full control.",
    fr: "Vos biens. Un système. Contrôle total.",
  },
  description: {
    en: "A complete access management system designed for serious property operators. Instead of juggling multiple apps and devices, you get a unified platform to control, monitor, and manage all your properties in one place.",
    fr: "Un système complet de gestion des accès conçu pour les opérateurs immobiliers sérieux. Au lieu de jongler entre plusieurs applications et appareils, vous disposez d'une plateforme unifiée pour contrôler, surveiller et gérer tous vos biens en un seul endroit.",
  },
  features: [
    { en: "Smart lock + gateway + full setup", fr: "Serrure + passerelle + installation complète" },
    { en: "Access to KGS Access platform", fr: "Accès à la plateforme KGS Access" },
    { en: "Centralized dashboard (multi-property)", fr: "Tableau de bord centralisé (multi-biens)" },
    { en: "User and access control system", fr: "Système de contrôle des utilisateurs et des accès" },
    { en: "Activity logs & monitoring", fr: "Journaux d'activité et surveillance" },
    { en: "Priority support included", fr: "Support prioritaire inclus" },
  ],
  idealFor: [
    { en: "Hotels", fr: "Hôtels" },
    { en: "Property companies", fr: "Sociétés immobilières" },
    { en: "Real estate operators", fr: "Opérateurs immobiliers" },
    { en: "High-volume Airbnb businesses", fr: "Entreprises Airbnb à fort volume" },
  ],
  keyBenefits: [
    { en: "Manage all properties from one place", fr: "Gérez tous vos biens depuis un seul endroit" },
    { en: "Save time on operations", fr: "Gagnez du temps sur les opérations" },
    { en: "Increase security and visibility", fr: "Augmentez la sécurité et la visibilité" },
    { en: "Professional-grade system", fr: "Système de qualité professionnelle" },
  ],
  price: { en: "From €479", fr: "À partir de 479 €" },
  subscription: { en: "+ 14.99 €/month per property", fr: "+ 14,99 €/mois par bien" },
  valueProposition: {
    en: "One platform. Total control.",
    fr: "Une plateforme. Contrôle total.",
  },
};

export const allOffers = [offerEntry, offerRemote, offerOS] as const;
