import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spacefinderBg from "@/assets/spacefinder-bg.jpg";

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
            Find the lock that fits your space.
          </h2>
          <p className="text-sm text-chrome-light/70">
            This experience provides guidance, not a technical diagnosis.
          </p>
        </motion.div>

        {/* Dark card for form */}
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
                  Step {currentStep + 1} of {steps.length}
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
                  Our recommendation
                </p>
                <h3 className="text-3xl font-heading font-medium text-ivory mb-4">
                  {recommendation.name}
                </h3>
                <p className="text-chrome-light/60 font-light mb-10">
                  Based on your preferences, this system best suits your environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={recommendation.link}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-accent text-ivory text-sm font-medium tracking-wide hover:brightness-110 transition-all"
                  >
                    Discover {recommendation.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={reset}
                    className="px-8 py-3.5 rounded-full border border-silver-accent/20 text-sm font-light text-chrome-light/70 hover:border-silver-accent/40 transition-all duration-300"
                  >
                    Start over
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
