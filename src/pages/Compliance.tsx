import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Package, FileCheck } from "lucide-react";
import CertificationBadges from "@/components/CertificationBadges";
import { useLanguage } from "@/contexts/LanguageContext";

const Compliance = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: ShieldCheck,
      title: t("CE Certification — Radio Equipment Directive", "Certification CE — Directive équipements radio"),
      content: t(
        "All KGS Access products carry the CE mark under the Radio Equipment Directive (RED). This confirms compliance of wireless components — Bluetooth and Wi-Fi — with essential requirements for electromagnetic compatibility, radio spectrum use, and user safety across EU markets.",
        "Tous les produits KGS Access portent le marquage CE au titre de la Directive équipements radio (RED). Cela confirme la conformité des composants sans fil — Bluetooth et Wi-Fi — aux exigences essentielles de compatibilité électromagnétique, d'utilisation du spectre radio et de sécurité des utilisateurs sur les marchés de l'UE."
      ),
    },
    {
      icon: Leaf,
      title: t("RoHS Compliance", "Conformité RoHS"),
      content: t(
        "Our products meet the European Union's Restriction of Hazardous Substances directive. Manufacturing materials are verified free from lead, mercury, cadmium, and other restricted substances — protecting users and the environment.",
        "Nos produits respectent la directive européenne de restriction des substances dangereuses. Les matériaux de fabrication sont vérifiés exempts de plomb, mercure, cadmium et autres substances réglementées — protégeant les utilisateurs et l'environnement."
      ),
    },
    {
      icon: Package,
      title: t("Import & Quality Assurance", "Import & assurance qualité"),
      content: t(
        "Products are imported under DDP (Delivered Duty Paid) terms. All customs duties, taxes, and regulatory requirements are resolved before delivery to European and African markets. Each unit undergoes quality verification before distribution.",
        "Les produits sont importés en DDP (rendu droits acquittés). Tous les droits de douane, taxes et exigences réglementaires sont résolus avant livraison sur les marchés européen et africain. Chaque unité fait l'objet d'une vérification qualité avant distribution."
      ),
    },
    {
      icon: FileCheck,
      title: t("Professional Deployment", "Déploiement professionnel"),
      content: t(
        "All KGS Access products are suitable for professional resale and commercial deployment. Hardware is sourced from certified manufacturers. Compliance documentation is available upon request for procurement teams, property managers, and institutional buyers.",
        "Tous les produits KGS Access conviennent à la revente professionnelle et au déploiement commercial. Le matériel provient de fabricants certifiés. La documentation de conformité est disponible sur demande pour les équipes d'achat, gestionnaires de biens et acheteurs institutionnels."
      ),
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
            {t("Standards", "Normes")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("Compliance & Trust", "Conformité & confiance")}
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              "Every product meets strict European regulatory standards. No exceptions.",
              "Chaque produit respecte les normes réglementaires européennes strictes. Sans exception."
            )}
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
              {t("Verified Certifications", "Certifications vérifiées")}
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
              {t("Compliance Statement", "Déclaration de conformité")}
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "KGS Access products are compliant with applicable CE and RoHS standards, as certified by the manufacturer.",
                  "Les produits KGS Access sont conformes aux normes CE et RoHS applicables, telles que certifiées par le fabricant."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Kora Global Systems does not act as a certifying authority and does not issue compliance certificates.",
                  "Kora Global Systems n'agit pas en tant qu'autorité de certification et ne délivre pas de certificats de conformité."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Certification documentation may be provided upon request, subject to availability.",
                  "La documentation de certification peut être fournie sur demande, sous réserve de disponibilité."
                )}
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
              {t("Product Use Disclaimer", "Avertissement d'utilisation")}
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "KGS Access products are designed to support controlled access management.",
                  "Les produits KGS Access sont conçus pour assister la gestion contrôlée des accès."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "They do not replace physical security measures, surveillance systems, human supervision, or emergency protocols.",
                  "Ils ne remplacent pas les mesures de sécurité physique, les systèmes de surveillance, la supervision humaine ou les protocoles d'urgence."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Users remain fully responsible for assessing the suitability of the product for their specific environment and security needs.",
                  "Les utilisateurs restent entièrement responsables de l'évaluation de l'adéquation du produit à leur environnement et leurs besoins de sécurité spécifiques."
                )}
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
              {t("Connected Device Disclaimer", "Avertissement appareils connectés")}
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Certain KGS Access products may include electronic or connected features.",
                  "Certains produits KGS Access peuvent inclure des fonctionnalités électroniques ou connectées."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Kora Global Systems does not collect, store, or process sensitive personal data through these devices unless explicitly stated.",
                  "Kora Global Systems ne collecte, ne stocke et ne traite pas de données personnelles sensibles via ces appareils, sauf mention explicite."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(
                  "Network configuration, cybersecurity, and data protection remain the responsibility of the user or system integrator.",
                  "La configuration réseau, la cybersécurité et la protection des données restent sous la responsabilité de l'utilisateur ou de l'intégrateur système."
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Compliance;
