import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Gift, Shield, BarChart3, Users, Activity } from "lucide-react";
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4 block">
              KGS Access
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-[1.05]">
              {offer.name}
            </h1>
            <p className="text-xl text-silver-accent italic mb-6">{offer.tagline[lang]}</p>
            <p className="text-base text-chrome-light max-w-xl leading-relaxed">
              {offer.description[lang]}
            </p>
            <div className="mt-8 flex items-baseline gap-4 flex-wrap">
              <span className="text-3xl font-heading font-bold text-white">
                {offer.price[lang]}
              </span>
              {offer.subscription && (
                <span className="text-sm text-chrome-light/70">
                  + {offer.subscription.price[lang]}
                </span>
              )}
            </div>
            {offer.subscription && (
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
                <Gift className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">{offer.subscription.freeMonths[lang]}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      {offer.keyBenefits && (
        <section className="py-20 bg-hero">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-4">
                {lang === "fr" ? "Pourquoi KGS OS" : "Why KGS OS"}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">
                {lang === "fr" ? "Conçu pour les opérateurs sérieux" : "Built for serious operators"}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[Shield, BarChart3, Users, Activity].map((Icon, i) => (
                <motion.div
                  key={offer.keyBenefits![i][lang]}
                  className="p-8 rounded-2xl border border-chrome/15 bg-hero-bg/60 flex items-start gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-hero-foreground mb-1">
                      {offer.keyBenefits![i][lang]}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed features */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-4">
              {lang === "fr" ? "Ce qui est inclus" : "What you get"}
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-12">
              {lang === "fr" ? "Le système complet, en détail" : "The complete system, in detail"}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {offer.featureDetails?.map((fd, i) => (
              <motion.div
                key={fd.title[lang]}
                className="p-8 rounded-2xl border border-chrome/15 bg-hero-bg/60"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-cyan-glow mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-heading font-bold text-hero-foreground mb-2">
                      {fd.title[lang]}
                    </h3>
                    <p className="text-sm text-chrome-light leading-relaxed">
                      {fd.desc[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      {offer.subscription && (
        <section className="py-20 bg-hero">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-4">
                {lang === "fr" ? "Abonnement plateforme" : "Platform Subscription"}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
                {lang === "fr" ? "Un investissement qui scale avec vous" : "An investment that scales with you"}
              </h2>
            </motion.div>
            <div className="rounded-2xl border border-accent/20 bg-hero-bg/60 p-10 max-w-2xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-heading font-bold text-hero-foreground">
                  {offer.subscription.price[lang]}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-6">
                <Gift className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">{offer.subscription.freeMonths[lang]}</span>
              </div>
              <p className="text-sm text-chrome-light leading-relaxed mb-4">
                {lang === "fr"
                  ? "L'abonnement couvre l'accès complet à la plateforme KGS Access : tableau de bord centralisé, gestion des utilisateurs, journaux d'activité, monitoring en temps réel, mises à jour automatiques et support prioritaire."
                  : "The subscription covers full access to the KGS Access platform: centralized dashboard, user management, activity logs, real-time monitoring, automatic updates, and priority support."}
              </p>
              <p className="text-sm text-chrome-light leading-relaxed">
                {lang === "fr"
                  ? "Le prix s'applique par bien géré. Plus vous ajoutez de biens, plus votre système gagne en valeur — une seule plateforme pour tout contrôler."
                  : "The price applies per managed property. The more properties you add, the more value your system delivers — one platform to control everything."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Ideal for */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-heading font-bold text-hero-foreground mb-8">
              {lang === "fr" ? "Idéal pour" : "Ideal for"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {offer.idealFor.map((use) => (
                <span
                  key={use[lang]}
                  className="px-6 py-3 rounded-full border border-chrome/20 bg-hero-bg/60 text-sm text-chrome-light"
                >
                  {use[lang]}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center border-t border-chrome/15 pt-16"
          >
            <p className="text-4xl font-heading font-bold text-hero-foreground mb-1">
              {offer.price[lang]}
            </p>
            {offer.subscription && (
              <p className="text-base text-chrome-light/60 mb-3">
                + {offer.subscription.price[lang]} · {offer.subscription.freeMonths[lang]}
              </p>
            )}
            <p className="text-base text-chrome-light/60 italic mb-10">
              "{offer.valueProposition[lang]}"
            </p>
            <Link
              to="/configure?plan=os"
              className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase bg-accent text-white px-10 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-500 mb-4"
            >
              {lang === "fr" ? "Sélectionner cette offre" : "Select this plan"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <br />
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
