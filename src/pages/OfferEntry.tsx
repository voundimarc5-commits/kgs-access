import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Lock, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import offerImg from "@/assets/offer-entry.jpg";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" } as const,
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" } as const,
  viewport: { once: true, amount: 0.2 } as const,
  transition: { duration: 0.6, ease } as const,
};

const OfferEntry = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";

  const included = [
    { en: "Smart lock installation-ready device", fr: "Dispositif de serrure connectée prêt à installer" },
    { en: "Access via code, card, or fingerprint", fr: "Accès par code, carte ou empreinte digitale" },
    { en: "Clean and professional setup", fr: "Installation propre et professionnelle" },
    { en: "Local support during installation", fr: "Support local pendant l'installation" },
  ];

  const value = [
    { en: "No more lost keys", fr: "Plus de clés perdues" },
    { en: "Easy access for family, guests or tenants", fr: "Accès facile pour la famille, les invités ou les locataires" },
    { en: "Reliable and secure everyday use", fr: "Utilisation quotidienne fiable et sécurisée" },
    { en: "Minimal setup, maximum convenience", fr: "Installation minimale, confort maximal" },
  ];

  const perfectFor = [
    { en: "Apartments", fr: "Appartements" },
    { en: "Small Airbnb units", fr: "Petits logements Airbnb" },
    { en: "Personal properties", fr: "Propriétés personnelles" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-28 min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${offerImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm">
            <ArrowLeft className="w-4 h-4" />
            {lang === "fr" ? "Accueil" : "Home"}
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.05] tracking-tight">
              KGS Entry
            </h1>
            <p className="text-xl md:text-2xl text-silver-accent font-light mb-6 leading-snug">
              {lang === "fr" ? "Accès intelligent. Simple. Fiable." : "Smart access. Simple. Reliable."}
            </p>
            <p className="text-base text-chrome-light max-w-xl leading-relaxed mb-10">
              {lang === "fr"
                ? "Équipez votre bien avec un accès sécurisé sans clé — sans complexité, sans abonnement."
                : "Upgrade your property with secure, keyless access — no complexity, no subscriptions."}
            </p>
            <Link to="/configure?plan=entry" className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500">
              {lang === "fr" ? "Commencer" : "Get started"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — Explanation */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Comprendre KGS Entry" : "Understanding KGS Entry"}
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-6 leading-[1.1]">
              {lang === "fr" ? "Une façon plus intelligente de sécuriser votre espace" : "A smarter way to secure your space"}
            </h2>
            <p className="text-base text-chrome-light leading-relaxed max-w-2xl mb-4">
              {lang === "fr"
                ? "KGS Entry remplace les clés traditionnelles par une solution d'accès moderne, simple, fiable et facile à utiliser."
                : "KGS Entry replaces traditional keys with a modern access solution that is simple, reliable, and easy to use."}
            </p>
            <p className="text-base text-chrome-light/70 leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Pas d'applications. Pas de complexité d'installation. Juste un accès sécurisé, instantanément."
                : "No apps. No setup complexity. Just secure access, instantly."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — What's included */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Ce qui est inclus" : "What's included"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Ce que vous recevez" : "What's included"}
            </h2>
          </motion.div>
          <div className="space-y-4">
            {included.map((item, i) => (
              <motion.div
                key={item.en}
                className="flex items-center gap-4 p-6 rounded-2xl border border-chrome/15 bg-hero-bg/60"
                initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Check className="w-5 h-5 text-cyan-glow shrink-0" />
                <span className="text-base text-hero-foreground font-medium">{item[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Value */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Proposition de valeur" : "Value proposition"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Conçu pour la simplicité" : "Designed for simplicity"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {value.map((item, i) => (
              <motion.div
                key={item.en}
                className="flex items-start gap-4 p-6 rounded-2xl border border-chrome/15 bg-hero-bg/60"
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-base text-chrome-light leading-relaxed">{item[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Pricing */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Tarification" : "Pricing"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-10">
              {lang === "fr" ? "Tarification" : "Pricing"}
            </h2>
          </motion.div>
          <motion.div className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-10 max-w-xl" {...fadeUp}>
            <p className="text-3xl font-heading font-bold text-hero-foreground mb-2">
              {lang === "fr" ? "À partir de 209 €" : "From €209"}
            </p>
            <p className="text-sm text-chrome-light/70">
              {lang === "fr" ? "Installation disponible selon la localisation" : "Installation available based on location"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Perfect for */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Positionnement" : "Positioning"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Parfait pour" : "Perfect for"}
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {perfectFor.map((use, i) => (
              <motion.span key={use.en} className="px-6 py-3 rounded-full border border-chrome/20 bg-hero-bg/60 text-sm text-chrome-light" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                {use[lang]}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Why KGS Entry */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Différenciation" : "Differentiation"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
              {lang === "fr" ? "Pourquoi KGS Entry ?" : "Why KGS Entry?"}
            </h2>
            <p className="text-lg text-chrome-light leading-relaxed max-w-xl">
              {lang === "fr"
                ? "La plupart des serrures vous donnent un accès. KGS Entry vous donne la simplicité."
                : "Most locks give you access. KGS Entry gives you simplicity."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center border-t border-chrome/15 pt-16">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-10 leading-[1.1]">
              {lang === "fr" ? "Commencez avec une serrure plus intelligente dès aujourd'hui" : "Start with a smarter lock today"}
            </h2>
            <Link to="/configure?plan=entry" className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500">
              {lang === "fr" ? "Commencer avec KGS Entry" : "Get started with KGS Entry"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OfferEntry;
