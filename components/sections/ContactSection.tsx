"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/lib/siteData";
import { useState } from "react";

// Map icon names to actual icon components
const iconMap = {
  Mail,
  Github,
  Linkedin,
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              {contact.heading.split(' ')[0]} <span className="text-primary">{contact.heading.split(' ')[1]}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {contact.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl space-y-6">
                {contact.socialLinks.map((link, index) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a 
                      key={index}
                      href={link.url} 
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-lg">{link.display}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      name="name"
                      placeholder="John Doe" 
                      className="bg-secondary/30 border-white/5" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder="john@example.com" 
                      className="bg-secondary/30 border-white/5" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px] bg-secondary/30 border-white/5" 
                    required 
                  />
                </div>
                
                {submitStatus === "success" && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                    ✓ Message sent successfully!
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    ✗ Failed to send. Please try again.
                  </div>
                )}
                
                <Button className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

