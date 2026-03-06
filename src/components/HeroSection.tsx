import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-bg.jpg";
import logo from "@/assets/kgs-access-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/50 to-deep/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <motion.img
            src={logo}
            alt="KGS Access"
            className="h-40 md:h-56 w-auto mb-12 opacity-50 animate-glow-breathe drop-shadow-[0_0_30px_hsl(250_20%_60%/0.3)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          />

          <motion.div
            className="w-16 h-[1px] bg-silver-accent/60 mb-10"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-ivory mb-8 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {t("Control your property.", "Contrôlez votre bien.")}{" "}
            <span className="italic text-silver-accent">{t("From anywhere.", "Depuis n'importe où.")}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-chrome-light max-w-xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t(
              "Intelligent remote access systems for international property owners managing assets across Africa and other growth markets.",
              "Systèmes d'accès intelligents pour les propriétaires internationaux gérant des biens en Afrique et dans d'autres marchés en croissance."
            )}
          </motion.p>

          <motion.p
            className="text-base text-chrome-light/70 max-w-xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {t(
              "No physical presence required. No key handovers. No operational blind spots.",
              "Aucune présence physique requise. Aucune remise de clés. Aucun angle mort opérationnel."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-ivory border-b border-silver-accent/40 pb-2 hover:border-silver-accent transition-all duration-500"
            >
              {t("Request a Remote Assessment", "Demander une évaluation à distance")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
