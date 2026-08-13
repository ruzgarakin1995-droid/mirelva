"use client";
import React from 'react';
import { ChefHat, Wine, Coffee } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const CateringSection = () => {
  return (
    <section className="w-full py-24 bg-[#2A2421] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal delay={0.1}>
          <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Michelin Yıldızlı Dokunuş</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Gastronomi <span className="italic text-[#E8DCC4]">Sanatı</span></h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center">
              <ChefHat className="w-12 h-12 text-[#C19A6B] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-4">Özel Tadım Menüleri</h3>
              <p className="text-white/60 font-light text-sm">Dünya mutfağının en seçkin lezzetleri, vizyoner şeflerimizin yorumlarıyla.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center">
              <Wine className="w-12 h-12 text-[#C19A6B] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-4">Sommelier Seçimi</h3>
              <p className="text-white/60 font-light text-sm">Menünüze mükemmel eşlik edecek, nadide bağlardan seçilmiş şarap koleksiyonu.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center">
              <Coffee className="w-12 h-12 text-[#C19A6B] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-4">Mixology Barları</h3>
              <p className="text-white/60 font-light text-sm">Ödüllü barmenlerimizin hazırladığı kişiselleştirilmiş imza kokteyller.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;



