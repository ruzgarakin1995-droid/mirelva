"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const BookingSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white border-y border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="bg-zinc-900 p-8 md:p-12 rounded-sm border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
          <div className="text-center mb-10">
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-2 block">Hızlı Rezervasyon</span>
            <h2 className="text-3xl md:text-4xl font-light">
              <TextReveal text="Yolculuğunuzu Planlayın" highlightedWords={["Planlayın"]} highlightClassName="font-bold" />
            </h2>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-wide">Alış Lokasyonu</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors">
                  <option>İstanbul Havalimanı (IST)</option>
                  <option>Sabiha Gökçen Havalimanı (SAW)</option>
                  <option>Zorlu Center VIP Girişi</option>
                  <option>Diğer (Lütfen Belirtiniz)</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-wide">Dönüş Lokasyonu</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors">
                  <option>Alış Lokasyonu İle Aynı</option>
                  <option>İstanbul Havalimanı (IST)</option>
                  <option>Sabiha Gökçen Havalimanı (SAW)</option>
                  <option>Diğer (Lütfen Belirtiniz)</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-wide">Alış Tarihi & Saati</label>
                <div className="flex gap-4">
                  <input type="date" className="flex-2 w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                  <input type="time" className="flex-1 w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-wide">Dönüş Tarihi & Saati</label>
                <div className="flex gap-4">
                  <input type="date" className="flex-2 w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                  <input type="time" className="flex-1 w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-wide">Araç Sınıfı</label>
              <select className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 rounded-sm focus:outline-none focus:border-amber-500 transition-colors">
                <option>Ultra Luxury (Rolls Royce, Bentley)</option>
                <option>First Class Sedan (S-Class, 7 Series)</option>
                <option>Luxury SUV (Range Rover, G-Class)</option>
                <option>VIP Minivan (V-Class, Caravelle)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-sm transition-colors duration-300 font-medium tracking-widest uppercase mt-4">
              Müsaitlik Durumunu Kontrol Et
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;

