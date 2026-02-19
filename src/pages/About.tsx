import { motion } from "framer-motion";
import { Globe, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-gradient-accent">KGS Access</span>
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A division of Kora Global Systems — building secure, scalable access solutions for the long term.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              KGS Access is the smart access and security division of{" "}
              <strong className="text-foreground">Kora Global Systems (KGS)</strong>, a
              US-registered technology company operating internationally. We design and
              deliver certified smart lock solutions for residential, rental, and commercial
              properties — with a focus on the UK and European markets.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
              Our approach is straightforward: source the best certified hardware, validate
              it rigorously, and provide reliable products backed by professional support.
              We work with established suppliers and prioritise CE and RoHS compliance to
              ensure every product meets the standards required for professional resale and
              consumer use.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
              KGS Access is part of a broader product ecosystem under Kora Global Systems,
              which includes planned lines in automation and workflow management. We are
              building carefully — starting with proven products and expanding as the
              business grows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "US-Based, International Operations",
                desc: "Kora Global Systems is registered in the United States and operates across the UK and Europe.",
              },
              {
                icon: Shield,
                title: "Certified Hardware Only",
                desc: "Every product we sell carries CE and RoHS certification. No exceptions.",
              },
              {
                icon: TrendingUp,
                title: "Built to Scale",
                desc: "Starting with smart locks, expanding into a full access and security ecosystem over time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 rounded-2xl border border-border bg-card shadow-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
