"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AestheticServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      category: "Enjektabl İşlemler",
      desc: "Ameliyatsız yüz gençleştirme ve hacim kazandırma sanatında, uluslararası standartlarda altın oran protokolleri.",
      items: [
        { name: "Botulinum Toksin (Botoks)", desc: "Kırışıklık giderme ve terleme tedavisi", price: "₺3,500'den başlayan" },
        { name: "Dermal Dolgu", desc: "Dudak, çene ucu ve elmacık yapılandırma", price: "₺4,800/ml" },
        { name: "Mezoterapi", desc: "Cilt altına vitamin ve mineral takviyesi", price: "₺2,900/seans" },
        { name: "Gençlik Aşısı", desc: "Yoğun nem ve kolajen uyarımı", price: "₺6,500/seans" },
      ]
    },
    {
      num: "02",
      category: "Cihazlı Sistemler",
      desc: "FDA onaylı lazer ve enerji bazlı cihazlarla, hücresel boyutta yenilenme ve sıkılaşma.",
      items: [
        { name: "Odaklı Ultrason (HIFU)", desc: "Ameliyatsız yüz germe ve toparlama", price: "₺8,500/seans" },
        { name: "Altın İğne Radyofrekans", desc: "Skar, gözenek ve ince kırışıklık tedavisi", price: "₺4,500/seans" },
        { name: "Q-Switch Lazer", desc: "Leke silme, dövme silme ve karbon peeling", price: "₺2,200/seans" },
        { name: "BBL Hero", desc: "Geniş bant ışık ile anti-aging tedavisi", price: "₺5,000/seans" },
      ]
    },
    {
      num: "03",
      category: "Medikal Bakım",
      desc: "Klinik ortamında, uzman ellerde uygulanan derinlemesine arındırma ve medikal bakım ritüelleri.",
      items: [
        { name: "HydraFacial MD Elite", desc: "Patentli teknoloji ile derinlemesine temizlik", price: "₺1,850" },
        { name: "Kimyasal Peeling", desc: "Hücresel medikal soyma işlemi", price: "₺1,500" },
        { name: "Dermapen 4", desc: "Mikroiğneleme ve serum infüzyonu", price: "₺2,100" },
        { name: "Ozon Terapi", desc: "Hücresel oksijenasyon ve detoks", price: "₺1,200" },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#FDFCF9] text-[#1C1C1C] px-6 lg:px-8 border-y border-[#1C1C1C]/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Hizmet Menüsü</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight"
          >
            Klinik <span className="italic font-light text-[#C4A79A]">Protokoller.</span>
          </motion.h2>
        </div>

        <div className="border-t border-[#1C1C1C]/20">
          {services.map((section, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={section.num} className="border-b border-[#1C1C1C]/20">
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full py-6 md:py-14 flex items-center justify-between group text-left"
                >
                  <div className="flex items-baseline gap-4 md:gap-12">
                    <span className="text-xs md:text-lg font-sans text-[#C4A79A] tracking-widest">{section.num}</span>
                    <h3 className={`text-2xl md:text-5xl lg:text-6xl font-serif transition-colors duration-500 ${isExpanded ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]/40 group-hover:text-[#1C1C1C]'}`}>
                      {section.category}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Icon */}
                  <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                    <span className="absolute w-full h-[1px] bg-[#1C1C1C] transition-colors group-hover:bg-[#C4A79A]"></span>
                    <span className={`absolute h-full w-[1px] bg-[#1C1C1C] transition-all duration-500 group-hover:bg-[#C4A79A] ${isExpanded ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-14 pt-4 pl-4 md:pl-24">
                        <p className="font-sans font-light text-[#1C1C1C]/60 max-w-2xl text-sm md:text-lg mb-8 md:mb-12">
                          {section.desc}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                          {section.items.map((item) => (
                            <div key={item.name} className="group cursor-pointer">
                              <div className="flex justify-between items-baseline mb-2 border-b border-[#1C1C1C]/10 pb-4">
                                <h4 className="font-serif text-xl md:text-2xl text-[#1C1C1C] group-hover:text-[#C4A79A] transition-colors duration-300">
                                  {item.name}
                                </h4>
                                <span className="font-sans font-medium text-[10px] tracking-widest text-[#1C1C1C]/70">
                                  {item.price}
                                </span>
                              </div>
                              <p className="font-sans font-light text-sm text-[#1C1C1C]/50 mt-3 group-hover:text-[#1C1C1C]/80 transition-colors">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
