"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Burs imkanları nelerdir?", a: "Öğrencilerimize %25, %50 ve %100 oranlarında başarı, spor ve yetenek bursları sunulmaktadır. Ayrıca araştırma asistanlığı pozisyonlarıyla ek gelir imkanı mevcuttur." },
  { q: "Yurtdışı değişim programları var mı?", a: "Evet, Erasmus+ ve global partner ağımız sayesinde öğrencilerimiz eğitimlerinin bir veya iki dönemini ABD, Avrupa veya Asya'daki anlaşmalı üniversitelerde geçirebilir." },
  { q: "Eğitim dili nedir?", a: "Programlarımızın tamamında eğitim dili %100 İngilizce'dir. Gerekli durumlarda 1 yıllık yoğun İngilizce Hazırlık Programı sunulmaktadır." },
  { q: "Staj ve iş bulma desteği sağlıyor musunuz?", a: "Kariyer Merkezimiz, 1. sınıftan itibaren öğrencilerimize staj bulma, mülakat hazırlığı ve CV oluşturma konularında birebir destek vermektedir." }
];

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-slate-400 text-sm md:text-base">Eğitim süreçlerimiz ve üniversitemiz hakkında merak ettikleriniz.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between min-h-[44px] focus:outline-none"
              >
                <span className="font-semibold text-base md:text-lg pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



