"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Brain, BarChart2, Battery, Plug } from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "LFP Chemistry",
    desc: "Lithium Iron Phosphate cells deliver 6,000+ cycles, inherent thermal stability, and a 15-year design life.",
  },
  {
    icon: Zap,
    title: "97% Efficiency",
    desc: "Industry-leading round-trip efficiency means more usable energy and faster payback on every installation.",
  },
  {
    icon: Shield,
    title: "IEC 62619 Certified",
    desc: "Every system passes rigorous international safety testing — UL 9540, IEC 62477, BIS, and CE certified.",
  },
  {
    icon: Brain,
    title: "Smart BMS",
    desc: "Multi-layer Battery Management System monitors 40+ parameters in real time, auto-balancing each cell.",
  },
  {
    icon: BarChart2,
    title: "ToD Arbitrage",
    desc: "Shift loads from peak to off-peak tariff windows automatically. Typical C&I payback in 3–4 years.",
  },
  {
    icon: Plug,
    title: "AC & DC Coupled",
    desc: "Modular AC or DC coupling integrates with any solar inverter brand, existing or greenfield installations.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-28">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4"
          >
            Why UnityESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-bold text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Built for the real world.
          </motion.h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#424245]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="bg-white p-8 flex flex-col gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center  rounded-xl bg-white">
                  <Icon size={60} className="text-[#2997ff]" />
                </div>
                <h3 className="font-display font-semibold text-white text-xl">
                  {feature.title}
                </h3>
                <p className="text-[#86868b] text-[0.9375rem] leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
