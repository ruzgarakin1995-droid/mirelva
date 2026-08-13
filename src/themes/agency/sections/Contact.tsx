"use client";
import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">İletişim</span>
            <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-8">
              Birlikte Eşsiz <br /> Projeler <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">İnşa Edelim.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-md leading-relaxed">
              Yeni bir projeye mi başlıyorsunuz? Dijital vizyonunuzu şekillendirmek ve potansiyelinizi keşfetmek için kahveye bekliyoruz.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-Posta</h4>
                  <a href="mailto:hello@agency.com" className="text-neutral-400 hover:text-lime-400 transition-colors min-h-[44px] flex items-center">hello@agency.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefon</h4>
                  <a href="tel:+905551234567" className="text-neutral-400 hover:text-lime-400 transition-colors min-h-[44px] flex items-center">+90 (555) 123 45 67</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Stüdyo</h4>
                  <p className="text-neutral-400">Levent, Büyükdere Cd. No:199<br />Şişli, İstanbul</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black p-8 sm:p-12 border border-white/10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-3xl pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-8">Bize Ulaşın</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Adınız & Soyadınız</label>
                <input type="text" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-lime-400 transition-colors w-full min-h-[44px]" placeholder="John Doe" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">E-Posta Adresiniz</label>
                <input type="email" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-lime-400 transition-colors w-full min-h-[44px]" placeholder="john@example.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Proje Detayları</label>
                <textarea className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-lime-400 transition-colors w-full resize-none min-h-[120px]" placeholder="Aklınızdaki fikri anlatın..."></textarea>
              </div>
              
              <button type="submit" className="group mt-6 w-full min-h-[64px] bg-lime-400 text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-white transition-colors">
                <span>Gönder</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};



