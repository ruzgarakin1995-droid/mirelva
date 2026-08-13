
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "Randevu iptal veya değişiklik işlemlerini nasıl yapabilirim?", a: "Çağrı merkezimizi arayarak veya online sistemimiz üzerinden randevunuza 24 saat kalana kadar işlem yapabilirsiniz." },
    { q: "SGK veya Özel Sağlık Sigortası anlaşmanız var mı?", a: "Evet, birçok özel sağlık sigortası ve SGK ile anlaşmamız bulunmaktadır. Detaylı bilgi için danışmamızdan bilgi alabilirsiniz." },
    { q: "Tahlil sonuçlarımı nasıl öğrenebilirim?", a: "Sonuçlarınızı web sitemizdeki 'Online Sonuç' bölümünden veya SMS ile gelen link üzerinden görüntüleyebilirsiniz." },
    { q: "Acil servisiniz hangi saatlerde açık?", a: "Acil servisimiz uzman hekim kadromuzla 7 gün 24 saat kesintisiz hizmet vermektedir." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">SSS</h2>
            <h3 className="text-4xl font-bold text-gray-900">Sıkça Sorulan Sorular</h3>
          </motion.div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-blue-50/50 rounded-2xl bg-[#FAFAFA] overflow-hidden"
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-blue-600" />}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
