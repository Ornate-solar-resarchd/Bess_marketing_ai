"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/products";

const productMeta: Record<string, { accent: string; href: string }> = {
  "model-a": { accent: "#30d158", href: "/products/model-a" },
  "model-b": { accent: "#2997ff", href: "/products/model-b" },
  "model-c": { accent: "#bf5af2", href: "/products/model-c" },
  "unity-infinity": { accent: "#ff9f0a", href: "/products/model-a" },
};

export default function ProductsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const displayProducts = products.slice(0, 4);

  return (
    <section className="bg-[#f5f5f7] py-28" id="products">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.75rem] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4"
          >
            Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-bold text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            The complete UnityESS lineup.
          </motion.h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {displayProducts.map((product, i) => {
            const meta = productMeta[product.id] ?? { accent: "#2997ff", href: "/products" };

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={meta.href}
                  className="group block bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image area */}
                  <div className="relative bg-[#f5f5f7] aspect-[16/10] flex items-center justify-center px-8 pt-8">
                    {/* Subtle glow behind product */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${meta.accent}, transparent)`,
                      }}
                    />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text area */}
                  <div className="p-8">
                    {/* Category badge */}
                    <span
                      className="text-[0.6875rem] font-semibold uppercase tracking-widest"
                      style={{ color: meta.accent }}
                    >
                      {product.category}
                    </span>

                    <h3 className="font-display font-bold text-[#1d1d1f] text-xl mt-2 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[#6e6e73] text-[0.9375rem] mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="text-[0.6875rem] text-[#86868b]">Capacity</div>
                        <div className="font-mono font-semibold text-[#1d1d1f] text-sm">
                          {product.capacity}
                        </div>
                      </div>
                      <div className="w-px h-8 bg-[#d2d2d7]" />
                      <div>
                        <div className="text-[0.6875rem] text-[#86868b]">Voltage</div>
                        <div className="font-mono font-semibold text-[#1d1d1f] text-sm">
                          {product.voltage}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-[#06c] text-[0.9375rem] font-medium">
                      Learn more <ChevronRight size={16} className="mt-px group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-[#06c] text-[1.0625rem] font-medium hover:underline"
          >
            Compare all models <ChevronRight size={18} className="mt-px" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
