export interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  tagline: string;
  category: string;
  capacity: string;
  voltage: string;
  image: string;
  features: string[];
  specs: Record<string, string | number>;
  certifications: string[];
  price?: string;
}

export const products: Product[] = [
  {
    id: "model-a",
    name: "Unity Model A",
    model: "UESS-125-261",
    description: "C&I All-in-One Energy Storage System",
    tagline: "Complete all-in-one C&I storage — plug, deploy, earn.",
    category: "Commercial & Industrial",
    capacity: "233–261 kWh",
    voltage: "832V (728–936V)",
    image: "/images/products/model-a-1.png",
    features: [
      "Scalable up to 12 units in parallel",
      "Optimized BMS and inverter performance",
      "Fire-protected compartments with advanced cooling",
      "Reliable across voltage and frequency",
      "IP66 protection, C3–C5 corrosion-resistant enclosure",
      "Liquid cooling for extended battery life",
    ],
    specs: {
      "AC Power": "105 kW / 125 kW",
      "Grid Voltage": "400V (360–440V), 3P+N+PE",
      "Power Factor": "0.99–1",
      "Frequency": "50/60 Hz",
      "Overload": "110% long time, 120% for 1 min",
      "Cell Type": "LFP (Lithium Iron Phosphate)",
      "Nominal Voltage": "832V",
      "Voltage Range": "728–936V",
      "Energy Capacity": "233 kWh / 261 kWh",
      "Charge Rate": "0.5C / 0.5P",
      "Cooling Mode": "Liquid Cooling",
      "Battery Config": "1P525S",
      "IP Rating": "IP66",
      "System Efficiency": "86%",
      "Operating Temp": "-25°C to 60°C (derate above 45°C)",
      "Humidity": "0–95% RH",
      "Fire Suppression": "PACK-level aerosol + Cabin-level aerosol + Water (optional)",
      "Corrosion Grade": "C3-M Standard, C4/C5 available",
      "Communication": "RS485, CAN 2.0, Ethernet, Dry Contact",
      "Noise": "76 dB (1m)",
      "Dimensions": "1100 × 1320 × 2560 mm",
      "Weight": "2600 kg",
    },
    certifications: ["GBT 36276", "UN38.3", "IEC62619", "IEC62477", "IEC61000"],
  },
  {
    id: "model-b",
    name: "Unity Model B",
    model: "B-100 / B-250 / B-500",
    description: "Hybrid Integrated Energy Storage System",
    tagline: "Solar + grid + battery — fully integrated hybrid power.",
    category: "Large Commercial / Industrial",
    capacity: "261–1044 kWh",
    voltage: "600–1000V",
    image: "/images/products/model-b-1.png",
    features: [
      "Durability: High-grade design for all environments",
      "Intelligence: Advanced BMS for safer performance",
      "Safety: Self-contained batteries with enhanced fire safety",
      "Scalability: Flexible DC design for large-scale operations",
      "Control: Easy monitoring and remote management",
      "DC-coupled solar integration, minimized conversion losses",
    ],
    specs: {
      "B-100-261": "100 kW AC / 261 kWh / 110 kW PV peak",
      "B-250-522": "250 kW AC / 522 kWh / 300 kW PV peak",
      "B-500-1044": "500 kW AC / 1044 kWh / 600 kW PV peak",
      "Cell Type": "LFP (Lithium Iron Phosphate)",
      "Battery Voltage Range": "600–1000V",
      "Charge Rate": "0.5C / 0.5P",
      "Cooling Mode": "Intelligent Air Cooling (PCS IP55, Battery IP54)",
      "Grid Voltage": "400V (360–440V), 3N+PE",
      "Power Factor": "0.99 / -0.8 to 0.8 adjustable",
      "Frequency": "50/60 Hz",
      "Overload": "110% long time",
      "PV MPPT Voltage": "200–850V",
      "PV Max Voltage": "1000V",
      "Communication": "RS485, CAN, ETH, Dry Contact",
      "Noise": "75 dB (1m)",
      "Operating Temp": "-25°C to 60°C (derate above 45°C)",
      "Humidity": "5–95% RH",
      "IP Rating": "IP55 (PCS) / IP54 (Battery)",
    },
    certifications: ["GBT 36276", "UN38.3", "IEC62619", "IEC62477", "IEC61000"],
  },
  {
    id: "model-c",
    name: "Unity Model C",
    model: "C-5MWh / C-6.25MWh",
    description: "Container Energy Storage System",
    tagline: "Utility-scale containerized storage — grid-ready, future-proof.",
    category: "Utility Scale",
    capacity: "5–6.25 MWh",
    voltage: "1164.8–1497.6V",
    image: "/images/products/model-c-1.png",
    features: [
      "Smart liquid cooling extends battery life and performance",
      "Cloud-based EMS ensures efficient energy management",
      "Integrated BMS, fire safety and real-time monitoring",
      "Modular design expandable up to 6+ MWh",
      "Corrosion Proof Grade C4",
      "Scalable up to 12 units in parallel",
    ],
    specs: {
      "C-5MWh": "5015.96 kWh / 1331.2V / LFP 3.2V 314Ah / 2507.9 kW (0.5C) / 42T",
      "C-6.25MWh": "6251.3 kWh / 1331.2V / LFP 3.2V 587Ah / 3125.6 kW (0.5C) / 49T",
      "Voltage Range": "1164.8–1497.6V",
      "Cooling Mode": "Liquid Cooling",
      "IP Rating": "Container IP55, Module IP67",
      "Corrosion Grade": "C4",
      "Dimensions": "6058 × 2436 × 2896 mm",
      "Auxiliary Power": "400V AC, 50/60 Hz",
      "Altitude": "≤3000m",
      "Operating Temp": "-30°C to 55°C",
      "Humidity": "100% RH non-condensing",
      "SOC Accuracy": "±3% after balancing",
      "Noise": "75 dB (standard) / 65 dB (silencer option)",
      "Fire Suppression": "Smoke & heat detectors, FACP, ventilation, sprinklers, aerosol",
      "Communication": "CAN, Modbus 485, TCP (CAN recommended)",
    },
    certifications: [
      "IEC62619",
      "UL1973",
      "UL9540",
      "UL9540A",
      "IEC60730-1",
      "IEC63056",
      "IEC62477-1",
      "UN38.3",
      "UN3536",
    ],
  },
  {
    id: "unity-infinity",
    name: "Unity Infinity",
    model: "PHI-POD 1kWh×5",
    description: "Residential Portable Power Supply",
    tagline: "Smart, simple, and modular energy freedom.",
    category: "Residential",
    capacity: "1–5 kWh",
    voltage: "230V AC",
    image: "/images/products/hero-5.jpg",
    features: [
      "Plug-and-play — no installation required",
      "Seamless on-grid / off-grid transition",
      "AI-powered intelligent management",
      "Modular: stack 1 kWh pods up to 5 kWh",
      "LiFePO4 chemistry — safe, long-life",
      "Compact and portable for any space",
    ],
    specs: {
      "Energy Capacity": "1 kWh per pod, 5 kWh max",
      "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
      "Grid Compatibility": "On-grid / Off-grid / Solar-ready",
      "Output": "230V AC",
      "Design": "Modular floor-standing",
      "Management": "AI-powered intelligent system",
      "Monitoring": "Real-time via app",
    },
    certifications: ["BIS", "IEC62619"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductByModel(model: string): Product | undefined {
  return products.find((p) => p.model === model);
}

export const certifications = [
  { code: "IEC62619", name: "Secondary lithium cells — Safety requirements for industrial applications" },
  { code: "IEC62477-1", name: "Safety requirements for power electronic converter systems" },
  { code: "IEC61000", name: "Electromagnetic compatibility (EMC)" },
  { code: "IEC60730-1", name: "Automatic electrical controls — General requirements" },
  { code: "IEC63056", name: "Secondary lithium cells for electrical energy storage systems" },
  { code: "UL1973", name: "Batteries for stationary and motive applications" },
  { code: "UL9540", name: "Energy storage systems and equipment" },
  { code: "UL9540A", name: "Thermal runaway fire propagation test method" },
  { code: "GBT 36276", name: "Lithium-ion battery for electrical energy storage" },
  { code: "UN38.3", name: "Transport of dangerous goods — Lithium batteries testing" },
  { code: "UN3536", name: "Lithium batteries installed in cargo transport unit" },
  { code: "CE", name: "European Conformity marking" },
  { code: "BIS", name: "Bureau of Indian Standards" },
];

export const applications = [
  {
    id: "residential",
    title: "Residential",
    description:
      "Home energy storage for self-consumption, backup power, and solar optimisation. Unity Infinity's plug-and-play pods deliver up to 5 kWh — no installation needed.",
    model: "Unity Infinity",
    benefits: [
      "Backup power during outages",
      "Solar self-consumption up to 95%",
      "ToD tariff arbitrage",
      "Portable, modular design",
    ],
  },
  {
    id: "ci",
    title: "C&I",
    description:
      "Commercial and industrial facilities benefit from peak shaving, demand charge reduction, and uninterrupted power. Model A scales from 233 kWh to multi-MWh in parallel.",
    model: "Unity Model A",
    benefits: [
      "Peak demand shaving",
      "Power quality improvement",
      "Demand charge reduction",
      "Seamless grid-solar integration",
    ],
  },
  {
    id: "solar-hybrid",
    title: "Solar Hybrid",
    description:
      "DC-coupled hybrid systems with MPPT optimisation. Model B integrates solar + grid + battery with minimised conversion losses and up to 600 kW PV input.",
    model: "Unity Model B",
    benefits: [
      "DC-coupled PV integration",
      "MPPT range 200–850V",
      "Up to 600 kW PV input",
      "Maximised solar harvest",
    ],
  },
  {
    id: "grid-services",
    title: "Grid Services",
    description:
      "Frequency regulation, voltage support, spinning reserve, and capacity firming. SCADA-ready communication with CAN, Modbus 485, and TCP protocols.",
    model: "Unity Model B / C",
    benefits: [
      "Frequency regulation",
      "Voltage support",
      "Spinning reserve",
      "Capacity firming",
    ],
  },
  {
    id: "microgrid",
    title: "Microgrid",
    description:
      "Build resilient microgrids for remote locations, industrial parks, or campuses. Lotus-PCS EMS provides cloud-based orchestration of DERs, loads, and grid connection.",
    model: "Unity Model B / C",
    benefits: [
      "Island & grid-tied modes",
      "DER orchestration",
      "Load management",
      "Cloud-based EMS",
    ],
  },
  {
    id: "utility",
    title: "Utility Scale",
    description:
      "Containerised 5–6.25 MWh DC blocks with liquid cooling, advanced BMS, and multi-layer fire safety. Stack up to 75+ MWh in multi-cluster configurations.",
    model: "Unity Model C",
    benefits: [
      "5–6.25 MWh per container",
      "Multi-cluster to 75+ MWh",
      "Liquid cooling standard",
      "C4 corrosion grade",
    ],
  },
];

export const companyInfo = {
  name: "Ornate Solar",
  fullName: "Ornate Agencies Pvt. Ltd.",
  phone: "+91-1800-2026-252",
  phoneDisplay: "1800 2026 252",
  phoneTel: "tel:+911800202625",
  email: "info@ornatesolar.com",
  address: "A-87, Okhla Phase – II, New Delhi, India",
  website: "https://www.ornatesolar.com",
  whatsapp: "https://wa.me/911800202625",
  partner: {
    name: "Inverted Energy",
    website: "https://www.inverted.in",
    email: "info@inverted.in",
  },
  stats: {
    turnover: "₹2,500 Cr+",
    delivered: "10 GW+",
    batteryPacks: "10 GWh+",
    customers: "7,124+",
    manufacturingCapacity: "1 GWh+",
    upcomingCapacity: "6.5 GWh (Q3 2026)",
  },
};
