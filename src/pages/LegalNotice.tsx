import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LegalNotice = () => {
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
            {t("Legal Notice", "Mentions légales")}
          </motion.h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t(
              "KGS Access is a product line operated within the Kora Global Systems ecosystem.",
              "KGS Access est une gamme de produits exploitée au sein de l'écosystème Kora Global Systems."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t(
              "Kora Global Systems designs, structures, and deploys technology and access solutions for residential, commercial, and institutional environments.",
              "Kora Global Systems conçoit, structure et déploie des solutions technologiques et d'accès pour les environnements résidentiels, commerciaux et institutionnels."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t(
              "KGS Access products are provided as physical access devices. Installation, configuration, and use may vary depending on local regulations, building standards, and environmental conditions.",
              "Les produits KGS Access sont fournis en tant que dispositifs d'accès physiques. L'installation, la configuration et l'utilisation peuvent varier selon les réglementations locales, les normes de construction et les conditions environnementales."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t(
              "Kora Global Systems does not operate as a security authority, law enforcement body, or regulatory agency.",
              "Kora Global Systems n'opère pas en tant qu'autorité de sécurité, organisme d'application de la loi ou agence de réglementation."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Contact :{" "}
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="text-accent hover:underline"
            >
              contact@koraglobalsystems.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default LegalNotice;
