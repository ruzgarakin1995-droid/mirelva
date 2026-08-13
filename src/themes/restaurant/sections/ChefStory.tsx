"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const ChefStory = () => {
  return (
    <section className="section-padding bg-gray-900 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ScrollReveal
            variant="slide-right"
            className="relative h-[700px] hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" 
              alt="Baş Aşçı" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </ScrollReveal>
          
          <ScrollReveal
            variant="slide-left"
            className="flex flex-col justify-center p-10 lg:p-20 glass-panel lg:border-l-0 lg:-ml-10 z-10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Üstad</span>
              <span className="h-[1px] w-12 bg-gold"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              <TextReveal text="Şef Julien" highlightedWords={["Julien"]} highlightClassName="text-gold" />
            </h2>
            
            <h3 className="text-bordeaux-light font-sans tracking-widest uppercase mb-8 text-sm">Üç Michelin Yıldızı</h3>
            
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <p>
                "Aşçılık sadece bir meslek değil; kusursuzluk tutkusudur. Her malzemenin bir ruhu vardır ve onu tabakta onurlandırmak bizim yegane görevimizdir."
              </p>
              <p>
                Paris, Tokyo ve New York'un en seçkin mutfaklarında edindiği yirmi yılı aşkın deneyimle Şef Julien, Aura'ya benzersiz bir küresel vizyon katıyor. Klasik teknikleri dekonstrükte ederken yöresel malzemeleri kucaklayan yaklaşımı, hem tanıdık bir rahatlık hem de nefes kesici bir yenilik sunan menüler ortaya çıkarıyor.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-white font-serif text-xl">Mutfak Vizyoneri</p>
                <p className="text-gold text-sm font-sans">2026 Ödüllü</p>
              </div>
              <button className="text-gold hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-gold pb-1">
                Hikayenin Tamamını Oku
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ChefStory;



