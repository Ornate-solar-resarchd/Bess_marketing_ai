"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  href: string;
  accent?: string;
  dark?: boolean;
}

export default function ProductCard({
  product,
  href,
  accent = "#2997ff",
  dark = false,
}: ProductCardProps) {
  const bg = dark ? "#1d1d1f" : "#ffffff";
  const titleColor = dark ? "#f5f5f7" : "#1d1d1f";
  const textColor = dark ? "#86868b" : "#6e6e73";
  const dividerColor = dark ? "#424245" : "#d2d2d7";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-[20px] overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <Link href={href} className="block h-full">
        {/* Image */}
        <div
          className="relative aspect-square flex items-center justify-center p-8"
          style={{ backgroundColor: dark ? "#000" : "#f5f5f7" }}
        >
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 60%, ${accent}, transparent)`,
            }}
          />
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <span
            className="text-[0.6875rem] font-semibold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {product.category}
          </span>
          <h3
            className="font-display font-bold text-xl mt-1 mb-1"
            style={{ color: titleColor }}
          >
            {product.name}
          </h3>
          <p className="text-[0.875rem] mb-4 line-clamp-2" style={{ color: textColor }}>
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div>
              <div className="text-[0.625rem] uppercase tracking-wider" style={{ color: textColor }}>
                Capacity
              </div>
              <div className="font-mono font-semibold text-sm" style={{ color: titleColor }}>
                {product.capacity}
              </div>
            </div>
            <div className="w-px h-7" style={{ backgroundColor: dividerColor }} />
            <div>
              <div className="text-[0.625rem] uppercase tracking-wider" style={{ color: textColor }}>
                Voltage
              </div>
              <div className="font-mono font-semibold text-sm" style={{ color: titleColor }}>
                {product.voltage}
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-1 text-[0.9375rem] font-medium"
            style={{ color: accent }}
          >
            Learn more{" "}
            <ChevronRight
              size={16}
              className="mt-px group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
