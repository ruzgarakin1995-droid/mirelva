"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "İlk tasarım süreci ne kadar sürer?",
    answer: "Projenin ölçeğine bağlı olmakla birlikte, kavramsal tasarım ve ilk sunum aşaması genellikle 3 ila 5 hafta arasında tamamlanır. Bu süreçte alan analizi, ihtiyaç programı oluşturma ve konsept geliştirme çalışmaları yapılır."
  },
  {
    question: "Sürdürülebilir ve yeşil bina sertifikalı projeler yapıyor musunuz?",
    answer: "Evet, tüm projelerimizde çevresel sürdürülebilirliği temel bir prensip olarak kabul ediyoruz. LEED ve BREEAM gibi uluslararası yeşil bina sertifika süreçlerine uygun tasarımlar gerçekleştiriyoruz."
  },
  {
    question: "Uygulama aşamasında da hizmet veriyor musunuz?",
    answer: "Mimari tasarımın yanı sıra, şantiye şefliği, proje yönetimi ve uygulama danışmanlığı hizmetleri de sunuyoruz. Tasarımın sahada birebir ve eksiksiz uygulanması bizim için kritik önem taşır."
  },
  {
    question: "Bütçe planlaması sürecin hangi aşamasında yapılıyor?",
    answer: "Tasarım sürecine başlamadan önce hedef bütçenizi belirliyor ve tüm konsept çalışmalarımızı bu bütçe çerçevesinde şekillendiriyoruz. Uygulama projeleri tamamlandığında detaylı bir metraj ve keşif özeti sunuyoruz."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">SSS</span>
            <h2 className="text-4xl font-light text-zinc-900 leading-tight mb-6">
              Sıkça Sorulan <br />
              <span className="italic font-serif">Sorular</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Süreçlerimiz, çalışma prensiplerimiz ve mimari yaklaşımımız hakkında merak edilen detayları burada derledik.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq, index) => (
                <div key={index} className="py-8">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <h3 className={`text-xl font-medium transition-colors ${openIndex === index ? 'text-amber-700' : 'text-zinc-900 group-hover:text-amber-700'}`}>
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-zinc-200 bg-white/50 group-hover:bg-zinc-50 transition-colors">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-zinc-900" />
                      ) : (
                        <Plus className="w-4 h-4 text-zinc-900" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-6 text-zinc-600 font-light leading-relaxed pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
