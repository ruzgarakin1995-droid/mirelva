"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" alt="Luxury Diamond" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 text-center px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center w-full">
        <span className="uppercase tracking-[0.3em] text-[clamp(0.7rem,2vw,0.85rem)] mb-6 md:mb-8 text-[#D4AF37] font-light">Ebedi Zarafet</span>
        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[1.05] mb-6 md:mb-10 font-light">
          Mükemmelliğin<br />Yeni Yüzü
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] mb-10 md:mb-14 max-w-2xl font-light text-gray-100">
          Usta ellerde şekillenen, zamana meydan okuyan eşsiz pırlanta ve saat koleksiyonlarımızı keşfedin.
        </p>
        <button className="group flex items-center gap-4 border border-white px-8 py-4 md:px-10 md:py-5 hover:bg-white hover:text-black transition-colors duration-700 uppercase tracking-[0.2em] text-xs md:text-sm">
          <span>Koleksiyonu Keşfet</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500" />
        </button>
      </div>
    </section>
  );
}



