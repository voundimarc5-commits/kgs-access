import badgeCE from "@/assets/badge-ce.jpg";
import badgeRoHS from "@/assets/badge-rohs.jpg";

const badges = [
  {
    image: badgeCE,
    label: "CE Certified",
    detail: "Radio Equipment Directive — EU compliant",
  },
  {
    image: badgeRoHS,
    label: "RoHS Compliant",
    detail: "Restriction of Hazardous Substances",
  },
];

const CertificationBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-4 px-6 py-4 rounded-xl border border-border bg-card shadow-card"
        >
          <img
            src={b.image}
            alt={b.label}
            className="w-12 h-12 object-contain rounded"
          />
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
