"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SkillTag from "@/components/ui/SkillTag";
import { skillsData } from "@/data/portfolio";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Etc",
};

export default function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="py-20 md:py-32 bg-teal-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([category, skills], categoryIndex) => (
            <FadeIn key={category} delay={0.1 * categoryIndex}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {categoryLabels[category] || category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <SkillTag
                      key={skill.name}
                      name={skill.name}
                      tagClass={skill.tagClass}
                      delay={0.05 * index}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Optional: Skill note */}
        <motion.p
          className="text-white/70 text-center mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          지속적으로 새로운 기술을 학습하고 있습니다
        </motion.p>
      </div>
    </section>
  );
}
