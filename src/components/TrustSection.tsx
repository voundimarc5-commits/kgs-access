import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="py-32 bg-background">
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
            className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Part of a global systems vision.
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            KGS Access is a product line within the Kora Global Systems ecosystem
            — a technology group focused on security, infrastructure and intelligent systems.
          </motion.p>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { label: "CE Certified", sub: "European conformity" },
              { label: "RoHS", sub: "Environmental safety" },
              { label: "Europe & Africa", sub: "Operating regions" },
              { label: "US-Based", sub: "Kora Global Systems" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
