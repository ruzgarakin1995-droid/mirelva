"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeaturedCollections() {
  const collections = [
    { name: 'Bridal', desc: 'Sonsuzluk Yemini', img: '/jewelry_hero.jpg' },
    { name: 'High Jewelry', desc: 'Zirvedeki Zarafet', img: '/jewelry_watch.jpg' },
    { name: 'Everyday', desc: 'Günlük Işıltı', img: '/jewelry_store.jpg' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-zinc-900">Seçkin<br />Koleksiyonlar</h2>
          </div>
          <button className="flex items-center gap-2 text-zinc-900 uppercase tracking-widest text-xs border-b border-zinc-900 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
            Tümünü Gör <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((col, idx) => (
            <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img src={col.img} alt={col.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-[0.2em] mb-2 font-light opacity-80">{col.desc}</span>
                <h3 className="font-serif text-3xl md:text-4xl">{col.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



