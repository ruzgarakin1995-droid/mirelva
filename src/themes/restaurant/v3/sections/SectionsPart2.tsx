import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const IngredientsJourney = () => {
  return (
    <section className="py-24 bg-[#1A0F0A] text-[#FFFDD0]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-[#E2725B] mb-16">Topraktan Tabağa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Kökler", desc: "Toprağın derinliklerinden gelen taze aromalar.", img: "/restaurant_v3_roots.jpg" },
            { title: "Ateş", desc: "Meşe ve püren odunu ile harlanan ateş.", img: "/restaurant_v3_fire.jpg" },
            { title: "Mevsim", desc: "Sadece doğanın o an sundukları.", img: "/restaurant_v3_season.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden h-96 mb-6">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-3xl mb-2">{item.title}</h3>
              <p className="text-[#FFFDD0]/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AmbientGallery = () => {
  return (
    <section className="py-20 bg-[#2A1810] overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex gap-8 px-4"
      >
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="w-[400px] h-[500px] flex-shrink-0">
            <img src={`/restaurant_v3_gallery${i}.jpg`} alt={`Galeri ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export const TheMenuTeaser = () => {
  return (
    <section className="py-32 bg-[#FFFDD0] text-[#1A0F0A] px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-serif text-6xl md:text-8xl">Tadım Menüsü</h2>
        <p className="text-2xl font-light">12 Aşamalı Duyusal Bir Yolculuk</p>
        <div className="flex flex-col gap-6 font-serif text-2xl md:text-4xl text-[#CC5500]">
          <span>Toprak Uyanışı</span>
          <span>Ateşle Dans</span>
          <span>Köz ve Deniz</span>
          <span>Tatlı Veda</span>
        </div>
        <button className="mt-12 px-8 py-4 bg-[#1A0F0A] text-[#FFFDD0] uppercase tracking-widest hover:bg-[#CC5500] transition-colors">
          Tüm Menüyü İncele
        </button>
      </div>
    </section>
  );
};

export const WinePairing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-32 bg-[#1A0F0A] text-[#FFFDD0] px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="relative h-[800px]">
          <motion.img style={{ y }} src="/restaurant_v3_wine.jpg" alt="Şarap" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl text-[#E2725B]">Kavımız</h2>
          <p className="text-xl text-[#FFFDD0]/80 leading-relaxed">
            Her tabak için özel olarak seçilmiş, yerel bağların en saklı incileri ve dünya klasikleri. Yemeğin ruhunu şarabın ahengiyle tamamlıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export const AuthenticProcess = () => {
  return (
    <section className="py-32 bg-[#2A1810] text-center px-4">
      <h2 className="font-serif text-5xl text-[#FFFDD0] mb-16">Bir Tabak Nasıl Doğar?</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#E2725B]">
          <img src="/restaurant_v3_process1.jpg" alt="Hasat" className="w-full h-full object-cover hover:scale-110 transition-transform" />
        </div>
        <div className="w-32 h-[2px] bg-[#CC5500] hidden md:block"></div>
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#E2725B]">
          <img src="/restaurant_v3_process2.jpg" alt="Ateş" className="w-full h-full object-cover hover:scale-110 transition-transform" />
        </div>
        <div className="w-32 h-[2px] bg-[#CC5500] hidden md:block"></div>
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#E2725B]">
          <img src="/restaurant_v3_process3.jpg" alt="Sunum" className="w-full h-full object-cover hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
};
