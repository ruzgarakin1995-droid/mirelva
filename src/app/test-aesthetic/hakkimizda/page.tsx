"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { AestheticTransformations } from '@/themes/aesthetic/components/AestheticTransformations';
import { motion } from 'framer-motion';

export default function HakkimizdaPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader />
      
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
            >
              Mükemmeli <br/>
              <span className="italic font-light text-[#C4A79A]">Aramak.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans font-light text-[#1C1C1C]/70 text-lg md:text-xl leading-relaxed max-w-lg mb-8"
            >
              LILA, 2018 yılında medikal estetik alanında 'doğallık' ve 'bilimsellik' kavramlarını aynı çatı altında buluşturmak amacıyla Nişantaşı'nda kuruldu.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-sans font-light text-[#1C1C1C]/60 text-base leading-relaxed max-w-lg"
            >
              Kuruluşumuzdan bu yana temel felsefemiz; hastalarımızın anatomik özelliklerini analiz ederek, yüzün karakteristik yapısını bozmayan, tamamen hücresel kaliteyi artıran anti-aging protokolleri uygulamaktır.
            </motion.p>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <img src="/aesthetic/aesthetic_clinic_interior.jpg" alt="LILA Clinic Interior" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-32 bg-[#1C1C1C] text-[#FDFCF9] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-12 leading-snug"
          >
            "Güzellik, yüzün orijinal mimarisini bozmadan, anatomik dengeyi koruyarak yapılan hücresel bir onarımdır."
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C4A79A]">Medikal Direktör</span>
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
          </div>
        </div>
      </section>

      {/* Medical Standards */}
      <section className="py-32 px-6 lg:px-8 border-b border-[#1C1C1C]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 lg:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Etik Yaklaşım</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            >
              Global Klinik <br/>
              <span className="italic font-light text-[#C4A79A]">Standartları.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-6"
            >
              Kullandığımız tüm cihazlar FDA (Amerikan Gıda ve İlaç Dairesi) onaylı olup, uygulanan tüm enjekte edilebilir ürünler (Botoks, Dermal Dolgu vb.) CE sertifikalı global markalardır (Allergan, Teoxane, BTL).
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed"
            >
              Her hastamız için işlem öncesi "3D Visia Cilt Analizi" ile kişiselleştirilmiş bir harita çıkarır, bilimsel olarak kanıtlanmamış hiçbir cihaz veya materyale kliniğimizde yer vermeyiz.
            </motion.p>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img src="/aesthetic/aesthetic_analysis.jpg" alt="LILA Clinic Standards" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Show off the portfolio as proof of quality */}
      <AestheticTransformations />

      <AestheticFooter />
    </main>
  );
}
