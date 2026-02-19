import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Get in touch to discuss your requirements, check door compatibility, or request a product demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold text-lg shadow-glow hover:brightness-110 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium text-lg hover:bg-muted transition-all duration-300"
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
