import { motion } from "framer-motion";
import { Home, BedDouble, Building2, Store } from "lucide-react";

const useCases = [
  { icon: Home, title: "Apartments & Houses", desc: "Keyless entry for homeowners looking for modern, secure access." },
  { icon: BedDouble, title: "Airbnb & Short-Term Rentals", desc: "Remote guest access with temporary passcodes — no key handover needed." },
  { icon: Building2, title: "Property Managers", desc: "Manage tenant access across multiple properties from a single app." },
  { icon: Store, title: "Small Businesses", desc: "Cost-effective smart access for offices, studios, and retail spaces." },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KGS Access products serve residential, rental, and commercial markets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <uc.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
