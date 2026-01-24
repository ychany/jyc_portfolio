"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { archivingData } from "@/data/portfolio";

const icons: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  blog: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

export default function Archiving() {
  return (
    <section id="archiving" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Archiving
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-teal-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h2>

        {/* Archive Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {archivingData.map((archive, index) => (
            <FadeIn key={archive.name} delay={0.1 * index}>
              <motion.a
                href={archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow group"
                whileHover={{ y: -5 }}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gray-900 group-hover:text-teal-600 transition-colors">
                    {icons[archive.icon] || icons.blog}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {archive.name}
                  </h3>
                </div>

                {/* URL */}
                <p className="text-teal-600 font-medium mb-4 text-sm break-all">
                  {archive.url}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {archive.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {archive.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-teal-500 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator */}
                <div className="mt-6 flex justify-end">
                  <motion.span
                    className="text-gray-400 group-hover:text-teal-600 transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
