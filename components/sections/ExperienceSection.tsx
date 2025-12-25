"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/siteData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background shadow-[0_0_10px_rgba(124,58,237,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <div className="flex items-center text-xs text-primary font-mono mt-1 sm:mt-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

