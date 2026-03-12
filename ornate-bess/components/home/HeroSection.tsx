"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-11"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,151,255,0.08) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: textY, opacity }}
      >
        {/* Category label */}
        <motion.p
          variants={item}
          className="text-[0.75rem] font-medium text-[#86868b] tracking-widest uppercase mb-4"
        >
          UnityESS by Ornate Solar
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="text-black font-display font-bold leading-[1.05] tracking-tighter mb-5"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Energy storage.
          <br />
          <span className="text-[#86868b]">Reimagined.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-[#86868b] text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
        >
          From 261 kWh to multi-MWh scale. India&apos;s most advanced
          LFP battery storage systems for C&amp;I and utility projects.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2997ff] text-white text-[1.0625rem] font-medium hover:bg-[#0077ed] transition-colors duration-150"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-[#2997ff] text-[1.0625rem] font-medium hover:text-[#5ac8fa] transition-colors duration-150"
          >
            Get a Quote <ChevronRight size={18} className="mt-px" />
          </Link>
        </motion.div>

        {/* Certifications strip */}
        <motion.div variants={item} className="flex items-center gap-6 text-[0.75rem] text-[#6e6e73] mb-12">
          {["IEC 62619", "IEC 62477", "BIS Certified", "IP66 Rated", "10-Year Warranty"].map((cert) => (
            <span key={cert} className="hidden sm:block">{cert}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Product image with parallax */}
      <motion.div
        className="relative z-10 w-full flex justify-center px-6 pb-0"
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative w-full max-w-2xl">
          {/* Glow behind image */}
          <div
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(41,151,255,0.15), transparent)",
              transform: "translateY(10%)",
            }}
          />
          <Image
            src="/images/products/model-a-1.png"
            alt="UnityESS Model A Battery Storage System"
            width={600}
            height={700}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000)",
        }}
      />
    </section>
  );
}
