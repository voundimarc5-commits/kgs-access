import { motion } from "framer-motion";
import { Shield, Settings, Key, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Identity-Based Access",
    description:
      "Grant or restrict access based on verified identities. Ensure only authorised personnel enter sensitive areas.",
  },
  {
    icon: Settings,
    title: "Centralised Access Management",
    description:
      "Manage all access points from a single dashboard. Configure permissions, schedules, and zones across your organisation.",
  },
  {
    icon: Key,
    title: "Smart Authentication",
    description:
      "Support for multiple authentication mechanisms — from credentials to biometric-ready integrations.",
  },
  {
    icon: Globe,
    title: "Multi-Site Scalability",
    description:
      "Deploy across multiple locations with consistent policies. Scale from a single building to a global portfolio.",
  },
  {
    icon: Cpu,
    title: "IoT-Ready Architecture",
    description:
      "Designed for connected environments. Integrate with sensors, controllers, and building management systems.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade capabilities designed for modern access control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-accent/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
