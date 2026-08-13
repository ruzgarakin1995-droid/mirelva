"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const faqs = [
  { q: "Mürettebat ücrete dahil mi?", a: "Evet, tüm VIP yat kiralamalarımızda kaptan, özel şef, hostes ve güverte personeli dahil tam teşekküllü bir mürettebat hizmeti sunulmaktadır." },
  { q: "Özel menü talebinde bulunabilir miyiz?", a: "Kesinlikle. Şeflerimiz diyet gereksinimleriniz, alerjileriniz ve özel zevklerinize göre size özel Michelin kalitesinde menüler hazırlamaktadır." },
  { q: "Helikopter transferi sağlanıyor mu?", a: "Filomuzdaki belirli megayatlarımız heliped donanımına sahiptir. Talep doğrultusunda havalimanından yata VIP helikopter transferi organize edilmektedir." },
  { q: "Rota değişikliği yapabilir miyiz?", a: "Hava ve deniz koşulları elverdiği sürece, kaptanımızla görüşerek seyahat rotanızda esnek değişiklikler yapabilirsiniz." }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#143050]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Bilgilendirme</span>
          <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)]">
            <TextReveal text="SIKÇA SORULAN SORULAR" highlightedWords={["SORULAR"]} highlightClassName="italic text-[#c0c0c0]" />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="border border-[#c0c0c0]/20 bg-[#0b1a2e] overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none min-h-[44px]"
              >
                <span className="text-white font-serif text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`text-[#c0c0c0] transition-transform duration-300 flex-shrink-0 ${open === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out px-6 ${open === idx ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'} overflow-hidden`}
              >
                <p className="text-[#c0c0c0]/80 font-light leading-relaxed">{faq.a}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}



