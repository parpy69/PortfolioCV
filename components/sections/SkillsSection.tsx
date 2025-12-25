"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/siteData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">
            Tech <span className="text-primary">Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-center md:text-left text-cyan-400/90 tracking-wide uppercase text-sm">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-background border border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 cursor-default"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

