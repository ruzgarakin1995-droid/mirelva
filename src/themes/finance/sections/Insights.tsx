"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const articles = [
  {
    category: "Piyasa Analizi",
    title: "2026 3. Çeyrek Küresel Makroekonomik Görünüm Raporu",
    date: "12 Ağustos 2026",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Yatırım Stratejisi",
    title: "Yapay Zeka ve Teknoloji Sektöründe Uzun Vadeli Değer Arayışı",
    date: "5 Ağustos 2026",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Servet Yönetimi",
    title: "Enflasyonist Ortamlarda Portföy Koruma Taktikleri",
    date: "28 Temmuz 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export const Insights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <ScrollReveal variant="fade-up" className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6">
              <TextReveal text="Analiz & İçgörüler" />
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-lg text-slate-600">Uzmanlarımızın kaleminden piyasa değerlendirmeleri, strateji raporları ve ekonomik bültenler.</p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <button className="mt-6 md:mt-0 px-6 min-h-[44px] text-blue-900 font-bold border-b-2 border-yellow-500 hover:text-yellow-600 transition-colors flex items-center">
              Tüm Raporlar <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </ScrollReveal>
        </div>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ScrollRevealChild as="a" variant="fade-up" key={idx} href="#" className="group block overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-yellow-500 text-blue-950 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              <div className="p-6 bg-slate-50 border border-t-0 border-slate-100 group-hover:bg-white transition-colors">
                <div className="text-slate-400 text-sm mb-3 font-medium">{article.date}</div>
                <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm font-semibold text-blue-900 group-hover:text-yellow-600 transition-colors min-h-[44px]">
                  Makaleyi Oku <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



