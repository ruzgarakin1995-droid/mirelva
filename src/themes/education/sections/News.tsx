"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const news = [
  {
    category: "Araştırma",
    title: "Üniversitemiz Kuantum Bilişim Merkezini Açtı",
    date: "12 Ekim 2027",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    category: "Akademik",
    title: "Yapay Zeka Bölümümüz Times Higher Education Sıralamasında İlk 50'de",
    date: "08 Ekim 2027",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    category: "Öğrenci Başarısı",
    title: "Mühendislik Öğrencilerimizden NASA Yarışmasında Birincilik",
    date: "02 Ekim 2027",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const News = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold">Akademik Haberler & <br className="hidden md:block"/>Duyurular</h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 text-sm md:text-base min-h-[44px]">
            Tüm Haberleri Görüntüle <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 relative">
                <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {n.category}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3">{n.date}</p>
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors leading-snug">
                {n.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



