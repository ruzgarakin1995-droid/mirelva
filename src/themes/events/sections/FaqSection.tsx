"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Etkinlik planlamasına ne kadar süre önce başlamalıyız?",
      a: "Kusursuz bir organizasyon için, düğünler ve büyük ölçekli kurumsal etkinliklerde en az 6-8 ay öncesinden iletişime geçmenizi öneriyoruz. Mekan uygunluğu ve VIP tedarikçiler için erken rezervasyon çok önemlidir."
    },
    {
      q: "Sadece tasarım hizmeti alabilir miyiz?",
      a: "Evet, sadece konsept tasarımı ve dekorasyon hizmeti sunduğumuz paketlerimiz bulunmaktadır. Ekibimiz mekanınızı baştan yaratmak için vizyonunu ortaya koyacaktır."
    },
    {
      q: "Yurtdışında etkinlik düzenliyor musunuz?",
      a: "Destination Wedding ve uluslararası kurumsal davetler konusunda uzmanlaşmış özel bir departmanımız mevcuttur. Dünyanın her yerinde hizmet verebiliyoruz."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#E8DCC4] text-[#4A403A]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Merak Edilenler</span>
            <h2 className="text-3xl md:text-5xl font-serif">Sıkça Sorulan <span className="italic">Sorular</span></h2>
          </ScrollReveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="border-b border-[#C19A6B]/30 pb-4">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left font-serif text-lg md:text-xl hover:text-[#C19A6B] transition-colors"
                >
                  {faq.q}
                  {openIdx === idx ? <Minus className="w-5 h-5 text-[#C19A6B]" /> : <Plus className="w-5 h-5 text-[#C19A6B]" />}
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#6B5E53] font-light pb-4">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;



