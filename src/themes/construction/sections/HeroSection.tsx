"use client";

import React, { useRef } from "react";
import { ChevronRight, Building, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const btnScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const btnOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
          alt="Premium İnşaat Projesi"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full backdrop-blur-md mb-8"
          >
            <Building className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Vizyoner Mimari, Kalıcı Eserler</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            <TextReveal 
              text="Geleceğin Silüetini İnşa Ediyoruz." 
              highlightedWords={["Silüetini"]} 
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
            />
          </h1>
          
          <motion.p 
            style={{ y: subtitleY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Yarım asırlık tecrübemiz ve yenilikçi mühendislik yaklaşımımızla, ultra-lüks yaşam alanları ve anıtsal ticari yapılar hayata geçiriyoruz.
          </motion.p>

          <motion.div 
            style={{ scale: btnScale, opacity: btnOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-amber-400">
              <span className="relative z-10 flex items-center gap-2">
                Projelerimizi Keşfedin
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white">
              <span className="flex items-center gap-2">
                Hizmetlerimiz
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-0 bottom-32 hidden lg:flex items-center gap-8 pr-12 z-20"
      >
        <div className="flex flex-col items-end">
          <span className="text-4xl font-bold text-amber-500">
            <AnimatedCounter value={150} />+
          </span>
          <span className="text-sm text-slate-400 uppercase tracking-widest">Tamamlanan Proje</span>
        </div>
        <div className="w-px h-16 bg-white/20"></div>
        <div className="flex flex-col items-end">
          <span className="text-4xl font-bold text-amber-500">
            <AnimatedCounter value={50} />
          </span>
          <span className="text-sm text-slate-400 uppercase tracking-widest">Yıllık Tecrübe</span>
        </div>
      </motion.div>
    </section>
  );
};

