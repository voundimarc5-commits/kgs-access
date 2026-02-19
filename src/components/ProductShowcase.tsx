import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sentinelOneImg from "@/assets/product-sentinel-minimal.png";
import sentinelProImg from "@/assets/product-sentinel-duo.png";
import showcaseBg from "@/assets/product-showcase-wide.jpg";

const products = [
  {
    name: "Sentinel One",
    tagline: "Everyday intelligence, refined.",
    desc: "Designed for private homes and modern living. Discreet. Elegant. Reliable.",
    link: "/products/f7",
    image: sentinelOneImg,
  },
  {
    name: "Sentinel Pro",
    tagline: "Advanced security, architectural precision.",
    desc: "Built for premium projects, hospitality and demanding environments.",
    link: "/products/f18",
    image: sentinelProImg,
  },
];

const ProductShowcase = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Wide panoramic background */}
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${showcaseBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-deep/40" />

        {/* Product images row */}
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-8">
          <div className="grid grid-cols-2 gap-0 max-w-6xl mx-auto items-end">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                className="group flex justify-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.25 }}
              >
                {/* Gradient mask to blend edges into background */}
                <div className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(to right, transparent 0%, transparent 70%, hsl(225 15% 6% / 0.6) 100%)'
                      : 'linear-gradient(to left, transparent 0%, transparent 70%, hsl(225 15% 6% / 0.6) 100%)',
                  }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 md:h-80 lg:h-[420px] w-auto drop-shadow-[0_0_60px_hsl(250_20%_60%/0.15)] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product info below */}
      <div className="relative z-10 bg-deep pb-24 pt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-silver-accent mb-3">
                  {product.tagline}
                </p>
                <h3 className="text-3xl font-heading font-medium text-deep-foreground mb-4">
                  {product.name}
                </h3>
                <p className="text-chrome-light font-light leading-relaxed mb-8">
                  {product.desc}
                </p>
                <Link
                  to={product.link}
                  className="group/link inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.15em] uppercase text-silver-accent border-b border-silver-accent/30 pb-1.5 hover:border-silver-accent/60 transition-all duration-500"
                >
                  Discover {product.name}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
