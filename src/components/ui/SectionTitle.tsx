"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold mb-12 relative inline-block ${
        light ? "text-white" : "text-gray-900"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-2 left-0 h-1 bg-teal-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.h2>
  );
}
