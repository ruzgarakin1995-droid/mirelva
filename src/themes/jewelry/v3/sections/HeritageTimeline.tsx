'use client';
import React from 'react';

export default function HeritageTimeline() {
  return (
    <section className="py-32 bg-[#050505] border-y border-platinum-thin text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-16">
          Zamana Meydan Okuyan <span className="text-[#d4af37] italic">Miras</span>
        </h2>
        
        <div className="relative border-l border-[#d4af37]/30 ml-4 md:ml-auto md:mx-auto max-w-xl text-left">
          {[
            { year: '1920', title: 'İlk Kıvılcım', desc: 'Paris\'te küçük bir atölyede başlayan kusursuzluk arayışı.' },
            { year: '1955', title: 'Kraliyet Seçimi', desc: 'Avrupa kraliyet aileleri için tasarlanan özel taç koleksiyonu.' },
            { year: '1998', title: 'Modern Dönüşüm', desc: 'Geleneksel çizgilerin modern estetikle buluştuğu yeni milenyum tasarımları.' },
            { year: '2024', title: 'Geleceğin Mirası', desc: 'Sürdürülebilir lüks anlayışıyla yaratılan yeni nesil başyapıtlar.' }
          ].map((item, idx) => (
            <div key={idx} className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-[#d4af37] before:rounded-full">
              <span className="font-display text-[#d4af37] text-xl block mb-2">{item.year}</span>
              <h3 className="font-display text-white text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
