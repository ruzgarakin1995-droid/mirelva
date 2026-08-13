"use client";
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function Neighborhoods() {
  const areas = [
    { name: "Bebek", img: "/realestate_property_1.jpg", propCount: 12 },
    { name: "Göktürk", img: "/realestate_story.jpg", propCount: 34 },
    { name: "Etiler", img: "/realestate_hero.jpg", propCount: 8 },
    { name: "Kandilli", img: "/realestate_property_1.jpg", propCount: 5 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-stone-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal variant="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4 text-center">Bölgeler</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center">
            <TextReveal text="Lüksün Adresleri" highlightedWords={["Lüksün"]} highlightClassName="text-[var(--accent)]" />
          </h3>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="grid md:grid-cols-4 gap-4 md:h-[500px]">
          {areas.map((area, idx) => (
            <ScrollRevealChild 
              key={idx}
              variant="scale"
              className="relative rounded-3xl overflow-hidden group cursor-pointer h-64 md:h-full"
            >
              <img src={area.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={area.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h4 className="text-3xl font-bold mb-2">{area.name}</h4>
                <p className="text-[var(--accent)] font-bold tracking-widest uppercase text-sm">{area.propCount} İlan</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


