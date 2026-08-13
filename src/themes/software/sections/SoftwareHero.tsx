"use client";

import React, { useRef } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

export const SoftwareHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and fade transforms for hero content
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const ySubtitle = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacitySubtitle = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  
  const scaleButtons = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacityButtons = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex flex-col pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Abstract Background with parallax */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">NexusCore v3.0 Yayında</span>
          </div>
          
          <motion.div style={{ y: yText, opacity: opacityText }}>
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              <TextReveal text="Yeni Nesil Yazılım Altyapısı ile Geleceği Kodlayın" highlightedWords={["Yazılım", "Altyapısı"]} highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" />
            </div>
          </motion.div>
          
          <motion.p 
            style={{ y: ySubtitle, opacity: opacitySubtitle }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Kurumsal ölçekli operasyonlarınızı tek bir merkezden yönetin. Yüksek performanslı API'ler, mikroservis mimarisi ve gelişmiş güvenlik katmanlarıyla tanışın.
          </motion.p>
          
          <motion.div 
            style={{ scale: scaleButtons, opacity: opacityButtons }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-indigo-700 transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              Sistemi Deneyimle
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all border border-white/10">
              <Terminal className="w-5 h-5" />
              API Dokümantasyonu
            </button>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: yImage, scale: scaleImage }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/20">
            <ParallaxImage 
              src="/agency_hero.jpg" 
              alt="SaaS Platform Interface"
              speed="fast"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

