"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export function Contact() {
  return (
    <section id="iletişim" className="py-24 bg-[#0b1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/3">
            <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Bize Ulaşın</span>
            <h2 className="text-white font-serif text-4xl mb-8">
              <TextReveal text="ÖZEL İLETİŞİM" highlightedWords={["İLETİŞİM"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
            <p className="text-[#c0c0c0]/80 font-light mb-12">
              Lüks yat deneyiminiz için 7/24 hizmetinizdeyiz. Özel danışmanlarımız seyahatinizi planlamak için bekliyor.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#143050] flex items-center justify-center border border-[#c0c0c0]/20">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] uppercase tracking-widest text-xs mb-1">VIP Hattı</h4>
                  <p className="text-white text-lg font-serif">+90 (212) 555 VIP 00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#143050] flex items-center justify-center border border-[#c0c0c0]/20">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] uppercase tracking-widest text-xs mb-1">E-posta</h4>
                  <p className="text-white text-lg font-serif">concierge@vipyacht.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#143050] flex items-center justify-center border border-[#c0c0c0]/20">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] uppercase tracking-widest text-xs mb-1">Merkez Ofis</h4>
                  <p className="text-white text-lg font-serif">Yalıkavak Marina, Bodrum</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" className="w-full lg:w-2/3">
            <div className="bg-[#143050] p-8 lg:p-12 border border-[#c0c0c0]/20 h-full">
              <h3 className="text-white font-serif text-2xl mb-8">Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0]" />
                  <input type="email" placeholder="E-posta Adresiniz" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0]" />
                </div>
                <input type="text" placeholder="Konu" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0]" />
                <textarea placeholder="Mesajınız" rows={4} className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0] resize-none"></textarea>
                <button type="button" className="w-full py-4 bg-gradient-to-r from-[#c0c0c0] to-white text-[#0b1a2e] tracking-widest text-sm uppercase hover:scale-[1.02] transition-transform min-h-[44px]">
                  GÖNDER
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}



