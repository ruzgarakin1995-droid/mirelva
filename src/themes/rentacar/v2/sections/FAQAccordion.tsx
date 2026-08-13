"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Araç kiralama şartları nelerdir?",
    answer: "Minimum 25 yaş ve en az 3 yıllık geçerli ehliyet şartı aranmaktadır. Ultra lüks segment (Rolls Royce vb.) araçlarımız için özel koşullar geçerlidir. Tüm kiralama süreçlerinde iki farklı kredi kartı provizyonu talep edilir."
  },
  {
    question: "Araçları havalimanından teslim alabilir miyim?",
    answer: "Evet. İstanbul Havalimanı (IST) ve Sabiha Gökçen Havalimanı'nda (SAW) 7/24 VIP karşılama ve teslimat hizmetimiz bulunmaktadır. Özel jet uçuşlarınız için genel havacılık terminalinde direkt uçağa araç tahsisi yapabilmekteyiz."
  },
  {
    question: "Şoförlü kiralama hizmetine neler dahildir?",
    answer: "İleri sürüş ve protokol eğitimi almış profesyonel şoför, yakıt, köprü/otoyol geçiş ücretleri ve araç içi premium ikramlar (özel su, atıştırmalık, Wi-Fi) fiyata dahildir."
  },
  {
    question: "Rezervasyonumu iptal edebilir miyim?",
    answer: "Alış saatinize 24 saat kalana kadar yapılan iptallerde kesintisiz tam iade yapılmaktadır. 24 saatten az kalan iptallerde 1 günlük kiralama bedeli tahsil edilir."
  }
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-16 text-center">Sık Sorulan Sorular</h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl md:text-2xl font-medium tracking-tight transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg text-slate-500 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
