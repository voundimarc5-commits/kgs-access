import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import offerImg from "@/assets/offer-remote.jpg";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" } as const,
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" } as const,
  viewport: { once: true, amount: 0.2 } as const,
  transition: { duration: 0.6, ease } as const,
};

const OfferRemote = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";

  const included = [
    { en: "Smart lock + gateway installation", fr: "Installation serrure connectée + passerelle" },
    { en: "Remote access via mobile app", fr: "Accès à distance via application mobile" },
    { en: "Real-time control (open / close remotely)", fr: "Contrôle en temps réel (ouvrir / fermer à distance)" },
    { en: "Access management for multiple users", fr: "Gestion des accès pour plusieurs utilisateurs" },
  ];

  const value = [
    { en: "Grant access from anywhere", fr: "Accordez l'accès depuis n'importe où" },
    { en: "No need to be physically present", fr: "Pas besoin d'être physiquement présent" },
    { en: "Manage multiple users easily", fr: "Gérez facilement plusieurs utilisateurs" },
    { en: "Perfect for dynamic property usage", fr: "Parfait pour une utilisation dynamique du bien" },
  ];

  const supportFeatures = [
    { en: "Setup guidance", fr: "Accompagnement à l'installation" },
    { en: "Usage support", fr: "Support d'utilisation" },
    { en: "Troubleshooting help", fr: "Aide au dépannage" },
  ];

  const idealFor = [
    { en: "Airbnb hosts", fr: "Hôtes Airbnb" },
    { en: "Property managers", fr: "Gestionnaires immobiliers" },
    { en: "Multi-unit owners", fr: "Propriétaires multi-logements" },
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
              KGS Remote
            </h1>
            <p className="text-xl md:text-2xl text-silver-accent font-light mb-6 leading-snug">
              {lang === "fr" ? "Accédez à votre bien depuis n'importe où." : "Access your property from anywhere."}
            </p>
            <p className="text-base text-chrome-light max-w-xl leading-relaxed mb-10">
              {lang === "fr"
                ? "Contrôlez qui entre dans votre propriété en temps réel — où que vous soyez."
                : "Control who enters your property in real-time — wherever you are."}
            </p>
            <Link to="/configure?plan=remote" className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500">
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
              {lang === "fr" ? "Comprendre KGS Remote" : "Understanding KGS Remote"}
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-6 leading-[1.1]">
              {lang === "fr" ? "Prenez le contrôle au-delà de la porte" : "Take control beyond the door"}
            </h2>
            <p className="text-base text-chrome-light leading-relaxed max-w-2xl mb-4">
              {lang === "fr"
                ? "KGS Remote ajoute le contrôle à distance en temps réel à votre système d'accès."
                : "KGS Remote adds real-time remote control to your access system."}
            </p>
            <p className="text-base text-chrome-light/70 leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Que vous gériez des invités, des locataires ou du personnel, vous pouvez accorder et gérer l'accès instantanément — sans être sur place."
                : "Whether you're managing guests, tenants, or staff, you can grant and manage access instantly — without being on-site."}
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
              {lang === "fr" ? "Conçu pour la flexibilité" : "Built for flexibility"}
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
              {lang === "fr" ? "À partir de 299 €" : "From €299"}
            </p>
            <div className="flex items-baseline gap-2 mt-4 p-5 rounded-xl bg-accent/10 border border-accent/20">
              <span className="text-lg font-heading font-bold text-hero-foreground">7,99 €</span>
              <span className="text-sm text-chrome-light/70">
                / {lang === "fr" ? "mois (après 1 mois d'essai gratuit)" : "month (after 1-month free trial)"}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Support+ */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Option" : "Optional"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-4">
              KGS Support+
            </h2>
            <p className="text-base text-chrome-light/70 leading-relaxed max-w-xl mb-8">
              {lang === "fr"
                ? "Bénéficiez d'une assistance experte quand vous en avez besoin."
                : "Get expert assistance when you need it."}
            </p>
          </motion.div>
          <div className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-10 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-6 h-6 text-cyan-glow" />
              <span className="text-lg font-heading font-bold text-hero-foreground">KGS Support+</span>
            </div>
            <ul className="space-y-3">
              {supportFeatures.map((f) => (
                <li key={f.en} className="flex items-start gap-3 text-sm text-chrome-light">
                  <Check className="w-4 h-4 text-cyan-glow mt-0.5 shrink-0" />
                  {f[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Ideal for */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Positionnement" : "Positioning"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Idéal pour" : "Ideal for"}
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {idealFor.map((use, i) => (
              <motion.span key={use.en} className="px-6 py-3 rounded-full border border-chrome/20 bg-hero-bg/60 text-sm text-chrome-light" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                {use[lang]}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Why KGS Remote */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Différenciation" : "Differentiation"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
              {lang === "fr" ? "Pourquoi KGS Remote ?" : "Why KGS Remote?"}
            </h2>
            <p className="text-lg text-chrome-light leading-relaxed max-w-xl">
              {lang === "fr"
                ? "Les autres vous donnent une serrure connectée. KGS Remote vous donne le contrôle."
                : "Others give you a smart lock. KGS Remote gives you control."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center border-t border-chrome/15 pt-16">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-10 leading-[1.1]">
              {lang === "fr" ? "Gérez l'accès depuis n'importe où" : "Manage access from anywhere"}
            </h2>
            <Link to="/configure?plan=remote" className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500">
              {lang === "fr" ? "Commencer avec KGS Remote" : "Get started with KGS Remote"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OfferRemote;
