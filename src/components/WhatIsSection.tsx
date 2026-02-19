import { motion } from "framer-motion";
import { Fingerprint, Lock, Smartphone, ShieldCheck } from "lucide-react";

const WhatIsSection = () => {
  const points = [
    { icon: Fingerprint, label: "Biometric Authentication" },
    { icon: Lock, label: "Multi-Bolt Security" },
    { icon: Smartphone, label: "Remote Management" },
    { icon: ShieldCheck, label: "Certified Compliance" },
  ];

  return (
    <section id="what-is" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            The Platform
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Access Control, Redefined
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KGS Access provides certified smart lock systems that combine biometric, digital, and physical credentials into a single, manageable platform. Every unit meets European regulatory standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card shadow-card border border-border hover:shadow-glow hover:border-accent/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-hero flex items-center justify-center">
                <point.icon className="w-7 h-7 text-cyan-glow" />
              </div>
              <span className="font-heading font-semibold text-foreground text-center text-sm">
                {point.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
