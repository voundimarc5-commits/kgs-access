import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "@/assets/product-sentinel-minimal.png";

const products = [
  {
    name: "Sentinel One",
    tagline: "Everyday intelligence, refined.",
    desc: "Designed for private homes and modern living. Discreet. Elegant. Reliable.",
    link: "/products/f7",
  },
  {
    name: "Sentinel Pro",
    tagline: "Advanced security, architectural precision.",
    desc: "Built for premium projects, hospitality and demanding environments.",
    link: "/products/f18",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-32 bg-deep relative overflow-hidden">
      {/* Cool ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-silver-accent/5 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Product image */}
              <div className="relative mb-10 flex justify-center">
                <div className="absolute inset-0 bg-silver-accent/5 rounded-3xl blur-2xl group-hover:bg-silver-accent/10 transition-all duration-700" />
                <img
                  src={productImage}
                  alt={product.name}
                  className="relative h-56 w-auto opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              {/* Copy */}
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
    </section>
  );
};

export default ProductShowcase;
