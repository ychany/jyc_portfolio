"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Archiving", href: "#archiving" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 초기 로드 시 스크롤 위치 체크
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerOffset = 70;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {profileData.name}
              <span className="text-teal-500">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-600 dark:text-gray-300"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  className={`absolute left-0 w-full h-0.5 transition-colors ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-gray-900 dark:bg-white"
                  }`}
                  animate={{
                    top: isMobileMenuOpen ? "50%" : "0%",
                    rotate: isMobileMenuOpen ? 45 : 0,
                    translateY: isMobileMenuOpen ? "-50%" : 0,
                  }}
                />
                <motion.span
                  className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 transition-colors ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-gray-900 dark:bg-white"
                  }`}
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className={`absolute left-0 w-full h-0.5 transition-colors ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-gray-900 dark:bg-white"
                  }`}
                  animate={{
                    bottom: isMobileMenuOpen ? "50%" : "0%",
                    rotate: isMobileMenuOpen ? -45 : 0,
                    translateY: isMobileMenuOpen ? "50%" : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pt-24 px-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-2xl font-semibold text-gray-900 dark:text-white py-3 border-b border-gray-100 dark:border-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={(e) => {
                      scrollToSection(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
