"use client";
import React, { useState } from 'react';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const faqs = [
  { q: "Dövme çok acıtır mı?", a: "Acı eşiği kişiden kişiye ve bölgeye göre değişir. Ancak modern makinelerimiz ve tekniklerimiz sayesinde bu his daha çok rahatsız edici bir titreşim gibidir." },
  { q: "18 yaşından küçüğüm, ailemle gelsem dövme yaptırabilir miyim?", a: "Stüdyomuz prensipleri gereği, ebeveyn izni olsa dahi 18 yaş altı kişilere işlem yapmıyoruz." },
  { q: "Fiyatlandırma nasıl yapılıyor?", a: "Fiyatlandırma santimetrekareye göre değil, tasarımın detayına, harcanacak süreye ve sanatçının uzmanlığına göre seanslık olarak belirlenir." },
  { q: "Randevu almadan gelebilir miyim?", a: "Stüdyomuz sadece randevulu çalışmaktadır (Walk-in kabul edilmez). Tasarım sürecine ve hijyene gerekli vakti ayırabilmek için bu kural esnetilmez." }
];

export function TattooFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">S.S.S.</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Sıkça Sorulan Sorular</h3>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.1} className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="border border-zinc-800 bg-zinc-900/50">
              <button 
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold text-white uppercase tracking-tight pr-8">{faq.q}</span>
                <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border border-zinc-700 text-red-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 text-zinc-400 font-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
