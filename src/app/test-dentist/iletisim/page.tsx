"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function IletisimPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
              İletişim
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-16">
              Sizi <span className="italic text-[#D4C9C3] font-light">Dinliyoruz.</span>
            </h1>

            <div className="flex flex-col gap-12 mt-auto">
              <div>
                <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-4">Email</h3>
                <a href="mailto:bilgi@dismekanadsp.com" className="text-2xl font-serif hover:text-[#D4C9C3] transition-colors">
                  bilgi@dismekanadsp.com
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-4">Adres</h3>
                <p className="font-sans font-light text-[#1A1A1A]/80 text-lg leading-relaxed">
                  Gazi Osmanpaşa Sk. 6A,<br />
                  34880 İstanbul, Kartal Türkiye
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-4">Saatler & Telefon</h3>
                <p className="font-sans font-light text-[#1A1A1A]/80 text-lg leading-relaxed">
                  Pzt - Cmt: 09:00 - 23:00<br />
                  <a href="tel:+905314977217" className="hover:text-[#D4C9C3] transition-colors">
                    +90 531 497 72 17
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: VIP Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#1A1A1A] p-12 md:p-16 text-[#FAFAFA]"
          >
            <h2 className="text-2xl font-serif mb-12">Özel Danışmanlık Talebi</h2>
            
            <form className="flex flex-col gap-10">
              
              <div className="flex flex-col relative group">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#FAFAFA]/40 mb-2">Adınız & Soyadınız</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-[#FAFAFA]/20 py-2 focus:outline-none focus:border-[#D4C9C3] transition-colors font-sans font-light text-lg rounded-none"
                />
              </div>

              <div className="flex flex-col relative group">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#FAFAFA]/40 mb-2">Size Nasıl Ulaşalım? (Telefon veya Email)</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-[#FAFAFA]/20 py-2 focus:outline-none focus:border-[#D4C9C3] transition-colors font-sans font-light text-lg rounded-none"
                />
              </div>

              <div className="flex flex-col relative group">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#FAFAFA]/40 mb-2">Hayalinizdeki Gülüşü Tarif Edin</label>
                <textarea 
                  rows={4}
                  className="bg-transparent border-b border-[#FAFAFA]/20 py-2 focus:outline-none focus:border-[#D4C9C3] transition-colors font-sans font-light text-lg resize-none rounded-none"
                />
              </div>

              <button 
                type="button"
                className="mt-8 self-start text-xs font-sans tracking-[0.3em] uppercase border border-[#FAFAFA]/30 px-10 py-5 hover:bg-[#FAFAFA] hover:text-[#1A1A1A] transition-all duration-500"
              >
                Talebi Gönder
              </button>

            </form>
          </motion.div>

        </div>

        {/* Google Maps Embed */}
        <div className="mt-24 w-full h-[500px] border border-[#1A1A1A]/10 p-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.281144061596!2d29.183492576402434!3d40.93149817135965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac58c1488c9eb%3A0xc3f8e5610214a1f!2sGazi%20Osmanpa%C5%9Fa%20Sk.%206a%2C%2034880%20Kartal%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dişmekan Location"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
