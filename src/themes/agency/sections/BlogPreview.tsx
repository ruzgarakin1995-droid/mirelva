"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  { category: 'Tasarım', title: '2027 UI/UX Trendleri: Neomorfizm Geri mi Dönüyor?', date: '12 Eki, 2026', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
  { category: 'Teknoloji', title: 'Web3 ve Markalar İçin Yeni Dijital Ekosistemler', date: '08 Eki, 2026', img: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800' },
  { category: 'Pazarlama', title: 'Yapay Zeka Destekli Büyüme Stratejileri', date: '29 Eyl, 2026', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' }
];

export const BlogPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">İçgörüler</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Dijital Kültür <br /> ve Vizyon</h2>
          </div>
          <button className="min-h-[44px] px-6 py-2 border-b-2 border-lime-400 text-white font-bold hover:text-lime-400 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            Tüm Makaleler <ArrowRight className="w-4 h-4 text-lime-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <a key={idx} href="#" className="group flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-neutral-900 border border-white/5">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">{article.category}</span>
                <span className="text-neutral-500 text-xs">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug group-hover:text-lime-400 transition-colors">{article.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};




