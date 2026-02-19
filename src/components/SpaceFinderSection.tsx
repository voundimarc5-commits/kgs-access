import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    question: "What type of space?",
    options: ["Private residence", "Rental property", "Hotel / Hospitality", "Office / Commercial"],
  },
  {
    question: "What matters most?",
    options: ["Elegance & discretion", "Maximum security", "Remote management", "Easy installation"],
  },
  {
    question: "Door type?",
    options: ["Standard door", "Reinforced / thick door", "Glass door", "Not sure yet"],
  },
];

const SpaceFinderSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

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

  const recommendation = answers.includes("Reinforced / thick door") || answers.includes("Maximum security")
    ? { name: "Sentinel Pro", link: "/products/f18" }
    : { name: "Sentinel 1", link: "/products/f7" };

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-[1px] bg-warm-gold/50 mx-auto mb-10" />
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4">
            Find the lock that fits your space.
          </h2>
          <p className="text-sm text-muted-foreground mb-16">
            This experience provides guidance, not a technical diagnosis.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h3 className="text-xl font-heading font-medium text-foreground mb-8">
                {steps[currentStep].question}
              </h3>
              <div className="grid gap-3">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="text-left px-6 py-4 rounded-xl border border-border bg-card hover:border-warm-gold/40 hover:bg-warm-gold/5 transition-all duration-300 text-foreground font-light"
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
              <p className="text-xs text-warm-gold tracking-[0.2em] uppercase mb-4">
                Our recommendation
              </p>
              <h3 className="text-3xl font-heading font-medium text-foreground mb-4">
                {recommendation.name}
              </h3>
              <p className="text-muted-foreground font-light mb-10">
                Based on your preferences, this system best suits your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={recommendation.link}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  Discover {recommendation.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={reset}
                  className="px-8 py-3.5 rounded-full border border-border text-sm font-light text-muted-foreground hover:border-warm-gold/30 transition-all duration-300"
                >
                  Start over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpaceFinderSection;
