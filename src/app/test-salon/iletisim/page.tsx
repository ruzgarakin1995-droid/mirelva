"use client";

import { motion } from 'framer-motion';
import { SalonHeader } from '@/themes/salon/components/SalonHeader';
import { SalonFooter } from '@/themes/salon/components/SalonFooter';

export default function IletisimPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FCFBF9]">
      <SalonHeader />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
          <span className="text-[15vw] font-serif leading-none tracking-tighter whitespace-nowrap">CONTACT</span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
              <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Bize Ulaşın</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-serif text-[#4A403F] leading-tight mb-12"
            >
              Randevu & <span className="italic text-[#D4A3A3] font-light">İletişim.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8 text-[#4A403F]"
            >
              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 mb-2">Adres</h3>
                <p className="font-sans font-light text-base leading-relaxed">
                  Harbiye Mah. Teşvikiye Cd.<br/>
                  Lumina Plaza No: 15 Kat: 2<br/>
                  Şişli / İstanbul
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 mb-2">İletişim</h3>
                <a href="tel:+905551234567" className="block font-serif text-2xl hover:text-[#D4A3A3] transition-colors mb-1">+90 (555) 123 45 67</a>
                <a href="mailto:hello@luminanailart.com" className="font-sans font-light hover:text-[#D4A3A3] transition-colors">hello@luminanailart.com</a>
              </div>

              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 mb-2">Çalışma Saatleri</h3>
                <p className="font-sans font-light text-base leading-relaxed">
                  Pazartesi - Cumartesi: 09:00 - 20:00<br/>
                  Pazar: Kapalı
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-1/2 bg-[#F0EBE6] p-10 md:p-16 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCFBF9] rounded-bl-full"></div>
            
            <h3 className="text-2xl font-serif text-[#4A403F] mb-8 relative z-10">Mesaj Gönderin</h3>
            
            <form className="space-y-8 relative z-10">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-[#4A403F]/20 py-3 text-[#4A403F] focus:outline-none focus:border-[#D4A3A3] transition-colors peer"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-[11px] font-sans uppercase tracking-widest text-[#4A403F]/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#D4A3A3] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]"
                >
                  Adınız Soyadınız
                </label>
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-[#4A403F]/20 py-3 text-[#4A403F] focus:outline-none focus:border-[#D4A3A3] transition-colors peer"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-3 text-[11px] font-sans uppercase tracking-widest text-[#4A403F]/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#D4A3A3] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]"
                >
                  Telefon Numaranız
                </label>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={3}
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-[#4A403F]/20 py-3 text-[#4A403F] focus:outline-none focus:border-[#D4A3A3] transition-colors peer resize-none"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-[11px] font-sans uppercase tracking-widest text-[#4A403F]/50 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#D4A3A3] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]"
                >
                  Mesajınız
                </label>
              </div>

              <button 
                type="button"
                className="group relative w-full py-4 overflow-hidden border border-[#4A403F] text-[#4A403F] bg-transparent hover:text-[#FCFBF9] transition-colors duration-500 rounded-full mt-4"
              >
                <span className="absolute inset-0 bg-[#4A403F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full"></span>
                <span className="relative z-10 text-[11px] font-sans tracking-[0.2em] uppercase">Gönder</span>
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Full width map placeholder */}
      <section className="h-[400px] bg-[#E0B6B6]/20 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif italic text-[#4A403F]/50 text-xl">Harita Entegrasyon Alanı</p>
        </div>
      </section>

      <SalonFooter />
    </main>
  );
}
