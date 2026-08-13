"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: "Seramik kaplama ne kadar sürer?",
    a: "Sürecin tamamlanması (dekontaminasyon, boya düzeltme, kaplama ve kürleşme süresi) aracın durumuna bağlı olarak genellikle 2-3 gün sürmektedir."
  },
  {
    q: "Seramik kaplama çizikleri engeller mi?",
    a: "Seramik kaplama mikroskobik düzeyde çok sert bir katman (9H) oluşturarak kılcal çiziklere karşı direnç sağlar, ancak taş sekmeleri veya derin sürtmelere karşı PPF (Şeffaf Kaplama) kadar koruma sağlayamaz."
  },
  {
    q: "Laboratuvar ortamı ne anlama geliyor?",
    a: "Uygulama alanlarımız tozdan arındırılmış, nem ve sıcaklık oranı her zaman sabit tutulan, özel aydınlatma sistemleriyle donatılmış stüdyolardır. Bu sayede uygulanan işlemlerden %100 verim alınır."
  },
  {
    q: "Kullanılan kimyasallar araca zarar verir mi?",
    a: "Kesinlikle hayır. Yalnızca pH dengeli, aracın trimlerine (krom, plastik) ve vernik yapısına zarar vermeyen, global ölçekte kendini kanıtlamış premium markaların (Gtechniq, Koch Chemie vb.) ürünlerini kullanmaktayız."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-slate-900 tracking-tight mb-6">
            Merak Edilenler
          </h2>
          <p className="text-xl text-slate-500 font-light">
            Aklınıza takılan soruların şeffaf cevapları
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                {open === index ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 font-light leading-relaxed">
                      {faq.a}
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
