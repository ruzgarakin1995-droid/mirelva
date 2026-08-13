"use client";
import React from 'react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const styles = [
  {
    title: "Blackwork",
    desc: "Sadece siyah mürekkebin yoğun ve vurucu kullanımı.",
    img: "/images/tattoo-v3/v3_style_black_1786315254883.jpg"
  },
  {
    title: "Realism",
    desc: "Fotoğraf gerçekliğinde, ince gölgelendirmeli portreler.",
    img: "/images/tattoo-v3/v3_style_realism_1786315239782.jpg"
  },
  {
    title: "Fine Line",
    desc: "Tek iğne ile işlenen, zarif ve ince çizgiler.",
    img: "/images/tattoo-v3/v3_style_fine_1786315262164.jpg"
  },
  {
    title: "Traditional",
    desc: "Kalın hatlar ve doygun renklerle klasikleşmiş ekol.",
    img: "/images/tattoo-v3/v3_style_trad_1786315247182.jpg"
  }
];

export function TattooStyles() {
  return (
    <section id="tarzlar" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Uzmanlık Alanlarımız</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Dövme Tarzları</h3>
          </div>
          <Link href="/test-tattoo-v3/tarzlar" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">
            Tümünü Gör 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-zinc-800">
                <img 
                  src={style.img} 
                  alt={style.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{style.title}</h4>
                  <div className="w-12 h-1 bg-red-600 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                </div>
              </div>
              <p className="text-zinc-400 font-light text-sm">{style.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="mt-12 text-center md:hidden">
          <Link href="/test-tattoo-v3/tarzlar" className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest border border-zinc-800 px-8 py-4 hover:border-red-600 transition-colors">
            Tümünü Gör
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
