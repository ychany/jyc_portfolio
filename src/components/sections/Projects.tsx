"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { projectsData } from "@/data/portfolio";

const techTagColors: Record<string, string> = {
  "React": "tag-react",
  "Next.js": "tag-nextjs",
  "TypeScript": "tag-typescript",
  "JavaScript": "tag-javascript",
  "HTML": "tag-html",
  "CSS": "tag-css",
  "Node.js": "tag-nodejs",
  "Python": "tag-python",
  "MongoDB": "tag-mongodb",
  "MySQL": "tag-mysql",
  "Tailwind CSS": "tag-tailwind",
  "Docker": "tag-docker",
  "Git": "tag-git",
  "AWS": "tag-aws",
  "Vue": "tag-vue",
  "Redux": "tag-redux",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={0.1}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative aspect-video bg-gray-100 rounded-2xl overflow-hidden group ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder if no image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-white/50 text-lg font-medium">
                      {project.title}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-teal-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-teal-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {/* Period */}
                  <p className="text-teal-600 font-medium text-sm mb-2">
                    {project.period}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-gray-500 mb-4">{project.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-teal-500 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
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
    </section>
  );
}
