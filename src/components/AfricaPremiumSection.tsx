import { motion } from "framer-motion";
import africaImg from "@/assets/africa-premium.jpg";

const AfricaPremiumSection = () => {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-bleed image with overlay */}
      <div className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${africaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <motion.div
              className="w-16 h-[1px] bg-warm-gold/60 mb-10"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-3xl md:text-5xl font-heading font-medium text-ivory mb-10 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Designed for environments
              <br />
              that demand <span className="italic text-warm-gold">more.</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-chrome-light leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p>
                From coastal humidity to urban density, security must adapt.
                KGS Access is engineered for places where climate, infrastructure
                and usage require resilience, not theory.
              </p>
              <p className="text-ivory/90 font-normal">
                Africa is not a future market.
                <br />
                It is a present ground for innovation, architecture and ambition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaPremiumSection;
