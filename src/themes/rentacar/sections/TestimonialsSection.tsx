"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="slide-right">
            <Quote className="w-16 h-16 text-amber-500/50 mb-8" />
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              <TextReveal text="Kusursuzlukla Tanışan Seçkin Müşterilerimiz" highlightedWords={["Seçkin", "Müşterilerimiz"]} highlightClassName="font-bold" />
            </h2>
            <p className="text-xl font-light text-zinc-300 mb-8 italic leading-relaxed">
              "İstanbul'daki yoğun iş seyahatim sırasında aldığım hizmet tek kelimeyle mükemmeldi. Araç temizliği, şoförün profesyonelliği ve dakiklik tam olarak bir CEO'nun beklemesi gereken seviyedeydi."
            </p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1470&auto=format&fit=crop" alt="Client" className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Mehmet A.</h4>
                <span className="text-zinc-400 text-sm">Uluslararası Holding Yönetim Kurulu Başkanı</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-zinc-800 relative z-10">
              <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop" alt="Luxury Car Interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-amber-600 p-8 rounded-sm shadow-2xl z-20 max-w-xs hidden md:block">
              <h4 className="text-3xl font-bold mb-2">99.8%</h4>
              <p className="text-amber-50 font-medium">Müşteri Memnuniyeti</p>
              <div className="w-12 h-1 bg-white mt-4"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

