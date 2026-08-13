"use client";

import React from 'react';

export default function CampaignBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center bg-black">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
            alt="Kampanya" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4">LÜKSÜN YENİ TANIMI</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
              Özel Koleksiyonda %30'a Varan Ayrıcalık
            </h3>
            <button className="px-10 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Hemen Keşfet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

