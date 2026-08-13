"use client";

import { motion } from 'framer-motion';

export function SalonProcessHome() {
  const steps = [
    {
      num: "01",
      title: "Konsültasyon",
      desc: "Tırnak yapınızı analiz ediyor, size en uygun şekil ve tasarımı birlikte belirliyoruz."
    },
    {
      num: "02",
      title: "Hazırlık",
      desc: "Medikal düzeyde sterilizasyon ve pürüzsüz bir zemin için kusursuz manikür işlemi."
    },
    {
      num: "03",
      title: "Sanat",
      desc: "Premium ojeler ve mikro-detay fırçalarıyla hayalinizdeki tasarımı gerçeğe dönüştürüyoruz."
    },
    {
      num: "04",
      title: "Mükemmellik",
      desc: "Kalıcılığı artıran özel top-coat ve besleyici kütikül yağı ile final dokunuşu."
    }
  ];

  return (
    <section className="py-32 bg-[#FCFBF9] text-[#4A403F] border-t border-[#4A403F]/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Sürecimiz</span>
            <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-[#4A403F]"
          >
            Kusursuzluğun <span className="italic text-[#D4A3A3] font-light">Adımları.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative flex flex-col group"
            >
              {/* Line connector (hidden on mobile) */}
              {i !== 3 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-[#4A403F]/10">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                    className="w-full h-full bg-[#D4A3A3] origin-left"
                  />
                </div>
              )}
              
              <div className="text-6xl font-serif text-[#D4A3A3]/20 mb-6 group-hover:text-[#D4A3A3] transition-colors duration-500 relative z-10 bg-[#FCFBF9] w-fit pr-4">
                {step.num}
              </div>
              <h3 className="text-xl font-serif mb-4 text-[#4A403F]">{step.title}</h3>
              <p className="font-sans font-light text-sm text-[#4A403F]/60 leading-relaxed pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
