"use client";
import React, { useState } from 'react';
import { SplitScreenSearch } from './sections/SplitScreenSearch';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export function RealEstateThemeV2() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [postAdOpen, setPostAdOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white overflow-hidden flex flex-col">
      
      {/* Modals */}
      <AnimatePresence>
        {(loginOpen || postAdOpen) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setLoginOpen(false); setPostAdOpen(false); }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => { setLoginOpen(false); setPostAdOpen(false); }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {loginOpen ? 'Giriş Yap' : 'Yeni İlan Ver'}
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                {loginOpen ? 'Favorilerinizi ve aramalarınızı kaydetmek için giriş yapın.' : 'Portföyünüzü milyonlarca alıcıyla buluşturun.'}
              </p>
              
              <div className="space-y-4">
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors font-medium text-sm" placeholder="E-Posta adresiniz" />
                <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors font-medium text-sm" placeholder="Şifreniz" />
                
                <button 
                  onClick={() => { setLoginOpen(false); setPostAdOpen(false); }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3 rounded-lg mt-4 transition-all"
                >
                  Devam Et
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Zillow Style Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50 relative">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black text-emerald-700 tracking-tighter">ESTATE<span className="text-slate-900">.</span></div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-emerald-700">Satılık</a>
            <a href="#" className="hover:text-emerald-700">Kiralık</a>
            <a href="#" className="hover:text-emerald-700">Projeler</a>
            <a href="#" className="hover:text-emerald-700">Danışmanlar</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setLoginOpen(true)} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">Giriş Yap</button>
          <button onClick={() => setPostAdOpen(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors active:scale-95">
            İlan Ver
          </button>
        </div>
      </header>

      {/* Main Functional Area */}
      <SplitScreenSearch />
    </div>
  );
}
