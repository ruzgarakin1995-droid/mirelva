import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Kalıcı oje işlemi tırnaklarıma zarar verir mi?",
    a: "La Ville Beauty'de sadece tırnak yapısına zarar vermeyen, asitsiz ve nefes alabilen premium ürünler kullanıyoruz. Düzenli bakım ve doğru çıkarma işlemi ile tırnaklarınız her zaman sağlıklı kalır."
  },
  {
    q: "İpek kirpik ne kadar süre kalıcıdır?",
    a: "Doğal kirpik döngünüze bağlı olarak 3-4 hafta arasında kalıcılık gösterir. 3. haftanın sonunda yaptıracağınız ufak bir bakım işlemiyle bu süreyi aylarca uzatabilirsiniz."
  },
  {
    q: "Medikal cilt bakımı öncesi dikkat etmem gerekenler nelerdir?",
    a: "İşlemden 3 gün önce asitli ürün (AHA/BHA) kullanımını ve kese gibi tahriş edici işlemleri bırakmanızı öneririz. Uzmanlarımız işlem öncesi cilt analizinizi yaparak süreci cildinize en uygun şekilde planlayacaktır."
  },
  {
    q: "Gelin paketi randevumu ne kadar zaman önce almalıyım?",
    a: "Özellikle bahar ve yaz aylarındaki yoğunluğumuz sebebiyle, düğün tarihinizden en az 1 ay önce randevu almanızı ve prova gününüzü planlamamızı tavsiye ederiz."
  }
];

export function BeautyFAQ() {
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
