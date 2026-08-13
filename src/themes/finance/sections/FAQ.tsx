"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const faqs = [
  {
    question: "Minimum yatırım tutarı nedir?",
    answer: "Özel Varlık Yönetimi hizmetimiz için minimum başlangıç portföy büyüklüğü 250,000 USD olarak belirlenmiştir. Ancak kurumsal finansman projeleri için bu tutar değişkenlik gösterebilir."
  },
  {
    question: "Portföy getiri garantisi sunuyor musunuz?",
    answer: "Finansal piyasalarda hiçbir kurum yasal olarak kesin getiri garantisi veremez. Bizim taahhüdümüz, riskleri asgari düzeyde tutarak sermayenizi korumak ve optimum risk-getiri dengesinde piyasa üzeri performans hedeflemektir."
  },
  {
    question: "Raporlama sıklığı nedir?",
    answer: "Müşterilerimize aylık olarak kapsamlı portföy durum raporu iletiyoruz. Ayrıca 7/24 erişilebilir müşteri panelimiz üzerinden canlı verilerinizi takip edebilir, çeyreklik dönemlerde danışmanınızla birebir değerlendirme toplantıları yapabilirsiniz."
  },
  {
    question: "Komisyon ve yönetim ücreti politikanız nasıl?",
    answer: "Şžeffaf ücretlendirme prensibimiz gereği, gizli maliyetler bulunmaz. Sabit bir yıllık yönetim ücreti (%0.5 - %1.5 arası) ve sadece hedef getiri aşıldığında tahsil edilen performans ücreti uyguluyoruz."
  }
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6">
            <TextReveal text="Sıkça Sorulan Sorular" className="justify-center" />
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="bg-white border border-slate-200 rounded-sm">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none min-h-[44px]"
              >
                <span className={`font-bold text-lg ${open === idx ? 'text-yellow-600' : 'text-blue-950'}`}>
                  {faq.question}
                </span>
                <span className="text-slate-400 flex-shrink-0 ml-4">
                  {open === idx ? <Minus className="w-5 h-5 text-yellow-500" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



