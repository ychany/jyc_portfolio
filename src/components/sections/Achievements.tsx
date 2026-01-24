"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificateData, awardData } from "@/data/portfolio";

export default function Achievements() {
  const hasContent = certificateData.length > 0 || awardData.length > 0;

  if (!hasContent) return null;

  return (
    <section id="achievements" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Achievements</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 자격증 */}
          {certificateData.length > 0 && (
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">자격증</h3>
                </div>
                <div className="space-y-3">
                  {certificateData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="font-medium text-gray-900">{item.title}</span>
                      <span className="text-sm text-amber-600 font-medium bg-amber-50 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* 수상 */}
          {awardData.length > 0 && (
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">수상</h3>
                </div>
                <div className="space-y-3">
                  {awardData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="font-medium text-gray-900">{item.title}</span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-600 text-sm font-medium rounded-full">
                        {item.prize}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
