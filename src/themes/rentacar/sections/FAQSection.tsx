"use client";
import React from 'react';
import { Plus } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FAQSection = () => {
  const faqs = [
    {
      q: "VIP Karşılama prosedürü nasıl işliyor?",
      a: "Misafirlerimiz terminal çıkışında isme özel dijital pano ile karşılanır. Bagaj taşıma asistanlarımız eşliğinde VIP aracımıza kadar eşlik edilir."
    },
    {
      q: "Şoförlü kiralamalarda minimum süre nedir?",
      a: "Şoförlü kiralama hizmetimizde minimum kiralama süresi 4 saat (yarım gün) olarak belirlenmiştir. Uzun dönem protokol tahsisleri için özel teklif sunulmaktadır."
    },
    {
      q: "Araç filonuzun yaş ortalaması nedir?",
      a: "Tüm VIP filomuz, maksimum konfor ve güvenlik standartlarını sağlamak amacıyla 0-2 yaş arası en üst donanım paketine sahip araçlardan oluşmaktadır."
    },
    {
      q: "Gizlilik sözleşmesi (NDA) imzalıyor musunuz?",
      a: "Evet, talebiniz doğrultusunda hem firmamız hem de size tahsis edilen özel şoförünüz ile kurumsal gizlilik sözleşmesi yapılmaktadır."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-2 block">Sıkça Sorulanlar</span>
          <h2 className="text-4xl md:text-5xl font-light">
            <TextReveal text="Aklınızdaki Sorular" highlightedWords={["Sorular"]} highlightClassName="font-bold" />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollRevealChild key={index} variant="slide-right" className="bg-zinc-950 border border-zinc-800 p-6 rounded-sm cursor-pointer hover:border-amber-500/50 transition-colors group">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-zinc-100">{faq.q}</h3>
                <Plus className="w-5 h-5 text-amber-500 transform group-hover:rotate-45 transition-transform" />
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;


