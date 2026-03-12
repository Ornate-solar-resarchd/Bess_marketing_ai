"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "IEC 62619", detail: "Battery safety for secondary lithium cells" },
  { name: "IEC 62477-1", detail: "Power electronic converter systems" },
  { name: "UL 9540", detail: "Energy storage system standard" },
  { name: "UL 9540A", detail: "Large-scale fire testing" },
  { name: "GBT 36276", detail: "Chinese national battery standard" },
  { name: "UN 38.3", detail: "Transport safety for lithium batteries" },
  { name: "CE Marked", detail: "European conformity declaration" },
  { name: "BIS Certified", detail: "Bureau of Indian Standards IS 16270" },
];

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-28">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4"
          >
            Safety & Compliance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-bold text-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Certified to the highest standards.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#424245]">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="bg-white p-6 flex flex-col gap-3"
            >
              <CheckCircle2 size={26} className="text-[#30d158]" />
              <span className="font-display font-semibold text-black text-base">{cert.name}</span>
              <span className="text-[#86868b] text-[0.8125rem] leading-snug">{cert.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
