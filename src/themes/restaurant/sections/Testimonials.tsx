"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollReveal
          variant="scale"
          className="relative"
        >
          <div className="text-6xl text-gold/20 font-serif absolute -top-8 left-1/2 -translate-x-1/2">"</div>
          
          <h2 className="text-3xl md:text-4xl text-white font-serif leading-relaxed relative z-10 mb-8 mt-8">
            Aura gastronominin sınırlarını yeniden tanımlıyor. Bu sadece bir yemek değil; son tabaktan çok sonra bile hafızanızda yer eden aşkın bir deneyim.
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="flex space-x-1 mb-4">
              {[1,2,3,4,5].map(star => (
                <span key={star} className="text-gold">â˜…</span>
              ))}
            </div>
            <p className="text-white font-sans uppercase tracking-widest text-sm font-bold">Michelin Rehberi</p>
            <p className="text-gray-500 font-sans text-xs mt-1">2026 Sayısı</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;


