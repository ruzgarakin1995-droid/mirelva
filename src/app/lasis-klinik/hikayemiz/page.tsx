"use client";

import { LasisHeader } from '@/themes/lasis/components/LasisHeader';
import { LasisFooter } from '@/themes/lasis/components/LasisFooter';
import { LasisTeam } from '@/themes/lasis/components/LasisTeam';
import { motion } from 'framer-motion';

export default function HikayemizPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <LasisHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-24 px-6 lg:px-8 bg-[#3E2B2B] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="/Lasis/Lasis_interior_detail_1786272904875.jpg" alt="Lasis Klinik Interior" className="w-full h-full object-cover opacity-20 grayscale" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B2B] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Bizim Hikayemiz</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#FAF5F0] mb-6"
          >
            Güzellik Bir <br/><span className="italic text-[#D4A373]">Sanattır.</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="font-serif text-8xl text-[#D4A373]/20 leading-none block mb-4">"</span>
        <p className="font-serif text-2xl md:text-3xl text-[#3E2B2B] leading-relaxed mb-12 italic">
          Lasis Klinik Lasis'yi kurarken tek bir hayalimiz vardı: Kadınların içeriye girdikleri anda kendilerini dünyanın en özel hissedecekleri, günlük hayatın stresinden uzak, lüks ve güvenli bir liman inşa etmek.
        </p>
        <p className="font-sans text-[#3E2B2B]/70 leading-relaxed mb-8 text-left">
          2015 yılında mütevazı bir estetik muayenehanesi olarak başlayan yolculuğumuz, mükemmelliyetçi yaklaşımımız ve yenilikçi medikal uygulamalarımız sayesinde hızla büyüyerek bugün ileri teknoloji lazer, botoks ve cilt yenileme gibi farklı alanlarda hizmet veren tam donanımlı bir lüks medikal estetik merkezine dönüştü.
        </p>
        <p className="font-sans text-[#3E2B2B]/70 leading-relaxed mb-16 text-left">
          Lasis Klinik Lasis olarak sadece dünyaca ünlü premium markalarla çalışıyor, alet sterilizasyonunda hastane standartlarını uyguluyor ve her bir müşterimizin anatomisine, stiline ve cilt yapısına %100 uyumlu kişiselleştirilmiş tasarımlar yaratıyoruz. Çünkü bizim için "standart" bir işlem yoktur; her kadın kendi içinde eşsiz bir sanat eseridir.
        </p>
        
        <div className="font-serif italic text-3xl text-[#D4A373] opacity-80 text-right">
            Lasis Klinik Founder
        </div>
      </section>

      {/* Re-use Team Component */}
      <LasisTeam />

      <LasisFooter />
    </main>
  );
}
