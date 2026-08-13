"use client";
import React, { useState } from 'react';
import { Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export function Charter() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-24 bg-[#0b1a2e] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Rezervasyon</span>
          <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)]">
            <TextReveal text="ÖZEL CHARTER İsteği" highlightedWords={["CHARTER"]} highlightClassName="italic text-[#c0c0c0]" />
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="bg-[#143050] border border-[#c0c0c0]/20 p-6 md:p-12 shadow-2xl">
          {/* Stepper Header */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#c0c0c0]/20 -translate-y-1/2 z-0"></div>
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative z-10 flex flex-col items-center gap-2 bg-[#143050] px-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step >= num ? 'border-white bg-white text-[#0b1a2e]' : 'border-[#c0c0c0]/50 text-[#c0c0c0]'}`}>
                  {step > num ? <CheckCircle2 size={20} /> : num}
                </div>
                <span className="text-xs text-[#c0c0c0] uppercase tracking-widest hidden sm:block">
                  {num === 1 ? 'Tarih' : num === 2 ? 'Detaylar' : 'İletişim'}
                </span>
              </div>
            ))}
          </div>

          {/* Stepper Content */}
          <div className="min-h-[200px]">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Başlangıç Tarihi</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c0c0c0]" size={18} />
                      <input type="date" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-12 py-4 focus:outline-none focus:border-[#c0c0c0] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Bitiş Tarihi</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c0c0c0]" size={18} />
                      <input type="date" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-12 py-4 focus:outline-none focus:border-[#c0c0c0] transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Misafir Sayısı</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c0c0c0]" size={18} />
                      <select className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-12 py-4 appearance-none focus:outline-none focus:border-[#c0c0c0]">
                        <option>1-4 Misafir</option>
                        <option>5-8 Misafir</option>
                        <option>9-12 Misafir</option>
                        <option>12+ Misafir</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Tercih Edilen Rota</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c0c0c0]" size={18} />
                      <select className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-12 py-4 appearance-none focus:outline-none focus:border-[#c0c0c0]">
                        <option>Fransız Rivierası</option>
                        <option>Yunan Adaları</option>
                        <option>Türk Rivierası</option>
                        <option>Karayipler</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Ad Soyad</label>
                    <input type="text" placeholder="Ad Soyad" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0] transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">E-posta</label>
                      <input type="email" placeholder="isim@sirketiniz.com" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0] transition-colors" />
                    </div>
                    <div>
                      <label className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-2 block">Telefon</label>
                      <input type="tel" placeholder="+90 555 555 5555" className="w-full bg-[#0b1a2e] border border-[#c0c0c0]/20 text-white px-6 py-4 focus:outline-none focus:border-[#c0c0c0] transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t border-[#c0c0c0]/20">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 text-[#c0c0c0] border border-[#c0c0c0]/50 hover:bg-[#c0c0c0]/10 transition-colors tracking-widest text-sm uppercase min-h-[44px]"
              >
                Geri
              </button>
            ) : <div></div>}
            
            <button 
              onClick={() => step < 3 ? setStep(step + 1) : alert('Talep Alındı')}
              className="px-10 py-3 bg-gradient-to-r from-[#c0c0c0] to-white text-[#0b1a2e] tracking-widest text-sm uppercase min-h-[44px] hover:scale-105 transition-transform"
            >
              {step < 3 ? 'İleri' : 'Talebi Gönder'}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}



