import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, BedDouble, Building2, Store, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Home,
      title: t("Residential Properties", "Propriétés résidentielles"),
      description: t(
        "Replace traditional keys with certified smart access. The Sentinel One fits standard door frames and provides four independent authentication methods — with no wiring or structural modification required.",
        "Remplacez les clés traditionnelles par un accès intelligent certifié. Le Sentinel One s'adapte aux cadres de porte standard et offre quatre méthodes d'authentification indépendantes — sans câblage ni modification structurelle."
      ),
      cta: t("Explore the Sentinel One", "Découvrir le Sentinel One"),
      link: "/products/f7",
    },
    {
      icon: BedDouble,
      title: t("Short-Term Rentals & Hospitality", "Locations courte durée & hôtellerie"),
      description: t(
        "Generate temporary credentials for each guest. Manage access remotely. Eliminate key handover logistics. Full entry audit trail for property compliance and insurance documentation.",
        "Générez des identifiants temporaires pour chaque invité. Gérez l'accès à distance. Éliminez la logistique de remise des clés. Traçabilité complète des entrées pour la conformité et l'assurance."
      ),
      cta: t("View capabilities", "Voir les fonctionnalités"),
      link: "/products/f7",
    },
    {
      icon: Building2,
      title: t("Property Management", "Gestion immobilière"),
      description: t(
        "Centralised access control across your portfolio. Issue, modify, and revoke credentials instantly. Reduce operational overhead and eliminate physical key management costs entirely.",
        "Contrôle d'accès centralisé sur l'ensemble de votre portefeuille. Émettez, modifiez et révoquez les identifiants instantanément. Réduisez les coûts opérationnels et éliminez la gestion physique des clés."
      ),
      cta: t("View product line", "Voir la gamme"),
      link: "/products",
    },
    {
      icon: Store,
      title: t("Commercial & Office Spaces", "Espaces commerciaux & bureaux"),
      description: t(
        "Implement employee-level access permissions without legacy infrastructure. Smart locks provide a cost-effective, modern alternative to traditional commercial access control systems.",
        "Implémentez des permissions d'accès par employé sans infrastructure existante. Les serrures intelligentes offrent une alternative moderne et économique aux systèmes de contrôle d'accès traditionnels."
      ),
      cta: t("Discuss requirements", "Discuter de vos besoins"),
      link: "/contact",
    },
  ];

  return (
    <>
      <section className="bg-hero pt-36 pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("Applications", "Applications")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("Solutions by Sector", "Solutions par secteur")}
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              "Access control adapted to the requirements of each environment.",
              "Contrôle d'accès adapté aux exigences de chaque environnement."
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-10">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.title}
                className="flex flex-col md:flex-row gap-8 items-start p-10 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-hero flex items-center justify-center shrink-0">
                  <seg.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                    {seg.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {seg.description}
                  </p>
                  <Link
                    to={seg.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                  >
                    {seg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
