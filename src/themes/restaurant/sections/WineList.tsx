"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const WineList = () => {
  return (
    <section id="wine" className="section-padding bg-black relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal
            variant="scale"
            className="order-2 lg:order-1 relative p-10 border border-gold/20 glass-panel"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl text-white font-serif mb-4">Sommelier Seçkisi</h3>
              <p className="text-gray-400 text-sm">Dünyanın en seçkin bağlarından özenle derlenmiş rekolteler</p>
            </div>
            
            <div className="space-y-6">
              {[
                { name: "Château Margaux 2010", region: "Bordeaux, France", price: "$1,200" },
                { name: "Screaming Eagle Cabernet", region: "Napa Valley, USA", price: "$4,500" },
                { name: "Domaine de la Romanée-Conti", region: "Burgundy, France", price: "$8,500" },
                { name: "Penfolds Grange 2015", region: "Barossa Valley, Aus", price: "$1,400" },
              ].map((wine, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-gray-800 pb-4">
                  <div>
                    <h4 className="text-lg text-white font-serif">{wine.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{wine.region}</p>
                  </div>
                  <span className="text-gold font-serif">{wine.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className="text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white transition-colors">
                Tüm Şarap Kavını Görüntüle
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal
            variant="slide-left"
            className="order-1 lg:order-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Şarap Kavı</span>
              <span className="h-[1px] w-24 bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight">
              <TextReveal text="Bordeaux'da Bir Senfoni" highlightedWords={["Bordeaux'da"]} highlightClassName="text-bordeaux font-serif italic" />
            </h2>
            <p className="text-gray-400 font-sans text-lg leading-relaxed mb-6">
              Şarap kavımız, hem efsanevi şatolardan hem de yükselen butik bağlardan titizlikle seçilmiş 3.000'den fazla şişeye ev sahipliği yapıyor.
            </p>
            <p className="text-gray-400 font-sans text-lg leading-relaxed">
              Baş Sommelier'miz Antoine, tadım menünüz için kusursuz eşleşmeyi kurgulayarak her bir tabağı gastronomik hazzın yeni zirvelerine taşımak üzere hizmetinizdedir.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WineList;


