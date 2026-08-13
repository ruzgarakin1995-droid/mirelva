import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Q-Switch Lazer işlemi ağrılı mıdır?",
    a: "Q-Switch lazer işlemimiz oldukça konforludur. Çoğu hastamız sadece hafif bir karıncalanma hissettiğini belirtir. İşlem sonrası günlük hayatınıza hemen dönebilirsiniz."
  },
  {
    q: "Masseter botoksu yüz şeklimi değiştirir mi?",
    a: "Evet, masseter botoksu diş sıkma problemini (bruksizm) çözmekle kalmaz, aynı zamanda genişlemiş çene kaslarını küçülterek yüzünüzün daha ince ve 'V' şeklinde görünmesini sağlar."
  },
  {
    q: "Karbon peeling işleminin etkisini ne zaman görürüm?",
    a: "İşlem sonrasında cildinizdeki aydınlanma ve parlama anında fark edilir. Lekelerin açılması, gözeneklerin sıkılaşması ve cilt tonunun eşitlenmesi ise seanslar ilerledikçe kalıcı hale gelir."
  },
  {
    q: "Medikal estetik işlemleri sonrası sosyal hayatıma dönebilir miyim?",
    a: "Kliniğimizde uygulanan botoks, dolgu, lazer ve cilt bakımı işlemleri ameliyatsız yöntemler olduğu için sosyal hayatınıza anında dönebilirsiniz. Sadece işlem sonrası güneşten korunmanız yeterlidir."
  }
];

export function LasisFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#FDFCF9]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B]"
          >
            Sıkça Sorulan <span className="italic text-[#D4A373]">Sorular</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-[#3E2B2B]/10 pb-4"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-[#D4A373]' : 'text-[#3E2B2B] group-hover:text-[#D4A373]'}`}>
                  {faq.q}
                </span>
                <span className={`text-[#D4A373] text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-[#3E2B2B]/70 leading-relaxed pb-6 pr-12">
                      {faq.a}
                    </p>
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
