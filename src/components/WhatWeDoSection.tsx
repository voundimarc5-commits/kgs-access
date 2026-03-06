import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  const provides = [
    t("Intelligent access systems", "Systèmes d'accès intelligents"),
    t("Remote configuration", "Configuration à distance"),
    t("User and permission structuring", "Structuration des utilisateurs et permissions"),
    t("Access traceability", "Traçabilité des accès"),
    t("Structured client support", "Support client structuré"),
  ];

  const doesNot = [
    t("Physical security guarantees", "Garanties de sécurité physique"),
    t("Continuous property management", "Gestion continue de biens"),
    t("Banking or financial services", "Services bancaires ou financiers"),
    t("Heavy construction services", "Services de construction lourde"),
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-heading font-medium text-ivory mb-6">
                {t("What we provide", "Ce que nous fournissons")}
              </h3>
              <ul className="space-y-4">
                {provides.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-chrome-light font-light">
                    <Check className="w-4 h-4 text-silver-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="text-2xl font-heading font-medium text-ivory mb-6">
                {t("What we do not provide", "Ce que nous ne fournissons pas")}
              </h3>
              <ul className="space-y-4">
                {doesNot.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-chrome-light/60 font-light">
                    <X className="w-4 h-4 text-chrome-light/30 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
