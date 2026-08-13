"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const reviews = [
  {
    name: "Caner T.",
    role: "Müzisyen",
    text: "Blackwork tarzında bir kol kaplama yaptırdım. İnanılmaz ince çalışıyorlar ve stüdyonun enerjisi harika. Kesinlikle tek adresim.",
    rating: 5
  },
  {
    name: "Ece Y.",
    role: "Tasarımcı",
    text: "Fine line dövmelerde Türkiye'de bu kadar temiz işçilik yapan başka bir yer görmedim. Çizgiler kusursuz, ortam hastane gibi steril.",
    rating: 5
  },
  {
    name: "Murat K.",
    role: "Fotoğrafçı",
    text: "Realism portre dövmesi yaptırdım. Fotoğrafın aynısını derime işlediler. İlk seanstan itibaren profesyonellikleri belli oluyor.",
    rating: 5
  }
];

export function TattooTestimonials() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Referanslarımız</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Onların Gözünden</h3>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="bg-zinc-900 p-8 md:p-12 border border-zinc-800">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 italic">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{review.name}</h4>
                <p className="text-zinc-600 font-mono text-xs uppercase">{review.role}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
