"use client";

import { LasisHeader } from '@/themes/lasis/components/LasisHeader';
import { LasisFooter } from '@/themes/lasis/components/LasisFooter';
import { motion } from 'framer-motion';

export default function IletisimPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <LasisHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-24 px-6 lg:px-8 bg-[#3E2B2B] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="/Lasis/Lasis_interior_detail_1786272904875.jpg" alt="Lasis Klinik Interior" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B2B] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Bizimle İletişime Geçin</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#FAF5F0] mb-6"
          >
            Sizi Dinliyoruz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#FAF5F0]/70 max-w-xl mx-auto text-base"
          >
            Randevu talepleriniz, sorularınız veya geri bildirimleriniz için uzman ekibimiz her zaman yanınızda.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif mb-12 text-[#3E2B2B]">Merkezimize Bekliyoruz</h2>
            
            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-white transition-colors text-[#D4A373]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium tracking-widest uppercase text-[#D4A373] mb-2">Adres</h3>
                  <p className="font-sans text-[#3E2B2B]/80 leading-relaxed">
                    Lotus Terrace Ofis Özyurtlar,<br/>
                    Namık Kemal, 70. Sk., 34315<br/>
                    Esenyurt/İstanbul
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-white transition-colors text-[#D4A373]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium tracking-widest uppercase text-[#D4A373] mb-2">İletişim Bilgileri</h3>
                  <p className="font-sans text-[#3E2B2B]/80 leading-relaxed">
                    <a href="tel:05070761606" className="hover:text-[#D4A373] transition-colors block mb-1">0507 076 16 06</a>
                    <a href="mailto:info@lasisklinik.com" className="hover:text-[#D4A373] transition-colors block">info@lasisklinik.com</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-white transition-colors text-[#D4A373]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-sans font-medium tracking-widest uppercase text-[#D4A373] mb-2">Çalışma Saatleri</h3>
                  <p className="font-sans text-[#3E2B2B]/80 leading-relaxed">
                  – Pazartesi - Pazar<br/>
                    11:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-14 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-serif text-[#3E2B2B] mb-8">Bize Mesaj Bırakın</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mesajınız başarıyla iletildi. En kısa sürede dönüş yapılacaktır."); }}>
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Ad Soyad</label>
                <input required type="text" className="w-full bg-transparent border-b border-[#3E2B2B]/20 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors" placeholder="İsminiz..." />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Telefon</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-[#3E2B2B]/20 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors" placeholder="0555..." />
                </div>
                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">E-Posta (Opsiyonel)</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#3E2B2B]/20 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors" placeholder="ornek@mail.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Mesajınız</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-[#3E2B2B]/20 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button type="submit" className="mt-8 bg-[#3E2B2B] text-[#FAF5F0] font-sans font-medium text-xs tracking-widest uppercase px-8 py-4 rounded hover:bg-[#D4A373] transition-colors shadow-md w-full">
                Gönder
              </button>
            </form>
          </motion.div>
          
        </div>
      </section>

      <LasisFooter />
    </main>
  );
}
