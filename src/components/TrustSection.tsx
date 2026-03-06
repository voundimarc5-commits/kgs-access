import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";

const certifications = [
  {
    label: "CE",
    svg: (
      <svg viewBox="0 0 80 50" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="40" fontSize="42" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="-2">CE</text>
      </svg>
    ),
  },
  {
    label: "RoHS",
    svg: (
      <svg viewBox="0 0 100 50" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="40" fontSize="36" fontFamily="Arial, sans-serif" fontWeight="bold">RoHS</text>
      </svg>
    ),
  },
];

const TrustSection = () => {
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
            className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t("Part of a global systems vision.", "Une vision globale des systèmes.")}
          </motion.h2>

          <motion.p
            className="text-lg text-chrome-light font-light leading-relaxed max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t(
              "KGS Access is a product line within the Kora Global Systems ecosystem — a technology group focused on security, infrastructure and intelligent systems.",
              "KGS Access est une gamme de produits au sein de l'écosystème Kora Global Systems — un groupe technologique axé sur la sécurité, l'infrastructure et les systèmes intelligents."
            )}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-10 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TooltipProvider delayDuration={200}>
              {certifications.map((cert) => (
                <Tooltip key={cert.label}>
                  <TooltipTrigger asChild>
                    <div className="text-chrome/50 hover:text-chrome-light transition-colors duration-300 cursor-default">
                      {cert.svg}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    className="max-w-[260px] text-center bg-deep border-chrome/20 text-chrome-light text-xs leading-relaxed px-4 py-3"
                  >
                    {t(
                      `Product compliant with applicable ${cert.label} standards. Certification issued by the manufacturer.`,
                      `Produit conforme aux normes ${cert.label} applicables. Certification émise par le fabricant.`
                    )}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { label: t("Europe & Africa", "Europe & Afrique"), sub: t("Operating regions", "Régions d'opération") },
              { label: t("US-Based", "Basé aux USA"), sub: "Kora Global Systems" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm font-medium text-ivory/80 mb-1">{item.label}</p>
                <p className="text-xs text-chrome/60">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
