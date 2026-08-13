"use client";
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export default function Stats() {
  const stats = [
    { value: 25, suffix: "B+", label: "Satış Hacmi (₺)" },
    { value: 4500, suffix: "+", label: "Mutlu Aile" },
    { value: 150, suffix: "+", label: "Ödüllü Danışman" },
    { value: 15, suffix: "", label: "Farklı Ülke" },
  ];

  return (
    <section className="py-24 bg-[var(--primary)] text-white">
      <ScrollReveal staggerChildren className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <ScrollRevealChild 
            key={idx}
            variant="scale"
          >
            <div className="text-4xl md:text-6xl font-black text-[var(--accent)] mb-4 flex justify-center items-center">
              <AnimatedCounter value={stat.value} />{stat.suffix}
            </div>
            <div className="text-sm md:text-base font-bold tracking-widest uppercase opacity-80">{stat.label}</div>
          </ScrollRevealChild>
        ))}
      </ScrollReveal>
    </section>
  );
}


