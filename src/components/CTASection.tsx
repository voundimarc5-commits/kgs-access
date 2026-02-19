import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Get in touch to discuss your access control requirements or schedule
            a demonstration of KGS Access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@google.cm.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold text-lg shadow-glow hover:brightness-110 transition-all duration-300"
            >
              Contact Us for a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@google.cm.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium text-lg hover:bg-muted transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Discuss Your Needs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
