"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const PrivateDining = () => {
  return (
    <section id="private-dining" className="relative py-32 bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop')" }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-20 px-5 text-center">
        <ScrollReveal
            variant="fade-up"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Ayrıcalıklı</span>
            <span className="h-[1px] w-12 bg-gold"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            <TextReveal text="Özel Deneyim" highlightedWords={["Deneyim"]} highlightClassName="italic text-gray-400" />
          </h2>
          
          <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Samimi ve özel bir atmosfer arayanlar için Altın Oda, 12 misafire kadar benzersiz bir gastronomi deneyimi sunuyor. Size özel şef ve sommelier eşliğinde, kişiselleştirilmiş menüler ve emsalsiz bir gizlilik.
          </p>
          
          <button className="btn-primary">Hemen Bilgi Alın</button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PrivateDining;



