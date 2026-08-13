"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function LazerEpilasyonPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/aesthetic/aesthetic_treatment.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Kalıcı Çözüm</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Lazer Epilasyon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Yeni nesil buz başlık teknolojisiyle her cilt tipinde güvenli ve acısız kalıcı pürüzsüzlük.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square overflow-hidden bg-[#1C1C1C]"
          >
            <img src="/aesthetic/aesthetic_analysis.jpg" alt="Laser Technology" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 border border-[#C4A79A]/30 m-4"></div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-serif text-[#1C1C1C] mb-6">4 Mevsim Pürüzsüzlük</h2>
          <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-8 text-lg">
            Geleneksel epilasyon sistemlerinden farklı olarak kliniğimizde, melanin hedefini şaşırmadan doğrudan kıl köküne inen en güncel Alexandrite ve Nd:YAG kombinasyonları kullanılmaktadır. Soğutma sistemleri sayesinde seanslar tamamen konforlu geçer.
          </p>
          
          <ul className="space-y-6 mt-8 font-sans font-light text-[#1C1C1C]/70">
            <li className="flex items-start gap-4">
              <span className="text-[#C4A79A] text-xl">01</span>
              <div>
                <strong className="block text-[#1C1C1C] font-serif text-lg mb-1">Ağrısız Buz Başlık</strong>
                İşlem sırasında dokuyu soğutan sistemlerle sıfır acı hissi.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#C4A79A] text-xl">02</span>
              <div>
                <strong className="block text-[#1C1C1C] font-serif text-lg mb-1">Kişiselleştirilmiş Protokol</strong>
                Kıl yapısı ve cilt tonunuza özel dozajlama (Fitzpatrick ölçümü).
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#C4A79A] text-xl">03</span>
              <div>
                <strong className="block text-[#1C1C1C] font-serif text-lg mb-1">Hızlı ve Güvenilir</strong>
                Geniş atış alanı sayesinde çok daha kısa süren konforlu seanslar.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}
