import { ShieldCheck } from "lucide-react";

const badges = [
  {
    label: "CE Certified",
    detail: "Radio Equipment Directive — EU compliant",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
        <span className="text-lg font-bold text-accent tracking-tight">CE</span>
      </div>
    ),
  },
  {
    label: "RoHS Compliant",
    detail: "Restriction of Hazardous Substances",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
        <ShieldCheck className="w-6 h-6 text-emerald-400" />
      </div>
    ),
  },
];

const CertificationBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-4 px-6 py-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/20 transition-all duration-500"
        >
          {b.icon}
          <div>
            <p className="font-heading font-semibold text-sm text-foreground">
              {b.label}
            </p>
            <p className="text-xs text-muted-foreground">{b.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationBadges;
