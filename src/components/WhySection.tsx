import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Globe } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Hardware",
    desc: "Every product carries CE and RoHS certification — meeting EU and UK regulatory standards.",
  },
  {
    icon: Globe,
    title: "US-Based, International Reach",
    desc: "Kora Global Systems is a US-registered company operating across the UK and Europe with professional logistics.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "Starting with proven smart lock products, expanding into a broader access and security ecosystem over time.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4">
            Why <span className="text-gradient-accent">KGS Access</span>?
          </h2>
          <p className="text-lg text-chrome-light max-w-2xl mx-auto">
            A serious security company — not a side project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="text-center p-8 rounded-2xl border border-chrome/20 bg-hero-bg/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-accent flex items-center justify-center">
                <r.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-hero-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-chrome-light text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
