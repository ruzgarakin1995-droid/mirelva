"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const SignatureDishes = () => {
  const dishes = [
    {
      name: "Trüf ve Altın Havyar",
      desc: "Beluga havyarı, 24 ayar altın yaprak, beyaz trüf esansı, tütsülenmiş crème fraîche.",
      price: "$185"
    },
    {
      name: "Wagyu A5 Tomahawk",
      desc: "Kömür ateşinde ızgara, bordeaux redüksiyon, yabani mantar frikase, patates milföy.",
      price: "$240"
    },
    {
      name: "Yeniden Yorumlanmış Istakoz Thermidor",
      desc: "Poşe Maine ıstakozu, safranlı konyak emülsiyonu, rezene poleni, mürekkep balıklı tuile.",
      price: "$165"
    }
  ];

  return (
    <section className="section-padding bg-black relative border-y border-gray-900">
      <div className="absolute top-0 right-0 w-64 h-64 bg-bordeaux/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <ScrollReveal
            variant="fade-up"
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Öne Çıkanlar</span>
            <span className="h-[1px] w-12 bg-gold"></span>
          </ScrollReveal>
          <ScrollReveal
            variant="fade-up"
            className="text-4xl md:text-5xl text-white"
          >
            <TextReveal text="İmza Lezzetler" highlightedWords={["Lezzetler"]} highlightClassName="italic text-gray-500" />
          </ScrollReveal>
        </div>

        <ScrollReveal staggerChildren className="space-y-10">
          {dishes.map((dish, idx) => (
            <ScrollRevealChild 
              key={idx}
              variant="fade-up"
              className="flex flex-col md:flex-row justify-between items-baseline group cursor-pointer"
            >
              <div className="md:w-3/4">
                <h3 className="text-2xl text-white font-serif mb-2 group-hover:text-gold transition-colors">{dish.name}</h3>
                <p className="text-gray-400 font-sans text-sm tracking-wide">{dish.desc}</p>
              </div>
              <div className="hidden md:block flex-grow border-b border-dashed border-gray-700 mx-6 opacity-30"></div>
              <div className="mt-4 md:mt-0 text-gold font-serif text-2xl md:w-1/4 text-right">
                {dish.price}
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
        
        <div className="mt-20 text-center">
          <button className="btn-outline">Tadım Menüsünü Görüntüle</button>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;


