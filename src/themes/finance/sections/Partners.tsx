"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

const partners = [
  "GLOBAL BANK", "SWISS WEALTH", "LONDON EXCHANGE", "FRANKFURT CAPITAL", "NY INVESTMENTS", "TOKYO ASSETS"
];

export const Partners = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <p className="text-center text-sm font-semibold text-slate-400 tracking-widest uppercase mb-8">
            Küresel Çözüm Ortaklarımız
          </p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {partners.map((partner, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="text-xl md:text-2xl font-serif font-bold text-slate-800 hover:text-blue-950 transition-colors cursor-default">
              {partner}
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



