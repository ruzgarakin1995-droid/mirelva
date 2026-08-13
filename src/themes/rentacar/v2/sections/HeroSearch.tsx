"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';

export function HeroSearch({ searchParams, setSearchParams, onLoginClick }: any) {
  const [diffDropoff, setDiffDropoff] = useState(false);

  const scrollToFleet = () => {
    const fleetSection = document.getElementById('fleet-filter');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-32 pb-40 px-4 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" 
          alt="Premium Rent A Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Navigation Bar inline */}
        <nav className="absolute -top-24 left-0 right-0 flex justify-between items-center py-6 border-b border-white/10">
          <div className="text-white font-bold text-2xl tracking-tighter cursor-pointer">LÜKS<span className="text-orange-500">.</span>Kiralama</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/90">
            <button onClick={scrollToFleet} className="hover:text-orange-500 transition-colors">Araç Filosu</button>
            <a href="#" className="hover:text-orange-500 transition-colors">Kampanyalar</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Kurumsal Kiralama</a>
            <a href="#" className="hover:text-orange-500 transition-colors">İletişim</a>
          </div>
          <button 
            onClick={onLoginClick}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-colors"
          >
            Giriş Yap
          </button>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Yolculuğa <br/><span className="text-orange-500">Premium</span> Başlayın.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Geniş araç filomuz ve ayrıcalıklı hizmetimizle Türkiye'nin her yerinde yanınızdayız. Şimdi aracınızı seçin ve yola çıkın.
          </p>
        </motion.div>

        {/* Functional Search Engine (Zillow/Sixt style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl p-4 md:p-6 shadow-2xl shadow-black/40 w-full max-w-5xl"
        >
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-16">
            
            {/* Pickup Location */}
            <div className="flex-1 relative flex items-center bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-500 focus-within:border-orange-500 transition-colors px-4 cursor-text">
              <MapPin className="w-5 h-5 text-slate-400 mr-3" />
              <div className="flex flex-col justify-center w-full">
                <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Alış Noktası</span>
                <input 
                  type="text" 
                  value={searchParams.pickupLocation}
                  onChange={e => setSearchParams({...searchParams, pickupLocation: e.target.value})}
                  className="bg-transparent border-none outline-none text-slate-900 font-semibold w-full text-sm placeholder:text-slate-400"
                  placeholder="Şehir veya Havalimanı arayın"
                />
              </div>
            </div>

            {/* Dropoff Location (Conditional) */}
            <AnimatePresence>
              {diffDropoff && (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="flex-1 overflow-hidden"
                >
                  <div className="w-full relative flex items-center bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-500 focus-within:border-orange-500 transition-colors px-4 cursor-text h-full min-w-[200px]">
                    <MapPin className="w-5 h-5 text-slate-400 mr-3" />
                    <div className="flex flex-col justify-center w-full">
                      <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">İade Noktası</span>
                      <input 
                        type="text" 
                        value={searchParams.dropoffLocation}
                        onChange={e => setSearchParams({...searchParams, dropoffLocation: e.target.value})}
                        className="bg-transparent border-none outline-none text-slate-900 font-semibold w-full text-sm placeholder:text-slate-400"
                        placeholder="İade noktası arayın"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Date & Time Picker (Mock) */}
            <div className="flex-[1.5] flex gap-2">
              <div className="flex-1 relative flex items-center bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-500 transition-colors px-4 group cursor-pointer">
                <Calendar className="w-5 h-5 text-slate-400 group-hover:text-orange-500 mr-3" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Alış Tarihi</span>
                  <input type="datetime-local" className="bg-transparent border-none outline-none text-slate-900 font-semibold text-sm w-full" defaultValue="2026-10-12T10:00" />
                </div>
              </div>
              <div className="flex-1 relative flex items-center bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-500 transition-colors px-4 group cursor-pointer">
                <Calendar className="w-5 h-5 text-slate-400 group-hover:text-orange-500 mr-3" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">İade Tarihi</span>
                  <input type="datetime-local" className="bg-transparent border-none outline-none text-slate-900 font-semibold text-sm w-full" defaultValue="2026-10-15T10:00" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button onClick={scrollToFleet} className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white rounded-2xl px-8 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/30 md:w-auto w-full h-14 md:h-full group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Araç Bul
            </button>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium px-2">
            <input 
              type="checkbox" 
              id="diff-dropoff" 
              checked={diffDropoff}
              onChange={e => setDiffDropoff(e.target.checked)}
              className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4 cursor-pointer" 
            />
            <label htmlFor="diff-dropoff" className="cursor-pointer select-none hover:text-slate-700 transition-colors">Farklı bir noktada iade etmek istiyorum</label>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
