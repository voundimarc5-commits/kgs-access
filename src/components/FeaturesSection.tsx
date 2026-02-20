import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/products";
import productImage from "@/assets/product-sentinel-minimal.png";
import React, { useState, useRef } from "react";

const ProductCard = ({ product, i }: { product: typeof allProducts[0]; i: number }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
    setIsHovering(true);
  };

  const handlePointerLeave = () => {
    setIsHovering(false);
    setIsPressed(false);
  };

  return (
    <motion.div
      ref={cardRef}
      key={product.id}
      className="group relative p-10 rounded-2xl border border-chrome/15 bg-hero-bg/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      animate={{ scale: isPressed ? 1.03 : 1 }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        boxShadow: isHovering
          ? `0 0 60px 10px hsla(265, 60%, 55%, 0.25), 0 0 120px 20px hsla(265, 60%, 55%, 0.1)`
          : undefined,
      }}
    >
      {/* Purple glow that follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, hsla(265, 70%, 55%, 0.2), transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex justify-center mb-8">
        <img
          src={productImage}
          alt={product.name}
          className="h-40 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow mb-3">
        {product.subtitle}
      </span>
      <h3 className="relative z-10 text-2xl font-heading font-bold text-hero-foreground mb-3">
        {product.name}
      </h3>
      <p className="relative z-10 text-chrome-light mb-6 flex-1 text-sm leading-relaxed">
        {product.positioning}
      </p>
      <ul className="relative z-10 space-y-2 mb-8">
        {product.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-chrome-light/80">
            <span className="w-1 h-1 mt-2 rounded-full bg-cyan-glow shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <Link
        to={`/products/${product.id}`}
        className="relative z-10 inline-flex items-center gap-2 font-semibold text-cyan-glow hover:gap-3 transition-all text-sm"
      >
        View specifications
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const FeaturesSection = () => {
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
            Product Line
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground mb-4">
            Two Systems. One Standard.
          </h2>
          <p className="text-lg text-chrome-light max-w-2xl mx-auto">
            Each unit is certified, tested, and designed for professional deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {allProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
