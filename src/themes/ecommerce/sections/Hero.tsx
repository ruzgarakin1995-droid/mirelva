"use client";

import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
          alt="Lüks Sonbahar Koleksiyonu" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-sm font-medium tracking-[0.3em] uppercase mb-4">Yeni Sezon İhtişamı</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 max-w-4xl mx-auto leading-tight">
          Sonbahar Koleksiyonunu Keşfedin
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Kadın Koleksiyonu
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Erkek Koleksiyonu
          </button>
        </div>
      </div>
    </section>
  );
}

