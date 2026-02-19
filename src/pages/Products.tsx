import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/products";
import ComparisonTable from "@/components/ComparisonTable";
import CertificationBadges from "@/components/CertificationBadges";

const Products = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gradient-accent">Products</span>
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Certified smart locks designed for residential, rental, and commercial properties. Built to last, easy to install.
          </motion.p>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            {allProducts.map((product, i) => (
              <motion.div
                key={product.id}
                className="rounded-2xl border border-border bg-card p-10 shadow-card flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  {product.subtitle}
                </span>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h2>
                <p className="text-muted-foreground mb-4">{product.positioning}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {product.highlights.map((h) => (
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
                  View full specifications
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
              F7 vs F18 — At a Glance
            </h2>
            <ComparisonTable />
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="font-heading font-semibold text-foreground mb-4">
              All products are certified
            </h3>
            <CertificationBadges className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
