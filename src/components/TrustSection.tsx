import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const certifications = [
  {
    label: "CE",
    svg: (
      <svg viewBox="0 0 80 50" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="40" fontSize="42" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="-2">CE</text>
      </svg>
    ),
  },
  {
    label: "RoHS",
    svg: (
      <svg viewBox="0 0 100 50" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="40" fontSize="36" fontFamily="Arial, sans-serif" fontWeight="bold">RoHS</text>
      </svg>
    ),
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="w-12 h-[1px] bg-silver-accent/50 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl font-heading font-medium text-ivory mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Part of a global systems vision.
          </motion.h2>

          <motion.p
            className="text-lg text-chrome-light font-light leading-relaxed max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            KGS Access is a product line within the Kora Global Systems ecosystem
            — a technology group focused on security, infrastructure and intelligent systems.
          </motion.p>

          {/* Certification row */}
          <motion.div
            className="flex items-center justify-center gap-10 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TooltipProvider delayDuration={200}>
              {certifications.map((cert) => (
                <Tooltip key={cert.label}>
                  <TooltipTrigger asChild>
                    <div className="text-chrome/50 hover:text-chrome-light transition-colors duration-300 cursor-default">
                      {cert.svg}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    className="max-w-[260px] text-center bg-deep border-chrome/20 text-chrome-light text-xs leading-relaxed px-4 py-3"
                  >
                    Product compliant with applicable {cert.label} standards. Certification issued by the manufacturer.
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </motion.div>

          {/* Region badges */}
          <motion.div
            className="grid grid-cols-2 gap-8 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { label: "Europe & Africa", sub: "Operating regions" },
              { label: "US-Based", sub: "Kora Global Systems" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm font-medium text-ivory/80 mb-1">{item.label}</p>
                <p className="text-xs text-chrome/60">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
