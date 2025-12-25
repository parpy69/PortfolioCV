"use client";

import { motion } from "framer-motion";
import { User, MapPin, Code, Cpu } from "lucide-react";
import { about } from "@/lib/siteData";

// Map icon names to actual icon components
const iconMap = {
  MapPin,
  Code,
  User,
  Cpu,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.facts.map((fact, index) => {
                const IconComponent = iconMap[fact.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-colors"
                  >
                    <IconComponent className="w-6 h-6 text-primary mb-3" />
                    <p className="text-sm font-medium">{fact.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

