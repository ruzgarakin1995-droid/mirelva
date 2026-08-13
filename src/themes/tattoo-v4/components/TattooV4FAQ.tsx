"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: "Fine Line (İnce Çizgi) dövme nedir?",
    answer: "Fine Line dövme, çok ince iğneler (genellikle tek iğne) kullanılarak yapılan, mikro detaylara ve zarif çizgilere sahip minimalist bir dövme tarzıdır."
  },
  {
    question: "Fine Line dövmeler zamanla silinir mi?",
    answer: "Doğru teknikle ve cilt anatomisine uygun uygulandığında fine line dövmeler silinmez. Ancak iğne kalınlığı ince olduğu için, güneşten korumak ve bakım talimatlarına uymak çok daha önemlidir."
  },
  {
    question: "Vegan mürekkep mi kullanıyorsunuz?",
    answer: "Evet, stüdyomuzdaki tüm mürekkepler ve dövme sonrası bakım kremleri tamamen vegan ve cruelty-free (hayvanlar üzerinde test edilmemiş) ürünlerdir."
  },
  {
    question: "Randevu süreci nasıl işliyor?",
    answer: "Öncelikle 'Danışmanlık Talep Et' formunu doldurarak bize konseptinizi iletiyorsunuz. Sanatçımızla yapacağınız kısa bir ön görüşme sonrası size özel tasarım hazırlanıyor ve seans gününüz belirleniyor."
  }
];

export function TattooV4FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Merak Edilenler</span>
          <h2 className="text-4xl font-serif text-[#1A1A1A]">Sıkça Sorulan Sorular.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-[#E5E0D8] pb-4"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
              >
                <span className={`font-serif text-lg transition-colors ${openIndex === index ? 'text-[#B59461]' : 'text-[#1A1A1A] group-hover:text-[#B59461]'}`}>
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-[#1A1A1A] group-hover:text-[#B59461] transition-colors font-light">
                  {openIndex === index ? '—' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#5A5853] font-light leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
