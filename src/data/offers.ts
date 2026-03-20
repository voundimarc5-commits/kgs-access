export interface Offer {
  id: string;
  name: string;
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  features: { en: string; fr: string }[];
  featureDetails?: { title: { en: string; fr: string }; desc: { en: string; fr: string } }[];
  idealFor: { en: string; fr: string }[];
  notIncluded?: { en: string; fr: string }[];
  keyBenefits?: { en: string; fr: string }[];
  addon?: {
    name: string;
    price: { en: string; fr: string };
    features: { en: string; fr: string }[];
  };
  subscription?: {
    price: { en: string; fr: string };
    freeMonths: { en: string; fr: string };
  };
  price: { en: string; fr: string };
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
  featureDetails: [
    {
      title: { en: "Smart lock installation", fr: "Installation de serrure intelligente" },
      desc: {
        en: "We install a high-quality smart lock on your door, compatible with multiple authentication methods: PIN code, RFID card, and fingerprint. The lock is chosen to fit your door type and aesthetic preferences, ensuring a seamless integration with your property.",
        fr: "Nous installons une serrure intelligente de haute qualité sur votre porte, compatible avec plusieurs méthodes d'authentification : code PIN, carte RFID et empreinte digitale. La serrure est choisie pour s'adapter à votre type de porte et vos préférences esthétiques.",
      },
    },
    {
      title: { en: "Secure keyless access", fr: "Accès sécurisé sans clé" },
      desc: {
        en: "Say goodbye to lost keys, lock changes, and unauthorized copies. Each user gets their own access method — a personal code, a card, or their fingerprint. You stay in control of who enters your property at all times.",
        fr: "Dites adieu aux clés perdues, aux changements de serrure et aux copies non autorisées. Chaque utilisateur dispose de sa propre méthode d'accès — un code personnel, une carte ou son empreinte digitale. Vous gardez le contrôle de qui entre chez vous.",
      },
    },
    {
      title: { en: "Professional installation", fr: "Installation professionnelle" },
      desc: {
        en: "Our certified technicians handle everything — from measuring your door to final testing. The installation is clean, fast, and non-destructive. No damage to your door frame, no visible wiring, just a perfect finish.",
        fr: "Nos techniciens certifiés s'occupent de tout — de la mesure de votre porte au test final. L'installation est propre, rapide et non destructive. Aucun dommage au cadre de porte, aucun câblage visible, juste une finition parfaite.",
      },
    },
    {
      title: { en: "Local support during setup", fr: "Support local pendant l'installation" },
      desc: {
        en: "We don't just install and leave. Our team walks you through the full setup — how to create codes, register fingerprints, and manage cards. You'll be fully autonomous by the time we leave your property.",
        fr: "Nous ne nous contentons pas d'installer et de partir. Notre équipe vous guide à travers la configuration complète — comment créer des codes, enregistrer des empreintes et gérer les cartes. Vous serez totalement autonome quand nous quitterons votre bien.",
      },
    },
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
  featureDetails: [
    {
      title: { en: "Smart lock + Wi-Fi gateway", fr: "Serrure intelligente + passerelle Wi-Fi" },
      desc: {
        en: "We install a smart lock paired with a Wi-Fi gateway that connects your lock to the internet. This enables full remote control from your smartphone — no matter where you are in the world. The gateway is compact and plugs into any standard outlet near your door.",
        fr: "Nous installons une serrure intelligente couplée à une passerelle Wi-Fi qui connecte votre serrure à internet. Cela permet un contrôle total à distance depuis votre smartphone — où que vous soyez dans le monde. La passerelle est compacte et se branche sur n'importe quelle prise standard.",
      },
    },
    {
      title: { en: "Remote access via mobile app", fr: "Accès à distance via application mobile" },
      desc: {
        en: "Open or lock your door from anywhere using the dedicated mobile app. Generate temporary codes for guests, set time-limited access for cleaning staff, and monitor who enters and exits — all from your phone. Compatible with iOS and Android.",
        fr: "Ouvrez ou verrouillez votre porte de n'importe où via l'application mobile dédiée. Générez des codes temporaires pour les invités, définissez des accès limités dans le temps pour le personnel de ménage, et surveillez qui entre et sort — tout depuis votre téléphone. Compatible iOS et Android.",
      },
    },
    {
      title: { en: "Real-time control", fr: "Contrôle en temps réel" },
      desc: {
        en: "Receive instant notifications when someone enters your property. Lock or unlock remotely with a single tap. Check the current lock status at any time. Never wonder again if you forgot to lock the door.",
        fr: "Recevez des notifications instantanées quand quelqu'un entre dans votre bien. Verrouillez ou déverrouillez à distance d'un simple tap. Vérifiez l'état du verrou à tout moment. Ne vous demandez plus jamais si vous avez oublié de fermer la porte.",
      },
    },
    {
      title: { en: "Guest & staff access management", fr: "Gestion des accès invités et personnel" },
      desc: {
        en: "Create and revoke access for guests, tenants, or staff in seconds. Set schedules — for example, allow your cleaner access only on Tuesdays from 10am to 2pm. Each person gets their own code or digital key, and you can disable it instantly.",
        fr: "Créez et révoquez des accès pour les invités, locataires ou personnel en quelques secondes. Définissez des horaires — par exemple, autorisez votre agent de ménage uniquement le mardi de 10h à 14h. Chaque personne reçoit son propre code ou clé digitale, que vous pouvez désactiver instantanément.",
      },
    },
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
  subscription: {
    price: { en: "7.99 €/month", fr: "7,99 €/mois" },
    freeMonths: { en: "1 month free included", fr: "1 mois offert inclus" },
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
  featureDetails: [
    {
      title: { en: "Complete hardware setup", fr: "Installation matérielle complète" },
      desc: {
        en: "Every property in your portfolio gets a smart lock and Wi-Fi gateway professionally installed. We handle the full deployment — from site survey to final testing — so your properties are operational from day one.",
        fr: "Chaque bien de votre portefeuille reçoit une serrure intelligente et une passerelle Wi-Fi installées professionnellement. Nous gérons le déploiement complet — de la visite du site au test final — pour que vos biens soient opérationnels dès le premier jour.",
      },
    },
    {
      title: { en: "KGS Access platform", fr: "Plateforme KGS Access" },
      desc: {
        en: "Your dedicated management platform. A web-based dashboard where you see all your properties, all your locks, all your users — in one place. Create access rules, manage teams, and monitor everything in real-time from any device.",
        fr: "Votre plateforme de gestion dédiée. Un tableau de bord web où vous voyez tous vos biens, toutes vos serrures, tous vos utilisateurs — en un seul endroit. Créez des règles d'accès, gérez les équipes et surveillez tout en temps réel depuis n'importe quel appareil.",
      },
    },
    {
      title: { en: "Centralized multi-property dashboard", fr: "Tableau de bord multi-biens centralisé" },
      desc: {
        en: "Whether you manage 5 apartments or 200 hotel rooms, the dashboard scales with you. Filter by property, by date, by user. See which doors are locked, who accessed which room, and when. Export reports for your operations team.",
        fr: "Que vous gériez 5 appartements ou 200 chambres d'hôtel, le tableau de bord évolue avec vous. Filtrez par bien, par date, par utilisateur. Voyez quelles portes sont verrouillées, qui a accédé à quelle chambre et quand. Exportez des rapports pour votre équipe opérationnelle.",
      },
    },
    {
      title: { en: "User & access control system", fr: "Système de contrôle des utilisateurs et accès" },
      desc: {
        en: "Assign roles and permissions at scale. Create user groups (maintenance, reception, management), set property-level access rules, and revoke access instantly. Every action is logged and auditable.",
        fr: "Attribuez des rôles et permissions à grande échelle. Créez des groupes d'utilisateurs (maintenance, réception, direction), définissez des règles d'accès par bien, et révoquez les accès instantanément. Chaque action est enregistrée et auditable.",
      },
    },
    {
      title: { en: "Activity logs & monitoring", fr: "Journaux d'activité et surveillance" },
      desc: {
        en: "Full audit trail for every door, every user, every action. Know exactly who entered which property at what time. Detect anomalies, generate compliance reports, and maintain complete visibility over your operations.",
        fr: "Historique complet pour chaque porte, chaque utilisateur, chaque action. Sachez exactement qui est entré dans quel bien à quelle heure. Détectez les anomalies, générez des rapports de conformité et maintenez une visibilité totale sur vos opérations.",
      },
    },
    {
      title: { en: "Priority support", fr: "Support prioritaire" },
      desc: {
        en: "As a KGS OS client, you get priority access to our support team. Faster response times, dedicated account management, and proactive system health monitoring. We treat your infrastructure like our own.",
        fr: "En tant que client KGS OS, vous bénéficiez d'un accès prioritaire à notre équipe support. Des temps de réponse plus rapides, un gestionnaire de compte dédié et une surveillance proactive de la santé du système. Nous traitons votre infrastructure comme la nôtre.",
      },
    },
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
  subscription: {
    price: { en: "14.99 €/month per property", fr: "14,99 €/mois par bien" },
    freeMonths: { en: "2 months free included", fr: "2 mois offerts inclus" },
  },
  price: { en: "From €479", fr: "À partir de 479 €" },
  valueProposition: {
    en: "One platform. Total control.",
    fr: "Une plateforme. Contrôle total.",
  },
};

export const allOffers = [offerEntry, offerRemote, offerOS] as const;
