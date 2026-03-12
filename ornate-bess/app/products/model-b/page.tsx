import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "UnityESS Model B — 261–1,044 kWh Hybrid Storage",
  description: "The UnityESS Model B is a DC-coupled hybrid storage system integrating LFP batteries with solar MPPT for medium commercial and industrial projects.",
  alternates: { canonical: "https://www.ornatesolar.com/bess/products/model-b" },
  openGraph: {
    type: "website",
    title: "UnityESS Model B | 261–1,044 kWh Hybrid LFP Storage",
    description: "DC-coupled hybrid BESS with integrated MPPT for solar-plus-storage projects from 100 kW to 500 kW.",
  },
};

const specs = [
  { label: "Model Variants", value: "B-100-261 / B-250-522 / B-500-1044" },
  { label: "Energy Capacity", value: "261 / 522 / 1,044 kWh" },
  { label: "System Voltage", value: "600–1,000 V DC" },
  { label: "Rated Power", value: "100 / 250 / 500 kW" },
  { label: "Coupling", value: "DC-coupled (solar MPPT integrated)" },
  { label: "PV MPPT Voltage", value: "200–850 V DC" },
  { label: "Round-trip Efficiency", value: "≥ 88%" },
  { label: "Chemistry", value: "LFP (LiFePO₄)" },
  { label: "Cooling", value: "Intelligent Air Cooling" },
  { label: "IP Rating", value: "IP54" },
  { label: "Cycle Life", value: "≥ 6,000 cycles" },
  { label: "Communication", value: "CAN / RS485 / Modbus" },
  { label: "Warranty", value: "10 Years" },
];

const features = [
  "DC-coupled architecture — direct PV integration without separate inverter losses",
  "Built-in MPPT for up to 600 kW of solar input across all variants",
  "Intelligent air-cooling with temperature-adaptive fan management",
  "Power factor adjustable from -0.8 to +0.8 for reactive power support",
  "Scalable: stack B-100, B-250, B-500 units for MW-scale systems",
  "Battery cells pre-sorted to ±0.5 mAh capacity tolerance before assembly",
  "On-board energy management — pre-configured ToD scheduling modes",
  "IEC 62619, IEC 62477, UN 38.3, and CE certified",
];

const certifications = ["IEC 62619", "IEC 62477-1", "IEC 61000", "UN 38.3", "CE", "BIS"];

export default function ModelBPage() {
  return (
    <main className="pt-11">
      {/* Breadcrumb */}
      <div className="bg-black border-b border-[#424245]">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center gap-2 text-[0.75rem] text-[#86868b]">
          <Link href="/products" className="flex items-center gap-1 hover:text-[#f5f5f7] transition-colors">
            <ChevronLeft size={14} /> Products
          </Link>
          <span>/</span>
          <span className="text-[#f5f5f7]">Model B</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.75rem] font-semibold text-[#2997ff] uppercase tracking-widest mb-4">
                Hybrid C&amp;I Storage · DC-Coupled
              </p>
              <h1
                className="font-display font-bold text-black mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              >
                UnityESS Model B.
              </h1>
              <p className="text-[#86868b] text-xl leading-relaxed mb-8">
                DC-coupled solar-plus-storage in a single system. From 261 kWh to 1,044 kWh, with integrated MPPT for up to 600 kW of PV.
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
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #2997ff, transparent)" }}
              />
              <Image
                src="/images/products/model-b-1.png"
                alt="UnityESS Model B battery storage system"
                width={500}
                height={400}
                className="relative z-10 w-full max-w-md h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
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
              Engineered for solar integration.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4 p-5 rounded-[16px] bg-white">
                <CheckCircle2 size={18} className="text-[#2997ff] flex-shrink-0 mt-0.5" />
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
            Size your Model B system.
          </h2>
          <p className="text-[#86868b] text-xl mb-10 max-w-lg mx-auto">
            Share your solar capacity and load data — we&apos;ll recommend the right variant.
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
