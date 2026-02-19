import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, BedDouble, Building2, Store, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Replace traditional keys with modern, secure smart locks. The F7 fits most standard residential doors and gives you fingerprint, passcode, RFID, and app-based access — with no wiring required.",
    cta: "Explore the F7",
    link: "/products/f7",
  },
  {
    icon: BedDouble,
    title: "Airbnb & Short-Term Rentals",
    description:
      "Generate temporary passcodes for each guest, manage access remotely via the app, and eliminate key handover logistics. Ideal for hosts managing multiple properties.",
    cta: "See how it works",
    link: "/products/f7",
  },
  {
    icon: Building2,
    title: "Property Managers & Landlords",
    description:
      "Manage tenant access across your portfolio from a single app. Issue and revoke credentials instantly, track entry logs, and reduce costs associated with physical key management.",
    cta: "View products",
    link: "/products",
  },
  {
    icon: Store,
    title: "Small Businesses",
    description:
      "Control who accesses your premises with employee-level permissions. Smart locks offer a cost-effective, modern alternative to traditional commercial access systems.",
    cta: "Get in touch",
    link: "/contact",
  },
];

const Solutions = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Solutions
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            KGS Access products serve a wide range of residential, rental, and commercial needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.title}
                className="flex flex-col md:flex-row gap-8 items-start p-10 rounded-2xl border border-border bg-card shadow-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0">
                  <seg.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                    {seg.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {seg.description}
                  </p>
                  <Link
                    to={seg.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    {seg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
