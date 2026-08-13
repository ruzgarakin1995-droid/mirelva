"use client";
import React from 'react';
import { Dumbbell, MonitorPlay, Wifi, Coffee, Music, Wind } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const amenities = [
  { icon: MonitorPlay, name: "Açık Hava Sineması" },
  { icon: Dumbbell, name: "Panoramik Spor Salonu" },
  { icon: Wifi, name: "Starlink Uydu İnterneti" },
  { icon: Coffee, name: "Gourmet Bar & Cafe" },
  { icon: Music, name: "Premium Ses Sistemi" },
  { icon: Wind, name: "İklimlendirme & Arıtma" }
];

export function Amenities() {
  return (
    <section className="py-24 bg-[#143050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-white font-serif text-[clamp(1.5rem,2vw+1rem,2.5rem)] text-center md:text-left">
            <TextReveal text="DONANIM & KONFOR" highlightedWords={["KONFOR"]} highlightClassName="italic text-[#c0c0c0]" />
          </h2>
          <div className="w-full md:w-1/2 h-[1px] bg-gradient-to-r from-[#c0c0c0]/30 to-transparent"></div>
        </div>
        
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((item, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="flex flex-col items-center text-center p-6 bg-[#0b1a2e] border border-[#c0c0c0]/10 hover:-translate-y-2 transition-transform duration-300">
              <item.icon size={32} className="text-[#c0c0c0] mb-4" />
              <span className="text-white font-light text-sm">{item.name}</span>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}



