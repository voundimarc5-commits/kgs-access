import { motion } from "framer-motion";

const InstallationSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mb-10"
            initial={{ scaleX: 0, originX: 0 }}
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
            Installation & Responsibility
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-chrome-light font-light leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              KGS Access provides structured access systems and configuration support.
            </p>
            <p>Installation may be:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                Performed independently by the client using provided guides
              </li>
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                Completed by a local installer coordinated by the client
              </li>
              <li className="flex items-start gap-2">
                <span className="text-silver-accent mt-1">•</span>
                Structured and coordinated under Pro Control projects
              </li>
            </ul>
            <p className="text-chrome-light/60 text-base">
              KGS Access does not operate as a construction or security contractor.
              We provide access systems and configuration support only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
