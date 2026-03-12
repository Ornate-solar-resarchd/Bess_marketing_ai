"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Factory, Sun, Zap, Radio, Globe } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const applications = [
  { icon: Building2, title: "Commercial & Industrial", desc: "Cut peak demand charges and ToD tariff costs for offices, malls, and manufacturing plants.", color: "#2997ff" },
  { icon: Sun, title: "Solar Hybrid", desc: "Maximise self-consumption from rooftop solar. Export surplus, import strategically.", color: "#30d158" },
  { icon: Factory, title: "Industrial Facilities", desc: "Uninterruptible backup power and demand-side management for process-critical operations.", color: "#ff9f0a" },
  { icon: Zap, title: "Grid Services", desc: "Frequency regulation, voltage support, and ancillary services under CERC BESS regulations.", color: "#ff375f" },
  { icon: Radio, title: "Microgrids", desc: "Island-mode capability for remote facilities, telecom towers, and off-grid communities.", color: "#bf5af2" },
  { icon: Globe, title: "Utility Scale", desc: "MW to GWh containerised storage for DISCOMs, IPPs, and large renewable developers.", color: "#ffd60a" },
];

export default function ApplicationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f5f5f7] py-28">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.75rem] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4"
          >
            Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-bold text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            One platform. Every scale.
          </motion.h2>
        </div>

        {/* Application cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {applications.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="bg-white rounded-[20px] p-8 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <Icon size={20} style={{ color: app.color }} />
                </div>
                <h3 className="font-display font-semibold text-[#1d1d1f] text-lg mb-2">
                  {app.title}
                </h3>
                <p className="text-[#6e6e73] text-[0.9375rem] leading-relaxed">{app.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-[#06c] text-[1.0625rem] font-medium hover:underline"
          >
            Discuss your project <ChevronRight size={18} className="mt-px" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
