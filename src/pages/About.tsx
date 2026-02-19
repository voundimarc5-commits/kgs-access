import { motion } from "framer-motion";
import { Globe, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="bg-hero pt-36 pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-glow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Company
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About KGS Access
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A division of Kora Global Systems. Building secure access infrastructure for the long term.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="mb-24 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              KGS Access is the smart access and security division of{" "}
              <strong className="text-foreground">Kora Global Systems</strong>, a
              US-registered technology company operating internationally. We design and
              deliver certified smart lock solutions for residential, rental, and commercial
              properties — with a focus on the European and African markets.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our approach is methodical: source certified hardware, validate it rigorously,
              and provide reliable products backed by professional support. We work with
              established suppliers and maintain strict CE and RoHS compliance across
              every product in our line.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              KGS Access is part of a broader technology ecosystem under Kora Global Systems.
              We build carefully — starting with proven products and expanding as the
              infrastructure matures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "US-Based, International Operations",
                desc: "Kora Global Systems is registered in the United States and operates across Europe and Africa.",
              },
              {
                icon: Shield,
                title: "Certified Hardware Only",
                desc: "Every product carries CE and RoHS certification. No exceptions. No expired models.",
              },
              {
                icon: TrendingUp,
                title: "Built for Scale",
                desc: "Starting with access control. Expanding into a full security infrastructure platform over time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-10 rounded-2xl border border-border bg-card shadow-card text-center hover:shadow-glow hover:border-accent/20 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-lg bg-hero flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
