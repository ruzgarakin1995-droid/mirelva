"use client";

import { motion } from 'framer-motion';
import { SalonHeader } from '@/themes/salon/components/SalonHeader';
import { SalonFooter } from '@/themes/salon/components/SalonFooter';

export default function HakkimizdaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FCFBF9]">
      <SalonHeader />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-32 left-0 w-full text-center pointer-events-none opacity-[0.03]">
          <span className="text-[15vw] font-serif leading-none tracking-tighter whitespace-nowrap">STORY</span>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Hikayemiz</span>
            <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#4A403F] leading-tight mb-12"
          >
            Sanatın ve Sağlığın <br/>
            <span className="italic text-[#D4A3A3] font-light">Buluşma Noktası.</span>
          </motion.h1>
        </div>
      </section>

      {/* Content Layout */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 relative h-[600px]"
            >
              <div className="absolute inset-0 bg-[#D4A3A3]/20 translate-x-6 translate-y-6"></div>
              <img 
                src="/salon/nail_gallery_hands_1786239195280.jpg" 
                alt="Lumina Studio" 
                className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/2 text-[#4A403F]"
            >
              <h2 className="text-3xl font-serif mb-8">Neden Lumina?</h2>
              <div className="font-sans font-light text-base leading-relaxed space-y-6 text-[#4A403F]/80">
                <p>
                  2020 yılında Nişantaşı'nın kalbinde kurulan Lumina Nail Art Studio, tırnak bakımını sıradan bir rutin olmaktan çıkarıp, kişiselleştirilmiş lüks bir deneyime dönüştürme vizyonuyla hayata geçirildi.
                </p>
                <p>
                  Bizim için güzellik, sağlıklı temeller üzerine inşa edilmelidir. Bu yüzden stüdyomuzda kullanılan tüm ürünler, tırnak sağlığınızı koruyan, toksin içermeyen ve cruelty-free (hayvanlar üzerinde test edilmemiş) markalardan özenle seçilir.
                </p>
                <p>
                  Sterilizasyon konusundaki medikal standartlarımız ve mikro detaylara gösterdiğimiz sanatsal özen, Lumina'yı sıradan bir salondan ayırıp bir <strong>güzellik atölyesi</strong> haline getiriyor.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="text-center">
                  <span className="block text-4xl font-serif text-[#D4A3A3] mb-1">5+</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#4A403F]/60">Yıllık Tecrübe</span>
                </div>
                <div className="w-[1px] h-12 bg-[#4A403F]/10"></div>
                <div className="text-center">
                  <span className="block text-4xl font-serif text-[#D4A3A3] mb-1">2K+</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#4A403F]/60">Mutlu Danışan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SalonFooter />
    </main>
  );
}
