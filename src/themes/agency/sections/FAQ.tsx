"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Proje teslim süreleriniz ne kadardır?', a: 'Projenin kapsamına bağlı olarak web projeleri ortalama 4-6 hafta, mobil uygulamalar ise 8-12 hafta arasında tamamlanmaktadır. Detaylı zaman çizelgesi keşif aşamasından sonra sunulur.' },
  { q: 'Sadece tasarım mı yapıyorsunuz, geliştirme süreci de dahil mi?', a: 'Uçtan uca (end-to-end) hizmet veriyoruz. UX/UI tasarımından başlayarak, front-end ve back-end geliştirme, test ve canlıya alma süreçlerinin tamamını kendi ekibimizle yürütüyoruz.' },
  { q: 'Proje bittikten sonra destek sağlıyor musunuz?', a: 'Evet. Canlıya alımdan sonra 3 aylık ücretsiz teknik destek sağlıyoruz. Sonrasında ise aylık bakım ve sürekli iyileştirme paketlerimizle yanınızda olmaya devam ediyoruz.' },
  { q: 'Çalışma modeliniz ve ödeme planınız nasıldır?', a: 'Projeler genellikle 3 aşamalı (Peşinat, Tasarım Onayı, Canlıya Alma) ödeme planı ile ilerler. Kurumsal projelerde ise aylık retainer modeliyle sürekli partnerlik yapabiliyoruz.' }
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">S.S.S</span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Merak Edilenler</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 bg-black">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex justify-between items-center min-h-[80px] focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <h3 className={`text-lg sm:text-xl font-bold pr-8 transition-colors ${open === idx ? 'text-lime-400' : 'text-white'}`}>{faq.q}</h3>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-lime-400">
                  {open === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === idx ? 'max-h-96 opacity-100 pb-8 px-6 sm:px-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



