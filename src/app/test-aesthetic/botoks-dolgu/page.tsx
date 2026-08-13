"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function BotoksDolguPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/aesthetic/aesthetic_lips.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Ameliyatsız Estetik</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Botoks & Dolgu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Mimik çizgilerini silen ve yüz ovalini kusursuzlaştıran altın oran dokunuşları.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img src="/aesthetic/aesthetic_contour.jpg" alt="Botoks Application" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-serif text-[#1C1C1C] mb-6">Altın Oran ve Doğallık</h2>
          <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-8 text-lg">
            Kliniğimizde uygulanan toksin ve dermal dolgu işlemleri, "yapılmış" hissi vermeyen, tamamen mimiklerin doğal dinamiğine saygı duyan bir protokolle ilerler. Amaç yüzü şişirmek değil, zamanın etkilerini geri çevirmektir.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-l border-[#C4A79A] pl-6">
              <h4 className="font-serif text-xl mb-2 text-[#1C1C1C]">Kırışıklık Tedavisi</h4>
              <p className="font-sans font-light text-sm text-[#1C1C1C]/70">Göz çevresi, alın ve kaş arası çizgileri FDA onaylı nörotoksinlerle yumuşatılır.</p>
            </div>
            
            <div className="border-l border-[#C4A79A] pl-6">
              <h4 className="font-serif text-xl mb-2 text-[#1C1C1C]">Dermal Dolgular</h4>
              <p className="font-sans font-light text-sm text-[#1C1C1C]/70">Hyalüronik asit bazlı dolgularla dudak hacimlendirme ve jawline belirginleştirme.</p>
            </div>
          </div>
        </div>
      </section>

      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}
