import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-32 md:py-40 bg-mineral">
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
            Access should feel <span className="italic text-silver-accent">natural.</span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-chrome-light leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>A door is not just an entry point.</p>
            <p>
              It is the first interface between space, people and security.
            </p>
            <p className="text-ivory/80">
              KGS Access designs locks that disappear into architecture,
              <br className="hidden md:block" />
              while quietly doing their job.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
