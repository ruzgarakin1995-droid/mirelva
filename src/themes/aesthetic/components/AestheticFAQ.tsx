"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AestheticFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "İşlemler sırasında ağrı veya acı hisseder miyim?",
      a: "Kliniğimizde konforunuz önceliğimizdir. İşlem öncesi FDA onaylı medikal topikal anestezik kremler uygulanır ve çoğu cihazlı sistemimizde entegre soğutma modülleri (kriyojen gaz) bulunur. Bu sayede işlemler neredeyse tamamen ağrısız geçer."
    },
    {
      q: "Dermal dolguların kalıcılık süresi ne kadardır?",
      a: "Kullandığımız Juvederm ve Teosyal gibi premium hyalüronik asit dolgularının kalıcılığı, uygulanan bölgeye ve kişinin metabolizma hızına bağlı olarak 9 ila 18 ay arasında değişmektedir."
    },
    {
      q: "Konsültasyon (Ön görüşme) ücretli mi?",
      a: "Uzman doktorlarımızla yapacağınız ilk değerlendirme ve medikal protokol belirleme süreci tamamen ücretsizdir. Sizden sadece randevu oluşturmanızı rica ediyoruz."
    },
    {
      q: "Lazer işlemlerinden sonra normal hayata hemen dönebilir miyim?",
      a: "BBL Hero ve Q-Switch gibi yeni nesil cihazlarımız 'sıfır iyileşme süresi' (zero downtime) prensibiyle çalışır. Sadece hafif bir pembelik olabilir, ardından hemen günlük hayatınıza veya işinize dönebilirsiniz."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#FDFCF9] px-6 lg:px-8 border-y border-[#1C1C1C]/10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">S.S.S.</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#1C1C1C]"
          >
            Merak <span className="italic font-light text-[#C4A79A]">Edilenler.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-[#1C1C1C]/10 transition-colors duration-500 ${isOpen ? 'bg-[#FDFCF9]' : 'bg-transparent hover:bg-[#FDFCF9]/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors duration-300 ${isOpen ? 'text-[#C4A79A]' : 'text-[#1C1C1C]'}`}>
                    {faq.q}
                  </span>
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0 text-[#1C1C1C]">
                    <span className="absolute w-full h-[1px] bg-current"></span>
                    <span className={`absolute h-full w-[1px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed text-sm md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
