export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
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
  name: "F7 Smart Lock",
  subtitle: "Universal Smart Lock",
  positioning: "Modern, reliable smart lock for most standard doors.",
  description:
    "The F7 is designed for easy retrofit installations on standard residential and commercial doors. It combines fingerprint, passcode, RFID, and mobile app control in a sleek aluminum alloy body — delivering secure, keyless access for everyday use.",
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
    "Easy retrofit installation",
    "4 unlock methods",
    "12-month battery life",
    "App-based remote management",
    "CE & RoHS certified",
  ],
};

export const f18: Product = {
  id: "f18",
  name: "F18 Smart Lock",
  subtitle: "Advanced Security Lock",
  positioning: "Advanced lock for thicker, reinforced, or high-security doors.",
  description:
    "The F18 is engineered for doors that demand higher mechanical security. With a triple-bolt locking system, Bluetooth 5.0 BLE, and the same smart unlock methods as the F7, it provides premium protection for reinforced and thick-frame doors.",
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
    "Properties where F7 is not compatible",
  ],
  highlights: [
    "Triple-bolt locking system",
    "Bluetooth 5.0 BLE",
    "Higher mechanical security",
    "4 unlock methods",
    "CE & RoHS certified",
  ],
};

export const allProducts = [f7, f18] as const;
