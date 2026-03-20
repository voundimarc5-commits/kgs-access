import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Monitor, Lock, Headphones, LayoutDashboard, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import offerImg from "@/assets/offer-os.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const OfferOSPage = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";

  const included = [
    { en: "2 smart access devices (included)", fr: "2 dispositifs d'accès connectés (inclus)" },
    { en: "Full system setup and configuration", fr: "Installation et configuration complètes" },
    { en: "Access to KGS OS platform", fr: "Accès à la plateforme KGS OS" },
    { en: "Centralized control dashboard", fr: "Tableau de bord centralisé" },
    { en: "Priority support", fr: "Support prioritaire" },
  ];

  const operations = [
    { en: "Manage multiple properties from one place", fr: "Gérez plusieurs biens depuis un seul endroit" },
    { en: "Control access remotely, instantly", fr: "Contrôlez l'accès à distance, instantanément" },
    { en: "Assign and revoke access in seconds", fr: "Attribuez et révoquez les accès en quelques secondes" },
    { en: "Track activity and access logs", fr: "Suivez les journaux d'activité et d'accès" },
    { en: "Reduce operational friction", fr: "Réduisez les frictions opérationnelles" },
  ];

  const idealFor = [
    { en: "Airbnb hosts managing multiple units", fr: "Hôtes Airbnb gérant plusieurs logements" },
    { en: "Property managers", fr: "Gestionnaires immobiliers" },
    { en: "Hotels and serviced apartments", fr: "Hôtels et résidences de services" },
    { en: "Real estate operators", fr: "Opérateurs immobiliers" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-28 min-h-[75vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${offerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chrome-light/60 hover:text-chrome-light transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "fr" ? "Accueil" : "Home"}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.05] tracking-tight">
              KGS OS
            </h1>
            <p className="text-xl md:text-2xl text-silver-accent font-light mb-6 leading-snug">
              {lang === "fr"
                ? "Vos propriétés. Un seul système. Contrôle total."
                : "Your properties. One system. Total control."}
            </p>
            <p className="text-base text-chrome-light max-w-xl leading-relaxed mb-10">
              {lang === "fr"
                ? "Commencez avec 2 points d'accès connectés et gérez tout depuis une seule plateforme — où que vous soyez dans le monde."
                : "Start with 2 connected access points and manage everything from a single platform — anywhere in the world."}
            </p>
            <Link
              to="/configure?plan=os"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500"
            >
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
              {lang === "fr" ? "Comprendre KGS OS" : "Understanding KGS OS"}
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-6 leading-[1.1]">
              {lang === "fr"
                ? "Un système d'accès complet, pas juste une serrure connectée"
                : "A complete access system, not just a smart lock"}
            </h2>
            <p className="text-base text-chrome-light leading-relaxed max-w-2xl mb-4">
              {lang === "fr"
                ? "KGS OS est conçu pour les propriétaires qui gèrent plusieurs espaces et qui ont besoin d'un moyen fiable et centralisé de contrôler les accès."
                : "KGS OS is designed for property owners who manage multiple spaces and need a reliable, centralized way to control access."}
            </p>
            <p className="text-base text-chrome-light/70 leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Au lieu d'utiliser différents appareils et applications, vous obtenez un système unifié qui simplifie tout."
                : "Instead of using different devices and apps, you get one unified system that simplifies everything."}
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
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Check className="w-5 h-5 text-cyan-glow shrink-0" />
                <span className="text-base text-hero-foreground font-medium">{item[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Value Proposition */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Proposition de valeur" : "Value proposition"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
              {lang === "fr" ? "Conçu pour les opérations réelles" : "Built for real operations"}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {operations.map((item, i) => (
              <motion.div
                key={item.en}
                className="flex items-start gap-4 p-6 rounded-2xl border border-chrome/15 bg-hero-bg/60"
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-base text-chrome-light leading-relaxed">{item[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Customize */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Personnalisation" : "Customization"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-6">
              {lang === "fr" ? "Personnalisez votre configuration" : "Customize your setup"}
            </h2>
            <p className="text-base text-chrome-light leading-relaxed max-w-2xl mb-3">
              {lang === "fr"
                ? "Votre système démarre avec 2 dispositifs inclus. Vous pouvez upgrader chaque unité selon vos besoins."
                : "Your system starts with 2 devices included. You can upgrade each unit based on your needs."}
            </p>
            <div className="flex flex-col gap-3 mt-8 max-w-md">
              <div className="flex items-center gap-3 p-5 rounded-xl border border-chrome/15 bg-hero-bg/60">
                <Settings className="w-5 h-5 text-chrome-light/60 shrink-0" />
                <span className="text-sm text-chrome-light">
                  {lang === "fr" ? "Configuration standard → incluse" : "Standard configuration → included"}
                </span>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-xl border border-accent/20 bg-hero-bg/60">
                <Lock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-chrome-light">
                  {lang === "fr" ? "Options de sécurité avancées → disponibles" : "Advanced security options → available"}
                </span>
              </div>
            </div>
            <div className="mt-10">
              <Link
                to="/configure?plan=os"
                className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-ivory border-b border-silver-accent/40 pb-2 hover:border-silver-accent transition-all duration-500"
              >
                {lang === "fr" ? "Construire votre système" : "Build your system"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Pricing */}
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
          <motion.div
            className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-10 max-w-xl"
            {...fadeUp}
          >
            <p className="text-3xl font-heading font-bold text-hero-foreground mb-2">
              {lang === "fr" ? "À partir de 479 €" : "From €479"}
            </p>
            <p className="text-sm text-chrome-light/70 mb-6">
              {lang === "fr" ? "(inclut 2 dispositifs)" : "(includes 2 devices)"}
            </p>
            <div className="flex items-baseline gap-2 p-5 rounded-xl bg-accent/10 border border-accent/20">
              <span className="text-lg font-heading font-bold text-hero-foreground">14,99 €</span>
              <span className="text-sm text-chrome-light/70">
                / {lang === "fr" ? "mois pour l'accès complet à la plateforme" : "month for full platform access"}
              </span>
            </div>
          </motion.div>
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
              {lang === "fr" ? "Conçu pour les opérateurs immobiliers sérieux" : "Designed for serious property operators"}
            </h2>
          </motion.div>
          <p className="text-sm text-chrome-light/70 uppercase tracking-wider mb-6">
            {lang === "fr" ? "KGS OS est idéal pour :" : "KGS OS is ideal for:"}
          </p>
          <div className="flex flex-wrap gap-3">
            {idealFor.map((use, i) => (
              <motion.span
                key={use.en}
                className="px-6 py-3 rounded-full border border-chrome/20 bg-hero-bg/60 text-sm text-chrome-light"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {use[lang]}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Why KGS OS */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4">
              {lang === "fr" ? "Différenciation" : "Differentiation"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
              {lang === "fr" ? "Pourquoi KGS OS ?" : "Why KGS OS?"}
            </h2>
            <p className="text-lg text-chrome-light leading-relaxed mb-8 max-w-xl">
              {lang === "fr"
                ? "La plupart des solutions vous donnent un appareil. KGS OS vous donne un système."
                : "Most solutions give you a device. KGS OS gives you a system."}
            </p>
            <div className="flex flex-col gap-3 max-w-md">
              {[
                { en: "One platform", fr: "Une seule plateforme" },
                { en: "Multiple access points", fr: "Plusieurs points d'accès" },
                { en: "Full visibility and control", fr: "Visibilité et contrôle complets" },
              ].map((item, i) => (
                <motion.div
                  key={item.en}
                  className="flex items-center gap-3 p-4 rounded-xl border border-chrome/15 bg-hero-bg/60"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-hero-foreground font-medium">{item[lang]}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            {...fadeUp}
            className="text-center border-t border-chrome/15 pt-16"
          >
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-hero-foreground mb-10 leading-[1.1]">
              {lang === "fr"
                ? "Prenez le contrôle de vos propriétés dès aujourd'hui"
                : "Take control of your properties today"}
            </h2>
            <Link
              to="/configure?plan=os"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500"
            >
              {lang === "fr" ? "Commencer avec KGS OS" : "Get started with KGS OS"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OfferOSPage;
