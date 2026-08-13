'use client';
import React from 'react';

export default function CraftsmanshipStory() {
  return (
    <section className="relative py-40 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1589697554907-f38b0be6bb1d?q=80&w=2000&auto=format&fit=crop" 
          alt="Craftsmanship Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h4 className="font-display text-[#d4af37] tracking-[0.5em] text-sm mb-6 uppercase">Zanaatkarlığın Zirvesi</h4>
        <h2 className="text-4xl md:text-6xl font-display text-white mb-10 leading-tight">
          Her Detayda <br/><span className="italic text-gray-400">Gizli Bir Ustalık</span>
        </h2>
        <p className="text-lg text-gray-300 font-light leading-relaxed mb-12">
          Atölyemizde zaman durur. Sadece mükemmelliğe adanmış saatler, günler ve aylar vardır. Dünyanın en nadide taşları, usta zanaatkarlarımızın ellerinde hayat bulur.
        </p>
        <button className="magnetic-btn border-platinum-thin text-white">
          Atölyemizi Ziyaret Edin
        </button>
      </div>
    </section>
  );
}
