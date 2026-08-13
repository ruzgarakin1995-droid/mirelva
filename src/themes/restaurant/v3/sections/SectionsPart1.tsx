import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ImmersiveHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#1A0F0A]">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img src="/restaurant_v3_hero.jpg" alt="Ana Görsel" className="w-full h-full object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A0F0A]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[#E2725B] tracking-[0.3em] uppercase text-sm font-semibold mb-6"
        >
          Ateş, Tutku ve Toprak
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-5xl md:text-8xl lg:text-[10rem] text-[#FFFDD0] leading-none mb-8"
        >
          KÖK <span className="italic text-[#CC5500]">&</span> KÖZ
        </motion.h1>
      </div>
    </section>
  );
};

export const SensoryIntro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 px-4 bg-[#1A0F0A] text-[#FFFDD0] flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div style={{ y }} className="absolute -left-20 -top-20 opacity-20 text-[20rem] font-serif text-[#855E42] leading-none">
          "
        </motion.div>
        <p className="font-serif text-3xl md:text-5xl leading-tight relative z-10">
          İlk lokma sadece bir başlangıç değildir. <br/> Yüzyıllık bir ateşin, toprağın sırrını damaklara taşıyan ritüeldir.
        </p>
      </div>
    </section>
  );
};

export const CulinaryPhilosophy = () => {
  return (
    <section className="py-32 bg-[#2A1810] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl text-[#E2725B]">Felsefemiz</h2>
          <p className="text-xl text-[#FFFDD0]/80 leading-relaxed">
            Biz yemeği sadece bir doyum aracı olarak değil, doğayla insanın en saf diyaloğu olarak görüyoruz. Odun ateşinde harlanan lezzetler, mevsimin bize sunduğu en taze nimetlerle buluşuyor.
          </p>
          <button className="border-b border-[#CC5500] text-[#CC5500] pb-2 uppercase tracking-widest hover:text-[#FFFDD0] hover:border-[#FFFDD0] transition-colors">
            Hikayeyi Keşfet
          </button>
        </div>
        <div className="relative h-[600px] overflow-hidden rounded-t-full">
          <img src="/restaurant_v3_philosophy.jpg" alt="Felsefe" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export const SignatureDishShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <section ref={ref} className="h-screen w-full relative overflow-hidden bg-[#1A0F0A] flex items-center justify-center">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src="/restaurant_v3_signature.jpg" alt="İmza Tabak" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="relative z-10 text-center">
        <p className="text-[#E2725B] tracking-widest uppercase mb-4">İmza Tabağımız</p>
        <h2 className="font-serif text-6xl md:text-9xl text-[#FFFDD0]">İsli Kaburga</h2>
        <p className="mt-8 text-xl text-[#FFFDD0]/70 max-w-xl mx-auto">72 saat ağır ateşte pişmiş, yanık meşe aroması ve kök sebze püresi ile.</p>
      </div>
    </section>
  );
};

export const ChefStory = () => {
  return (
    <section className="py-32 bg-[#FFFDD0] px-4 text-[#1A0F0A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-serif text-5xl md:text-7xl">Şefin Dokunuşu</h2>
          <p className="text-xl leading-relaxed text-[#2A1810]">
            "Ateşle oynamak, ona hükmetmek değil; onun dilinden anlamaktır." Çocukluğundan beri ateşin etrafında büyüyen şefimiz, modern gastronomiyle kadim odun ateşi tekniklerini birleştiriyor.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[700px] relative">
          <img src="/restaurant_v3_chef.jpg" alt="Şef" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
      </div>
    </section>
  );
};
