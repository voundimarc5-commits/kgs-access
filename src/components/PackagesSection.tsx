import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Essential",
    subtitle: "Self Deploy",
    target: "For autonomous owners.",
    features: [
      "1 Sentinel system (One or Pro)",
      "Guided installation documentation",
      "Initial configuration",
      "User creation and access structuring",
      "7 days remote support",
    ],
    price: "From €229",
  },
  {
    name: "Control",
    subtitle: "Dual Access Pack",
    target: "For active rental and shared properties.",
    features: [
      "2 Sentinel systems",
      "Advanced configuration",
      "Access rotation procedures",
      "Detailed access logs",
      "30 days priority support",
    ],
    price: "From €389",
    highlighted: true,
  },
  {
    name: "Pro Control",
    subtitle: "Managed Access System",
    target: "For structured environments and serious projects.",
    features: [
      "Light project audit",
      "Material selection (One or Pro)",
      "Custom configuration",
      "Multi-user structuring",
      "Coordinated deployment support",
      "Advanced onboarding",
    ],
    price: "Starting from €700",
    note: "Designed for multi-entry, structured or institutional environments.",
  },
];

const PackagesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Choose your <span className="italic text-silver-accent">setup.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                pkg.highlighted
                  ? "border-silver-accent/30 bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-silver-accent mb-1">
                {pkg.subtitle}
              </p>
              <h3 className="text-2xl font-heading font-medium text-ivory mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-chrome-light/70 font-light mb-6">
                {pkg.target}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-chrome-light font-light">
                    <span className="text-silver-accent mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-xl font-heading font-medium text-ivory mb-4">
                {pkg.price}
              </p>

              {pkg.note && (
                <p className="text-xs text-chrome-light/50 font-light italic mb-4">
                  {pkg.note}
                </p>
              )}

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-silver-accent border border-silver-accent/20 rounded-full py-3 hover:border-silver-accent/40 transition-all duration-300"
              >
                Get started
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
