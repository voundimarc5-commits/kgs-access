import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep/85" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-6">
            {t("Next Step", "Prochaine étape")}
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-6">
            {t("Begin the Conversation", "Commencez la conversation")}
          </h2>
          <p className="text-lg text-chrome-light mb-12 max-w-xl mx-auto leading-relaxed">
            {t(
              "Discuss your requirements, verify door compatibility, or request product documentation.",
              "Discutez de vos besoins, vérifiez la compatibilité de votre porte, ou demandez la documentation produit."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:brightness-110 transition-all duration-300"
            >
              {t("Contact Us", "Nous contacter")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-chrome/20 text-chrome-light font-medium hover:bg-chrome/5 hover:border-chrome/40 transition-all duration-300"
            >
              {t("View Products", "Voir les produits")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
