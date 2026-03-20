import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Gift, Plus, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { allOffers } from "@/data/offers";
import {
  productVariants,
  OS_INCLUDED_UNITS,
  OS_BASE_PRICE,
  ADDITIONAL_UNIT_PRICE_SENTINEL_ONE,
  ADDITIONAL_UNIT_PRICE_SENTINEL_PRO,
} from "@/data/pricing";

interface ProductLine {
  productId: string;
  quantity: number;
}

const Configure = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan") || "entry";
  const isOS = planId === "os";

  const offer = allOffers.find((o) => o.id === planId) || allOffers[0];

  // For Entry / Remote: single product selection
  const [selectedProduct, setSelectedProduct] = useState(productVariants[0].productId);

  // For OS: multi-product with quantities (min total = 2)
  const [osLines, setOsLines] = useState<ProductLine[]>([
    { productId: "f7", quantity: 2 },
  ]);

  const osTotalUnits = osLines.reduce((sum, l) => sum + l.quantity, 0);

  const updateOsQuantity = (productId: string, delta: number) => {
    setOsLines((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          const filtered = prev.filter((l) => l.productId !== productId);
          // Ensure at least 2 total
          const totalAfter = filtered.reduce((s, l) => s + l.quantity, 0);
          if (totalAfter < OS_INCLUDED_UNITS) return prev;
          return filtered;
        }
        return prev.map((l) =>
          l.productId === productId ? { ...l, quantity: newQty } : l
        );
      } else if (delta > 0) {
        return [...prev, { productId, quantity: delta }];
      }
      return prev;
    });
  };

  const getOsLineQuantity = (productId: string) =>
    osLines.find((l) => l.productId === productId)?.quantity || 0;

  // Calculate OS total price
  // Base (479€) includes 2× Sentinel One (209€ each).
  // Upgrading an included unit to Sentinel Pro costs +90€ per unit.
  // Extra units beyond 2: +209€ (Sentinel One) or +299€ (Sentinel Pro) each.
  const UPGRADE_DELTA = ADDITIONAL_UNIT_PRICE_SENTINEL_PRO - ADDITIONAL_UNIT_PRICE_SENTINEL_ONE; // 90€

  const computeOsTotal = () => {
    let total = OS_BASE_PRICE;
    const f7Qty = getOsLineQuantity("f7");
    const f18Qty = getOsLineQuantity("f18");

    // Distribute the 2 included slots: Sentinel One first, then Pro
    let remainingIncluded = OS_INCLUDED_UNITS;

    // Sentinel One units consume included slots at no extra cost
    const f7Included = Math.min(f7Qty, remainingIncluded);
    remainingIncluded -= f7Included;
    const f7Extra = f7Qty - f7Included;

    // Sentinel Pro units in included slots cost +90€ upgrade each
    const f18Included = Math.min(f18Qty, remainingIncluded);
    remainingIncluded -= f18Included;
    const f18Extra = f18Qty - f18Included;

    total += f18Included * UPGRADE_DELTA;
    total += f7Extra * ADDITIONAL_UNIT_PRICE_SENTINEL_ONE;
    total += f18Extra * ADDITIONAL_UNIT_PRICE_SENTINEL_PRO;

    return total;
  };

  const osTotal = computeOsTotal();

  // For non-OS plans
  const currentVariant = productVariants.find((v) => v.productId === selectedProduct)!;
  const singleTotal = currentVariant?.totalPrice[planId as keyof typeof currentVariant.totalPrice];

  const formatPrice = (amount: number) =>
    lang === "fr" ? `${amount} €` : `€${amount}`;

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
              {isOS
                ? lang === "fr"
                  ? "Le prix de base inclut 2 serrures. Ajoutez des produits supplémentaires selon vos besoins. Vous pouvez mixer les modèles."
                  : "The base price includes 2 locks. Add extra products as needed. You can mix models."
                : lang === "fr"
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
                {isOS && (
                  <p className="text-xs text-chrome-light/50 mt-2">
                    {lang === "fr"
                      ? `${OS_INCLUDED_UNITS} produits inclus dans le prix de base`
                      : `${OS_INCLUDED_UNITS} products included in the base price`}
                  </p>
                )}
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
              {isOS
                ? lang === "fr" ? "Composez votre parc" : "Build your fleet"
                : lang === "fr" ? "Choisissez votre serrure" : "Choose your lock"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Produits disponibles" : "Available Products"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {productVariants.map((variant, i) => {
              if (isOS) {
                // OS: quantity-based selection
                const qty = getOsLineQuantity(variant.productId);
                const unitPrice =
                  variant.productId === "f18"
                    ? ADDITIONAL_UNIT_PRICE_SENTINEL_PRO
                    : ADDITIONAL_UNIT_PRICE_SENTINEL_ONE;

                return (
                  <motion.div
                    key={variant.productId}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                      qty > 0
                        ? "border-accent bg-accent/5"
                        : "border-chrome/15 bg-hero-bg/60"
                    }`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h3 className="text-xl font-heading font-bold text-hero-foreground mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-sm text-chrome-light leading-relaxed mb-4">
                      {variant.description[lang]}
                    </p>
                    <p className="text-xs text-chrome-light/50 mb-6">
                      {lang === "fr"
                        ? `+${unitPrice} € par unité supplémentaire`
                        : `+€${unitPrice} per additional unit`}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateOsQuantity(variant.productId, -1)}
                        disabled={qty === 0 || (osTotalUnits <= OS_INCLUDED_UNITS && qty <= 0)}
                        className="w-10 h-10 rounded-xl border border-chrome/20 flex items-center justify-center text-chrome-light hover:border-chrome/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-2xl font-heading font-bold text-hero-foreground min-w-[2rem] text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateOsQuantity(variant.productId, 1)}
                        className="w-10 h-10 rounded-xl border border-chrome/20 flex items-center justify-center text-chrome-light hover:border-chrome/40 transition-colors active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <Link
                      to={`/products/${variant.productId}`}
                      className="inline-block mt-5 text-xs text-accent hover:text-accent/80 transition-colors"
                    >
                      {lang === "fr" ? "Voir les spécifications →" : "View specifications →"}
                    </Link>
                  </motion.div>
                );
              }

              // Entry / Remote: single selection
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

          {/* OS minimum notice */}
          {isOS && osTotalUnits < OS_INCLUDED_UNITS && (
            <p className="mt-6 text-sm text-red-400">
              {lang === "fr"
                ? `Minimum ${OS_INCLUDED_UNITS} produits requis. Actuellement : ${osTotalUnits}.`
                : `Minimum ${OS_INCLUDED_UNITS} products required. Currently: ${osTotalUnits}.`}
            </p>
          )}
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

              {isOS ? (
                <>
                  {osLines.map((line) => {
                    const v = productVariants.find((p) => p.productId === line.productId);
                    if (!v) return null;
                    return (
                      <div key={line.productId} className="flex justify-between items-center py-3 border-b border-chrome/10">
                        <span className="text-sm text-chrome-light">
                          {v.name} × {line.quantity}
                        </span>
                        <span className="text-sm font-medium text-hero-foreground">
                          {line.quantity <= 0 ? "—" : `${line.quantity} ${lang === "fr" ? "unité(s)" : "unit(s)"}`}
                        </span>
                      </div>
                    );
                  })}
                  {osTotalUnits > OS_INCLUDED_UNITS && (
                    <div className="flex justify-between items-center py-3 border-b border-chrome/10">
                      <span className="text-sm text-chrome-light">
                        {lang === "fr" ? "Produits supplémentaires" : "Additional products"}
                      </span>
                      <span className="text-sm font-medium text-hero-foreground">
                        +{osTotalUnits - OS_INCLUDED_UNITS}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex justify-between items-center py-3 border-b border-chrome/10">
                  <span className="text-sm text-chrome-light">
                    {lang === "fr" ? "Produit" : "Product"}
                  </span>
                  <span className="text-sm font-medium text-hero-foreground">
                    {currentVariant.name}
                  </span>
                </div>
              )}

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
                  {isOS ? formatPrice(osTotal) : singleTotal[lang]}
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
