import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SpaceFinderSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const { t } = useLanguage();

  const steps = [
    {
      question: t("What type of space?", "Quel type d'espace ?"),
      options: [
        t("Private residence", "Résidence privée"),
        t("Rental property", "Bien locatif"),
        t("Hotel / Hospitality", "Hôtel / Hôtellerie"),
        t("Office / Commercial", "Bureau / Commercial"),
      ],
    },
    {
      question: t("What matters most?", "Qu'est-ce qui compte le plus ?"),
      options: [
        t("Elegance & discretion", "Élégance & discrétion"),
        t("Maximum security", "Sécurité maximale"),
        t("Remote management", "Gestion à distance"),
        t("Easy installation", "Installation facile"),
      ],
    },
    {
      question: t("Door type?", "Type de porte ?"),
      options: [
        t("Standard door", "Porte standard"),
        t("Reinforced / thick door", "Porte renforcée / épaisse"),
        t("Glass door", "Porte vitrée"),
        t("Not sure yet", "Pas encore sûr"),
      ],
    },
  ];

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const hasReinforced = answers.some(a =>
    a.includes("Reinforced") || a.includes("renforcée") ||
    a.includes("Maximum security") || a.includes("Sécurité maximale")
  );

  const recommendation = hasReinforced
    ? { name: "Sentinel Pro", link: "/products/f18" }
    : { name: "Sentinel One", link: "/products/f7" };

  return (
    <div className="relative py-32">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10" />
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-4">
            {t("Find the lock that fits your space.", "Trouvez la serrure adaptée à votre espace.")}
          </h2>
          <p className="text-sm text-chrome-light/70">
            {t("This experience provides guidance, not a technical diagnosis.", "Cette expérience fournit des conseils, pas un diagnostic technique.")}
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            className="bg-[hsl(225_15%_8%/0.92)] backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-[hsl(var(--border))]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs text-chrome-light/50 mb-2 tracking-wider uppercase">
                  {t("Step", "Étape")} {currentStep + 1} {t("of", "sur")} {steps.length}
                </p>
                <h3 className="text-xl font-heading font-medium text-ivory mb-8">
                  {steps[currentStep].question}
                </h3>
                <div className="grid gap-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="text-left px-6 py-4 rounded-xl border border-silver-accent/15 bg-silver-accent/5 hover:border-silver-accent/30 hover:bg-silver-accent/10 transition-all duration-300 text-chrome-light font-light"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs text-chrome-light/50 tracking-[0.2em] uppercase mb-4">
                  {t("Our recommendation", "Notre recommandation")}
                </p>
                <h3 className="text-3xl font-heading font-medium text-ivory mb-4">
                  {recommendation.name}
                </h3>
                <p className="text-chrome-light/60 font-light mb-10">
                  {t(
                    "Based on your preferences, this system best suits your environment.",
                    "Selon vos préférences, ce système correspond le mieux à votre environnement."
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={recommendation.link}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-accent text-ivory text-sm font-medium tracking-wide hover:brightness-110 transition-all"
                  >
                    {t("Discover", "Découvrir")} {recommendation.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={reset}
                    className="px-8 py-3.5 rounded-full border border-silver-accent/20 text-sm font-light text-chrome-light/70 hover:border-silver-accent/40 transition-all duration-300"
                  >
                    {t("Start over", "Recommencer")}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpaceFinderSection;
