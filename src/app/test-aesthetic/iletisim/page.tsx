"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';

export default function IletisimPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader />
      
      <section className="pt-48 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Mirelva İletişim</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-12"
            >
              Randevu & <br/>
              <span className="italic font-light text-[#C4A79A]">Danışmanlık.</span>
            </motion.h1>

            <div className="space-y-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="font-sans font-medium text-[11px] tracking-widest uppercase text-[#C4A79A] mb-3">Klinik Adresi</h3>
                <p className="font-serif text-2xl text-[#1C1C1C]">Adnan Kahveci Mah. Yavuz Sultan Selim Bulvarı<br/>Perlavista Residence A Blok Kat:9 Daire:79<br/>Beylikdüzü / İSTANBUL</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h3 className="font-sans font-medium text-[11px] tracking-widest uppercase text-[#C4A79A] mb-3">Direkt Hat & WhatsApp</h3>
                <p className="font-serif text-2xl text-[#1C1C1C] hover:text-[#C4A79A] transition-colors cursor-pointer">0 (543) 964 34 06</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <h3 className="font-sans font-medium text-[11px] tracking-widest uppercase text-[#C4A79A] mb-3">Çalışma Saatleri</h3>
                <ul className="font-serif text-xl text-[#1C1C1C] space-y-1">
                  <li>Paz - Cmt: 09:00 - 19:00</li>
                  <li className="text-[#1C1C1C]/50">Pazar: Kapalı</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#1C1C1C] p-10 md:p-16 rounded-sm text-[#FDFCF9]"
            >
              <h3 className="text-3xl font-serif mb-2">Sizi Arayalım</h3>
              <p className="font-sans font-light text-sm text-[#FDFCF9]/50 mb-10">Uzmanlarımız medikal talepleriniz için en kısa sürede size dönüş yapacaktır.</p>
              
              <form className="space-y-8">
                <div className="relative">
                  <input type="text" id="name" className="w-full bg-transparent border-b border-[#FDFCF9]/20 py-3 text-sm focus:outline-none focus:border-[#C4A79A] transition-colors peer placeholder-transparent" placeholder="Adınız Soyadınız" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-sm font-light text-[#FDFCF9]/50 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C4A79A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Adınız Soyadınız</label>
                </div>
                
                <div className="relative">
                  <input type="tel" id="phone" className="w-full bg-transparent border-b border-[#FDFCF9]/20 py-3 text-sm focus:outline-none focus:border-[#C4A79A] transition-colors peer placeholder-transparent" placeholder="Telefon Numaranız" />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-sm font-light text-[#FDFCF9]/50 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C4A79A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Telefon Numaranız</label>
                </div>

                <div className="relative">
                  <select className="w-full bg-transparent border-b border-[#FDFCF9]/20 py-3 text-sm focus:outline-none focus:border-[#C4A79A] transition-colors text-[#FDFCF9]/50">
                    <option value="" className="bg-[#1C1C1C]">İlgilendiğiniz Tedavi (Opsiyonel)</option>
                    <option value="botoks" className="bg-[#1C1C1C]">Botoks & Dolgu</option>
                    <option value="lazer" className="bg-[#1C1C1C]">Lazer Epilasyon</option>
                    <option value="cilt" className="bg-[#1C1C1C]">Medikal Cilt Bakımı</option>
                    <option value="diger" className="bg-[#1C1C1C]">Diğer</option>
                  </select>
                </div>

                <button type="button" className="w-full py-5 bg-[#FDFCF9] text-[#1C1C1C] text-[11px] font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#C4A79A] hover:text-[#FDFCF9] transition-colors duration-500 mt-4">
                  Talep Oluştur
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      <AestheticFooter />
    </main>
  );
}

