"use client";
import React, { useState } from 'react';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Satışını yaptığınız LCD ekranlar orijinal mi?",
    answer: "Evet, satışını yaptığımız LCD ekranlar orijinal ve garantilidir. Ayrıca yüksek kaliteli muadil ürün seçeneklerimiz de bulunmaktadır."
  },
  {
    question: "Hangi markaların ekran ve bataryalarını satıyorsunuz?",
    answer: "Apple, Samsung, Xiaomi, Oppo, Huawei, LG gibi popüler markaların LCD ekran ve bataryalarını satıyoruz."
  },
  {
    question: "LCD ekran değişimi yapıyor musunuz?",
    answer: "Hayır, sadece ürün satışı yapıyoruz. Ancak ekran değişimi için güvenilir teknik servis önerilerimiz bulunmaktadır."
  },
  {
    question: "Bataryalarınızın garantisi var mı?",
    answer: "Evet, tüm bataryalarımız 6 ay ile 12 ay arasında değişen garanti sürelerine sahiptir."
  },
  {
    question: "Batarya orijinal mi, yoksa yan sanayi mi?",
    answer: "Hem orijinal hem de yüksek kaliteli yan sanayi bataryalarımız bulunmaktadır. Seçim tamamen sizin tercihinize bağlıdır."
  },
  {
    question: "Siparişimi nasıl takip edebilirim?",
    answer: "Siparişinizi web sitemizden ya da kargo takip numarasıyla kolayca takip edebilirsiniz."
  },
  {
    question: "LCD ekran veya bataryayı yanlış alırsam iade edebilir miyim?",
    answer: "Evet, kullanılmamış ve zarar görmemiş ürünleri 14 gün içinde iade edebilirsiniz."
  },
  {
    question: "Ekran veya batarya alırken nelere dikkat etmeliyim?",
    answer: "Telefon modelinize uygun ürün seçimi yapmanız çok önemlidir. Yanlış ürün alımını önlemek için model numarasını kontrol etmenizi öneririz."
  },
  {
    question: "Ürünlerin fiyatları nasıl belirleniyor?",
    answer: "Fiyatlarımız ürünün markasına, modeline ve orijinalliğine göre değişiklik göstermektedir."
  },
  {
    question: "Toplu alımlarda indirim yapıyor musunuz?",
    answer: "Evet, toplu alımlarda özel indirim fırsatlarımız bulunmaktadır. Ayrıntılar için bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Batarya değişimi telefonu garanti dışı bırakır mı?",
    answer: "Orijinal batarya kullanıldığında garanti etkilenmez, ancak yan sanayi batarya kullanımı garantiyi etkileyebilir."
  },
  {
    question: "Kargo ücretleri ne kadar?",
    answer: "500 TL üzeri alışverişlerde kargo ücretsizdir. Daha düşük tutarlarda standart kargo ücreti uygulanır."
  },
  {
    question: "Ekran değişimi sonrası dokunmatik performansı etkilenir mi?",
    answer: "Orijinal ve yüksek kaliteli muadil ekranlarda dokunmatik performansı etkilenmez. Yan sanayi ürünlerde ufak farklılıklar olabilir."
  },
  {
    question: "Ürünlerinizde stok durumu nasıl?",
    answer: "Popüler modellerde genelde stoklarımız günceldir. Özel siparişler için bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Ödemeleri nasıl yapabilirim?",
    answer: "Kredi kartı veya banka havalesi yöntemlerinden birini tercih edebilirsiniz."
  }
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col selection:bg-[#0055FF] selection:text-white">
      <EmtechHeader />
      
      <div className="flex-1 pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-space font-black text-zinc-950 uppercase tracking-tighter mb-4">
              Sıkça Sorulan <span className="text-[#0055FF]">Sorular</span>
            </h1>
            <p className="font-inter text-zinc-500 text-lg">
              İş ortaklarımızın en çok merak ettiği konulara net ve açık yanıtlar.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className={`bg-white border-4 transition-colors duration-300 ${openIndex === idx ? 'border-[#0055FF] shadow-[8px_8px_0px_#0055FF]' : 'border-zinc-950 shadow-[8px_8px_0px_#000] hover:border-zinc-700'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                >
                  <h3 className={`font-space font-bold text-lg md:text-xl uppercase tracking-tighter transition-colors ${openIndex === idx ? 'text-[#0055FF]' : 'text-zinc-950'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 transition-colors ${openIndex === idx ? 'border-[#0055FF] bg-[#0055FF] text-white' : 'border-zinc-950 bg-zinc-100 text-zinc-900'}`}>
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 font-inter text-zinc-600 leading-relaxed border-t-2 border-zinc-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-24 bg-zinc-950 text-white p-12 text-center border-4 border-[#0055FF]">
            <h4 className="font-space font-black text-3xl uppercase tracking-tighter mb-4">Aradığınızı Bulamadınız mı?</h4>
            <p className="font-inter text-zinc-400 mb-8 max-w-lg mx-auto">
              Aklınıza takılan farklı bir soru varsa veya toptan fiyat listemizi talep ediyorsanız, müşteri temsilcimizle anında görüşebilirsiniz.
            </p>
            <a 
              href="https://wa.me/905102215932" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#0055FF] text-white px-8 py-4 font-space font-bold text-lg uppercase tracking-widest hover:bg-[#25D366] transition-colors border-2 border-transparent hover:border-white"
            >
              WhatsApp'tan Sor
            </a>
          </div>

        </div>
      </div>

      <EmtechFooter />
    </main>
  );
}
