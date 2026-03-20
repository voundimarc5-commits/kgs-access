import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("Terms & Conditions", "Conditions générales"),
      paragraphs: [
        t(
          "By accessing or using this website and KGS Access products, you agree to these Terms & Conditions.",
          "En accédant ou en utilisant ce site web et les produits KGS Access, vous acceptez les présentes conditions générales."
        ),
        t(
          "KGS Access provides intelligent access hardware solutions. We do not guarantee absolute security, intrusion prevention, or risk elimination.",
          "KGS Access fournit des solutions matérielles d'accès intelligent. Nous ne garantissons pas une sécurité absolue, la prévention des intrusions ou l'élimination des risques."
        ),
        t(
          "All products must be installed and used in accordance with manufacturer guidelines, local laws, and applicable building or safety regulations.",
          "Tous les produits doivent être installés et utilisés conformément aux directives du fabricant, aux lois locales et aux réglementations de construction ou de sécurité applicables."
        ),
        t(
          "Kora Global Systems shall not be held liable for damages resulting from improper installation, misuse, unauthorized modification, or failure to comply with usage instructions.",
          "Kora Global Systems ne pourra être tenu responsable des dommages résultant d'une installation incorrecte, d'une mauvaise utilisation, d'une modification non autorisée ou du non-respect des instructions d'utilisation."
        ),
        t(
          "Product specifications, availability, and features may evolve without prior notice.",
          "Les spécifications des produits, leur disponibilité et leurs fonctionnalités peuvent évoluer sans préavis."
        ),
      ],
    },
    {
      title: t("Limitation of Liability", "Limitation de responsabilité"),
      paragraphs: [
        t(
          "To the maximum extent permitted by law, Kora Global Systems shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to loss of property, loss of access, loss of data, or business interruption.",
          "Dans la mesure maximale permise par la loi, Kora Global Systems ne sera pas responsable de tout dommage indirect, accessoire, consécutif ou spécial, y compris mais sans s'y limiter, la perte de propriété, la perte d'accès, la perte de données ou l'interruption d'activité."
        ),
        t(
          "Liability, where applicable, is strictly limited to the value of the product purchased.",
          "La responsabilité, le cas échéant, est strictement limitée à la valeur du produit acheté."
        ),
      ],
    },
    {
      title: t("Warranty & Installation", "Garantie & installation"),
      paragraphs: [
        t(
          "Product warranties are limited to manufacturing defects and subject to the terms provided at purchase.",
          "Les garanties produits sont limitées aux défauts de fabrication et soumises aux conditions fournies lors de l'achat."
        ),
        t(
          "Installation must be performed by qualified personnel.",
          "L'installation doit être réalisée par du personnel qualifié."
        ),
        t(
          "Kora Global Systems shall not be responsible for damages caused by incorrect installation, incompatible doors, environmental exposure, or unauthorized modifications.",
          "Kora Global Systems ne sera pas responsable des dommages causés par une installation incorrecte, des portes incompatibles, l'exposition environnementale ou des modifications non autorisées."
        ),
      ],
    },
  ];

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
            {t("Legal", "Juridique")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("Terms & Conditions", "Conditions générales")}
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
