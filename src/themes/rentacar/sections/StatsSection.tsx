"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export const StatsSection = () => {
  const stats = [
    { value: 50, suffix: "+", label: "Lüks Araç" },
    { value: 15, suffix: "+", label: "Yıllık Deneyim" },
    { value: 20, suffix: "K+", label: "VIP Transfer" },
    { value: null, text: "7/24", label: "Konsiyerj Desteği" }
  ];

  return (
    <section className="py-20 bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-amber-500/50">
          {stats.map((stat, index) => (
            <ScrollRevealChild key={index} variant="scale" className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center">
                {stat.value !== null ? (
                  <><AnimatedCounter value={stat.value} />{stat.suffix}</>
                ) : (
                  stat.text
                )}
              </div>
              <div className="text-amber-100 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;

