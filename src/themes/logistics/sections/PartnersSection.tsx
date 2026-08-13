"use client";
import React from 'react';
import { Building2 } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <ScrollReveal staggerChildren className="container mx-auto px-6 lg:px-12 text-center">
        <ScrollRevealChild variant="fade-up" className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-12">Küresel Ağımızdaki Değerli İş Ortakları</ScrollRevealChild>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {[
            { name: 'Maersk', url: 'https://logo.clearbit.com/maersk.com', h: 'h-10' },
            { name: 'DHL', url: 'https://logo.clearbit.com/dhl.com', h: 'h-8' },
            { name: 'FedEx', url: 'https://logo.clearbit.com/fedex.com', h: 'h-8' },
            { name: 'UPS', url: 'https://logo.clearbit.com/ups.com', h: 'h-10' },
            { name: 'MSC', url: 'https://logo.clearbit.com/msc.com', h: 'h-10' }
          ].map((partner, i) => (
            <ScrollRevealChild variant="fade-up" key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
              <img src={partner.url} alt={partner.name} className={`${partner.h} object-contain max-w-[120px]`} crossOrigin="anonymous" onError={(e) => {
                // Fallback text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <span className="hidden font-bold text-2xl text-slate-800 uppercase tracking-wider">{partner.name}</span>
            </ScrollRevealChild>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

