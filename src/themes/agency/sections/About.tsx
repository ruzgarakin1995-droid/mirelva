"use client";
import React from 'react';
import { Target, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-lime-400/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
              alt="Agency Office" 
              className="relative w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10"
            />
            <div className="absolute -bottom-8 -right-8 bg-lime-400 text-black p-8 hidden md:block">
              <span className="block text-6xl font-black">15+</span>
              <span className="block text-sm font-bold uppercase tracking-wider mt-2">Yıllık Mükemmellik</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col">
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Hakkımızda</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Sıradanlığı Reddeden <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Kreatif Zekâ.</span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              Sadece estetik değil, strateji üretiyoruz. Markaların dijital ekosistemde nasıl konumlanması gerektiğini biliyor ve her piksele bir anlam yüklüyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 text-lime-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Stratejik Odak</h3>
                <p className="text-neutral-500 text-sm">Veri odaklı yaklaşımımızla dönüşüm odaklı, premium tasarımlar inşa ediyoruz.</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 text-lime-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">İnovatif Çözümler</h3>
                <p className="text-neutral-500 text-sm">Dijital trendleri takip etmiyor; sektöre yön veren yenilikçi standartları biz belirliyoruz.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};




