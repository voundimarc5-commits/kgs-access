import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import sentinelOneImg from "@/assets/product-sentinel-minimal.png";
import sentinelProImg from "@/assets/product-sentinel-duo.png";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[index] as HTMLElement;
      if (child) {
        scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      setActiveIndex(scrollLeft > width * 0.4 ? 1 : 0);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Desktop: side by side */}
        {!isMobile ? (
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                {/* Image */}
                <div className="flex justify-center items-center pt-12 pb-6 px-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[380px] lg:h-[440px] w-auto object-contain group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div className="px-8 pb-10">
                  <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-silver-accent mb-2">
                    {product.tagline}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-heading font-medium text-deep-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-chrome-light font-light leading-relaxed mb-6 text-sm">
                    {product.desc}
                  </p>
                  <Link
                    to={product.link}
                    className="group/link inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.15em] uppercase text-silver-accent border-b border-silver-accent/30 pb-1.5 hover:border-silver-accent/60 transition-all duration-500"
                  >
                    Discover {product.name}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Mobile: horizontal scroll carousel */
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  className="group flex-shrink-0 w-[85vw] snap-center rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="flex justify-center items-center pt-10 pb-4 px-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[280px] w-auto object-contain"
                    />
                  </div>
                  <div className="px-6 pb-8">
                    <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-silver-accent mb-2">
                      {product.tagline}
                    </p>
                    <h3 className="text-xl font-heading font-medium text-deep-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-chrome-light font-light leading-relaxed mb-5 text-sm">
                      {product.desc}
                    </p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-silver-accent border-b border-silver-accent/30 pb-1"
                    >
                      Discover
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-silver-accent w-5" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
