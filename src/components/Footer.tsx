import { Link } from "react-router-dom";
import { Mail, Globe } from "lucide-react";
import logo from "@/assets/kgs-access-logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero py-20 border-t border-chrome/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src={logo} alt="KGS Access" className="h-10 w-auto mb-4" />
            <p className="text-sm text-chrome-light/70 leading-relaxed">
              A division of Kora Global Systems.
              <br />
              Certified access control infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
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
                  className="text-sm text-chrome-light/60 hover:text-chrome-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="inline-flex items-center gap-2 text-sm text-chrome-light/60 hover:text-chrome-light transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              contact@koraglobalsystems.com
            </a>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4 text-sm uppercase tracking-wider">
              Operating Regions
            </h4>
            <div className="flex items-center gap-2 text-sm text-chrome-light/60">
              <Globe className="w-4 h-4" />
              <span>Europe · Africa</span>
            </div>
          </div>
        </div>

        <div className="border-t border-chrome/10 pt-10 text-center">
          <p className="text-xs text-chrome-light/40">
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
