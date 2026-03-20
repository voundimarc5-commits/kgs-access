import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allOffers, Offer } from "@/data/offers";
import { useLanguage } from "@/contexts/LanguageContext";
import offerEntryImg from "@/assets/offer-entry.jpg";
import offerRemoteImg from "@/assets/offer-remote.jpg";
import offerOSImg from "@/assets/offer-os.jpg";

const offerImages: Record<string, string> = {
  entry: offerEntryImg,
  remote: offerRemoteImg,
  os: offerOSImg,
};

const OfferCard = ({ offer, i }: { offer: Offer; i: number }) => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";

  return (
    <motion.div
      className="group relative rounded-2xl border border-chrome/15 bg-hero-bg/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
    >
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={offerImages[offer.id]}
          alt={offer.name}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-hero-bg/40 to-transparent" />
      </div>

      <div className="relative z-10 p-8 pt-4 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-2">
          {offer.tagline[lang]}
        </span>
        <h3 className="text-2xl font-heading font-bold text-hero-foreground mb-3">
          {offer.name}
        </h3>

        {/* Price */}
        <p className="text-lg font-heading font-semibold text-ivory mb-4">
          {offer.price[lang]}
        </p>

        <Link
          to={`/offers/${offer.id}`}
          className="mt-auto inline-flex items-center gap-2 font-semibold text-cyan-glow hover:gap-3 transition-all text-sm"
        >
          {lang === "fr" ? "Voir les détails" : "View details"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { language } = useLanguage();
  const lang = language as "en" | "fr";

  return (
    <section className="py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[160px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-4">
            {lang === "fr" ? "Nos offres" : "Our Offers"}
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4">
            {lang === "fr" ? "Trois offres. Un seul standard." : "Three Offers. One Standard."}
          </h2>
          <p className="text-lg text-chrome-light max-w-2xl mx-auto">
            {lang === "fr"
              ? "Choisissez le niveau qui correspond à vos besoins."
              : "Pick the level that matches your needs."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {allOffers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
