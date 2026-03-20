import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/kgs-access-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep py-12 border-t border-silver-accent/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <img src={logo} alt="KGS Access" className="h-20 w-auto mb-5 opacity-80" />
            <p className="text-sm text-chrome font-light leading-relaxed max-w-[220px]">
              {t("Intelligent access systems.", "Systèmes d'accès intelligents.")}
              <br />
              {t("A Kora Global Systems product line.", "Une gamme de produits Kora Global Systems.")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/60 mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Collection", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-chrome/70 hover:text-ivory transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/60 mb-5">
              {t("Legal", "Juridique")}
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: t("Legal Notice", "Mentions légales"), to: "/legal" },
                { label: t("Terms & Conditions", "Conditions générales"), to: "/terms" },
                { label: t("Compliance", "Conformité"), to: "/compliance" },
                { label: t("Privacy & Data", "Confidentialité"), to: "/privacy" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-chrome/70 hover:text-ivory transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/60 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@koraglobalsystems.com"
                className="inline-flex items-start gap-2.5 text-sm text-chrome/70 hover:text-ivory transition-colors duration-300 font-light"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                contact@koraglobalsystems.com
              </a>
              <div className="inline-flex items-start gap-2.5 text-sm text-chrome/50 font-light">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Europe · {t("Africa", "Afrique")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-silver-accent/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-chrome/40 font-light">
            © {new Date().getFullYear()} Kora Global Systems. {t("All rights reserved.", "Tous droits réservés.")}
          </p>
          <p className="text-[10px] text-chrome/30 font-light">
            {t("Hardware products — no absolute security guarantee.", "Produits matériels — aucune garantie de sécurité absolue.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
