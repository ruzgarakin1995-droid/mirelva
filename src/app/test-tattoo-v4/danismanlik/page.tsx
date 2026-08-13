import React from 'react';
import { TattooV4Pricing } from '@/themes/tattoo-v4/components/TattooV4Pricing';
import { TattooV4FAQ } from '@/themes/tattoo-v4/components/TattooV4FAQ';
import { TattooV4Booking } from '@/themes/tattoo-v4/components/TattooV4Booking';

export default function DanismanlikPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/themes/tattoo-v4/page_book.jpg" 
          alt="Consultation Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Adım Atın</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A]">Danışmanlık.</h1>
        </div>
      </section>
      
      <TattooV4Pricing />
      <TattooV4FAQ />
      <TattooV4Booking />
    </>
  );
}
