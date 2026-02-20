import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Fingerprint, KeyRound, CreditCard, Smartphone } from "lucide-react";
import { f18 } from "@/data/products";
import ProductSpecTable from "@/components/ProductSpecTable";
import CertificationBadges from "@/components/CertificationBadges";
import productImage from "@/assets/product-f18-hero.jpg";

const unlockIcons = [Fingerprint, KeyRound, CreditCard, Smartphone];

const ProductF18 = () => {
  return (
    <>
      <section className="bg-hero pt-36 pb-24">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4 block">
                {f18.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground mb-6">
                {f18.name}
              </h1>
              <p className="text-lg text-chrome-light max-w-lg leading-relaxed">{f18.description}</p>
            </motion.div>
            <motion.div
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src={productImage}
                alt={f18.name}
                className="w-full max-w-lg rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Authentication
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-10">
            Unlock Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {f18.unlockMethods.map((method, i) => {
              const Icon = unlockIcons[i];
              return (
                <motion.div
                  key={method}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:border-accent/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-hero flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {method}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Hardware
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-10">
            Technical Specifications
          </h2>
          <ProductSpecTable specs={f18.specs} />

          <h2 className="text-2xl font-heading font-bold text-foreground mt-20 mb-6">
            Intended Applications
          </h2>
          <div className="flex flex-wrap gap-3 mb-20">
            {f18.targetUseCases.map((uc) => (
              <span
                key={uc}
                className="px-5 py-2.5 rounded-full border border-border bg-muted text-sm text-foreground"
              >
                {uc}
              </span>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Compliance
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            Certifications
          </h2>
          <CertificationBadges />

          <div className="mt-24 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-silver-accent border border-silver-accent/30 px-10 py-4 hover:border-silver-accent/60 hover:bg-white/[0.03] transition-all duration-500"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductF18;
