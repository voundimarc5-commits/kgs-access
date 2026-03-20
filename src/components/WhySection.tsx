import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Globe } from "lucide-react";
import CertificationBadges from "./CertificationBadges";
import { useLanguage } from "@/contexts/LanguageContext";

const WhySection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: ShieldCheck,
      title: t("Certified Hardware Only", "Matériel certifié uniquement"),
      desc: t("Every unit carries CE and RoHS certification. No exceptions. No expired models.", "Chaque unité dispose des certifications CE et RoHS. Sans exception. Aucun modèle obsolète."),
    },
    {
      icon: Globe,
      title: t("US-Based, International Operations", "Basé aux USA, opérations internationales"),
      desc: t("Kora Global Systems is registered in the United States. We operate across Europe and Africa with professional logistics.", "Kora Global Systems est enregistré aux États-Unis. Nous opérons en Europe et en Afrique avec une logistique professionnelle."),
    },
    {
      icon: TrendingUp,
      title: t("Long-Term Infrastructure", "Infrastructure à long terme"),
      desc: t("We are building a security platform, not selling a product. Every decision is made for scalability and trust.", "Nous construisons une plateforme de sécurité, nous ne vendons pas un produit. Chaque décision est prise pour l'évolutivité et la confiance."),
    },
  ];

  return (
    <section className="py-28 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("Trust", "Confiance")}
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t("Why KGS Access", "Pourquoi KGS Access")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="text-center p-10 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-hero flex items-center justify-center">
                <r.icon className="w-7 h-7 text-cyan-glow" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CertificationBadges className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
