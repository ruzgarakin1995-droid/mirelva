import React from 'react';
import { TattooV4Varieties } from '@/themes/tattoo-v4/components/TattooV4Varieties';
import { TattooV4Gallery } from '@/themes/tattoo-v4/components/TattooV4Gallery';

export default function PortfolyoPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/themes/tattoo-v4/page_port.jpg" 
          alt="Portfolio Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[10px] text-[#1A1A1A] bg-white px-4 py-1 tracking-[0.3em] uppercase block mb-4 mx-auto w-max">İşlerimiz</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A]">Portfolyo.</h1>
        </div>
      </section>
      
      <TattooV4Varieties />
      <TattooV4Gallery />
    </>
  );
}
