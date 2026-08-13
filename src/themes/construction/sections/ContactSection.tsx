"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal staggerChildren>
            <ScrollRevealChild variant="fade-up">
              <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <span className="w-8 h-px bg-amber-500"></span> İletişim
              </h4>
              <h2 className="text-4xl font-bold text-white mb-8">
                <TextReveal text="Geleceği Birlikte İnşa Edelim" highlightedWords={["İnşa", "Edelim"]} highlightClassName="text-slate-400 font-light" />
              </h2>
              <p className="text-slate-400 font-light mb-12 max-w-md leading-relaxed">
                Büyük ölçekli yatırımlarınız, taahhüt projeleriniz ve stratejik ortaklıklar için kurumsal iletişim hattımızdan bize ulaşabilirsiniz.
              </p>
            </ScrollRevealChild>

            <div className="space-y-8">
              <ScrollRevealChild variant="fade-up" className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Genel Merkez</h4>
                  <p className="text-slate-400 text-sm">Levent, Büyükdere Cd. No:1<br />34330 Beşiktaş/İstanbul</p>
                </div>
              </ScrollRevealChild>
              <ScrollRevealChild variant="fade-up" className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Kurumsal İletişim</h4>
                  <p className="text-slate-400 text-sm">+90 (212) 555 00 00</p>
                </div>
              </ScrollRevealChild>
              <ScrollRevealChild variant="fade-up" className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">E-Posta</h4>
                  <p className="text-slate-400 text-sm">info@premiuminşaat.com.tr</p>
                </div>
              </ScrollRevealChild>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" className="bg-slate-900 p-10 rounded-lg border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8">Proje Teklif Formu</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ad Soyad / Firma</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">E-Posta Adresi</label>
                  <input type="email" className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Proje Tipi</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                  <option>Ticari Kompleks</option>
                  <option>Endüstriyel Tesis</option>
                  <option>Lüks Konut</option>
                  <option>Altyapı</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Proje Detayları</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"></textarea>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-wider py-4 transition-colors">
                Talebi Gönder
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

