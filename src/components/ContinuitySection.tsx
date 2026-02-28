import { motion } from "framer-motion";

const ContinuitySection = () => {
  return (
    <section className="py-28 bg-background">
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
            className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            KGS Access is not a one-time product purchase.
          </motion.h2>

          <motion.div
            className="space-y-4 text-lg text-chrome-light font-light leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>Additional doors can be integrated.</p>
            <p>Access rules can evolve.</p>
            <p className="text-ivory/80 font-normal">Systems can scale.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
