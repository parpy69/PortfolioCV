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
              >
                <Card className="h-full bg-secondary/20 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold font-heading">{project.title}</CardTitle>
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
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-3 pt-4 mt-auto">
                    <Button variant="default" size="sm" className="w-full group/btn" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5" asChild>
                      <a href={project.detailsUrl} target="_blank" rel="noreferrer">
                        Details
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

