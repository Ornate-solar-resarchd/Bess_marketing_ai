"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Headphones, TrendingUp, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Decades of combined experience in energy storage and battery technology.",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized as India's premium BESS provider with proven track record.",
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Quick installation and integration with minimal site disruption.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services. Call 1800 2026 252 or email info@ornatesolar.com.",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Rapid payback periods with verified energy savings and incentive eligibility.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Reduce carbon footprint and support clean energy transition goals.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-grotesk mb-6">
            Why Choose <span className="gradient-text">Ornate Solar?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            More than 10 years of excellence in energy storage solutions for Indian businesses and homes.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={index} variants={item}>
                <div className="glass rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all group h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold font-grotesk text-white mb-3 group-hover:text-green-500 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
