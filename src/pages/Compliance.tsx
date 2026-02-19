import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Package, FileCheck } from "lucide-react";

const sections = [
  {
    icon: ShieldCheck,
    title: "CE Certification (Radio Equipment Directive)",
    content:
      "All KGS Access products carry the CE mark under the Radio Equipment Directive (RED). This confirms that the wireless components — including Bluetooth and Wi-Fi — comply with the essential requirements for electromagnetic compatibility, radio spectrum use, and user safety across the EU and UK markets.",
  },
  {
    icon: Leaf,
    title: "RoHS Compliance",
    content:
      "Our products are fully RoHS compliant, meaning they meet the European Union's Restriction of Hazardous Substances directive. This ensures that materials used in the manufacturing process are free from lead, mercury, cadmium, and other restricted substances — protecting both users and the environment.",
  },
  {
    icon: Package,
    title: "Import & Quality Assurance",
    content:
      "KGS Access products are imported under DDP (Delivered Duty Paid) shipping terms, meaning all customs duties, taxes, and regulatory requirements are handled before products reach UK and European customers. Each unit undergoes quality checks before distribution.",
  },
  {
    icon: FileCheck,
    title: "Professional Resale & Business Use",
    content:
      "All KGS Access products are suitable for professional resale and commercial deployment. Our hardware is sourced from certified manufacturers, and our compliance documentation is available upon request for business customers, property managers, and procurement teams.",
  },
];

const Compliance = () => {
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
            Compliance & Trust
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Every product we sell meets strict European and UK regulatory standards.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              className="flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
                <sec.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                  {sec.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Compliance;
