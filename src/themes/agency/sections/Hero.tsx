"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Agency Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full border border-lime-400/50 text-lime-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 bg-lime-400/10 backdrop-blur-sm">
            Yeni Nesil Dijital Stratejiler
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
            Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-300">Dönüşümü</span> <br className="hidden sm:block" />
            Birlikte Şekillendirelim.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12 font-light">
            Markanızın dijital varlığını güçlendiren özgün tasarım yaklaşımları, yüksek performanslı çözümler ve stratejik büyüme odaklı vizyon.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto min-h-[56px] px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-none overflow-hidden transition-all hover:bg-lime-300 flex items-center justify-center gap-2">
              <span>Teklif Alın</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group relative w-full sm:w-auto min-h-[56px] px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-none overflow-hidden transition-all hover:border-white hover:bg-white/5 flex items-center justify-center">
              <span>Projelerimizi İncele</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-lime-400 to-transparent"></div>
      </div>
    </section>
  );
};




