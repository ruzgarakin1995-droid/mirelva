"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const Contact = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-blue-950 mb-6">
              <TextReveal text="İletişime Geçin" />
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Uzman danışmanlarımızla randevu oluşturmak veya hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren className="space-y-8">
            <ScrollRevealChild variant="fade-up" className="flex items-start">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mr-4 flex-shrink-0">
                <MapPin className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 mb-1">Merkez Ofis</h4>
                <p className="text-slate-600 text-sm">Levent, Büyükdere Cd. No:199<br/>34394 Şžişli/İstanbul, Türkiye</p>
              </div>
            </ScrollRevealChild>
            
            <ScrollRevealChild variant="fade-up" className="flex items-start">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mr-4 flex-shrink-0">
                <Phone className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 mb-1">Telefon</h4>
                <p className="text-slate-600 text-sm">+90 (212) 555 01 23</p>
              </div>
            </ScrollRevealChild>

            <ScrollRevealChild variant="fade-up" className="flex items-start">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mr-4 flex-shrink-0">
                <Mail className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 mb-1">E-Posta</h4>
                <p className="text-slate-600 text-sm">info@financepremium.com</p>
              </div>
            </ScrollRevealChild>
          </ScrollReveal>
        </div>

        <div className="lg:w-2/3">
          <ScrollReveal variant="slide-left">
            <form className="bg-slate-50 p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-8">Randevu Talebi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full min-h-[44px] p-3 border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon Numarası</label>
                  <input type="tel" className="w-full min-h-[44px] p-3 border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors" placeholder="+90 5XX XXX XX XX" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">E-Posta Adresi</label>
                <input type="email" className="w-full min-h-[44px] p-3 border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors" placeholder="ornek@sirket.com" />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız (İsteğe Bağlı)</label>
                <textarea rows={4} className="w-full p-3 border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors" placeholder="Konu hakkında kısa bir bilgi verebilirsiniz..."></textarea>
              </div>
              <button type="button" className="w-full min-h-[44px] bg-blue-950 text-white font-bold py-4 hover:bg-blue-900 transition-colors uppercase tracking-wider text-sm">
                Talebi Gönder
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};



