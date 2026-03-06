import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: "Essential",
      subtitle: t("Self Deploy", "Auto-déploiement"),
      target: t("For autonomous owners.", "Pour les propriétaires autonomes."),
      features: [
        t("1 Sentinel system (One or Pro)", "1 système Sentinel (One ou Pro)"),
        t("Guided installation documentation", "Documentation d'installation guidée"),
        t("Initial configuration", "Configuration initiale"),
        t("User creation and access structuring", "Création d'utilisateurs et structuration des accès"),
        t("7 days remote support", "7 jours de support à distance"),
      ],
      price: t("From €229", "À partir de 229 €"),
    },
    {
      name: "Control",
      subtitle: t("Dual Access Pack", "Pack Double Accès"),
      target: t("For active rental and shared properties.", "Pour les biens locatifs actifs et partagés."),
      features: [
        t("2 Sentinel systems", "2 systèmes Sentinel"),
        t("Advanced configuration", "Configuration avancée"),
        t("Access rotation procedures", "Procédures de rotation d'accès"),
        t("Detailed access logs", "Journaux d'accès détaillés"),
        t("30 days priority support", "30 jours de support prioritaire"),
      ],
      price: t("From €389", "À partir de 389 €"),
      highlighted: true,
    },
    {
      name: "Pro Control",
      subtitle: t("Managed Access System", "Système d'accès géré"),
      target: t("For structured environments and serious projects.", "Pour les environnements structurés et projets sérieux."),
      features: [
        t("Light project audit", "Audit de projet léger"),
        t("Material selection (One or Pro)", "Sélection du matériel (One ou Pro)"),
        t("Custom configuration", "Configuration sur mesure"),
        t("Multi-user structuring", "Structuration multi-utilisateurs"),
        t("Coordinated deployment support", "Support de déploiement coordonné"),
        t("Advanced onboarding", "Onboarding avancé"),
      ],
      price: t("Starting from €700", "À partir de 700 €"),
      note: t(
        "Designed for multi-entry, structured or institutional environments.",
        "Conçu pour les environnements multi-entrées, structurés ou institutionnels."
      ),
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("Choose your", "Choisissez votre")}{" "}
            <span className="italic text-silver-accent">{t("setup.", "configuration.")}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                pkg.highlighted
                  ? "border-silver-accent/30 bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-silver-accent mb-1">
                {pkg.subtitle}
              </p>
              <h3 className="text-2xl font-heading font-medium text-ivory mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-chrome-light/70 font-light mb-6">
                {pkg.target}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-chrome-light font-light">
                    <span className="text-silver-accent mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-xl font-heading font-medium text-ivory mb-4">
                {pkg.price}
              </p>

              {pkg.note && (
                <p className="text-xs text-chrome-light/50 font-light italic mb-4">
                  {pkg.note}
                </p>
              )}

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-silver-accent border border-silver-accent/20 rounded-full py-3 hover:border-silver-accent/40 transition-all duration-300"
              >
                {t("Get started", "Commencer")}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
