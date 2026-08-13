import React from 'react';
import { TattooV4Artists } from '@/themes/tattoo-v4/components/TattooV4Artists';

export default function SanatcilarPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/themes/tattoo-v4/page_art.jpg" 
          alt="Artists Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[10px] text-[#1A1A1A] bg-white px-4 py-1 tracking-[0.3em] uppercase block mb-4 mx-auto w-max">Ustalık</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A]">Sanatçılar.</h1>
        </div>
      </section>
      
      <div className="py-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-[#5A5853] font-light leading-relaxed">
          Stüdyomuzdaki her bir sanatçı, bedeninizi bir tuval olarak görüp, sadece size özel ömür boyu taşıyacağınız nadide parçalar tasarlar. Fine line ustalarımızla tanışın.
        </p>
      </div>

      <TattooV4Artists />
    </>
  );
}
