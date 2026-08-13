"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const images = [
  { src: '/yacht_hero.jpg', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { src: '/yacht_interior.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/yacht_sea.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/yacht_interior.jpg', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

export function Gallery() {
  return (
    <section className="py-24 bg-[#0b1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Görsel Ã…Âžölen</span>
          <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)]">
            <TextReveal text="ANILARI ÖLÜMSÜZLEŞTİRİN" highlightedWords={["ÖLÜMSÜZLEŞTİRİN"]} highlightClassName="italic text-[#c0c0c0]" />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <ScrollRevealChild key={idx} variant="scale" className={`relative group overflow-hidden ${img.colSpan} ${img.rowSpan}`}>
              <img 
                src={img.src} 
                alt="Yat Galerisi" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0b1a2e]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}



