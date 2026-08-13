"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BarberHeader } from '@/themes/barber/components/BarberHeader';
import { BarberFooter } from '@/themes/barber/components/BarberFooter';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <BarberHeader />
      
      <main ref={containerRef} className="flex-1 flex flex-col pt-24 bg-[#F8F7F5] overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="text-center px-6 relative z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
            >
              Hikayemiz
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#2A2522] leading-tight"
            >
              Gelenekten <br/>
              <span className="italic text-[#C1A68D] font-light">Geleceğe.</span>
            </motion.h1>
          </motion.div>
        </section>

        {/* Story Section 1 */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] bg-[#2A2522] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop" 
                alt="Vintage Barber Tools" 
                className="w-full h-full object-cover sepia-[0.3] opacity-90"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 text-[#2A2522]/70 font-sans font-light leading-relaxed"
            >
              <h2 className="text-4xl font-serif text-[#2A2522] mb-4">Bir Zanaatın Yeniden Doğuşu</h2>
              <p className="text-lg">
                Bomonti Hair Studio'nun temelleri, klasik berber kültürünün samimiyetini, modern lüksün kusursuzluğu ile birleştirme tutkusuyla atıldı.
              </p>
              <p>
                Sadece bir saç kesimi veya tıraş değil; erkeğin kendine ayırdığı, dış dünyadan tamamen izole olduğu o kutsal 45 dakikayı yeniden tanımlamak istedik. Bizim için her müşteri bir misafir, her kesim bir sanat eseridir.
              </p>
              <p>
                Uluslararası akademilerde eğitim almış master berberlerimiz, sadece makas ve ustura kullanmayı değil, yüz hatlarınızı, tarzınızı ve kimliğinizi okumayı iyi bilirler.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-40 bg-[#2A2522] text-center px-6 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h3 className="text-3xl md:text-5xl font-serif text-[#F8F7F5] leading-relaxed italic">
              "Amacımız saçınızı kısaltmak değil, <br/> duruşunuzu yükseltmektir."
            </h3>
            <div className="w-12 h-[1px] bg-[#C1A68D] mx-auto mt-12"></div>
          </motion.div>
        </section>

      </main>

      <BarberFooter />
    </>
  );
}
