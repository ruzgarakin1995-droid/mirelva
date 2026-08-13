"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-slate-950 border-y border-white/5">
      <ScrollReveal variant="fade-up" className="container mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
          ÇÖZÜM ORTAKLARIMIZ VE TEDARİKÇİLERİMİZ
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          {/* Using text blocks as placeholders for partner logos to maintain premium feel without external images */}
          {['HOLCIM', 'SIEMENS', 'SCHINDLER', 'CATERPILLAR', 'THYSSENKRUPP'].map((partner, i) => (
            <span key={i} className="text-2xl font-black text-slate-300 tracking-tighter">
              {partner}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

