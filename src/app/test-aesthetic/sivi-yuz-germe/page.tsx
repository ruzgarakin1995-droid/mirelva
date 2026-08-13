"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function SiviYuzGermePage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={false} />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Ameliyatsız Estetik</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight"
            >
              Sıvı Yüz <br/>
              <span className="italic font-light text-[#C4A79A]">Germe.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans font-light text-[#1C1C1C]/60 text-sm md:text-base leading-relaxed max-w-lg mb-10"
            >
              Cerrahi bir müdahaleye gerek kalmadan, yüzünüzdeki sarkmaları toparlamak, hacim kayıplarını gidermek ve genç, dinamik bir görünüm elde etmek sıvı yüz germe (likit lifting) ile mümkün. Özel dolgu teknikleriyle yüz hatlarınızı yeniden yapılandırıyoruz.
            </motion.p>

            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#1C1C1C] text-[#FDFCF9] px-10 py-5 font-sans font-medium tracking-[0.2em] uppercase text-[11px] hover:bg-[#C4A79A] transition-colors duration-500 rounded-sm"
            >
              Ücretsiz Danışmanlık Al
            </motion.button>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full"
            >
              <div className="absolute inset-0 bg-[#C4A79A] translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/aesthetic/aesthetic_sivi_yuz_germe.jpg" 
                alt="Sıvı Yüz Germe Tedavisi" 
                className="relative z-10 w-full h-full object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Details */}
      <section className="py-32 bg-[#1C1C1C] text-[#FDFCF9] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">Nasıl Çalışır?</h2>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-[#C4A79A]">01. Hacim Geri Kazandırma</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans font-light text-[#FDFCF9]/70 leading-relaxed text-sm">
                  Yaşlanma ile birlikte yüzümüzdeki hyalüronik asit ve yağ dokuları azalır. Yanaklar, şakaklar ve elmacık kemiklerindeki çökmeleri, yüksek kaliteli özel dolgu maddeleriyle destekleyerek yüzünüzün ihtiyacı olan doğal hacmi geri kazandırıyoruz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#FDFCF9]/10 pt-16">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-[#C4A79A]">02. Lifting (Kaldırma) Etkisi</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans font-light text-[#FDFCF9]/70 leading-relaxed text-sm">
                  Dolgu maddelerinin yüzün kilit taşı noktalarına (örneğin elmacık kemikleri ve çene hattı) stratejik olarak enjekte edilmesiyle, aşağı yönlü sarkan dokular yukarı doğru desteklenir. Bu sayede ameliyatsız bir 'lifting' etkisi yaratılır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#FDFCF9]/10 pt-16">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-[#C4A79A]">03. İnce Dokunuşlar</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans font-light text-[#FDFCF9]/70 leading-relaxed text-sm">
                  Sıvı yüz germe yalnızca hacim vermekle kalmaz, aynı zamanda yüzün genel uyumunu (altın oran) dengeler. Gözaltı ışık dolgusu, çene hattı (jawline) belirginleştirme ve burun-dudak çizgilerinin yumuşatılması aynı seansta bütüncül olarak uygulanabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AestheticFooter />
    </main>
  );
}
