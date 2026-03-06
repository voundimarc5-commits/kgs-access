import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ContinuitySection = () => {
  const { t } = useLanguage();

  const cards = [
    { number: "+1", label: t("Add new doors at any time", "Ajoutez de nouvelles portes à tout moment") },
    { number: "∞", label: t("Access rules adapt as you grow", "Les règles d'accès évoluent avec vous") },
    { number: "→", label: t("Scale across properties and regions", "Étendez à plusieurs biens et régions") },
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t("This is not a one-time purchase.", "Ce n'est pas un achat ponctuel.")}
            <br />
            <span className="italic text-silver-accent">{t("It's an evolving system.", "C'est un système évolutif.")}</span>
          </motion.h2>

          <motion.p
            className="text-lg text-chrome-light font-light leading-relaxed text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t(
              "Your access infrastructure grows with your portfolio. KGS Access is designed to scale — from a single door to an entire property network.",
              "Votre infrastructure d'accès évolue avec votre portefeuille. KGS Access est conçu pour s'adapter — d'une seule porte à un réseau complet de biens."
            )}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {cards.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-border bg-card"
              >
                <p className="text-2xl font-heading font-medium text-silver-accent mb-2">
                  {item.number}
                </p>
                <p className="text-sm text-chrome-light font-light">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] uppercase text-silver-accent border-b border-silver-accent/30 pb-2 hover:border-silver-accent/60 transition-all duration-500"
            >
              {t("Plan your expansion", "Planifiez votre expansion")}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
