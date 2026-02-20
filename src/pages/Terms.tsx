import { motion } from "framer-motion";

const sections = [
  {
    title: "Terms & Conditions",
    paragraphs: [
      "By accessing or using this website and KGS Access products, you agree to these Terms & Conditions.",
      "KGS Access provides intelligent access hardware solutions. We do not guarantee absolute security, intrusion prevention, or risk elimination.",
      "All products must be installed and used in accordance with manufacturer guidelines, local laws, and applicable building or safety regulations.",
      "Kora Global Systems shall not be held liable for damages resulting from improper installation, misuse, unauthorized modification, or failure to comply with usage instructions.",
      "Product specifications, availability, and features may evolve without prior notice.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Kora Global Systems shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to loss of property, loss of access, loss of data, or business interruption.",
      "Liability, where applicable, is strictly limited to the value of the product purchased.",
    ],
  },
  {
    title: "Warranty & Installation",
    paragraphs: [
      "Product warranties are limited to manufacturing defects and subject to the terms provided at purchase.",
      "Installation must be performed by qualified personnel.",
      "Kora Global Systems shall not be responsible for damages caused by incorrect installation, incompatible doors, environmental exposure, or unauthorized modifications.",
    ],
  },
];

const Terms = () => {
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
            Legal
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {sections.map((sec, i) => (
            <div key={sec.title} className={i > 0 ? "mt-16" : ""}>
              {i > 0 && (
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">
                  {sec.title}
                </h2>
              )}
              <div className="space-y-5">
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-sm">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Terms;
