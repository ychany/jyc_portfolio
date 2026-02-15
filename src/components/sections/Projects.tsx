"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectModal, { prefetchScreenshots } from "@/components/ui/ProjectModal";
import { projectsData } from "@/data/portfolio";
import { useDujjoncooStats } from "@/hooks/useDujjoncooStats";

const techTagColors: Record<string, string> = {
  React: "tag-react",
  "Next.js": "tag-nextjs",
  TypeScript: "tag-typescript",
  JavaScript: "tag-javascript",
  HTML: "tag-html",
  CSS: "tag-css",
  "Node.js": "tag-nodejs",
  Python: "tag-python",
  MongoDB: "tag-mongodb",
  MySQL: "tag-mysql",
  "Tailwind CSS": "tag-tailwind",
  Docker: "tag-docker",
  Git: "tag-git",
  AWS: "tag-aws",
  Vue: "tag-vue",
  Redux: "tag-redux",
  Flutter: "tag-flutter",
  Dart: "tag-dart",
  Firebase: "tag-firebase",
  Django: "tag-django",
  Riverpod: "tag-flutter",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalCookies } = useDujjoncooStats();
  const sectionRef = useRef<HTMLElement>(null);
  const prefetched = useRef(false);

  // Projects 섹션이 뷰포트에 보이면 스크린샷 목록을 미리 가져오기
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefetched.current) {
          prefetched.current = true;
          const dirs = projectsData
            .map((p) => p.screenshotDir)
            .filter(Boolean) as string[];
          prefetchScreenshots(dirs);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openModal = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={0.1}>
              <div
                id={`project-${project.id}`}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(project)}
                >
                  {/* Image or Placeholder */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <span className="text-white/50 text-lg font-medium">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.button
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </motion.button>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  {/* Detail Button - Top Right */}
                  <button
                    onClick={() => openModal(project)}
                    className="absolute top-0 right-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 hover:bg-teal-600 rounded-full text-white text-sm font-medium transition-colors cursor-pointer"
                  >
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    상세 보기
                  </button>

                  {/* Period */}
                  <p className="text-teal-600 font-medium text-sm mb-2">
                    {project.period}
                  </p>

                  {/* Title */}
                  <div className="mb-2">
                    <h3
                      className="inline text-2xl md:text-3xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-teal-600 transition-colors"
                      onClick={() => openModal(project)}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-gray-500 dark:text-gray-400 mb-3">{project.subtitle}</p>
                  )}

                  {/* Award Badge */}
                  {project.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
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

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* 두쫀쿠 실시간 통계 */}
                  {project.title === "두바이 왕자" && totalCookies !== null && (
                    <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                      <span className="text-2xl">🍪</span>
                      <div>
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">누적 섭취량 <span className="text-amber-400 dark:text-amber-500">(실시간)</span></p>
                        <p className="text-lg font-bold text-amber-700 dark:text-amber-300">
                          {totalCookies.toLocaleString()}개
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Features - 3개만 표시 */}
                  {project.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <span className="text-teal-500 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          techTagColors[tech] || "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.demo &&
                      project.demo.includes("apps.apple.com") && (
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
                    {project.demo &&
                      !project.demo.includes("apps.apple.com") && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
                        >
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer dark:border dark:border-white/50"
                      >
                        <svg
                          className="w-4 h-4"
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0064FF] text-sm font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer border border-[#0064FF]"
                      >
                        <img
                          src="/toss-mini-app.png"
                          alt="Toss"
                          className="w-4 h-4 object-contain"
                        />
                        Toss 미니앱
                      </a>
                    )}
                    {project.extraLinks?.map((link) => (
                      <span key={link.label} className="contents">
                        {link.demo && (
                          <a
                            href={link.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-full hover:bg-teal-700 transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            {link.label}
                          </a>
                        )}
                        {link.github && (
                          <a
                            href={link.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-full hover:bg-gray-600 transition-colors cursor-pointer dark:border dark:border-white/50"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            {link.label}
                          </a>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* No projects message */}
        {projectsData.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            프로젝트를 추가해주세요
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
