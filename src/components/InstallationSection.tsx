import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const InstallationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mb-10"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t("Installation & Responsibility", "Installation & Responsabilité")}
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-chrome-light font-light leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>{t(
              "KGS Access provides structured access systems and configuration support.",
              "KGS Access fournit des systèmes d'accès structurés et un support de configuration."
            )}</p>
            <p>{t("Installation may be:", "L'installation peut être :")}</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                {t(
                  "Performed independently by the client using provided guides",
                  "Réalisée de manière autonome par le client à l'aide des guides fournis"
                )}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                {t(
                  "Completed by a local installer coordinated by the client",
                  "Effectuée par un installateur local coordonné par le client"
                )}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                {t(
                  "Structured and coordinated under Pro Control projects",
                  "Structurée et coordonnée dans le cadre des projets Pro Control"
                )}
              </li>
            </ul>
            <p className="text-chrome-light/60 text-base">{t(
              "KGS Access does not operate as a construction or security contractor. We provide access systems and configuration support only.",
              "KGS Access n'opère pas en tant qu'entreprise de construction ou de sécurité. Nous fournissons uniquement des systèmes d'accès et un support de configuration."
            )}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
