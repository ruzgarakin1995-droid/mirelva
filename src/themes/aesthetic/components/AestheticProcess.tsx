"use client";

import { motion } from 'framer-motion';

export function AestheticProcess() {
  const steps = [
    {
      num: "01",
      title: "Dijital Konsültasyon",
      desc: "Uzman doktorlarımızla ön görüşme yapılarak beklentileriniz ve medikal geçmişiniz değerlendirilir."
    },
    {
      num: "02",
      title: "3D Cilt Analizi",
      desc: "Yapay zeka destekli VISIA veya benzeri sistemlerle cildinizin alt katmanları haritalandırılır."
    },
    {
      num: "03",
      title: "Kişiselleştirilmiş Protokol",
      desc: "Sadece size özel, FDA onaylı ürün ve cihazlarla bir tedavi takvimi oluşturulur."
    },
    {
      num: "04",
      title: "Uygulama & Takip",
      desc: "İşlem sonrası klinik kontrollerle iyileşme süreci yakından izlenerek mükemmel sonuca ulaşılır."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#FDFCF9] px-6 lg:px-8 overflow-hidden border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Steps */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Yolculuğunuz</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1C1C1C] leading-tight mb-16"
          >
            Bilinçli <br/>
            <span className="italic font-light text-[#C4A79A]">Dönüşüm.</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#1C1C1C]/10 hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-6 md:gap-10 relative z-10"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#1C1C1C] text-[#FDFCF9] flex items-center justify-center font-serif text-lg shadow-[0_0_20px_rgba(28,28,28,0.2)]">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-2xl text-[#1C1C1C] mb-3">{step.title}</h3>
                    <p className="font-sans font-light text-[#1C1C1C]/60 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img 
              src="/aesthetic/aesthetic_analysis.jpg" 
              alt="3D Cilt Analizi" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-sans font-medium text-[10px] tracking-widest uppercase text-[#FDFCF9] mb-2">MIRELVA Diagnostik</p>
              <h3 className="font-serif text-3xl text-[#FDFCF9]">Hücresel Seviyede Analiz</h3>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

