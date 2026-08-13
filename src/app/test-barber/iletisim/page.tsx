"use client";

import { motion } from 'framer-motion';
import { BarberHeader } from '@/themes/barber/components/BarberHeader';
import { BarberFooter } from '@/themes/barber/components/BarberFooter';

export default function ContactPage() {
  return (
    <>
      <BarberHeader />
      
      <main className="flex-1 flex flex-col pt-32 pb-24 bg-[#F8F7F5] min-h-screen">
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Contact Info & Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full"
          >
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block">
              Lokasyon
            </span>
            <h1 className="text-5xl font-serif text-[#2A2522] leading-tight mb-12">
              Bizi <span className="italic text-[#C1A68D] font-light">Ziyaret Edin.</span>
            </h1>

            <div className="flex flex-col gap-8 font-sans font-light text-[#2A2522]/80 text-lg mb-16">
              <div>
                <p className="font-medium text-[#2A2522] mb-1">Adres</p>
                <p>Bomonti, Silahşör Cd. No:42<br/>Şişli, İstanbul</p>
              </div>
              <div>
                <p className="font-medium text-[#2A2522] mb-1">İletişim</p>
                <p>+90 (555) 123 45 67<br/>hello@bomontihair.com</p>
              </div>
            </div>

            {/* Map Placeholder Image */}
            <div className="w-full h-64 bg-[#2A2522] relative overflow-hidden mt-auto">
               <img 
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1200&auto=format&fit=crop" 
                alt="Map Location" 
                className="w-full h-full object-cover sepia-[0.3] opacity-80"
              />
              <div className="absolute inset-0 bg-[#C1A68D]/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Luxury Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-12 shadow-2xl shadow-[#2A2522]/5"
          >
            <h2 className="text-3xl font-serif text-[#2A2522] mb-2">Randevu Talebi</h2>
            <p className="text-sm font-sans font-light text-[#2A2522]/50 mb-12">
              Lütfen bilgilerinizi bırakın, concierge ekibimiz size hemen ulaşsın.
            </p>

            <form className="flex flex-col gap-10">
              
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-[#2A2522]/20 py-3 text-[#2A2522] font-sans font-light focus:outline-none focus:border-[#C1A68D] transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-[#2A2522]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C1A68D] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C1A68D]">
                  Adınız & Soyadınız
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="tel" 
                  required
                  className="w-full bg-transparent border-b border-[#2A2522]/20 py-3 text-[#2A2522] font-sans font-light focus:outline-none focus:border-[#C1A68D] transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-[#2A2522]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C1A68D] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C1A68D]">
                  Telefon Numaranız
                </label>
              </div>

              <div className="relative group">
                <select 
                  required
                  className="w-full bg-transparent border-b border-[#2A2522]/20 py-3 text-[#2A2522] font-sans font-light focus:outline-none focus:border-[#C1A68D] transition-colors appearance-none"
                >
                  <option value="" disabled selected>Hizmet Seçiniz...</option>
                  <option value="kesim">Centilmen Kesimi</option>
                  <option value="ustura">Geleneksel Ustura</option>
                  <option value="paket">Executive Paket (İmza)</option>
                  <option value="diger">Diğer / Danışmanlık</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 top-4 pointer-events-none text-[#C1A68D]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div className="relative group mt-4">
                <button type="button" className="w-full bg-[#2A2522] text-[#F8F7F5] py-5 font-sans tracking-[0.2em] uppercase text-[10px] hover:bg-[#C1A68D] transition-colors duration-500">
                  Talebi Gönder
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </main>

      <BarberFooter />
    </>
  );
}
