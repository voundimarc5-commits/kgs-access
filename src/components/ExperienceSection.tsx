import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("Built for owners who are", "Conçu pour les propriétaires qui sont")}{" "}
            <span className="italic text-silver-accent">{t("not on-site.", "à distance.")}</span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-chrome-light leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>{t(
              "Managing property across borders should not mean losing control.",
              "Gérer un bien à distance ne devrait pas signifier perdre le contrôle."
            )}</p>
            <p>{t(
              "KGS Access provides structured remote access systems designed for rental properties, villas, shared spaces and small hospitality environments.",
              "KGS Access fournit des systèmes d'accès à distance structurés, conçus pour les biens locatifs, villas, espaces partagés et petits environnements hôteliers."
            )}</p>
            <p className="text-ivory/80">
              {t("This is not just hardware.", "Ce n'est pas juste du matériel.")}
              <br className="hidden md:block" />
              {t(
                "It is a controllable access system built for cross-border ownership.",
                "C'est un système d'accès contrôlable, conçu pour la gestion transfrontalière."
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
