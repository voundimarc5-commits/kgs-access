import { motion } from "framer-motion";
import { Wrench, Settings, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Wrench,
      title: t("Install", "Installer"),
      desc: t(
        "Self-deploy using guided documentation and remote configuration support.",
        "Déployez vous-même grâce à la documentation guidée et au support de configuration à distance."
      ),
    },
    {
      icon: Settings,
      title: t("Configure", "Configurer"),
      desc: t(
        "Create permanent or temporary access for guests, staff or service providers.",
        "Créez des accès permanents ou temporaires pour vos invités, employés ou prestataires."
      ),
    },
    {
      icon: Eye,
      title: t("Monitor", "Surveiller"),
      desc: t(
        "Track access logs and manage permissions remotely from anywhere in the world.",
        "Suivez les journaux d'accès et gérez les permissions à distance, depuis n'importe où dans le monde."
      ),
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("A Remote Access System.", "Un système d'accès à distance.")}{" "}
            <span className="italic text-silver-accent">{t("Not Just a Lock.", "Pas juste une serrure.")}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="text-center p-8 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-silver-accent" />
              </div>
              <h3 className="text-xl font-heading font-medium text-ivory mb-3">
                {step.title}
              </h3>
              <p className="text-chrome-light font-light leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
