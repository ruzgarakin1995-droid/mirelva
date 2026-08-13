"use client";
import React, { useState } from 'react';
import { Play, CheckCircle2, Activity } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SimulationSection = () => {
  const [isSimulating, setIsSimulating] = useState(false);

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal staggerChildren variant="slide-right" className="w-full lg:w-1/2">
            <ScrollRevealChild variant="fade-up" className="text-blue-500 font-semibold tracking-wider uppercase mb-4 block">Dijital İkiz Teknolojisi</ScrollRevealChild>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <TextReveal text="3D İnteraktif Ağ Simülasyonu" />
            </h2>
            <ScrollRevealChild variant="fade-up" className="text-slate-400 text-lg mb-8 leading-relaxed">
              Global operasyonlarımızı ve rota optimizasyonlarımızı gerçek zamanlı olarak izleyin. Dijital ikiz teknolojisi ile tedarik zincirindeki tüm hareketleri 3 boyutlu ortamda analiz edin.
            </ScrollRevealChild>
            <ScrollRevealChild variant="fade-up">
              <button 
                onClick={() => setIsSimulating(true)}
                disabled={isSimulating}
                className={`px-8 py-4 font-semibold rounded-lg shadow-lg transition-all flex items-center gap-3 group ${
                  isSimulating 
                  ? 'bg-green-600/20 text-green-400 border border-green-500/30 cursor-default'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                }`}
              >
                {isSimulating ? (
                  <>
                    <Activity className="w-5 h-5 animate-pulse" />
                    Sistem Aktif - Takip Ediliyor
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Simülasyonu Başlat
                  </>
                )}
              </button>
            </ScrollRevealChild>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" className="w-full lg:w-1/2 h-[500px] relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
            <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000 ${isSimulating ? 'opacity-40 grayscale-0' : 'opacity-20 grayscale group-hover:scale-105'}`}></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-slate-900/60 to-transparent pointer-events-none z-10"></div>
            
            {/* Interactive Radar Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className={`w-[400px] h-[400px] border rounded-full flex items-center justify-center relative transition-colors duration-1000 ${isSimulating ? 'border-green-500/30' : 'border-blue-500/20'}`}>
                <div className={`w-[300px] h-[300px] border rounded-full flex items-center justify-center transition-colors duration-1000 ${isSimulating ? 'border-green-400/30' : 'border-blue-400/20'}`}>
                  <div className={`w-[200px] h-[200px] border rounded-full transition-colors duration-1000 ${isSimulating ? 'border-green-300/30' : 'border-blue-300/20'}`}></div>
                </div>
                {/* Radar Sweep */}
                <div className={`absolute inset-0 rounded-full border-r-2 origin-center opacity-50 bg-gradient-to-r ${
                  isSimulating 
                  ? 'border-green-400 from-transparent to-green-500/20 animate-[spin_2s_linear_infinite]' 
                  : 'border-blue-500 from-transparent to-blue-500/10 animate-[spin_4s_linear_infinite]'
                }`}></div>
                
                {/* Nodes */}
                <div className="absolute top-[20%] left-[30%] flex items-center justify-center group/node cursor-pointer">
                  <div className={`w-3 h-3 rounded-full absolute ${isSimulating ? 'bg-green-400 shadow-[0_0_20px_#4ade80] animate-ping' : 'bg-blue-400 shadow-[0_0_15px_#60a5fa] animate-pulse'}`}></div>
                  <div className={`w-3 h-3 rounded-full relative z-10 ${isSimulating ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-700 text-xs px-3 py-1 rounded opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap text-white">
                    Avrupa Merkezi {isSimulating && <span className="text-green-400 ml-1">(Aktif)</span>}
                  </div>
                </div>
                
                <div className="absolute top-[60%] left-[60%] flex items-center justify-center group/node cursor-pointer">
                  <div className={`w-3 h-3 rounded-full absolute delay-75 ${isSimulating ? 'bg-green-400 shadow-[0_0_20px_#4ade80] animate-ping' : 'bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-pulse'}`}></div>
                  <div className={`w-3 h-3 rounded-full relative z-10 ${isSimulating ? 'bg-green-500' : 'bg-cyan-500'}`}></div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-700 text-xs px-3 py-1 rounded opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap text-white">
                    Asya Hub {isSimulating && <span className="text-green-400 ml-1">(Aktif)</span>}
                  </div>
                </div>
                
                <div className="absolute top-[40%] left-[70%] flex items-center justify-center group/node cursor-pointer">
                  <div className={`w-2 h-2 rounded-full absolute delay-150 ${isSimulating ? 'bg-green-300 animate-ping' : 'bg-blue-300 animate-pulse'}`}></div>
                </div>
              </div>
            </div>
            
            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 z-30 bg-slate-900/80 backdrop-blur border border-slate-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isSimulating ? 'bg-green-400 animate-ping' : 'bg-amber-400 animate-pulse'}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isSimulating ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                </span>
                <span className="text-sm text-slate-300 font-medium">{isSimulating ? 'Sistem Çevrimiçi' : 'Beklemede'}</span>
              </div>
              <div className="mt-2 text-xs text-slate-500 font-mono">Bağlantı: {isSimulating ? 'GÜVENLİ | Gecikme: 12ms' : 'KAPALI'}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
