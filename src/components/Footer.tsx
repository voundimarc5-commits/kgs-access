import { Link } from "react-router-dom";
import { Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-16 border-t border-chrome/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl text-hero-foreground mb-3">
              KGS Access
            </h3>
            <p className="text-sm text-chrome-light">
              A division of Kora Global Systems.
              <br />
              Secure access. Simplified.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-3">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Products", to: "/products" },
                { label: "Solutions", to: "/solutions" },
                { label: "Compliance", to: "/compliance" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-chrome-light hover:text-cyan-glow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-3">
              Contact
            </h4>
            <a
              href="mailto:contact@google.cm.com"
              className="inline-flex items-center gap-2 text-sm text-chrome-light hover:text-cyan-glow transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@google.cm.com
            </a>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-3">
              Operating Regions
            </h4>
            <div className="flex items-center gap-2 text-sm text-chrome-light">
              <Globe className="w-4 h-4" />
              <span>United Kingdom · Europe</span>
            </div>
          </div>
        </div>

        <div className="border-t border-chrome/20 pt-8 text-center">
          <p className="text-xs text-chrome-light">
            © {new Date().getFullYear()} Kora Global Systems. All rights reserved.
            <br />
            KGS Access is a division of Kora Global Systems, a US-registered company.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
