"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  name: string;
  tagClass: string;
  delay?: number;
}

export default function SkillTag({ name, tagClass, delay = 0 }: SkillTagProps) {
  return (
    <motion.span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${tagClass}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {name}
    </motion.span>
  );
}
