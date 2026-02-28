import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const provides = [
  "Intelligent access systems",
  "Remote configuration",
  "User and permission structuring",
  "Access traceability",
  "Structured client support",
];

const doesNot = [
  "Physical security guarantees",
  "Continuous property management",
  "Banking or financial services",
  "Heavy construction services",
];

const WhatWeDoSection = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-heading font-medium text-ivory mb-6">
                What we provide
              </h3>
              <ul className="space-y-4">
                {provides.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-chrome-light font-light">
                    <Check className="w-4 h-4 text-silver-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="text-2xl font-heading font-medium text-ivory mb-6">
                What we do not provide
              </h3>
              <ul className="space-y-4">
                {doesNot.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-chrome-light/60 font-light">
                    <X className="w-4 h-4 text-chrome-light/30 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
