"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-12 md:p-20 border border-green-500/30 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-bold text-sm">Ready to transform your energy?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk text-white mb-6">
              Get Your <span className="gradient-text">Energy Solution</span> Today
            </h2>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Our energy specialists are ready to design the perfect UnityESS system for your unique needs.
              Get a free consultation and custom quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+911800202625"
                className="px-10 py-4 glass rounded-lg font-bold text-white hover:bg-slate-800/50 transition-all border border-slate-600 flex items-center justify-center gap-2"
              >
                Call: 1800 2026 252
              </a>
            </div>

            {/* Trust Statement */}
            <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400">
              <p>
                Trusted by 5000+ customers | ISO 9001 Certified | Made in India | Backed by 10 years of expertise
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
