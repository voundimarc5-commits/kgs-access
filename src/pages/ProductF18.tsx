import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Fingerprint, KeyRound, CreditCard, Smartphone } from "lucide-react";
import { f18 } from "@/data/products";
import ProductSpecTable from "@/components/ProductSpecTable";
import CertificationBadges from "@/components/CertificationBadges";

const unlockIcons = [Fingerprint, KeyRound, CreditCard, Smartphone];

const ProductF18 = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-chrome-light hover:text-cyan-glow transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-glow mb-3 block">
              {f18.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-4">
              {f18.name}
            </h1>
            <p className="text-lg text-chrome-light max-w-2xl">{f18.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            Unlock Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {f18.unlockMethods.map((method, i) => {
              const Icon = unlockIcons[i];
              return (
                <motion.div
                  key={method}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {method}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <ProductSpecTable specs={f18.specs} />

          <h2 className="text-2xl font-heading font-bold text-foreground mt-16 mb-6">
            Ideal For
          </h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {f18.targetUseCases.map((uc) => (
              <span
                key={uc}
                className="px-4 py-2 rounded-full border border-border bg-muted text-sm text-foreground"
              >
                {uc}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
            Certifications
          </h2>
          <CertificationBadges />

          <div className="mt-20 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold text-lg shadow-glow hover:brightness-110 transition-all"
            >
              Enquire About the F18
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductF18;
