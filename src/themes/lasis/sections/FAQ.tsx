"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    { q: "Uygulamalarınız ağrılı mıdır?", a: "Hayır. En son teknoloji FDA onaylı cihazlarımız sayesinde işlemlerimiz minimum hassasiyet ve maksimum konfor ile gerçekleşir." },
    { q: "İlk seansta etkisini görür müyüm?", a: "Birçok cilt yenileme protokolümüzde ilk seanstan itibaren gözle görülür parlaklık ve sıkılaşma elde edilmektedir." },
    { q: "Lazer epilasyon yazın uygulanır mı?", a: "Evet. Kullandığımız yeni nesil buz başlıklı lazer sistemleri, dört mevsim güvenle uygulama imkanı sunar." }
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight text-center">Sık Sorulan Sorular.</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[var(--border)]">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-8 text-left flex justify-between items-center text-xl md:text-2xl hover:text-[var(--accent)] transition-colors font-light">
              {faq.q}
              <span className="text-3xl font-light">{open === i ? 'âˆ’' : '+'}</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden">
                  <p className="pb-8 text-[var(--muted)] text-lg leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

