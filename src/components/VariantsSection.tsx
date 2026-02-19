import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

const VariantsSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center">
            <Layers className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Product Variants
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            KGS Access is designed as a modular platform. Two product variants are planned,
            each tailored to different scales and deployment scenarios.
            Configurations can be adapted to match specific client requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Discuss configurations
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VariantsSection;
