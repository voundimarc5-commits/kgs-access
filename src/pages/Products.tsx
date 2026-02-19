import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/products";
import ComparisonTable from "@/components/ComparisonTable";
import CertificationBadges from "@/components/CertificationBadges";
import productImage from "@/assets/product-sentinel.png";

const Products = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-36 pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Product Line
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Sentinel Series
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Two certified access systems. One uncompromising standard of security.
          </motion.p>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
            {allProducts.map((product, i) => (
              <motion.div
                key={product.id}
                className="rounded-2xl border border-border bg-card p-10 shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex justify-center mb-8">
                  <img
                    src={productImage}
                    alt={product.name}
                    className="h-36 w-auto opacity-90"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  {product.subtitle}
                </span>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm">{product.positioning}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 mt-2 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all text-sm"
                >
                  Full specifications
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Sentinel One vs Sentinel Pro
              </h2>
            </motion.div>
            <ComparisonTable />
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Compliance
            </p>
            <CertificationBadges className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
