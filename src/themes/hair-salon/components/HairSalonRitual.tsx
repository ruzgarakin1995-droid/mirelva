"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function HairSalonRitual() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Konsültasyon",
      desc: "Yüz hatlarınız, saç dokunuz ve yaşam tarzınız analiz edilerek size en uygun tasarım belirlenir.",
      img: "/hair-salon/hair_salon_interior.jpg"
    },
    {
      num: "02",
      title: "Arınma & Bakım",
      desc: "Saç deriniz toksinlerden arındırılır, ihtiyaç duyduğu nem ve protein özel formüllerle geri kazandırılır.",
      img: "/hair-salon/hair_product_2.jpg"
    },
    {
      num: "03",
      title: "Sanatsal Dokunuş",
      desc: "Usta ellerde şekillenen saçlarınız, parlak ve kalıcı bir bitişle tamamlanarak imzanız haline gelir.",
      img: "/hair-salon/hair_model_1.jpg"
    }
  ];

  return (
    <section className="py-32 bg-[#352F2A] px-8 relative overflow-hidden text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Interactive List */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C4A484]"></div>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#FDFBF7]/50">Süreç</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif"
            >
              Éclat <span className="italic text-[#C4A484] font-light">Ritüeli.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-0 border-t border-[#FDFBF7]/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                onMouseEnter={() => setActiveStep(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group py-10 border-b border-[#FDFBF7]/10 cursor-pointer transition-all duration-500 flex gap-8 items-start ${activeStep === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="text-3xl md:text-5xl font-serif text-[#C4A484] font-light italic">
                  {step.num}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${activeStep === i ? 'text-[#FDFBF7]' : 'text-[#FDFBF7]'}`}>
                    {step.title}
                  </h3>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStep === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="font-sans font-light text-[#FDFBF7]/60 leading-relaxed text-sm max-w-sm mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Dynamic Image Reveal */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative rounded-t-full overflow-hidden border border-[#FDFBF7]/10 bg-[#352F2A]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStep}
              src={steps[activeStep].img}
              alt={steps[activeStep].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#352F2A] via-transparent to-transparent opacity-60"></div>
        </div>

      </div>
    </section>
  );
}
