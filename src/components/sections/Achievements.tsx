"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificateData, awardData } from "@/data/portfolio";

export default function Achievements() {
  const hasContent = certificateData.length > 0 || awardData.length > 0;

  if (!hasContent) return null;

  return (
    <section id="achievements" className="py-12 md:py-16 bg-gray-50">
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
                    {/* 트로피 아이콘 */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1H3a1 1 0 000 2h1v1a7.003 7.003 0 005.744 6.876A4.002 4.002 0 0011 19.465V21H9a1 1 0 100 2h6a1 1 0 100-2h-2v-1.535a4.002 4.002 0 001.256-4.589A7.003 7.003 0 0020 8V7h1a1 1 0 100-2h-1V4a2 2 0 00-2-2H6zm0 2h12v4a5 5 0 01-10 0V4z" clipRule="evenodd" />
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
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
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
