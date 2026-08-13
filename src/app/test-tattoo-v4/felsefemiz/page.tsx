import React from 'react';
import { TattooV4Philosophy } from '@/themes/tattoo-v4/components/TattooV4Philosophy';
import { TattooV4Testimonials } from '@/themes/tattoo-v4/components/TattooV4Testimonials';
import { TattooV4Studio } from '@/themes/tattoo-v4/components/TattooV4Studio';

export default function FelsefemizPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/themes/tattoo-v4/page_phil.jpg" 
          alt="Philosophy Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Hikayemiz</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A]">Felsefemiz.</h1>
        </div>
      </section>
      
      <TattooV4Philosophy />
      <TattooV4Studio />
      <TattooV4Testimonials />
    </>
  );
}
