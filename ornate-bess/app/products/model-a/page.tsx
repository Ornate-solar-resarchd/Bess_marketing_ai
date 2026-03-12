import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "UnityESS Model A — 261 kWh C&I Battery Storage",
  description: "The UnityESS Model A (UESS-125-261) delivers 261 kWh of LFP storage with liquid cooling and IP66 protection for commercial and industrial applications.",
  alternates: { canonical: "https://www.ornatesolar.com/bess/products/model-a" },
  openGraph: {
    type: "website",
    title: "UnityESS Model A | 261 kWh LFP Battery Storage System",
    description: "All-in-one 261 kWh LFP BESS for C&I with liquid cooling, 86% efficiency, and 10-year warranty.",
  },
};

const specs = [
  { label: "Model", value: "UESS-125-261" },
  { label: "Energy Capacity", value: "233–261 kWh" },
  { label: "System Voltage", value: "728–936 V DC" },
  { label: "Rated Power", value: "105 kW (cont.) / 125 kW (peak)" },
  { label: "Round-trip Efficiency", value: "≥ 86%" },
  { label: "Chemistry", value: "LFP (LiFePO₄)" },
  { label: "Cooling", value: "Liquid Cooling" },
  { label: "Cycle Life", value: "≥ 6,000 cycles" },
  { label: "IP Rating", value: "IP66" },
  { label: "Operating Temp.", value: "-20°C to +55°C" },
  { label: "Communication", value: "CAN / Modbus TCP" },
  { label: "Warranty", value: "10 Years" },
];

const features = [
  "All-in-one containerised design — PCS, BMS, and cells in a single unit",
  "Liquid cooling system for consistent thermal management in Indian climate",
  "IP66-rated enclosure — suitable for outdoor installation",
  "Multi-layer BMS monitors 40+ parameters per cell cluster in real time",
  "ToD arbitrage and peak-shaving pre-configured out of the box",
  "IEC 62619, IEC 62477, GBT 36276, and UN 38.3 certified",
  "Modular AC coupling — integrates with any existing solar inverter brand",
  "Remote monitoring via Ornate SCADA portal and mobile app",
];

const certifications = ["IEC 62619", "IEC 62477-1", "IEC 61000", "GBT 36276", "UN 38.3", "CE", "BIS"];

export default function ModelAPage() {
  return (
    <main className="pt-11">
      {/* Breadcrumb */}
      <div className="bg-black border-b border-[#424245]">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center gap-2 text-[0.75rem] text-[#86868b]">
          <Link href="/products" className="flex items-center gap-1 hover:text-[#f5f5f7] transition-colors">
            <ChevronLeft size={14} /> Products
          </Link>
          <span>/</span>
          <span className="text-[#f5f5f7]">Model A</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[0.75rem] font-semibold text-[#30d158] uppercase tracking-widest mb-4">
                C&amp;I Storage · UESS-125-261
              </p>
              <h1
                className="font-display font-bold text-black mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              >
                UnityESS Model A.
              </h1>
              <p className="text-[#86868b] text-xl leading-relaxed mb-8">
                261 kWh of liquid-cooled LFP storage. IP66-rated. Made for Indian commercial rooftops and industrial yards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2997ff] text-white text-[1.0625rem] font-medium hover:bg-[#0077ed] transition-colors"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+911800-2026-252"
                  className="inline-flex items-center gap-1 text-[#2997ff] text-[1.0625rem] font-medium hover:text-[#5ac8fa] transition-colors"
                >
                  Call Us <ChevronRight size={18} className="mt-px" />
                </a>
              </div>
            </div>

            {/* Product image */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #30d158, transparent)" }}
              />
              <Image
                src="/images/products/model-a-1.png"
                alt="UnityESS Model A battery storage system"
                width={500}
                height={600}
                className="relative z-10 w-full max-w-md h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key specs */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[0.75rem] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">Specifications</p>
            <h2
              className="font-display font-bold text-[#1d1d1f]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
            >
              Full technical details.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[20px] border border-[#d2d2d7] bg-white">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"}>
                    <td className="p-5 text-[0.8125rem] font-medium text-[#6e6e73] border-b border-[#d2d2d7] w-48">
                      {spec.label}
                    </td>
                    <td className="p-5 text-[0.9375rem] text-[#1d1d1f] font-medium border-b border-[#d2d2d7]">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4">Features</p>
            <h2
              className="font-display font-bold text-black"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
            >
              Engineered for reliability.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4 p-5 rounded-[16px] bg-white">
                <CheckCircle2 size={18} className="text-[#30d158] flex-shrink-0 mt-0.5" />
                <p className="text-black text-[0.9375rem] leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[0.75rem] font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">Certifications</p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-full bg-white border border-[#d2d2d7] text-[0.8125rem] font-medium text-[#1d1d1f]"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2
            className="font-display font-bold text-black mb-5"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
          >
            Ready to deploy Model A?
          </h2>
          <p className="text-[#86868b] text-xl mb-10 max-w-lg mx-auto">
            Our engineering team will assess your site and design the right configuration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2997ff] text-white text-[1.0625rem] font-medium hover:bg-[#0077ed] transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-[#2997ff] text-[1.0625rem] font-medium hover:text-[#5ac8fa] transition-colors"
            >
              Compare all models <ChevronRight size={18} className="mt-px" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
