import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Package, FileCheck } from "lucide-react";
import CertificationBadges from "@/components/CertificationBadges";

const sections = [
  {
    icon: ShieldCheck,
    title: "CE Certification — Radio Equipment Directive",
    content:
      "All KGS Access products carry the CE mark under the Radio Equipment Directive (RED). This confirms compliance of wireless components — Bluetooth and Wi-Fi — with essential requirements for electromagnetic compatibility, radio spectrum use, and user safety across EU markets.",
  },
  {
    icon: Leaf,
    title: "RoHS Compliance",
    content:
      "Our products meet the European Union's Restriction of Hazardous Substances directive. Manufacturing materials are verified free from lead, mercury, cadmium, and other restricted substances — protecting users and the environment.",
  },
  {
    icon: Package,
    title: "Import & Quality Assurance",
    content:
      "Products are imported under DDP (Delivered Duty Paid) terms. All customs duties, taxes, and regulatory requirements are resolved before delivery to European and African markets. Each unit undergoes quality verification before distribution.",
  },
  {
    icon: FileCheck,
    title: "Professional Deployment",
    content:
      "All KGS Access products are suitable for professional resale and commercial deployment. Hardware is sourced from certified manufacturers. Compliance documentation is available upon request for procurement teams, property managers, and institutional buyers.",
  },
];

const Compliance = () => {
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
            Standards
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Compliance & Trust
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every product meets strict European regulatory standards. No exceptions.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12 mb-20">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-hero flex items-center justify-center shrink-0">
                  <sec.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                    {sec.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">{sec.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Verified Certifications
            </p>
            <CertificationBadges />
          </motion.div>

          {/* Compliance Statement */}
          <motion.div
            className="mt-20 pt-16 border-t border-border"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">
              Compliance Statement
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                KGS Access products are compliant with applicable CE and RoHS standards, as certified by the manufacturer.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Kora Global Systems does not act as a certifying authority and does not issue compliance certificates.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Certification documentation may be provided upon request, subject to availability.
              </p>
            </div>
          </motion.div>

          {/* Product Use Disclaimer */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">
              Product Use Disclaimer
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                KGS Access products are designed to support controlled access management.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                They do not replace physical security measures, surveillance systems, human supervision, or emergency protocols.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Users remain fully responsible for assessing the suitability of the product for their specific environment and security needs.
              </p>
            </div>
          </motion.div>

          {/* Connected Device Disclaimer */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">
              Connected Device Disclaimer
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                Certain KGS Access products may include electronic or connected features.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Kora Global Systems does not collect, store, or process sensitive personal data through these devices unless explicitly stated.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Network configuration, cybersecurity, and data protection remain the responsibility of the user or system integrator.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Compliance;
