"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Kıyafet yönetmeliği nedir?",
      a: "Zarif ve şık (smart elegant) bir kıyafet yönetmeliği uygulamaktayız. Beyefendilerin yakalı gömlek ve kapalı ayakkabı giymeleri rica olunur. Ceket tercih edilmekle birlikte zorunlu değildir. Spor giyim, şort ve açık burunlu ayakkabılara izin verilmemektedir."
    },
    {
      q: "Beslenme hassasiyetlerine uygun menü hazırlıyor musunuz?",
      a: "Evet, en az 48 saat önceden bildirilmesi koşuluyla birçok beslenme hassasiyetine uygun menü hazırlayabiliyoruz. Lütfen rezervasyon sırasında bu durumu belirtiniz."
    },
    {
      q: "Ne kadar süre öncesinden rezervasyon yapabilirim?",
      a: "Rezervasyonlar yerel saatle 10:00'da, 90 gün öncesinden açılmaktadır. Yoğun talep nedeniyle mümkün olan en erken tarihte rezervasyon yapmanızı tavsiye ederiz."
    },
    {
      q: "İptal politikanız nedir?",
      a: "Rezervasyon iptali veya değişiklikleri için 48 saat öncesinden bilgi verilmesi gerekmektedir. Geç iptallerde kişi başı 150$ ücret yansıtılacaktır."
    }
  ];

  return (
    <section className="section-padding bg-black border-t border-gray-900">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <h2 className="text-4xl text-white font-serif mb-4">
            <TextReveal text="Misafir Bilgilendirmesi" highlightedWords={["Bilgilendirmesi"]} highlightClassName="italic" />
          </h2>
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">SSS</span>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="border-b border-gray-800 pb-4">
              <button 
                className="w-full flex justify-between items-center py-4 text-left group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className={`font-serif text-xl transition-colors ${openIdx === idx ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-gold transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 font-sans pb-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;


