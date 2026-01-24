"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData } from "@/data/portfolio";

export default function Career() {
  if (experienceData.length === 0) return null;

  return (
    <section id="career" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Career</SectionTitle>

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* 헤더 영역 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.role}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-2 bg-teal-50 text-teal-600 font-medium rounded-full text-sm">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* 설명 영역 */}
                {item.description && (
                  <p className="mt-4 ml-16 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* 상세 내용 (담당 업무 등) */}
                {item.details && item.details.length > 0 && (
                  <div className="mt-4 ml-16">
                    <p className="text-sm font-medium text-gray-500 mb-2">주요 업무</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-teal-500 mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 사용 기술 스택 */}
                {item.techStack && item.techStack.length > 0 && (
                  <div className="mt-4 ml-16">
                    <p className="text-sm font-medium text-gray-500 mb-2">사용 기술</p>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
