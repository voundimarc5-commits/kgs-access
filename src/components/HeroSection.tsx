import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/kgs-access-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/60 via-transparent to-hero-bg/90" />

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <motion.img
          src={logo}
          alt="KGS Access"
          className="w-48 md:w-64 mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-hero-foreground mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Secure. Intelligent.{" "}
          <span className="text-gradient-accent">Scalable Access Control.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-chrome-light max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A smart access control solution combining identity, security, and
          connected infrastructure — built for enterprise environments.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold text-lg shadow-glow hover:brightness-110 transition-all duration-300"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#what-is"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-chrome/30 text-chrome-light font-medium text-lg hover:bg-chrome/10 transition-all duration-300"
          >
            <Shield className="w-5 h-5" />
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
