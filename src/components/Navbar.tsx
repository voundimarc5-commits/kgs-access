import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/kgs-access-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Solutions", href: "/solutions" },
    { label: "Compliance", href: "/compliance" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-deep/95 backdrop-blur-2xl border-b border-warm-gold/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="KGS Access"
            className="h-12 w-auto animate-glow-breathe drop-shadow-lg"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className="flex items-center gap-1.5 text-[13px] text-chrome-light hover:text-ivory transition-colors duration-300 font-medium tracking-[0.15em] uppercase"
            >
              Collection
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-warm-gold/10 bg-deep/98 backdrop-blur-2xl shadow-2xl py-3">
                <Link
                  to="/products"
                  className="block px-5 py-2.5 text-sm text-chrome-light hover:text-ivory hover:bg-warm-gold/5 transition-all duration-200"
                >
                  All Products
                </Link>
                <Link
                  to="/products/f7"
                  className="block px-5 py-2.5 text-sm text-chrome-light hover:text-ivory hover:bg-warm-gold/5 transition-all duration-200"
                >
                  Sentinel 1
                </Link>
                <Link
                  to="/products/f18"
                  className="block px-5 py-2.5 text-sm text-chrome-light hover:text-ivory hover:bg-warm-gold/5 transition-all duration-200"
                >
                  Sentinel Pro
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-[13px] text-chrome-light hover:text-ivory transition-colors duration-300 font-medium tracking-[0.15em] uppercase"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="px-7 py-2.5 rounded-full border border-warm-gold/30 text-ivory text-[13px] font-medium tracking-[0.1em] hover:bg-warm-gold/10 hover:border-warm-gold/50 transition-all duration-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-deep/98 backdrop-blur-2xl border-t border-warm-gold/10 px-6 py-8 flex flex-col gap-5">
          <Link to="/products" className="text-chrome-light hover:text-ivory transition-colors font-medium tracking-[0.15em] uppercase text-[13px]">
            Collection
          </Link>
          <Link to="/products/f7" className="text-chrome/70 hover:text-ivory transition-colors pl-4 text-sm">
            Sentinel 1
          </Link>
          <Link to="/products/f18" className="text-chrome/70 hover:text-ivory transition-colors pl-4 text-sm">
            Sentinel Pro
          </Link>
          {navLinks.map((l) => (
            <Link key={l.label} to={l.href} className="text-chrome-light hover:text-ivory transition-colors font-medium tracking-[0.15em] uppercase text-[13px]">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-3 rounded-full border border-warm-gold/30 text-ivory text-[13px] font-medium text-center tracking-[0.1em]">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
