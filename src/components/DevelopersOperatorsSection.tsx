import { motion } from "framer-motion";
import { Users, CalendarClock, ShieldCheck, Layers } from "lucide-react";

const features = [
  { icon: Users, label: "Controlled user permissions" },
  { icon: CalendarClock, label: "Defined access schedules" },
  { icon: ShieldCheck, label: "Clear responsibility allocation" },
  { icon: Layers, label: "Scalable deployment across multiple units" },
];

const DevelopersOperatorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
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
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Structured Access for{" "}
            <span className="italic text-silver-accent">Developers & Operators</span>
          </motion.h2>

          <motion.p
            className="text-lg text-chrome-light font-light leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            KGS Access is also designed for small-scale developers, boutique hospitality operators and structured commercial environments requiring controlled access from day one.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <f.icon className="w-5 h-5 text-silver-accent flex-shrink-0" />
                <span className="text-sm text-chrome-light font-light">{f.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            className="text-sm text-chrome-light/60 font-light italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Access control should be defined before operations begin — not after problems arise.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default DevelopersOperatorsSection;
