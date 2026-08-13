"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function CiltBakimiPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/aesthetic/aesthetic_skincare.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Derinlemesine Arınma</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Medikal Cilt Bakımı
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Hücresel seviyede arınma ve canlanma. FDA onaylı cihazlarla ışıltılı bir cilt bariyeri inşası.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-serif text-[#1C1C1C] mb-6">Klasik Bakımın Ötesinde</h2>
              <p className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed mb-8 text-lg">
                Medikal cilt bakımı, klasik salon bakımlarından farklı olarak dermatolojik bir disiplinle uygulanır. Cildin alt katmanlarındaki sebum dengesi, gözenek yapısı ve melanin (leke) hücreleri medikal cihazlarla hedeflenir.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden"
            >
              <img src="/aesthetic/aesthetic_hero_face.jpg" alt="Skin Care Analysis" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
        
        <div className="bg-[#1C1C1C] text-[#FDFCF9] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A79A]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-3xl font-serif mt-2 mb-10 relative z-10">Uygulama Adımları (HydraFacial MD)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div>
              <span className="text-[#C4A79A] font-sans tracking-widest text-xs uppercase block mb-3">Adım 01</span>
              <h4 className="font-serif text-xl mb-2">Vortex-Exfoliation</h4>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/60">Özel başlıkla cilt yüzeyindeki ölü hücreler nazikçe soyulur, cilt yenilenmeye hazır hale getirilir.</p>
            </div>
            <div>
              <span className="text-[#C4A79A] font-sans tracking-widest text-xs uppercase block mb-3">Adım 02</span>
              <h4 className="font-serif text-xl mb-2">Vortex-Peeling</h4>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/60">Glikolik ve salisilik asit karışımı uygulanarak gözenek içindeki kirler yumuşatılır.</p>
            </div>
            <div>
              <span className="text-[#C4A79A] font-sans tracking-widest text-xs uppercase block mb-3">Adım 03</span>
              <h4 className="font-serif text-xl mb-2">Vortex-Extraction</h4>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/60">Vakum teknolojisiyle siyah noktalar ve sebum gözeneklerden ağrısız bir şekilde çekilir.</p>
            </div>
            <div>
              <span className="text-[#C4A79A] font-sans tracking-widest text-xs uppercase block mb-3">Adım 04</span>
              <h4 className="font-serif text-xl mb-2">Vortex-Fusion</h4>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/60">Temizlenmiş gözeneklere antioksidan, peptit ve hyalüronik asit içeren serumlar enjekte edilir.</p>
            </div>
          </div>
        </div>
      </section>

      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}
