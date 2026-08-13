"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Uluslararası teslimat sunuyor musunuz?", answer: "Evet, kapalı taşıyıcılar veya özel hava kargosu aracılığıyla dünya çapındaki hemen hemen her noktaya tam sigortalı, kusursuz bir ulaşım hizmeti sağlıyoruz." },
  { question: "Gösterimler sadece randevu ile mi yapılıyor?", answer: "Müşterilerimize en üst düzeyde hizmet ve gizlilik sağlamak amacıyla ana galerimiz yalnızca randevu sistemiyle hizmet vermektedir." },
  { question: "Takas kabul ediyor musunuz?", answer: "Köken, kondisyon ve nadirlik gibi titiz standartlarımızı karşılayan seçkin takas tekliflerini değerlendiriyoruz." },
  { question: "Talep üzerine özel araçlar buluyor musunuz?", answer: "Kesinlikle. Satın alma ekibimiz, tam olarak belirlediğiniz özelliklere uygun, piyasada bulunmayan araçları bulmak için küresel ağını kullanır." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gray-500" />
            <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Sorularınız</span>
            <div className="w-8 h-[1px] bg-gray-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 bg-black rounded-sm overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg tracking-wide">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-180 text-white" : "text-gray-500"}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

