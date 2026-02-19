import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, BedDouble, Building2, Store, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residential Properties",
    description:
      "Replace traditional keys with certified smart access. The Sentinel One fits standard door frames and provides four independent authentication methods — with no wiring or structural modification required.",
    cta: "Explore the Sentinel One",
    link: "/products/f7",
  },
  {
    icon: BedDouble,
    title: "Short-Term Rentals & Hospitality",
    description:
      "Generate temporary credentials for each guest. Manage access remotely. Eliminate key handover logistics. Full entry audit trail for property compliance and insurance documentation.",
    cta: "View capabilities",
    link: "/products/f7",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Centralised access control across your portfolio. Issue, modify, and revoke credentials instantly. Reduce operational overhead and eliminate physical key management costs entirely.",
    cta: "View product line",
    link: "/products",
  },
  {
    icon: Store,
    title: "Commercial & Office Spaces",
    description:
      "Implement employee-level access permissions without legacy infrastructure. Smart locks provide a cost-effective, modern alternative to traditional commercial access control systems.",
    cta: "Discuss requirements",
    link: "/contact",
  },
];

const Solutions = () => {
  return (
    <>
      <section className="bg-hero pt-36 pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Applications
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Solutions by Sector
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access control adapted to the requirements of each environment.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-10">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.title}
                className="flex flex-col md:flex-row gap-8 items-start p-10 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-hero flex items-center justify-center shrink-0">
                  <seg.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                    {seg.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {seg.description}
                  </p>
                  <Link
                    to={seg.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
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
