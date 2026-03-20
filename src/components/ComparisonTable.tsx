import { Check, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Cell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 text-accent" />
    ) : (
      <Minus className="w-4 h-4 text-muted-foreground" />
    );
  }
  return <span className="text-muted-foreground text-sm">{value}</span>;
};

const ComparisonTable = () => {
  const { t } = useLanguage();

  const rows = [
    { label: t("Body Material", "Matériau du corps"), f7: "Aluminum alloy", f18: "Aluminum alloy" },
    { label: t("Locking System", "Système de verrouillage"), f7: t("Standard mortise", "Mortaise standard"), f18: t("Triple lock (3 bolts)", "Triple verrou (3 pênes)") },
    { label: t("Fingerprint", "Empreinte digitale"), f7: true, f18: true },
    { label: t("Passcode", "Code d'accès"), f7: true, f18: true },
    { label: t("RFID Card", "Carte RFID"), f7: true, f18: true },
    { label: t("Mobile App", "Application mobile"), f7: true, f18: true },
    { label: "Bluetooth", f7: "BLE", f18: "5.0 BLE" },
    { label: t("Wi-Fi (via gateway)", "Wi-Fi (via passerelle)"), f7: true, f18: false },
    { label: t("USB-C Emergency Power", "Alimentation USB-C d'urgence"), f7: true, f18: true },
    { label: t("Fingerprint Capacity", "Capacité empreintes"), f7: "~120", f18: "—" },
    { label: t("IC Card Capacity", "Capacité cartes IC"), f7: "~1,000", f18: "—" },
    { label: t("Unlock Time", "Temps de déverrouillage"), f7: "~1.5s", f18: "—" },
    { label: t("Door Type", "Type de porte"), f7: t("Standard doors", "Portes standard"), f18: t("Reinforced / thick doors", "Portes renforcées / épaisses") },
    { label: t("CE Certified", "Certifié CE"), f7: true, f18: true },
    { label: t("RoHS Compliant", "Conforme RoHS"), f7: true, f18: true },
  ];

  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-hero">
            <th className="text-left px-6 py-4 font-heading font-semibold text-hero-foreground tracking-wide">
              {t("Feature", "Caractéristique")}
            </th>
            <th className="text-center px-6 py-4 font-heading font-semibold text-cyan-glow tracking-wide">
              Sentinel One
            </th>
            <th className="text-center px-6 py-4 font-heading font-semibold text-cyan-glow tracking-wide">
              Sentinel Pro
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
            >
              <td className="px-6 py-3 font-medium text-foreground">
                {row.label}
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center">
                  <Cell value={row.f7} />
                </div>
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center">
                  <Cell value={row.f18} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
