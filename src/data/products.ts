export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  commercialName: string;
  subtitle: string;
  positioning: string;
  description: string;
  specs: ProductSpec[];
  unlockMethods: string[];
  certifications: string[];
  targetUseCases: string[];
  highlights: string[];
}

export const f7: Product = {
  id: "f7",
  name: "KGS Sentinel One",
  commercialName: "Sentinel One",
  subtitle: "Standard Access Control",
  positioning: "Precision-engineered smart lock for standard residential and commercial doors.",
  description:
    "Sentinel One delivers secure, keyless access through four independent authentication methods. Designed for retrofit installations on standard door frames, it combines semiconductor biometrics, encrypted passcodes, RFID credentials, and mobile app control in a single aluminum alloy unit.",
  specs: [
    { label: "Body Material", value: "Aluminum alloy" },
    { label: "Fingerprint Sensor", value: "Semiconductor (capacitive)" },
    { label: "Fingerprint Capacity", value: "~120 users" },
    { label: "IC Card Capacity", value: "~1,000" },
    { label: "Password Mode", value: "Dynamic / unlimited" },
    { label: "Unlock Time", value: "~1.5 seconds" },
    { label: "Connectivity", value: "Bluetooth BLE + Wi-Fi (via gateway)" },
    { label: "App Compatibility", value: "Tuya + TTLock" },
    { label: "Emergency Power", value: "USB-C" },
    { label: "Battery", value: "4× AA (12 months typical)" },
    { label: "Operating Voltage", value: "4.5–9V" },
    { label: "Door Compatibility", value: "Standard mortise types" },
  ],
  unlockMethods: [
    "Fingerprint",
    "Passcode",
    "RFID Card",
    "Mobile App (Tuya / TTLock)",
  ],
  certifications: ["CE (RED Directive — EU/UK compliant)", "RoHS"],
  targetUseCases: [
    "Apartments & houses",
    "Airbnb & short-term rentals",
    "Rental properties",
    "Modern residential doors",
  ],
  highlights: [
    "Retrofit installation — no wiring",
    "Four authentication methods",
    "12-month battery autonomy",
    "Remote management via app",
    "CE & RoHS certified",
  ],
};

export const f18: Product = {
  id: "f18",
  name: "KGS Sentinel Pro",
  commercialName: "Sentinel Pro",
  subtitle: "Advanced Security Control",
  positioning: "Reinforced access system for high-security and thick-frame doors.",
  description:
    "Sentinel Pro is engineered for environments that demand elevated mechanical resistance. Its triple-bolt locking architecture, combined with Bluetooth 5.0 BLE connectivity and four-method authentication, provides institutional-grade protection for reinforced door frames.",
  specs: [
    { label: "Body Material", value: "Aluminum alloy" },
    { label: "Locking System", value: "Triple lock (3 bolts)" },
    { label: "Fingerprint Sensor", value: "Semiconductor (capacitive)" },
    { label: "Connectivity", value: "Bluetooth 5.0 BLE" },
    { label: "App Compatibility", value: "Tuya + TTLock" },
    { label: "Emergency Power", value: "USB-C" },
    { label: "Battery", value: "4× AA" },
    { label: "Mechanical Security", value: "Higher-grade" },
    { label: "Door Compatibility", value: "Reinforced / thick doors" },
  ],
  unlockMethods: [
    "Fingerprint",
    "Passcode",
    "RFID Card",
    "Mobile App (Tuya / TTLock)",
  ],
  certifications: ["CE (EU conformity)", "RoHS"],
  targetUseCases: [
    "Reinforced doors",
    "Thick-frame doors",
    "High-security properties",
    "Properties where Sentinel One is not compatible",
  ],
  highlights: [
    "Triple-bolt locking architecture",
    "Bluetooth 5.0 BLE",
    "Higher mechanical resistance",
    "Four authentication methods",
    "CE & RoHS certified",
  ],
};

export const allProducts = [f7, f18] as const;
