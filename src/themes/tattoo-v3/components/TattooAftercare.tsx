"use client";
import React from 'react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const rules = [
  { day: "Gün 1-3", title: "Bariyer Film", desc: "İlk gün sarılan filmi en az 24 saat çıkarmayın. Su değdirmeyin." },
  { day: "Gün 3-7", title: "Nemlendirme", desc: "İnce bir tabaka halinde sadece önerdiğimiz merhemi sürün. Günde 2 kez." },
  { day: "Gün 7-14", title: "Kabuklanma", desc: "Asla kaşımayın veya soymayın. Kendiliğinden dökülmesini bekleyin." }
];

export function TattooAftercare() {
  return (
    <section id="bakim" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal variant="slide-right">
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">İşlem Sonrası</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Bakım Rehberi</h3>
            <p className="text-zinc-400 font-light text-lg mb-8 leading-relaxed">
              Mükemmel bir dövme, doğru bakım ile başlar. İşlem sonrasında dövmenizin kalitesini korumak sizin elinizde.
            </p>
            <Link href="/test-tattoo-v3/bakim" className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest border border-zinc-800 px-8 py-4 hover:border-red-600 transition-colors">
              Detaylı Rehberi Oku
            </Link>
          </ScrollReveal>

          <ScrollReveal staggerChildren={true} staggerDelay={0.15} className="space-y-6">
            {rules.map((rule, i) => (
              <ScrollRevealChild key={i} variant="fade-up" className="bg-zinc-950 p-6 border border-zinc-800 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <span className="text-red-600 font-mono text-sm font-bold uppercase tracking-widest">{rule.day}</span>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">{rule.title}</h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">{rule.desc}</p>
                </div>
              </ScrollRevealChild>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
