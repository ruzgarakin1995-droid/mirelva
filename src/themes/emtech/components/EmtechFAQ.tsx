"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Birebir değişim garantisi neyi kapsar?",
    a: "Satın aldığınız ekran panelleri ve bataryalarda, kullanıcı hatası (kırık, sıvı teması, kopuk flex) olmayan tüm fabrikasyon arızalarda ilk 6 ay içerisinde birebir anında değişim sağlıyoruz."
  },
  {
    q: "Toptan siparişlerde minimum alım tutarı nedir?",
    a: "B2B / Bayi sistemimize kayıtlı üyelerimiz için alt limit bulunmamaktadır. Ancak toptan fiyat baremlerinden yararlanmak için sepet tutarınızın minimum 10.000 TL olması gerekmektedir."
  },
  {
    q: "Ürünler gerçekten %100 orijinal mi?",
    a: "Kataloğumuzda 'Orijinal' ibaresi bulunan tüm ürünler yetkili fabrikalardan tedarik edilir. OEM (Orijinal Ekipman Üreticisi) parçaları ise laboratuvarlarımızda test edilerek sadece A+ kalite standartlarını karşılıyorsa satışa sunulur."
  },
  {
    q: "Aynı gün kargo saat kaça kadar geçerli?",
    a: "Hafta içi saat 16:00'a kadar, Cumartesi günleri ise saat 12:00'a kadar verilen tüm siparişler aynı gün paketlenip kargoya teslim edilmektedir."
  }
];

export function EmtechFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative z-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Müşteri Hizmetleri ]</h2>
          <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">
            Sıkça Sorulan Sorular
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border transition-all duration-300 ${openIndex === idx ? 'border-[#0055FF] bg-white shadow-xl shadow-[#0055FF]/5' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-space font-bold uppercase tracking-widest text-sm ${openIndex === idx ? 'text-[#0055FF]' : 'text-zinc-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-[#0055FF] text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 font-inter text-sm text-zinc-500 leading-relaxed">
                      {faq.a}
                    </div>
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
