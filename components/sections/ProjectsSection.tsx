"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/siteData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="project-frame electric-border rounded-[1.75rem] hover:-translate-y-1 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                      points="
                        0,5  5,0  20,3  35,0  50,4  70,0  90,5  100,0
                        100,10 95,15 100,20 100,35 95,40 100,50
                        100,65 95,70 100,80 100,95 90,100 70,95
                        50,100 35,95 20,100 5,95 0,100 0,90 5,85
                        0,75 0,60 5,55 0,50 0,35 5,30 0,20 0,10
                      "
                      fill="none"
                      stroke="currentColor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  <div className="project-frame-inner px-6 py-6 flex flex-col justify-between overflow-hidden relative">
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
                    
                    <div className="pt-2">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                        {project.featured && (
                          <Badge variant="default" className="bg-primary/20 text-primary border-primary/20">Featured</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Button variant="default" size="sm" className="w-full group/btn" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live Demo
                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

