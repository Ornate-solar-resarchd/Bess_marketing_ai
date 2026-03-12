import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "UnityESS Model C — 5–6.25 MWh Utility-Scale Container",
  description: "The UnityESS Model C delivers 5–6.25 MWh per container with liquid cooling and IP55 protection for utility-scale and grid applications.",
  alternates: { canonical: "https://www.ornatesolar.com/bess/products/model-c" },
  openGraph: {
    type: "website",
    title: "UnityESS Model C | 5–6.25 MWh Containerised Battery Storage",
    description: "Utility-scale liquid-cooled LFP containers. Scale from 5 MWh to 75+ MWh. CERC-compliant.",
  },
};

const specs = [
  { label: "Model Variants", value: "C-5MWh / C-6.25MWh" },
  { label: "Energy Capacity", value: "5 MWh / 6.25 MWh per container" },
  { label: "System Voltage", value: "1,164.8–1,497.6 V DC" },
  { label: "Rated Power", value: "2,507.9 kW / 3,125.6 kW" },
  { label: "Round-trip Efficiency", value: "≥ 88%" },
  { label: "Chemistry", value: "LFP (LiFePO₄)" },
  { label: "Cooling", value: "Liquid Cooling" },
  { label: "Container IP Rating", value: "IP55" },
  { label: "Corrosion Grade", value: "C4 (heavy industrial)" },
  { label: "Scalability", value: "Multi-cluster to 75+ MWh" },
  { label: "Communication", value: "Modbus TCP / IEC 61850 / SCADA" },
  { label: "Grid Compliance", value: "CEA Grid Connectivity Standards 2023" },
  { label: "Warranty", value: "10 Years" },
];

const features = [
  "20-foot and 40-foot container options — road-transportable, bolt-down installation",
  "Liquid cooling maintains optimal cell temperature even at 45°C ambient",
  "IP55 enclosure with C4 corrosion protection — suitable for coastal and industrial sites",
  "Multi-cluster architecture: string up to 75+ MWh for utility-scale deployments",
  "IEC 61850 and Modbus TCP comms — direct SCADA integration with DISCOM control rooms",
  "Complies with CERC BESS Regulations 2022 for grid ancillary services",
  "Certified: IEC 62619, UL 1973, UL 9540, UL 9540A, UN 3536",
  "Pre-commissioned at factory — minimal on-site installation time",
];

const certifications = ["IEC 62619", "UL 1973", "UL 9540", "UL 9540A", "UN 3536", "CE", "BIS", "IEC 61000"];

export default function ModelCPage() {
  return (
    <main className="pt-11">
      {/* Breadcrumb */}
      <div className="bg-black border-b border-[#424245]">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center gap-2 text-[0.75rem] text-[#86868b]">
          <Link href="/products" className="flex items-center gap-1 hover:text-[#f5f5f7] transition-colors">
            <ChevronLeft size={14} /> Products
          </Link>
          <span>/</span>
          <span className="text-[#f5f5f7]">Model C</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.75rem] font-semibold text-[#bf5af2] uppercase tracking-widest mb-4">
                Utility Scale · Containerised BESS
              </p>
              <h1
                className="font-display font-bold text-black mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              >
                UnityESS Model C.
              </h1>
              <p className="text-[#86868b] text-xl leading-relaxed mb-8">
                5 to 6.25 MWh per container. Liquid-cooled. Stack to 75+ MWh. Grid-compliant under CERC BESS Regulations 2022.
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
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #bf5af2, transparent)" }}
              />
              <Image
                src="/images/products/model-c-1.png"
                alt="UnityESS Model C containerised battery storage system"
                width={600}
                height={400}
                className="relative z-10 w-full max-w-lg h-auto object-contain"
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
              Grid-ready. Utility-proven.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4 p-5 rounded-[16px] bg-white">
                <CheckCircle2 size={18} className="text-[#bf5af2] flex-shrink-0 mt-0.5" />
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
            Plan your MW-scale project.
          </h2>
          <p className="text-[#86868b] text-xl mb-10 max-w-lg mx-auto">
            Tell us your capacity, site, and grid interconnection requirements — we&apos;ll propose the right multi-cluster configuration.
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
