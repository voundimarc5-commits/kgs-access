import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { offerOS } from "@/data/offers";
import { useLanguage } from "@/contexts/LanguageContext";
import offerImg from "@/assets/offer-os.jpg";

const OfferOSPage = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";
  const offer = offerOS;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${offerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "fr" ? "Accueil" : "Home"}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4 block">
              {lang === "fr" ? "Offre 03" : "Offer 03"}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {offer.name}
            </h1>
            <p className="text-lg text-silver-accent italic mb-6">{offer.tagline[lang]}</p>
            <p className="text-base text-chrome-light max-w-lg leading-relaxed">
              {offer.description[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              {lang === "fr" ? "Ce qui est inclus" : "What you get"}
            </p>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-10">
              {lang === "fr" ? "Détails de l'offre" : "Offer Details"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-20">
            {offer.features.map((f, i) => (
              <motion.div
                key={f[lang]}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{f[lang]}</span>
              </motion.div>
            ))}
          </div>

          {/* Key benefits */}
          {offer.keyBenefits && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                {lang === "fr" ? "Avantages clés" : "Key Benefits"}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {offer.keyBenefits.map((b, i) => (
                  <div
                    key={b[lang]}
                    className="flex items-start gap-4 p-5 rounded-xl border border-accent/15 bg-accent/5"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{b[lang]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Ideal for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              {lang === "fr" ? "Idéal pour" : "Ideal for"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {offer.idealFor.map((use) => (
                <span
                  key={use[lang]}
                  className="px-5 py-2.5 rounded-full border border-border bg-muted text-sm text-foreground"
                >
                  {use[lang]}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Price + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center border-t border-border pt-16"
          >
            <p className="text-3xl font-heading font-bold text-foreground mb-1">
              {offer.price[lang]}
            </p>
            {offer.subscription && (
              <p className="text-sm text-muted-foreground mb-2">
                {offer.subscription[lang]}
              </p>
            )}
            <p className="text-sm text-muted-foreground italic mb-10">
              "{offer.valueProposition[lang]}"
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-silver-accent border border-silver-accent/30 px-10 py-4 hover:border-silver-accent/60 hover:bg-white/[0.03] active:scale-[0.97] transition-all duration-500"
            >
              {lang === "fr" ? "Demander une consultation" : "Request a Consultation"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OfferOSPage;
