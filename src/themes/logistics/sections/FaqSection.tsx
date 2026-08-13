"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FaqSection = () => {
  const faqs = [
    { q: 'Gümrükleme işlemlerini kendi bünyenizde mi yapıyorsunuz?', a: 'Evet, A Sınıfı Yetkilendirilmiş Yükümlü Statüsü (YYS) belgeli uzman gümrük müşavirliği departmanımız ile tüm işlemleri entegre olarak yürütüyoruz.' },
    { q: 'Tehlikeli madde (ADR/DGR) taşımacılığı yapıyor musunuz?', a: 'Gerekli tüm uluslararası sertifikasyonlara (ADR, IMDG Code, DGR) sahip araçlarımız ve eğitimli personelimizle tehlikeli madde taşımacılığı gerçekleştiriyoruz.' },
    { q: 'Yük sigortası süreci nasıl işliyor?', a: 'Talebiniz doğrultusunda, yükünüzün cinsine ve taşıma moduna uygun olarak, "All Risks" kapsamında en geniş teminatlı emtia nakliyat sigortası poliçeleri düzenliyoruz.' },
    { q: 'Parsiyel (LCL/LTL) çıkış günleriniz nelerdir?', a: 'Avrupa hatlarında haftanın 4 günü düzenli karayolu parsiyel çıkışımız; Uzakdoğu ve Amerika hatlarında ise haftalık düzenli denizyolu konsolidasyon servisimiz bulunmaktadır.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Sıkça Sorulan Sorular</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            <TextReveal text="Operasyonel Detaylar" className="justify-center" />
          </h2>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollRevealChild variant="fade-up" key={i} className="border border-slate-200 rounded-2xl overflow-hidden group">
              <button className="w-full p-6 text-left flex justify-between items-center bg-slate-50 hover:bg-blue-50 transition-colors">
                <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-blue-600 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="p-6 bg-white text-slate-600 border-t border-slate-100">
                {faq.a}
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

