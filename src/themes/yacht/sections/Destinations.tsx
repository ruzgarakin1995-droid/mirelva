"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const destinations = [
  { name: 'FRANSIZ RİVİERASI', image: '/yacht_sea.jpg' },
  { name: 'AMALFI KIYILARI', image: '/yacht_hero.jpg' },
  { name: 'YUNAN ADALARI', image: '/yacht_sea.jpg' },
  { name: 'TÜRK RİVİERASI', image: '/yacht_interior.jpg' }
];

export function Destinations() {
  return (
    <section id="destinasyonlar" className="py-24 bg-[#0b1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Rotalar</span>
            <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] leading-tight">
              <TextReveal text="DÜNYANIN EN İYİ SAKLI KOYLARI" highlightedWords={["SAKLI", "KOYLARI"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
          </div>
          <p className="text-[#c0c0c0]/80 font-light max-w-md lg:text-right">
            Sadece size özel hazırlanan rotalarla, dünyanın en nefes kesici koylarını keşfedin. Kalabalıktan uzak, doğanın kalbinde lüks bir yaşam.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {destinations.map((dest, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="group relative h-[400px] lg:h-[600px] overflow-hidden cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-8 h-[1px] bg-[#c0c0c0] mb-4 transform group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-white font-serif text-2xl tracking-wide">{dest.name}</h3>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}



