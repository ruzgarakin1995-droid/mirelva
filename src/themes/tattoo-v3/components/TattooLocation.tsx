"use client";
import React from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function TattooLocation() {
  return (
    <section className="bg-zinc-900 border-t border-zinc-800">
      <div className="flex flex-col lg:flex-row">
        
        {/* Contact Info */}
        <ScrollReveal variant="slide-right" className="w-full lg:w-1/3 p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Lokasyon</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Stüdyomuz</h3>
          
          <div className="space-y-8 text-zinc-400 font-light">
            <div>
              <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">Adres</p>
              <p>Caferağa Mah. Moda Cad.<br/>No: 123 Kadıköy, İstanbul</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">Çalışma Saatleri</p>
              <p>Salı - Cumartesi: 11:00 - 20:00<br/>Pazar: 12:00 - 18:00<br/><span className="text-red-600">Pazartesi Kapalı</span></p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">İletişim</p>
              <p>+90 555 123 45 67<br/>hello@ironandink.com</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Map Placeholder */}
        <ScrollReveal variant="fade-up" className="w-full lg:w-2/3 min-h-[400px] lg:min-h-full bg-zinc-950 relative border-l border-zinc-800 overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Kadikoy,Istanbul&zoom=14&size=800x800&style=feature:all|element:labels.text.fill|color:0x9ca3af&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:all|element:labels.icon|visibility:off&style=feature:landscape|element:geometry|color:0x18181b&style=feature:poi|element:geometry|color:0x27272a&style=feature:road|element:geometry|color:0x3f3f46&style=feature:transit|element:geometry|color:0x27272a&style=feature:water|element:geometry|color:0x000000&key=YOUR_API_KEY')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-red-600 rounded-full relative z-10"></div>
            <div className="mt-4 bg-zinc-950 px-4 py-2 text-xs font-bold text-white uppercase tracking-widest border border-zinc-800">
              Yol Tarifi Al
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
