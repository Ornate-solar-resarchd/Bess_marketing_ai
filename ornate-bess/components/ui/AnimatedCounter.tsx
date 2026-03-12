'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.round(latest * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return rounded.toFixed(decimals);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} style={{ fontFamily: 'var(--font-orbitron)' }}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </motion.span>
  );
}
