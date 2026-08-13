"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const Philosophy = () => {
  return (
    <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L50,0 L100,100 Z" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <ScrollReveal staggerChildren variant="slide-right" className="md:w-1/2">
          <ScrollRevealChild variant="fade-up">
            <h2 className="text-sm text-yellow-500 font-bold tracking-widest uppercase mb-4 border-l-4 border-yellow-500 pl-4">
              Yatırım Felsefemiz
            </h2>
          </ScrollRevealChild>
          <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            <TextReveal text="Riskleri Yönetiyor, Fırsatları İnşa Ediyoruz." />
          </h3>
          <ScrollRevealChild variant="fade-up">
            <p className="text-blue-100 text-lg mb-6 leading-relaxed font-light">
              Sadece bugünün değil, yarının piyasalarını da öngörerek hareket ediyoruz. Değer yatırımcılığı temelinde, spekülasyonlardan uzak, veri ve analitiğe dayanan stratejiler geliştiriyoruz.
            </p>
          </ScrollRevealChild>
          <ScrollRevealChild variant="fade-up">
            <p className="text-blue-100 text-lg mb-8 leading-relaxed font-light">
              Amacımız, piyasa oynaklığında koruma sağlamak ve uzun vadede bileşik getirinin gücünden maksimum düzeyde faydalanmaktır.
            </p>
          </ScrollRevealChild>
          <ScrollRevealChild variant="fade-up">
            <button className="min-h-[44px] px-8 py-3 bg-white text-blue-950 font-bold hover:bg-yellow-500 transition-colors duration-300">
              Detaylı İncele
            </button>
          </ScrollRevealChild>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren variant="slide-left" className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
          {[
            { label: "Analitik Yaklaşım", text: "Global veri setleriyle karar alma" },
            { label: "Uzun Vadeli Odak", text: "Günlük dalgalanmalardan bağımsızlık" },
            { label: "Risk Yönetimi", text: "Asimetrik risk/getiri profili oluşturma" },
            { label: "Esneklik", text: "Dinamik piyasa koşullarına adaptasyon" }
          ].map((item, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="bg-blue-900/50 p-6 border border-blue-800 rounded-sm">
              <h4 className="text-yellow-500 font-bold text-lg mb-2">{item.label}</h4>
              <p className="text-sm text-blue-200">{item.text}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



