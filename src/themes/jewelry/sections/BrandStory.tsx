"use client";
import React from 'react';

export function BrandStory() {
  return (
    <section className="py-24 md:py-40 px-6 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="uppercase tracking-[0.25em] text-[#D4AF37] text-xs md:text-sm mb-6 block">Mirasımız</span>
        <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight mb-8">
          1920'den Beri<br />Işıltının Peşinde
        </h2>
        <div className="w-px h-16 md:h-24 bg-zinc-300 mb-8" />
        <p className="text-[clamp(1rem,2vw,1.2rem)] leading-relaxed font-light text-zinc-600 max-w-2xl">
          Yüzyılı aşkın süredir, dünyanın en nadide taşlarını usta zanaatkarlarımızın ellerinde birer sanat eserine dönüştürüyoruz. Her bir parça, nesilden nesile aktarılacak bir hikayenin başlangıcıdır.
        </p>
      </div>
    </section>
  );
}



