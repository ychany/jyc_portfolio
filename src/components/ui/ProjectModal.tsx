"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  screenshotDir?: string;
  techStack: string[];
  github: string;
  demo: string;
  tossApp?: string;
  period: string;
  features: string[];
  award?: string;
  role?: string;
  team?: string;
  notes?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const techTagColors: Record<string, string> = {
  React: "bg-[#61DAFB]/20 text-[#61DAFB]",
  "Next.js": "bg-white/20 text-white",
  TypeScript: "bg-[#3178C6]/20 text-[#3178C6]",
  JavaScript: "bg-[#F7DF1E]/20 text-[#F7DF1E]",
  "Tailwind CSS": "bg-[#06B6D4]/20 text-[#06B6D4]",
  Flutter: "bg-[#02569B]/20 text-[#54C5F8]",
  Dart: "bg-[#0175C2]/20 text-[#0175C2]",
  Firebase: "bg-[#FFCA28]/20 text-[#FFCA28]",
  Django: "bg-[#092E20]/20 text-[#44B78B]",
  Python: "bg-[#3776AB]/20 text-[#3776AB]",
  "Framer Motion": "bg-[#FF0080]/20 text-[#FF0080]",
  Riverpod: "bg-[#02569B]/20 text-[#54C5F8]",
  Provider: "bg-[#02569B]/20 text-[#54C5F8]",
  "Naver Map API": "bg-[#03C75A]/20 text-[#03C75A]",
  Vite: "bg-[#646CFF]/20 text-[#646CFF]",
};

function ScreenshotViewer({ images, title, onClose }: { images: string[]; title: string; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        if (newDirection === 1) return prev === images.length - 1 ? 0 : prev + 1;
        return prev === 0 ? images.length - 1 : prev - 1;
      });
    },
    [images.length]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, paginate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
    }
    setTouchStart(null);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10">
        <span className="text-white/80 text-sm font-medium">
          {title} - {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-14"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); paginate(1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? "bg-teal-400 w-6"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [screenshots, setScreenshots] = useState<string[]>([]);

  // 모달 열릴 때 스크린샷 폴더에서 이미지 불러오기
  useEffect(() => {
    if (isOpen && project?.screenshotDir) {
      fetch(`/api/screenshots?dir=${encodeURIComponent(project.screenshotDir)}`)
        .then((res) => res.json())
        .then((data) => setScreenshots(data.images || []))
        .catch(() => setScreenshots([]));
    }
    if (!isOpen) {
      setShowScreenshots(false);
      setScreenshots([]);
    }
  }, [isOpen, project?.screenshotDir]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image Section */}
              <div className="relative h-52 md:h-64 bg-gradient-to-br from-teal-400 to-teal-600 rounded-t-2xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-2xl font-medium">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 text-amber-900 text-sm font-medium rounded-full shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.award}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title & Period */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</p>
                  </div>
                  <span className="text-teal-600 font-medium text-sm md:text-base whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                {/* Team & Role */}
                {(project.team || project.role) && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    {project.team && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>{project.team}</span>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>{project.role}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Screenshots Button */}
                {screenshots && screenshots.length > 0 && (
                  <button
                    onClick={() => setShowScreenshots(true)}
                    className="mb-6 inline-flex items-center gap-2 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition-colors cursor-pointer shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    스크린샷 보기
                    <span className="text-sm text-white/80">({screenshots.length})</span>
                  </button>
                )}

                {/* Screenshots Fullscreen Viewer */}
                <AnimatePresence>
                  {showScreenshots && screenshots && screenshots.length > 0 && (
                    <ScreenshotViewer
                      images={screenshots}
                      title={project.title}
                      onClose={() => setShowScreenshots(false)}
                    />
                  )}
                </AnimatePresence>

                {/* Features */}
                {project.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      주요 기능
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <span className="text-teal-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Notes */}
                {project.notes && project.notes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      배운 점 / 메모
                    </h3>
                    <ul className="space-y-2">
                      {project.notes.map((note, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <span className="text-teal-500 mt-0.5 flex-shrink-0">
                            •
                          </span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          techTagColors[tech] || "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.demo && project.demo.includes("apps.apple.com") && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        className="h-10"
                      />
                    </a>
                  )}
                  {project.demo && !project.demo.includes("apps.apple.com") && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer dark:border dark:border-white/50"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.tossApp && (
                    <a
                      href={project.tossApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0064FF] font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer border border-[#0064FF]"
                    >
                      <img
                        src="/toss-mini-app.png"
                        alt="Toss"
                        className="w-5 h-5 object-contain"
                      />
                      Toss 미니앱
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
