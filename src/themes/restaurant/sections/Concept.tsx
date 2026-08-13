"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const Concept = () => {
  return (
    <section id="concept" className="section-padding bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal
            variant="slide-right"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Konsept</span>
              <span className="h-[1px] w-24 bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight">
              <TextReveal text="Lezzet ve Sanatın Senfonisi" highlightedWords={["Senfonisi"]} highlightClassName="text-gold italic" />
            </h2>
            <p className="text-gray-400 font-sans text-lg leading-relaxed mb-6">
              Aura'da yemeğin sadece doymaktan ibaret olmadığına; çok duyulu teatrâl bir performans olduğuna inanıyoruz. 
              Felsefemiz, kadim mutfak geleneklerini avangart tekniklerle harmanlayarak, tavizsiz bir lüks atmosferinde sunmaktır.
            </p>
            <p className="text-gray-400 font-sans text-lg leading-relaxed mb-10">
              Bordo ambiyans aydınlatmasından özel dövüm altın çatal bıçak takımlarına kadar her detay, sizi saf bir haz diyarına 
              taşımak için titizlikle tasarlandı.
            </p>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" alt="İmza" className="h-12 opacity-50" />
          </ScrollReveal>
          
          <ScrollReveal
            variant="scale"
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 border-2 border-gold/30 rounded-t-full translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" 
              alt="Mutfak Sanatı" 
              className="absolute inset-0 w-full h-full object-cover rounded-t-full shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Concept;



