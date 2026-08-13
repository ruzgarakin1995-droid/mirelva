"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const faqs = [
  { q: "Alım-satım sürecinde hukuki danışmanlık veriyor musunuz?", a: "Evet, bünyemizdeki uzman gayrimenkul avukatları tüm sözleşme ve tapu süreçlerinizi başından sonuna kadar yönetir." },
  { q: "Yabancı uyruklu alıcılar için vatandaşlık süreci nasıl işliyor?", a: "Vatandaşlık kriterlerine uygun portföy sunumundan, başvuru ve pasaport teslimine kadar tüm süreci anahtar teslim yönetiyoruz." },
  { q: "Mülk değerlemesi ne kadar sürüyor?", a: "Uzman ekspertiz ekibimiz talebinizden itibaren 48 saat içinde bilimsel piyasa değerleme raporunuzu size sunar." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-stone-50">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4 text-center">SSS</h2>
          <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter mb-16 text-center">
            <TextReveal text="Sık Sorulan Sorular" highlightedWords={["Sık", "Sorulan"]} highlightClassName="text-[var(--accent)]" />
          </h3>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-stone-900">{faq.q}</span>
                <span className={`text-[var(--accent)] transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  {openIdx === idx ? <Minus /> : <Plus />}
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-stone-600 font-medium leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


