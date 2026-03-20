import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { t } = useLanguage();

  const packages = [
    {
      tier: "01",
      name: "KGS Entry",
      tagline: t(
        "Smart access. Simple. Reliable.",
        "Accès intelligent. Simple. Fiable."
      ),
      description: t(
        "Upgrade your property with a modern smart lock system — simple, secure, and ready to use.",
        "Modernisez votre bien avec un système de serrure intelligente — simple, sécurisé et prêt à l'emploi."
      ),
      features: [
        t("Smart lock installation (code, card, fingerprint)", "Installation serrure intelligente (code, carte, empreinte)"),
        t("Secure access without physical keys", "Accès sécurisé sans clés physiques"),
        t("Clean and professional installation", "Installation propre et professionnelle"),
        t("Local support during setup", "Support local pendant l'installation"),
      ],
      idealFor: [
        t("Apartments", "Appartements"),
        t("Small Airbnb units", "Petits logements Airbnb"),
        t("Personal properties", "Biens personnels"),
      ],
      notIncluded: [
        t("Remote access via internet", "Accès à distance via internet"),
        t("Centralized dashboard", "Tableau de bord centralisé"),
        t("Advanced management features", "Fonctionnalités de gestion avancées"),
      ],
      price: t("From €209", "À partir de 209 €"),
      valueProposition: t(
        "No more keys. Just simple, secure access.",
        "Plus de clés. Juste un accès simple et sécurisé."
      ),
    },
    {
      tier: "02",
      name: "KGS Remote",
      tagline: t(
        "Control your property from anywhere.",
        "Contrôlez votre bien depuis n'importe où."
      ),
      description: t(
        "Take your property to the next level with remote access control. Manage access in real-time — wherever you are.",
        "Passez à la vitesse supérieure avec le contrôle d'accès à distance. Gérez les accès en temps réel — où que vous soyez."
      ),
      features: [
        t("Smart lock + gateway installation", "Installation serrure + passerelle"),
        t("Remote access via mobile app", "Accès à distance via application mobile"),
        t("Real-time control (open / close remotely)", "Contrôle en temps réel (ouvrir / fermer à distance)"),
        t("Access management (guests, staff, tenants)", "Gestion des accès (invités, personnel, locataires)"),
      ],
      idealFor: [
        t("Airbnb hosts", "Hôtes Airbnb"),
        t("Property managers", "Gestionnaires de biens"),
        t("Multi-property owners", "Propriétaires multi-biens"),
      ],
      addon: {
        name: "KGS Support+",
        price: t("9.99 €/month", "9,99 €/mois"),
        features: [
          t("Technical support", "Support technique"),
          t("Help with setup & usage", "Aide à la configuration et à l'utilisation"),
          t("Guidance on access management", "Accompagnement en gestion d'accès"),
          t("Troubleshooting assistance", "Assistance au dépannage"),
        ],
      },
      price: t("From €299", "À partir de 299 €"),
      valueProposition: t(
        "Manage access from anywhere — no stress, no delays.",
        "Gérez les accès où que vous soyez — sans stress, sans délai."
      ),
      highlighted: true,
    },
    {
      tier: "03",
      name: "KGS OS",
      tagline: t(
        "Your properties. One system. Full control.",
        "Vos biens. Un système. Contrôle total."
      ),
      description: t(
        "A complete access management system designed for serious property operators. One unified platform to control, monitor, and manage all your properties.",
        "Un système complet de gestion des accès conçu pour les opérateurs immobiliers sérieux. Une plateforme unifiée pour contrôler, surveiller et gérer tous vos biens."
      ),
      features: [
        t("Smart lock + gateway + full setup", "Serrure + passerelle + installation complète"),
        t("Access to KGS Access platform", "Accès à la plateforme KGS Access"),
        t("Centralized dashboard (multi-property)", "Tableau de bord centralisé (multi-biens)"),
        t("User and access control system", "Système de contrôle des utilisateurs et des accès"),
        t("Activity logs & monitoring", "Journaux d'activité et surveillance"),
        t("Priority support included", "Support prioritaire inclus"),
      ],
      idealFor: [
        t("Hotels", "Hôtels"),
        t("Property companies", "Sociétés immobilières"),
        t("Real estate operators", "Opérateurs immobiliers"),
        t("High-volume Airbnb businesses", "Entreprises Airbnb à fort volume"),
      ],
      keyBenefits: [
        t("Manage all properties from one place", "Gérez tous vos biens depuis un seul endroit"),
        t("Save time on operations", "Gagnez du temps sur les opérations"),
        t("Increase security and visibility", "Augmentez la sécurité et la visibilité"),
        t("Professional-grade system", "Système de qualité professionnelle"),
      ],
      price: t("From €479", "À partir de 479 €"),
      subscription: t("+ 14.99 €/month per property", "+ 14,99 €/mois par bien"),
      valueProposition: t(
        "One platform. Total control.",
        "Une plateforme. Contrôle total."
      ),
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t("Choose your", "Choisissez votre")}{" "}
            <span className="italic text-silver-accent">{t("level.", "niveau.")}</span>
          </motion.h2>
          <motion.p
            className="text-sm text-chrome-light/60 font-light max-w-lg mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t(
              "Three offers. One standard of quality. Pick the one that matches your needs.",
              "Trois offres. Un seul standard de qualité. Choisissez celle qui correspond à vos besoins."
            )}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                pkg.highlighted
                  ? "border-silver-accent/30 bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Tier label */}
              <div className="px-8 pt-8 pb-0">
                <span className="text-[10px] font-mono tracking-[0.3em] text-chrome-light/40 uppercase">
                  {t("Offer", "Offre")} {pkg.tier}
                </span>
              </div>

              <div className="px-8 pt-4 pb-8 flex flex-col flex-1">
                {/* Name + tagline */}
                <h3 className="text-2xl font-heading font-semibold text-ivory mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-silver-accent font-light italic mb-4">
                  {pkg.tagline}
                </p>

                {/* Description */}
                <p className="text-[13px] text-chrome-light/70 font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* What you get */}
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-chrome-light/50 mb-3">
                  {t("What you get", "Ce qui est inclus")}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-chrome-light font-light">
                      <Check className="w-3.5 h-3.5 text-silver-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Not included (KGS Entry only) */}
                {"notIncluded" in pkg && pkg.notIncluded && (
                  <>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-chrome-light/40 mb-3">
                      {t("Not included", "Non inclus")}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {pkg.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-chrome-light/40 font-light">
                          <X className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Key benefits (KGS OS only) */}
                {"keyBenefits" in pkg && pkg.keyBenefits && (
                  <>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-chrome-light/50 mb-3">
                      {t("Key benefits", "Avantages clés")}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {pkg.keyBenefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-chrome-light font-light">
                          <span className="w-1 h-1 mt-2 rounded-full bg-silver-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Ideal for */}
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-chrome-light/50 mb-3">
                  {t("Ideal for", "Idéal pour")}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.idealFor.map((use) => (
                    <span
                      key={use}
                      className="text-[11px] font-light text-chrome-light/60 border border-border rounded-full px-3 py-1"
                    >
                      {use}
                    </span>
                  ))}
                </div>

                {/* Optional addon (KGS Remote only) */}
                {"addon" in pkg && pkg.addon && (
                  <div className="border border-silver-accent/10 rounded-xl p-4 mb-6 bg-background/50">
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-silver-accent/70 mb-2">
                      {t("Optional add-on", "Option supplémentaire")}
                    </p>
                    <p className="text-sm font-heading font-medium text-ivory mb-1">
                      {pkg.addon.name}
                    </p>
                    <ul className="space-y-1.5 mb-2">
                      {pkg.addon.features.map((af) => (
                        <li key={af} className="text-[12px] text-chrome-light/60 font-light">
                          — {af}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-medium text-silver-accent">
                      {pkg.addon.price}
                    </p>
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Price */}
                <div className="mb-5">
                  <p className="text-xl font-heading font-semibold text-ivory">
                    {pkg.price}
                  </p>
                  {"subscription" in pkg && pkg.subscription && (
                    <p className="text-xs text-chrome-light/50 font-light mt-1">
                      {pkg.subscription}
                    </p>
                  )}
                </div>

                {/* Value prop */}
                <p className="text-[12px] text-chrome-light/50 italic font-light mb-6">
                  "{pkg.valueProposition}"
                </p>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-silver-accent border border-silver-accent/20 rounded-full py-3 hover:border-silver-accent/40 hover:bg-silver-accent/5 active:scale-[0.97] transition-all duration-300"
                >
                  {t("Get started", "Commencer")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
