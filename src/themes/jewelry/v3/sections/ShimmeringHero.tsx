'use client';
import React, { useEffect } from 'react';

export default function ShimmeringHero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden border-b border-gold-thin">
      <div className="absolute inset-0 img-zoom-container vignette">
        <img 
          src="https://images.unsplash.com/photo-1599643478524-fb66f70b00b0?q=80&w=2000&auto=format&fit=crop" 
          alt="Lüks Mücevher" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <h2 className="font-display text-xs md:text-sm tracking-[0.4em] text-[#d4af37] mb-6 uppercase">
          Zamansız Zarafet
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 shimmer-text leading-tight">
          Işıltının<br />Kusursuz Hali
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 font-light mb-12 italic">
          Karanlığın içinden doğan, ustalıkla işlenmiş pırlantaların büyüleyici dansına tanık olun.
        </p>
        <button className="magnetic-btn">
          Koleksiyonu Keşfet
        </button>
      </div>
    </section>
  );
}
