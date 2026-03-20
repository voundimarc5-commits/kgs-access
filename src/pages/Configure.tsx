import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { allOffers } from "@/data/offers";
import { productVariants } from "@/data/pricing";

const Configure = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan") || "entry";

  const offer = allOffers.find((o) => o.id === planId) || allOffers[0];
  const [selectedProduct, setSelectedProduct] = useState(productVariants[0].productId);

  const currentVariant = productVariants.find((v) => v.productId === selectedProduct)!;
  const totalPrice = currentVariant.totalPrice[planId as keyof typeof currentVariant.totalPrice];

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to={`/offers/${offer.id}`}
            className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "fr" ? `Retour à ${offer.name}` : `Back to ${offer.name}`}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4 block">
              {lang === "fr" ? "Configuration" : "Configuration"}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4 leading-[1.05]">
              {lang === "fr" ? "Configurez votre" : "Configure your"}{" "}
              <span className="text-accent">{offer.name}</span>
            </h1>
            <p className="text-base text-chrome-light max-w-xl leading-relaxed">
              {lang === "fr"
                ? "Sélectionnez le produit adapté à votre porte. Le prix final dépend de la combinaison offre + produit."
                : "Select the product that fits your door. The final price depends on the offer + product combination."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selected Offer Summary */}
      <section className="py-12 bg-hero border-t border-chrome/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-3">
              {lang === "fr" ? "Offre sélectionnée" : "Selected Plan"}
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-heading font-bold text-hero-foreground mb-1">
                  {offer.name}
                </h2>
                <p className="text-sm text-chrome-light">{offer.tagline[lang]}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-heading font-bold text-hero-foreground">
                  {offer.price[lang]}
                </p>
                {offer.subscription && (
                  <div className="flex items-center gap-2 mt-2 justify-end">
                    <Gift className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs text-accent">{offer.subscription.freeMonths[lang]}</span>
                    <span className="text-xs text-chrome-light/60">
                      · {offer.subscription.price[lang]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="py-16 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-3">
              {lang === "fr" ? "Choisissez votre serrure" : "Choose your lock"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Produits disponibles" : "Available Products"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {productVariants.map((variant, i) => {
              const isSelected = selectedProduct === variant.productId;
              const price = variant.totalPrice[planId as keyof typeof variant.totalPrice];

              return (
                <motion.button
                  key={variant.productId}
                  onClick={() => setSelectedProduct(variant.productId)}
                  className={`text-left p-8 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-accent bg-accent/5"
                      : "border-chrome/15 bg-hero-bg/60 hover:border-chrome/30"
                  }`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-hero-foreground">
                      {variant.name}
                    </h3>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "border-accent bg-accent" : "border-chrome/30"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm text-chrome-light leading-relaxed mb-6">
                    {variant.description[lang]}
                  </p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-chrome-light/60">
                      {variant.priceModifier[lang]}
                    </span>
                    <span className="text-xl font-heading font-bold text-hero-foreground">
                      {price[lang]}
                    </span>
                  </div>
                  <Link
                    to={`/products/${variant.productId}`}
                    className="inline-block mt-4 text-xs text-accent hover:text-accent/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lang === "fr" ? "Voir les spécifications →" : "View specifications →"}
                  </Link>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary & CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-6">
              {lang === "fr" ? "Récapitulatif" : "Summary"}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-chrome/10">
                <span className="text-sm text-chrome-light">
                  {lang === "fr" ? "Offre" : "Plan"}
                </span>
                <span className="text-sm font-medium text-hero-foreground">{offer.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-chrome/10">
                <span className="text-sm text-chrome-light">
                  {lang === "fr" ? "Produit" : "Product"}
                </span>
                <span className="text-sm font-medium text-hero-foreground">
                  {currentVariant.name}
                </span>
              </div>
              {offer.subscription && (
                <div className="flex justify-between items-center py-3 border-b border-chrome/10">
                  <span className="text-sm text-chrome-light">
                    {lang === "fr" ? "Abonnement" : "Subscription"}
                  </span>
                  <span className="text-sm font-medium text-hero-foreground">
                    {offer.subscription.price[lang]}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-4">
                <span className="text-base font-bold text-hero-foreground">
                  {lang === "fr" ? "Prix total" : "Total price"}
                </span>
                <span className="text-2xl font-heading font-bold text-accent">
                  {totalPrice[lang]}
                </span>
              </div>
            </div>

            {offer.subscription && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-8">
                <Gift className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  {offer.subscription.freeMonths[lang]}
                </span>
              </div>
            )}

            <div className="text-center pt-6 border-t border-chrome/10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-silver-accent border border-silver-accent/30 px-10 py-4 hover:border-silver-accent/60 hover:bg-white/[0.03] active:scale-[0.97] transition-all duration-500"
              >
                {lang === "fr" ? "Continuer" : "Proceed"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <p className="text-[10px] text-chrome-light/40 mt-4 max-w-md mx-auto">
                {lang === "fr"
                  ? "En cliquant sur « Continuer », vous serez redirigé vers notre formulaire de contact pour finaliser votre demande."
                  : "By clicking 'Proceed', you'll be redirected to our contact form to finalize your request."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Configure;
