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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hero-bg/90 backdrop-blur-md border-b border-chrome/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="KGS Access" className="h-9 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 text-sm text-chrome-light hover:text-cyan-glow transition-colors font-medium"
            >
              Products
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-chrome/20 bg-hero-bg/95 backdrop-blur-md shadow-lg py-2">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm text-chrome-light hover:text-cyan-glow hover:bg-chrome/10 transition-colors"
                >
                  All Products
                </Link>
                <Link
                  to="/products/f7"
                  className="block px-4 py-2 text-sm text-chrome-light hover:text-cyan-glow hover:bg-chrome/10 transition-colors"
                >
                  F7 Smart Lock
                </Link>
                <Link
                  to="/products/f18"
                  className="block px-4 py-2 text-sm text-chrome-light hover:text-cyan-glow hover:bg-chrome/10 transition-colors"
                >
                  F18 Smart Lock
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-sm text-chrome-light hover:text-cyan-glow transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-gradient-accent text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-hero-bg/95 backdrop-blur-md border-t border-chrome/20 px-6 py-6 flex flex-col gap-4">
          <Link
            to="/products"
            className="text-chrome-light hover:text-cyan-glow transition-colors font-medium"
          >
            Products
          </Link>
          <Link
            to="/products/f7"
            className="text-chrome-light hover:text-cyan-glow transition-colors font-medium pl-4 text-sm"
          >
            F7 Smart Lock
          </Link>
          <Link
            to="/products/f18"
            className="text-chrome-light hover:text-cyan-glow transition-colors font-medium pl-4 text-sm"
          >
            F18 Smart Lock
          </Link>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-chrome-light hover:text-cyan-glow transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-3 rounded-lg bg-gradient-accent text-primary-foreground text-sm font-semibold text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
