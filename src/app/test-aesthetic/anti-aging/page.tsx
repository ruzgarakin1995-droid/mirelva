"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function AntiAgingPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/aesthetic/aesthetic_analysis.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Zamanı Geriye Sarın</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Anti-Aging Sistemleri
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Yüksek teknoloji lazer ve enerji bazlı sistemlerle ameliyatsız yüz germe.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-full"
              >
                <img src="/aesthetic/aesthetic_doctor.jpg" alt="Anti-Aging Procedures" className="w-full h-full object-cover grayscale opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1C1C1C]/10 rounded-full"></div>
              </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif text-[#1C1C1C] mb-6">Gençliğin Hücresel Kodları</h2>
            <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-8 text-lg">
              Anti-aging sadece var olan kırışıklıkları gizlemek değil, cildin kendini onarma kapasitesini hücresel düzeyde tekrar aktive etmektir. LILA Clinic'te yer alan cihazlar, cildin alt katmanlarındaki kolajen üretimini tetikleyerek uzun vadeli biyolojik gençleşme sağlar.
            </p>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="group relative overflow-hidden bg-[#1C1C1C] text-[#FDFCF9] p-12 aspect-[4/3] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-[#C4A79A]/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10">
              <span className="text-[#C4A79A] text-sm tracking-widest font-sans uppercase mb-2 block">Ses Dalgaları</span>
              <h4 className="font-serif text-3xl mb-4">HIFU (Fokus Ultrason)</h4>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/70 leading-relaxed">Ses dalgalarının gücüyle SMAS (kas zarı) tabakasında mikro termal hasarlar yaratarak, ameliyatsız yüz germe etkisi sağlayan devrimsel sistem.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-[#FDFCF9] border border-[#1C1C1C]/10 p-12 aspect-[4/3] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-[#C4A79A]/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10">
              <span className="text-[#C4A79A] text-sm tracking-widest font-sans uppercase mb-2 block">Işık Teknolojisi</span>
              <h4 className="font-serif text-3xl text-[#1C1C1C] mb-4">BBL Hero</h4>
              <p className="font-sans font-light text-sm text-[#1C1C1C]/70 leading-relaxed">Geniş Bant Işık teknolojisi. Yaşlılık lekeleri, kılcal damar çatlamaları ve genel cilt kalitesi kaybı için Stanford Üniversitesi onaylı protokol.</p>
            </div>
          </div>
        </div>
      </section>

      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}
