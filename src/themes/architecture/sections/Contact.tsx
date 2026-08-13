"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ onQuoteClick }: { onQuoteClick: () => void }) {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-4">İletişim</p>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
              Geleceği <br/><span className="font-bold">inşa edelim.</span>
            </h2>

            <button 
              onClick={onQuoteClick}
              className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest border-b border-black pb-2 hover:opacity-50 transition-opacity mb-16"
            >
              <span>Projenizi Başlatın</span>
              <ArrowRight size={16} />
            </button>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 text-black/50 mb-4">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest">London</span>
                </div>
                <p className="text-sm">
                  100 Architecture Way<br/>
                  London, UK SW1A 1AA<br/>
                  United Kingdom
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 text-black/50 mb-4">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest">New York</span>
                </div>
                <p className="text-sm">
                  432 Minimalist Ave<br/>
                  New York, NY 10012<br/>
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12">
            <h3 className="text-xl font-medium mb-8 tracking-tight">Direkt İletişim</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-black/50 mb-2">İsim</label>
                <input type="text" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-black/50 mb-2">E-posta</label>
                <input type="email" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-black/50 mb-2">Mesaj</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

