import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DemosSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Demonstrations
          </h2>
          <div className="rounded-2xl border-2 border-dashed border-border bg-muted/50 p-16 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-glow-pulse">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Product demonstrations and technical walkthroughs will be available soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemosSection;
