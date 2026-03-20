import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

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
            {t("Legal", "Juridique")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("Privacy & Data", "Confidentialité & données")}
          </motion.h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-xl font-heading font-bold text-foreground mb-6">
            {t("Connected Device Disclaimer", "Avertissement appareils connectés")}
          </h2>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t(
                "Certain KGS Access products may include electronic or connected features.",
                "Certains produits KGS Access peuvent inclure des fonctionnalités électroniques ou connectées."
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t(
                "Kora Global Systems does not collect, store, or process sensitive personal data through these devices unless explicitly stated.",
                "Kora Global Systems ne collecte, ne stocke et ne traite pas de données personnelles sensibles via ces appareils, sauf mention explicite."
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t(
                "Network configuration, cybersecurity, and data protection remain the responsibility of the user or system integrator.",
                "La configuration réseau, la cybersécurité et la protection des données restent sous la responsabilité de l'utilisateur ou de l'intégrateur système."
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
