"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ChauffeurSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <ScrollReveal variant="slide-left" className="flex-1 w-full relative">
            <div className="aspect-[4/3] relative z-10">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop" alt="VIP Chauffeur" className="w-full h-full object-cover rounded-sm shadow-2xl" />
            </div>
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-amber-500/30 rounded-sm z-0 hidden lg:block"></div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" className="flex-1">
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Profesyonel Ekip</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              <TextReveal text="Sadece Şoför Değil, Protokol Uzmanı" highlightedWords={["Protokol"]} highlightClassName="font-bold" />
            </h2>
            <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
              İş dünyasının yoğun temposunda veya özel davetlerinizde, direksiyon başında sadece yolu değil, sizin prestijinizi de yöneten uzman kadromuzla tanışın. İleri sürüş teknikleri ve VIP protokol eğitimlerini başarıyla tamamlamış şoförlerimiz, yolculuğunuzun kusursuz olmasını sağlar.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-2xl font-semibold text-amber-500 mb-2">Çok Dilli</h4>
                <p className="text-zinc-400 font-light text-sm">Uluslararası misafirleriniz için yabancı dil bilen şoförler.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-amber-500 mb-2">Gizlilik</h4>
                <p className="text-zinc-400 font-light text-sm">Tüm yolculuklarınızda mutlak gizlilik prensibi.</p>
              </div>
            </div>
            
            <button className="bg-white text-zinc-950 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-sm transition-colors duration-300 font-medium">
              Şžoförlü Kiralama Talebi
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ChauffeurSection;

