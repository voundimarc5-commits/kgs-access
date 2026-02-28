import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-32 md:py-40 bg-background">
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
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Built for owners who are{" "}
            <span className="italic text-silver-accent">not on-site.</span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-chrome-light leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>Managing property across borders should not mean losing control.</p>
            <p>
              KGS Access provides structured remote access systems designed for rental properties, villas, shared spaces and small hospitality environments.
            </p>
            <p className="text-ivory/80">
              This is not just hardware.
              <br className="hidden md:block" />
              It is a controllable access system built for cross-border ownership.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
