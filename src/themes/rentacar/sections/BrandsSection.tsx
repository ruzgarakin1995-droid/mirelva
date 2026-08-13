"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const BrandsSection = () => {
  const brands = [
    "MERCEDES-BENZ", "ROLLS ROYCE", "BENTLEY", "PORSCHE", "RANGE ROVER", "BMW", "AUDI"
  ];

  return (
    <section className="py-16 bg-zinc-950 border-t border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <ScrollReveal variant="fade-up">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold">Temsil Ettiğimiz Prestijli Markalar</p>
          </ScrollReveal>
        </div>
        <ScrollReveal staggerChildren className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40">
          {brands.map((brand, index) => (
            <ScrollRevealChild key={index} variant="scale" className="text-xl md:text-2xl font-bold tracking-widest text-zinc-300 hover:text-amber-500 transition-colors duration-300 cursor-pointer">
              {brand}
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandsSection;

