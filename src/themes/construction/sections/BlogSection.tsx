"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const BlogSection = () => {
  const posts = [
    {
      title: "Yüksek Mukavemetli Beton Teknolojilerinde Yeni Yaklaşımlar",
      category: "MÜHENDİSLİK",
      date: "12 Ekim 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "LEED Sertifikasyon Sürecinde Şantiye Yönetimi",
      category: "SÜRDÜRÜLEBİLİRLİK",
      date: "05 Ekim 2026",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Derin Kazı ve İksa Sistemlerinde Risk Minimizasyonu",
      category: "GEOTEKNİK",
      date: "28 Eylül 2026",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-amber-500"></span> Sektörel Analizler
            </h4>
            <h2 className="text-4xl font-bold text-white">
              <TextReveal text="Teknik Makaleler ve Haberler" highlightedWords={["Makaleler", "Haberler"]} highlightClassName="text-slate-400 font-light" />
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="group cursor-pointer">
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors leading-snug">
                {post.title}
              </h3>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

