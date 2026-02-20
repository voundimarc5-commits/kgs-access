import { motion, type Transition } from "framer-motion";
import { Fingerprint, KeyRound, CreditCard, Smartphone } from "lucide-react";

const unlockData = [
  {
    icon: Fingerprint,
    animation: {
      scale: [1, 1.15, 1],
      opacity: [0.7, 1, 0.7],
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    rings: true,
  },
  {
    icon: KeyRound,
    animation: {
      rotate: [0, -15, 15, 0],
    },
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
    rings: false,
  },
  {
    icon: CreditCard,
    animation: {
      x: [0, 4, -4, 0],
      opacity: [0.8, 1, 0.8, 1],
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    rings: false,
  },
  {
    icon: Smartphone,
    animation: {
      y: [0, -3, 0],
      scale: [1, 1.05, 1],
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    rings: false,
  },
];

interface UnlockMethodCardsProps {
  methods: string[];
}

const UnlockMethodCards = ({ methods }: UnlockMethodCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {methods.map((method, i) => {
        const data = unlockData[i];
        const Icon = data.icon;
        return (
          <motion.div
            key={method}
            className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="relative w-12 h-12 rounded-lg bg-hero flex items-center justify-center">
              {data.rings && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-cyan-glow/30"
                    animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-cyan-glow/20"
                    animate={{ scale: [1, 2, 2], opacity: [0.3, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                  />
                </>
              )}
              <motion.div
                animate={data.animation}
                transition={data.transition}
              >
                <Icon className="w-6 h-6 text-cyan-glow" />
              </motion.div>
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              {method}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default UnlockMethodCards;
