"use client";
import React from 'react';
import { Anchor, Users, Maximize } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const fleet = [
  {
    name: 'SILVER PHANTOM',
    type: 'Mega Yat',
    length: '75m',
    guests: 12,
    image: '/yacht_sea.jpg'
  },
  {
    name: 'OCEAN OPULENCE',
    type: 'Süper Yat',
    length: '55m',
    guests: 10,
    image: '/yacht_hero.jpg'
  },
  {
    name: 'AZURE DREAM',
    type: 'Lüks Katamaran',
    length: '30m',
    guests: 8,
    image: '/yacht_interior.jpg'
  }
];

export function Fleet() {
  return (
    <section id="filo" className="py-24 bg-[#143050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16 lg:mb-24">
          <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Koleksiyonumuz</span>
          <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)]">
            <TextReveal text="SEÇKİN FİLO" highlightedWords={["FİLO"]} highlightClassName="italic text-[#c0c0c0]" />
          </h2>
        </ScrollReveal>

        {/* Mobile: Stack, Desktop: Grid */}
        <ScrollReveal staggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {fleet.map((yacht, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="group flex flex-col bg-[#0b1a2e] border border-[#c0c0c0]/10 overflow-hidden hover:border-[#c0c0c0]/40 transition-colors duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={yacht.image} 
                  alt={yacht.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 text-white text-xs tracking-widest border border-white/20">
                  {yacht.type}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white font-serif text-2xl mb-6">{yacht.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-[#c0c0c0]">
                    <Maximize size={18} className="text-white" />
                    <span className="text-sm font-light">{yacht.length}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#c0c0c0]">
                    <Users size={18} className="text-white" />
                    <span className="text-sm font-light">{yacht.guests} Misafir</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#c0c0c0] col-span-2">
                    <Anchor size={18} className="text-white" />
                    <span className="text-sm font-light">Tam Donanımlı Mürettebat</span>
                  </div>
                </div>
                
                <button className="mt-auto w-full py-4 border border-[#c0c0c0]/30 text-white tracking-widest text-sm hover:bg-white hover:text-[#0b1a2e] transition-colors duration-300 min-h-[44px]">
                  YATI İNCELE
                </button>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
        
        <div className="mt-16 text-center">
          <button className="text-[#c0c0c0] hover:text-white tracking-[0.2em] text-sm uppercase relative group min-h-[44px]">
            Tüm Filoyu Görüntüle
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
}



