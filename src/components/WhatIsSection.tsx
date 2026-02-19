import { motion } from "framer-motion";
import { Fingerprint, Lock, Smartphone, ShieldCheck } from "lucide-react";

const WhatIsSection = () => {
  const points = [
    { icon: Fingerprint, label: "Fingerprint Access" },
    { icon: Lock, label: "Smart Locks" },
    { icon: Smartphone, label: "App Control" },
    { icon: ShieldCheck, label: "Certified Hardware" },
  ];

  return (
    <section id="what-is" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What is <span className="text-gradient-accent">KGS Access</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KGS Access designs and delivers smart access control solutions for residential properties, short-term rentals, and small commercial spaces. Our certified smart locks combine fingerprint, passcode, RFID, and mobile app access — making keyless entry simple, secure, and reliable.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
                <point.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground text-center">
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
