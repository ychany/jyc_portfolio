"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = useCallback(async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    setIsMobileMenuOpen(false);
    try {
      const { generatePdf } = await import("@/lib/generatePdf");
      await generatePdf();
    } finally {
      setIsGeneratingPdf(false);
    }
  }, [isGeneratingPdf]);

  const handleShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "조영찬 | Developer",
          text: "개발자 조영찬의 포트폴리오입니다.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다!");
      }
    } catch {
      // 사용자가 공유 시트를 닫은 경우 무시
    }
  }, []);

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
              <motion.button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-white/20"
                } disabled:opacity-50`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="PDF 다운로드"
              >
                {isGeneratingPdf ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
              </motion.button>
              <motion.button
                onClick={handleShare}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-white/20"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="공유"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </motion.button>
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
                <motion.button
                  className="text-2xl font-semibold text-teal-500 py-3 border-b border-gray-100 dark:border-gray-800 text-left flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navItems.length }}
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                >
                  {isGeneratingPdf ? (
                    <>
                      <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      PDF 생성 중...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF 다운로드
                    </>
                  )}
                </motion.button>
                <motion.button
                  className="text-2xl font-semibold text-teal-500 py-3 border-b border-gray-100 dark:border-gray-800 text-left flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (navItems.length + 1) }}
                  onClick={() => { handleShare(); setIsMobileMenuOpen(false); }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  공유
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
