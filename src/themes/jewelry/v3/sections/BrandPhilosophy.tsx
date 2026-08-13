'use client';
import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section className="py-32 px-6 bg-black relative border-b border-platinum-thin">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 img-zoom-container border border-gold-thin p-2">
          <img 
            src="https://images.unsplash.com/photo-1599643478524-fb66f70b00b0?q=80&w=1000&auto=format&fit=crop" 
            alt="Felsefe" 
            className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col items-start space-y-8">
          <div className="w-12 h-[1px] bg-[#d4af37]"></div>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Miras ve <span className="text-[#d4af37] italic">Tutku</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Yüzyıllardır süregelen ustalık geleneğimizi, modern tasarım anlayışıyla birleştiriyoruz. Her bir eser, sadece bir takı değil, nesilden nesile aktarılacak bir hikayedir.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Nadir bulunan taşların, usta ellerde hayat bulduğu bu büyülü yolculuk, kusursuzluk arayışımızın bir yansımasıdır.
          </p>
          <button className="text-[#d4af37] font-display uppercase tracking-widest text-sm border-b border-[#d4af37] pb-1 hover:text-white hover:border-white transition-colors duration-300">
            Hikayemizi Okuyun
          </button>
        </div>
      </div>
    </section>
  );
}
