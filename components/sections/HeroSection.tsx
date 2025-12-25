"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/siteData";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
            {hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              {hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-base h-12 px-8 rounded-full"
              onClick={() => scrollToSection("#projects")}
            >
              {hero.primaryCTA}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base h-12 px-8 rounded-full border-white/10 hover:bg-white/5"
              onClick={() => scrollToSection("#contact")}
            >
              {hero.secondaryCTA}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400" />
            
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-auto text-xs text-muted-foreground font-mono">dev_card.tsx</div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-primary">➜</span>
                <span className="text-cyan-400">~</span>
                <span>building clean UIs, APIs & tools...</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: Globe, label: "Next.js", color: "text-white" },
                  { icon: Code2, label: "TypeScript", color: "text-blue-400" },
                  { icon: Terminal, label: "Tailwind", color: "text-cyan-400" },
                  { icon: Database, label: "PostgreSQL", color: "text-blue-300" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                ✓ All systems operational
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

