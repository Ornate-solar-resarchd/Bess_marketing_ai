"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "₹2,500 Cr+", label: "Annual Revenue" },
  { value: "10 GW+", label: "Solar Delivered" },
  { value: "10 GWh+", label: "Battery Packs" },
  { value: "7,124+", label: "Happy Customers" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#f5f5f7] py-24">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center"
            >
              <span
                className="font-display font-bold text-[#1d1d1f] mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>
              <span className="text-[#6e6e73] text-base">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
