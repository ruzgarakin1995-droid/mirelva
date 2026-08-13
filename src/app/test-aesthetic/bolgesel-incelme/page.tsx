"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function BolgeselIncelmePage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/aesthetic/aesthetic_contour.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Vücut Şekillendirme</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Bölgesel İncelme
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Diyet ve spora dirençli yağ dokularına teknolojik müdahale ile kusursuz vücut silüeti.
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
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img src="/aesthetic/aesthetic_treatment.jpg" alt="Body Sculpting" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-serif text-[#1C1C1C] mb-6">Ameliyatsız Müdahale</h2>
          <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-12 text-lg">
            İnatçı yağ birikimlerini ve selülit görünümünü yok etmek için en güncel radyofrekans, ultrason ve kriyolipoliz teknolojilerini kullanıyoruz. Cerrahi bir operasyon (liposuction) gerektirmeden, günlük yaşamınıza anında dönerek ideal vücut hatlarına kavuşabilirsiniz.
          </p>
          
          <div className="bg-[#1C1C1C]/5 p-8 border-l-2 border-[#C4A79A] mt-8 mb-8 hover:bg-[#1C1C1C]/10 transition-colors">
            <h4 className="font-serif text-2xl mb-3 text-[#1C1C1C]">Kriyolipoliz (Soğuk Lipoliz)</h4>
            <p className="font-sans font-light text-sm text-[#1C1C1C]/70 leading-relaxed">Yağ hücrelerini -10 dereceye kadar dondurarak apopitoza (programlanmış hücre ölümü) uğratan ve lenfatik sistem aracılığıyla vücuttan doğal yollarla atılmasını sağlayan FDA onaylı sistem.</p>
          </div>
          
          <div className="bg-[#1C1C1C]/5 p-8 border-l-2 border-[#C4A79A] mb-8 hover:bg-[#1C1C1C]/10 transition-colors">
            <h4 className="font-serif text-2xl mb-3 text-[#1C1C1C]">RF ve Ultrason (VelaShape)</h4>
            <p className="font-sans font-light text-sm text-[#1C1C1C]/70 leading-relaxed">Bir yandan inatçı yağ zarlarını parçalarken, diğer yandan radyofrekans enerjisi ile kollajen bantlarını kısaltarak anında cilt sıkılaşması ve selülit giderme sağlayan kombine protokoller.</p>
          </div>
        </div>
      </section>

      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}
