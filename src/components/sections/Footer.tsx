"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#111] text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} JO YEONG CHAN. All rights reserved.
          </motion.p>

          {/* Quick Links */}
          <motion.nav
            className="flex gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#about" className="hover:text-teal-500 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-teal-500 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-teal-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-teal-500 transition-colors">
              Contact
            </a>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}
