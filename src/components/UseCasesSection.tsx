import { motion } from "framer-motion";
import { Home, BedDouble, Building2, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const UseCasesSection = () => {
  const { t } = useLanguage();

  const useCases = [
    { icon: Home, title: t("Residential Properties", "Propriétés résidentielles"), desc: t("Secure, keyless entry for homeowners. Standard installation. No wiring required.", "Accès sécurisé sans clé pour les propriétaires. Installation standard. Aucun câblage requis.") },
    { icon: BedDouble, title: t("Short-Term Rentals", "Locations courte durée"), desc: t("Remote guest access with temporary credentials. No key handover. Full audit trail.", "Accès invité à distance avec identifiants temporaires. Pas de remise de clés. Traçabilité complète.") },
    { icon: Building2, title: t("Property Management", "Gestion immobilière"), desc: t("Centralised access control across multiple properties. Issue and revoke credentials instantly.", "Contrôle d'accès centralisé sur plusieurs biens. Émission et révocation instantanée des identifiants.") },
    { icon: Store, title: t("Commercial Spaces", "Espaces commerciaux"), desc: t("Employee-level permissions for offices, studios, and retail. Cost-effective, modern security.", "Permissions par employé pour bureaux, studios et commerces. Sécurité moderne et économique.") },
  ];

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("Applications", "Applications")}
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t("Designed for Every Environment", "Conçu pour chaque environnement")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className="flex items-start gap-5 p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-hero flex items-center justify-center">
                <uc.icon className="w-5 h-5 text-cyan-glow" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
