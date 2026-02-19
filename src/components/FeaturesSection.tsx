import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/products";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two certified smart locks designed for different door types and security requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {allProducts.map((product, i) => (
            <motion.div
              key={product.id}
              className="group p-10 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-accent/30 transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {product.subtitle}
              </span>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {product.positioning}
              </p>
              <ul className="space-y-2 mb-6">
                {product.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to={`/products/${product.id}`}
                className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
