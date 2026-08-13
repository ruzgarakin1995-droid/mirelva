"use client";

import { motion } from 'framer-motion';

export function BarberPhilosophy() {
  return (
    <section id="felsefemiz" className="py-32 bg-[#F8F7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-8 block"
          >
            Felsefemiz
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2A2522] leading-tight mb-12"
          >
            Bir Saç Kesiminden <br/> 
            <span className="italic text-[#C1A68D] font-light">Çok Daha Fazlası.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 text-[#2A2522]/70 font-sans font-light leading-relaxed"
          >
            <p>
              Bomonti Hair Studio, sadece bir kuaför salonu değil; erkeğin kendine ayırdığı en değerli zaman dilimidir. Biz, klasik berber kültürünün samimiyetini, modern lüksün kusursuzluğuyla harmanlıyoruz.
            </p>
            <p>
              Usta makas darbeleri, sıcak havlu kompresleri ve özel üretim bakım ürünlerimizle, her misafirimize sadece bir saç kesimi değil, adeta bir arınma seansı sunuyoruz.
            </p>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <div className="order-1 md:order-2 relative h-[600px] w-full">
          <motion.div 
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#2A2522]"
          >
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop" 
              alt="Barber Tools" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
          {/* Decorative line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '50%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 top-1/4 w-[1px] bg-[#C1A68D] hidden md:block"
          />
        </div>

      </div>
    </section>
  );
}
