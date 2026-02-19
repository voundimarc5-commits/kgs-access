import { Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-16 border-t border-chrome/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl text-hero-foreground mb-3">
              KGS Access
            </h3>
            <p className="text-sm text-chrome-light">
              A product of KORA Global Systems.
              <br />
              Secure, intelligent, scalable access control.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-3">Contact</h4>
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
              <span>Africa · Europe</span>
            </div>
          </div>
        </div>

        <div className="border-t border-chrome/20 pt-8 text-center">
          <p className="text-xs text-chrome-light">
            © {new Date().getFullYear()} KORA Global Systems. All rights reserved.
            <br />
            KGS Access is a product of KORA Global Systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
