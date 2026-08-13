"use client";

import React from "react";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const StatsSection = () => {
  return (
    <section className="py-20 bg-amber-500 relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-900/10">
          <ScrollRevealChild variant="fade-up" className="text-center px-4">
            <span className="block text-5xl font-black text-slate-950 mb-2">
              <AnimatedCounter value={3.5} decimals={1} />M+
            </span>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">İnşa Edilen m²</span>
          </ScrollRevealChild>
          <ScrollRevealChild variant="fade-up" className="text-center px-4">
            <span className="block text-5xl font-black text-slate-950 mb-2">
              <AnimatedCounter value={150} />+
            </span>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Tamamlanan Proje</span>
          </ScrollRevealChild>
          <ScrollRevealChild variant="fade-up" className="text-center px-4">
            <span className="block text-5xl font-black text-slate-950 mb-2">
              <AnimatedCounter value={2500} />+
            </span>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Uzman Personel</span>
          </ScrollRevealChild>
          <ScrollRevealChild variant="fade-up" className="text-center px-4">
            <span className="block text-5xl font-black text-slate-950 mb-2">
              <AnimatedCounter value={50} />
            </span>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Yıllık Güven</span>
          </ScrollRevealChild>
        </ScrollReveal>
      </div>
    </section>
  );
};

