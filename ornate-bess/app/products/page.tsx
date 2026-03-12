import { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "UnityESS Battery Energy Storage Systems — from 261 kWh C&I to multi-MWh utility-scale. Compare Model A, B, and C.",
};

const productLinks: Record<string, string> = {
  "model-a": "/products/model-a",
  "model-b": "/products/model-b",
  "model-c": "/products/model-c",
  "unity-infinity": "/products/model-a",
};

const productAccents: Record<string, string> = {
  "model-a": "#30d158",
  "model-b": "#2997ff",
  "model-c": "#bf5af2",
  "unity-infinity": "#ff9f0a",
};

const specRows = [
  { label: "Capacity", values: ["233–261 kWh", "261–1,044 kWh", "5–6.25 MWh"] },
  { label: "System Voltage", values: ["728–936 V DC", "600–1,000 V DC", "1,164–1,497 V DC"] },
  { label: "Power Rating", values: ["105 / 125 kW", "100 / 250 / 500 kW", "2,507 / 3,125 kW"] },
  { label: "Chemistry", values: ["LFP", "LFP", "LFP"] },
  { label: "Cooling", values: ["Liquid", "Intelligent Air", "Liquid"] },
  { label: "Protection", values: ["IP66", "IP54", "IP55 Container"] },
  { label: "Round-trip Efficiency", values: ["≥ 86%", "≥ 88%", "≥ 88%"] },
  { label: "Cycle Life", values: ["≥ 6,000 cycles", "≥ 6,000 cycles", "≥ 6,000 cycles"] },
  { label: "Communication", values: ["CAN / Modbus", "CAN / RS485", "Modbus TCP / SCADA"] },
  { label: "Warranty", values: ["10 Years", "10 Years", "10 Years"] },
];

export default function ProductsPage() {
  const mainProducts = products.filter((p) => ["model-a", "model-b", "model-c"].includes(p.id));

  return (
    <main className="pt-11">
      {/* Hero */}
      <section className="relative py-28 text-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/WhatsApp Video 2026-03-12 at 4.28.14 PM.mp4"
        />
        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <p className="text-[1.75rem] font-semibold text-white uppercase tracking-widest mb-4">
            UnityESS Products
          </p>
          <h1
            className="font-display font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            Choose your scale.
          </h1>
          <p className="text-white text-2xl max-w-xl mx-auto mb-10">
            Every UnityESS system is built on the same LFP platform — scalable from a single C&amp;I unit to multi-MWh utility arrays.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-[#2997ff] text-[1.0625rem] font-medium hover:text-[#5ac8fa] transition-colors"
          >
            Get a custom quote <ChevronRight size={18} className="mt-px" />
          </Link>
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {mainProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                href={productLinks[product.id] ?? "/products"}
                accent={productAccents[product.id] ?? "#2997ff"}
                dark={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing: Deployed at Scale ── */}
      <section className="relative h-[520px] overflow-hidden">
        <Image
          src="/images/products/hero-3.jpg"
          alt="UnityESS BESS deployed at wind farm"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-screen-xl mx-auto px-6">
          <p className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-3">
            Field Proven
          </p>
          <h2
            className="font-display font-bold text-white max-w-xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            Deployed at scale.<br />Built for India.
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-md">
            From C&amp;I rooftops to utility-scale wind farms — UnityESS systems are live across the grid.
          </p>
        </div>
      </section>

      {/* ── Marketing: "The Future of Battery" ── */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/products/page-2.png"
          alt="The Future of Battery Designed Today"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* ── Marketing: Manufacturing Excellence ── */}
      <section className="bg-[#1d1d1f] py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4">
                Manufacturing
              </p>
              <h2
                className="font-display font-bold text-white mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.025em" }}
              >
                Precision-built.<br />Every cell, every pack.
              </h2>
              <p className="text-[#86868b] text-lg leading-relaxed mb-6">
                Our state-of-the-art facility combines automated robotic assembly with rigorous quality control — ensuring every UnityESS unit leaves the factory ready for a decade of service.
              </p>
              <ul className="space-y-3">
                {[
                  "6.5 GWh annual production capacity",
                  "Automated robotic cell assembly lines",
                  "ISO-certified cleanroom manufacturing",
                  "100% end-of-line BMS validation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#a1a1a6] text-[0.9375rem]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#30d158] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/hero-4.png"
                  alt="UnityESS manufacturing facility"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/hero-6.png"
                  alt="Robotic battery assembly"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
              <div className="relative col-span-2 aspect-[16/7] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/page-5.png"
                  alt="Inverted Energy 6.5 GWh production plant"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4">
              Compare
            </p>
            <h2
              className="font-display font-bold text-[#1d1d1f]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
            >
              Side-by-side specifications.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-[#d2d2d7]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="p-5 text-left text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest w-40">
                    Specification
                  </th>
                  {[
                    { label: "Model A", color: "#30d158" },
                    { label: "Model B", color: "#2997ff" },
                    { label: "Model C", color: "#bf5af2" },
                  ].map(({ label, color }) => (
                    <th
                      key={label}
                      className="p-5 text-left text-[0.875rem] font-bold"
                      style={{ color }}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"}
                  >
                    <td className="p-5 text-[0.8125rem] font-medium text-[#6e6e73] border-b border-[#d2d2d7]">
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className="p-5 text-[0.9375rem] text-[#1d1d1f] border-b border-[#d2d2d7]"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2
            className="font-display font-bold text-black mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Ready to get started?
          </h2>
          <p className="text-[#86868b] text-xl mb-10 max-w-xl mx-auto">
            Our engineers will design the optimal UnityESS configuration for your site, load profile, and tariff structure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2997ff] text-white text-[1.0625rem] font-medium hover:bg-[#0077ed] transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+911800-2026-252"
              className="inline-flex items-center gap-1 text-[#2997ff] text-[1.0625rem] font-medium hover:text-[#5ac8fa] transition-colors"
            >
              Call 1800-2026-252 <ChevronRight size={18} className="mt-px" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
