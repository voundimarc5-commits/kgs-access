import { motion } from "framer-motion";

const LegalNotice = () => {
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
            Legal
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Legal Notice
          </motion.h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <p className="text-muted-foreground leading-relaxed text-sm">
            KGS Access is a product line operated within the Kora Global Systems ecosystem.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Kora Global Systems designs, structures, and deploys technology and access solutions for residential, commercial, and institutional environments.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            KGS Access products are provided as physical access devices. Installation, configuration, and use may vary depending on local regulations, building standards, and environmental conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Kora Global Systems does not operate as a security authority, law enforcement body, or regulatory agency.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Contact:{" "}
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
