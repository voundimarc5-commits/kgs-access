// Pricing matrix: Offer base + Product variation
// Prices are display-only (no checkout logic)

export interface ProductVariant {
  productId: string;
  name: string;
  description: { en: string; fr: string };
  priceModifier: { en: string; fr: string }; // e.g. "+0 €" or "+90 €"
  totalPrice: {
    entry: { en: string; fr: string };
    remote: { en: string; fr: string };
    os: { en: string; fr: string };
  };
}

export const productVariants: ProductVariant[] = [
  {
    productId: "f7",
    name: "KGS Sentinel One",
    description: {
      en: "Standard smart lock — ideal for standard residential and commercial doors.",
      fr: "Serrure intelligente standard — idéale pour les portes résidentielles et commerciales standard.",
    },
    priceModifier: { en: "Included", fr: "Inclus" },
    totalPrice: {
      entry: { en: "€209", fr: "209 €" },
      remote: { en: "€299", fr: "299 €" },
      os: { en: "€479", fr: "479 €" },
    },
  },
  {
    productId: "f18",
    name: "KGS Sentinel Pro",
    description: {
      en: "Reinforced smart lock — triple-bolt system for thick and high-security doors.",
      fr: "Serrure intelligente renforcée — système triple verrou pour portes épaisses et haute sécurité.",
    },
    priceModifier: { en: "+€90", fr: "+90 €" },
    totalPrice: {
      entry: { en: "€299", fr: "299 €" },
      remote: { en: "€389", fr: "389 €" },
      os: { en: "€569", fr: "569 €" },
    },
  },
];
