"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

const Gallery = () => {
  return (
    <section className="py-0 bg-black">
      <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-[60vh] md:h-[80vh]">
        <ScrollRevealChild 
          variant="fade-up"
          className="col-span-2 row-span-2 relative overflow-hidden group"
        >
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" alt="İç Mekan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </ScrollRevealChild>
        
        <ScrollRevealChild 
          variant="fade-up"
          className="relative overflow-hidden group"
        >
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" alt="Yemek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </ScrollRevealChild>
        
        <ScrollRevealChild 
          variant="fade-up"
          className="relative overflow-hidden group"
        >
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" alt="Şef" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </ScrollRevealChild>
        
        <ScrollRevealChild 
          variant="fade-up"
          className="col-span-2 relative overflow-hidden group bg-gray-900 flex items-center justify-center border-t border-l border-gray-800"
        >
          <div className="text-center p-8">
            <h3 className="text-2xl text-white font-serif mb-4">Serüvenimize Eşlik Edin</h3>
            <p className="text-gold font-sans tracking-widest text-sm mb-6">@AURA.DINING</p>
            <button className="text-white uppercase text-xs tracking-widest border-b border-white pb-1 hover:text-gold hover:border-gold transition-colors">
              Bizi Takip Edin
            </button>
          </div>
        </ScrollRevealChild>
      </ScrollReveal>
    </section>
  );
};

export default Gallery;



