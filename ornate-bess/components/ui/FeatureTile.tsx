'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureTile({
  icon: Icon,
  title,
  description,
  index,
}: FeatureTileProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated Border Glow */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -inset-0.5 bg-gradient-to-r from-[#22c55e] to-[#3b82f6] rounded-2xl blur opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"
        />
      )}

      {/* Card */}
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 group-hover:border-[#22c55e]/30 transition-all duration-300 p-6 flex flex-col">
        {/* Icon Container */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#22c55e]/20 to-[#3b82f6]/20 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] flex-shrink-0"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 flex-grow leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          {description}
        </p>

        {/* Decorative Element */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: 40 }}
          transition={{ duration: 0.3 }}
          className="mt-4 h-0.5 bg-gradient-to-r from-[#22c55e] to-[#3b82f6]"
        />
      </div>
    </motion.div>
  );
}
