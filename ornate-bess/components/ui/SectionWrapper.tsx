'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function SectionWrapper({
  children,
  delay = 0,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        ...sectionVariants,
        visible: {
          ...sectionVariants.visible,
          transition: {
            ...sectionVariants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
