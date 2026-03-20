import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Gift, Headphones } from "lucide-react";
import { offerRemote } from "@/data/offers";
import { useLanguage } from "@/contexts/LanguageContext";
import offerImg from "@/assets/offer-remote.jpg";

const OfferRemote = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";
  const offer = offerRemote;

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
              {lang === "fr" ? "Tout ce que contient le package" : "Everything included in the package"}
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
                {lang === "fr" ? "Abonnement" : "Subscription"}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
                {lang === "fr" ? "Restez connecté à votre bien" : "Stay connected to your property"}
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
              <p className="text-sm text-chrome-light leading-relaxed">
                {lang === "fr"
                  ? "L'abonnement maintient la connectivité entre votre serrure et votre application mobile. Il inclut le service cloud, les mises à jour automatiques du firmware, et l'accès illimité à la gestion d'accès à distance."
                  : "The subscription maintains the connectivity between your lock and your mobile app. It includes the cloud service, automatic firmware updates, and unlimited remote access management."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Add-on */}
      {offer.addon && (
        <section className="py-20 bg-hero">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-4">
                {lang === "fr" ? "Option supplémentaire" : "Optional Add-on"}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground mb-8">
                {offer.addon.name}
              </h2>
            </motion.div>
            <div className="rounded-2xl border border-chrome/15 bg-hero-bg/60 p-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-6 h-6 text-cyan-glow" />
                <span className="text-lg font-heading font-bold text-hero-foreground">{offer.addon.price[lang]}</span>
              </div>
              <p className="text-sm text-chrome-light mb-6 leading-relaxed">
                {lang === "fr"
                  ? "Un accompagnement expert pour tirer le meilleur parti de votre système KGS Remote."
                  : "Expert assistance to get the most out of your KGS Remote system."}
              </p>
              <ul className="space-y-3">
                {offer.addon.features.map((af) => (
                  <li key={af[lang]} className="flex items-start gap-3 text-sm text-chrome-light">
                    <Check className="w-4 h-4 text-cyan-glow mt-0.5 shrink-0" />
                    {af[lang]}
                  </li>
                ))}
              </ul>
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
              to="/configure?plan=remote"
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

export default OfferRemote;
