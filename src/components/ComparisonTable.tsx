import { Check, Minus } from "lucide-react";

const rows = [
  { label: "Body Material", f7: "Aluminum alloy", f18: "Aluminum alloy" },
  { label: "Locking System", f7: "Standard mortise", f18: "Triple lock (3 bolts)" },
  { label: "Fingerprint", f7: true, f18: true },
  { label: "Passcode", f7: true, f18: true },
  { label: "RFID Card", f7: true, f18: true },
  { label: "Mobile App", f7: true, f18: true },
  { label: "Bluetooth", f7: "BLE", f18: "5.0 BLE" },
  { label: "Wi-Fi (via gateway)", f7: true, f18: false },
  { label: "USB-C Emergency Power", f7: true, f18: true },
  { label: "Fingerprint Capacity", f7: "~120", f18: "—" },
  { label: "IC Card Capacity", f7: "~1,000", f18: "—" },
  { label: "Unlock Time", f7: "~1.5s", f18: "—" },
  { label: "Door Type", f7: "Standard doors", f18: "Reinforced / thick doors" },
  { label: "CE Certified", f7: true, f18: true },
  { label: "RoHS Compliant", f7: true, f18: true },
];

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
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-hero">
            <th className="text-left px-6 py-4 font-heading font-semibold text-hero-foreground tracking-wide">
              Feature
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
