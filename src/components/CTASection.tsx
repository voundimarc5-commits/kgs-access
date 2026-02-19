import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/30 blur-[120px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-6">
            Next Step
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-6">
            Begin the Conversation
          </h2>
          <p className="text-lg text-chrome-light mb-12 max-w-xl mx-auto leading-relaxed">
            Discuss your requirements, verify door compatibility, or request product documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold shadow-glow hover:brightness-110 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-chrome/20 text-chrome-light font-medium hover:bg-chrome/5 hover:border-chrome/40 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
