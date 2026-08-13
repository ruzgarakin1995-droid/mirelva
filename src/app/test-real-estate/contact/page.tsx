"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left: Info */}
        <div className="w-full lg:w-1/2 pt-32 pb-24 px-6 md:px-12 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md mx-auto lg:mx-0 lg:ml-auto w-full"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/50 mb-6 block">İletişim</span>
            <h1 className="text-5xl md:text-6xl font-normal tracking-tight mb-12">
              Bize <span className="font-serif italic text-[#1a1a1a]/60">Ulaşın</span>
            </h1>

            <div className="space-y-12 border-t border-[#1a1a1a]/10 pt-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-4">Genel Merkez</h3>
                <p className="text-lg font-medium text-[#1a1a1a]/80 leading-relaxed">
                  Büyükdere Cad. No: 185,<br />
                  Levent, Şişli, 34330<br />
                  İstanbul, Türkiye
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-4">İletişim Bilgileri</h3>
                <div className="space-y-2 text-lg font-medium text-[#1a1a1a]/80">
                  <p><a href="tel:+902125550199" className="hover:text-[#1a1a1a] transition-colors">+90 (212) 555 0199</a></p>
                  <p><a href="mailto:info@auraestates.com.tr" className="hover:text-[#1a1a1a] transition-colors">info@auraestates.com.tr</a></p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-4">Çalışma Saatleri</h3>
                <p className="text-lg font-medium text-[#1a1a1a]/80 leading-relaxed">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 10:00 - 15:00<br />
                  <span className="text-[#1a1a1a]/40 text-sm mt-2 block">* Sadece randevu ile.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0a] text-[#f5f5f0] pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto lg:mx-0 w-full"
          >
            <h2 className="text-3xl font-normal tracking-tight mb-8">Özel Danışmanlık Talebi</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f0]/40 mb-2">Ad Soyad</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 focus:border-[#f5f5f0] outline-none py-2 text-[#f5f5f0] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f0]/40 mb-2">E-posta</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 focus:border-[#f5f5f0] outline-none py-2 text-[#f5f5f0] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f0]/40 mb-2">İlgilendiğiniz Konu</label>
                <select className="w-full bg-transparent border-b border-[#f5f5f0]/20 focus:border-[#f5f5f0] outline-none py-2 text-[#f5f5f0] transition-colors appearance-none rounded-none">
                  <option className="bg-[#0a0a0a]">Satın Alma</option>
                  <option className="bg-[#0a0a0a]">Kiralama</option>
                  <option className="bg-[#0a0a0a]">Portföy Yönetimi</option>
                  <option className="bg-[#0a0a0a]">Proje Danışmanlığı</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f0]/40 mb-2">Mesajınız</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 focus:border-[#f5f5f0] outline-none py-2 text-[#f5f5f0] transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#f5f5f0] text-[#0a0a0a] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-3">
                GÖNDER <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
