import { motion } from "framer-motion";
import africaImg from "@/assets/africa-premium.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AfricaPremiumSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-0 overflow-hidden">
      <div className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${africaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <motion.div
              className="w-16 h-[1px] bg-silver-accent/60 mb-10"
              initial={{ scaleX: 0, originX: 0 }}
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
              {t("Designed for owners abroad.", "Conçu pour les propriétaires à l'étranger.")}
              <br />
              {t("Built for properties in ", "Conçu pour les biens en ")}
              <span className="italic text-silver-accent">{t("Africa and beyond.", "Afrique et au-delà.")}</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-chrome-light leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p>{t(
                "Owning property across borders requires visibility, control and structured access.",
                "Posséder un bien à l'étranger exige visibilité, contrôle et accès structuré."
              )}</p>
              <p>{t(
                "KGS Access supports international property owners managing rentals, villas and structured spaces across Africa — and anywhere remote access is essential.",
                "KGS Access accompagne les propriétaires internationaux qui gèrent des locations, villas et espaces structurés en Afrique — et partout où l'accès à distance est essentiel."
              )}</p>
              <p className="text-ivory/90 font-normal">
                {t(
                  "Whether you are in London, Paris, Dubai or Toronto, your property remains under your control.",
                  "Que vous soyez à Londres, Paris, Dubaï ou Toronto, votre bien reste sous votre contrôle."
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaPremiumSection;
