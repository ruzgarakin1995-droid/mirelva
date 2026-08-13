"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Tipik bir proje takviminiz nasıldır?', a: 'Ölçeğe bağlı olarak, konut projeleri konseptten tamamlanmaya kadar genellikle 18-24 ay sürer. Ticari ve kültürel projeler ise karmaşıklıklarına göre önemli ölçüde değişkenlik gösterir.' },
  { q: 'Uluslararası projeler üstleniyor musunuz?', a: 'Evet. Avrupa, Asya ve Amerika kıtalarında birçok projeyi başarıyla tamamladık. Kusursuz bir uygulama sağlamak adına sıklıkla yerel mimari ofislerle işbirliği yapmaktayız.' },
  { q: 'Tasarım süreci nasıl başlar?', a: 'Sürece yoğun bir keşif aşamasıyla başlarız; sahayı ziyaret eder ve vizyonunuzu derinlemesine anlarız. Bunu konsept önerileri ve titiz fizibilite çalışmaları izler.' },
  { q: 'Sürdürülebilirlik yaklaşımınız nedir?', a: 'Sürdürülebilirlik, tasarım felsefemizin ayrılmaz bir parçasıdır. Pasif tasarım prensiplerini, sürdürülebilir malzeme tedarikini ve uzun ömürlü mimariyi her zaman ön planda tutarız.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 text-black py-32 px-6 md:px-12" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-4">Bilgilendirme</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Sıkça Sorulanlar.</h2>
        </div>

        <div className="border-t border-black/10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/10">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-medium tracking-tight group-hover:text-black/70 transition-colors">{faq.q}</span>
                <span className="text-black/30 group-hover:text-black transition-colors">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-black/60 leading-relaxed text-sm pr-12">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

