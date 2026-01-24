"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { careerData } from "@/data/portfolio";

const typeIcons: Record<string, React.ReactNode> = {
  work: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  education: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  certificate: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

const typeColors: Record<string, string> = {
  work: "bg-teal-500",
  education: "bg-blue-500",
  certificate: "bg-amber-500",
};

export default function Career() {
  if (careerData.length === 0) return null;

  return (
    <section id="career" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Career</SectionTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />

          {/* Items */}
          <div className="space-y-12">
            {careerData.map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-10">
                    <div className={`w-3 h-3 rounded-full ${typeColors[item.type] || "bg-gray-400"}`} />
                  </div>

                  {/* Content */}
                  <motion.div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      {/* Type badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-medium mb-3 ${
                          typeColors[item.type] || "bg-gray-400"
                        }`}
                      >
                        {typeIcons[item.type]}
                        <span className="capitalize">{item.type}</span>
                      </div>

                      {/* Period */}
                      <p className="text-teal-600 font-medium text-sm mb-1">
                        {item.period}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>

                      {/* Role */}
                      <p className="text-gray-600 font-medium mb-2">
                        {item.role}
                      </p>

                      {/* Description */}
                      {item.description && (
                        <p className="text-gray-500 text-sm mb-3">
                          {item.description}
                        </p>
                      )}

                      {/* Details */}
                      {item.details.length > 0 && (
                        <ul className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {item.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-gray-500 text-sm flex items-start gap-2"
                            >
                              <span className="text-teal-500">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
