"use client";
import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop" 
          alt="VIP Luxury Car" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
      </div>
      <ScrollReveal variant="fade-up" className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Ultra-Premium VIP Kiralama</span>
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
          <TextReveal text="Yolculuğun Ayrıcalıklı Hali" highlightedWords={["Ayrıcalıklı"]} highlightClassName="font-bold text-white" />
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl font-light">
          İş ve özel hayatınızda prestijinizi yansıtacak, en üst düzey konforla donatılmış elit araç filomuzla hizmetinizdeyiz. Sınırları aşan bir deneyim sizi bekliyorum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm flex items-center justify-center transition-all duration-300 font-medium tracking-wide">
            Rezervasyon Yapın <Calendar className="ml-2 w-5 h-5" />
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm flex items-center justify-center transition-all duration-300 font-medium tracking-wide">
            Filomuzu Keşfedin <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HeroSection;

