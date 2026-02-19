import { ShieldCheck, Leaf } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "CE Certified",
    detail: "Radio Equipment Directive — EU/UK accepted",
  },
  {
    icon: Leaf,
    label: "RoHS Compliant",
    detail: "Restriction of Hazardous Substances",
  },
];

const CertificationBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card"
        >
          <b.icon className="w-5 h-5 text-accent" />
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
