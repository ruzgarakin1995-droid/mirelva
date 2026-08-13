"use client";
import React from 'react';

export function Craftsmanship() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="w-full flex flex-col items-start">
            <span className="uppercase tracking-[0.2em] text-[#D4AF37] text-sm mb-6">Zanaat</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-8 text-zinc-900">Ellerin<br />Sihri</h2>
            <p className="text-zinc-600 font-light text-lg mb-8 leading-relaxed">
              Pırlantanın ham halinden göz kamaştıran bir mücevhere dönüşüm yolculuğu. Atölyelerimizde her bir taş, ustalarımızın büyüteçleri altında yüzlerce saatlik bir emeğin sonucunda hayat bulur.
            </p>
            <button className="uppercase tracking-widest text-xs font-semibold pb-2 border-b-2 border-zinc-900 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors mt-4">
              Atölyemizi İnceleyin
            </button>
          </div>
          <div className="w-full relative aspect-square lg:aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" alt="Craftsmanship" className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-zinc-100 p-8 hidden md:flex items-center justify-center">
              <div className="text-center">
                <span className="block font-serif text-5xl text-zinc-900 mb-2">500+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Saatlik İşçilik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



