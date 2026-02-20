import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/kgs-access-logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep py-20 border-t border-silver-accent/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <img src={logo} alt="KGS Access" className="h-10 w-auto mb-5 opacity-80" />
            <p className="text-sm text-chrome font-light leading-relaxed">
              Intelligent access systems.
              <br />
              A Kora Global Systems product line.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Collection", to: "/products" },
                { label: "Solutions", to: "/solutions" },
                { label: "Compliance", to: "/compliance" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-chrome/80 hover:text-ivory transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="inline-flex items-center gap-2 text-sm text-chrome/80 hover:text-ivory transition-colors duration-300 font-light"
            >
              <Mail className="w-4 h-4" />
              contact@koraglobalsystems.com
            </a>
            <p className="text-xs text-chrome/50 mt-4">
              Europe · Africa
            </p>
          </div>
        </div>

        <div className="border-t border-silver-accent/5 pt-10">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              { label: "Legal Notice", to: "/legal" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Compliance", to: "/compliance" },
              { label: "Privacy & Data", to: "/privacy" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[11px] text-chrome/40 hover:text-chrome/70 transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-chrome/40 font-light text-center">
            © {new Date().getFullYear()} Kora Global Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
