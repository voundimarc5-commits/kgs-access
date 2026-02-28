import { motion } from "framer-motion";
import { Wrench, Settings, Eye } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    title: "Install",
    desc: "Self-deploy using guided documentation and remote configuration support.",
  },
  {
    icon: Settings,
    title: "Configure",
    desc: "Create permanent or temporary access for guests, staff or service providers.",
  },
  {
    icon: Eye,
    title: "Monitor",
    desc: "Track access logs and manage permissions remotely from anywhere in the world.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
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
            A Remote Access System.{" "}
            <span className="italic text-silver-accent">Not Just a Lock.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="text-center p-8 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-silver-accent" />
              </div>
              <h3 className="text-xl font-heading font-medium text-ivory mb-3">
                {step.title}
              </h3>
              <p className="text-chrome-light font-light leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
