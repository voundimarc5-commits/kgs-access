import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { f7 } from "@/data/products";
import ProductSpecTable from "@/components/ProductSpecTable";
import CertificationBadges from "@/components/CertificationBadges";
import UnlockMethodCards from "@/components/UnlockMethodCards";
import productImage from "@/assets/product-f7-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductF7 = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-36 pb-24 min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${productImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("All Products", "Tous les produits")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4 block">
              {f7.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {f7.name}
            </h1>
            <p className="text-lg text-chrome-light max-w-lg leading-relaxed">{f7.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("Authentication", "Authentification")}
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-10">
            {t("Unlock Methods", "Méthodes de déverrouillage")}
          </h2>
          <div className="mb-20">
            <UnlockMethodCards methods={f7.unlockMethods} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("Hardware", "Matériel")}
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-10">
            {t("Technical Specifications", "Spécifications techniques")}
          </h2>
          <ProductSpecTable specs={f7.specs} />

          <h2 className="text-2xl font-heading font-bold text-foreground mt-20 mb-6">
            {t("Intended Applications", "Applications prévues")}
          </h2>
          <div className="flex flex-wrap gap-3 mb-20">
            {f7.targetUseCases.map((uc) => (
              <span
                key={uc}
                className="px-5 py-2.5 rounded-full border border-border bg-muted text-sm text-foreground"
              >
                {uc}
              </span>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("Compliance", "Conformité")}
          </p>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            {t("Certifications", "Certifications")}
          </h2>
          <CertificationBadges />

          {/* Available with KGS plans */}
          <div className="mt-20 mb-20 rounded-2xl border border-border bg-muted/50 p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              {t("Available Plans", "Offres disponibles")}
            </p>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              {t("Available with KGS plans", "Disponible avec les offres KGS")}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              {t(
                "The Sentinel One is included in all KGS offers. Choose the plan that fits your needs, and select this product during configuration.",
                "Le Sentinel One est inclus dans toutes les offres KGS. Choisissez l'offre adaptée à vos besoins, puis sélectionnez ce produit lors de la configuration."
              )}
            </p>
            <Link
              to="/offers/entry"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-accent border border-accent/30 px-8 py-3.5 hover:border-accent/60 hover:bg-accent/5 active:scale-[0.97] transition-all duration-500"
            >
              {t("View available plans", "Voir les offres disponibles")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-silver-accent border border-silver-accent/30 px-10 py-4 hover:border-silver-accent/60 hover:bg-white/[0.03] transition-all duration-500"
            >
              {t("Request a Consultation", "Demander une consultation")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <p className="text-[10px] text-muted-foreground/50 mt-6 max-w-md mx-auto leading-relaxed">
              {t(
                "Hardware product — no absolute security guarantee. Information provided for guidance only.",
                "Produit matériel — aucune garantie de sécurité absolue. Informations fournies à titre indicatif uniquement."
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductF7;
