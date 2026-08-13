"use client";

import React from "react";
import { Plus } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FAQSection = () => {
  const faqs = [
    {
      q: "Proje teslim süreleri garanti ediliyor mu?",
      a: "Tüm projelerimizde uluslararası FIDIC sözleşme şartları uygulanmakta olup, detaylı Primavera/MS Project iş programlarıyla teslim tarihleri katı bir şekilde garanti altına alınmaktadır."
    },
    {
      q: "Hangi sertifikasyon standartlarında çalışıyorsunuz?",
      a: "ISO 9001, 14001 ve 45001 standartlarının yanı sıra, projeye özel olarak LEED, BREEAM gibi uluslararası yeşil bina sertifikasyon süreçlerini eksiksiz yönetmekteyiz."
    },
    {
      q: "Anahtar teslim (EPC) hizmet veriyor musunuz?",
      a: "Evet, Mühendislik, Tedarik ve İnşaat (EPC) modeli ile konsept tasarımdan işletmeye almaya kadar tüm süreçleri tek elde toplayarak anahtar teslim çözümler sunuyoruz."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <ScrollReveal variant="slide-left" className="lg:w-1/3">
            <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-amber-500"></span> Bilgi Bankası
            </h4>
            <h2 className="text-4xl font-bold text-white mb-6">
              <TextReveal text="Sıkça Sorulan Sorular" highlightedWords={["Sıkça", "Sorulan"]} highlightClassName="text-amber-500" />
            </h2>
            <p className="text-slate-400 font-light">
              Operasyonel süreçlerimiz, yasal güvenceler ve mühendislik standartlarımız hakkında detaylı bilgi alın.
            </p>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollRevealChild key={i} variant="fade-up" className="bg-slate-950 p-6 rounded-lg border border-white/5 cursor-pointer hover:border-amber-500/30 transition-colors">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                  <Plus className="w-5 h-5 text-amber-500 shrink-0" />
                </div>
              </ScrollRevealChild>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

