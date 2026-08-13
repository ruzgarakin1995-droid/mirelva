"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0b1a2e]/90 backdrop-blur-md border-b border-[#c0c0c0]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c0c0c0] to-white flex items-center justify-center">
              <span className="text-[#0b1a2e] font-serif font-bold text-xl">V</span>
            </div>
            <span className="text-white font-serif tracking-[0.2em] text-xl">VIP YACHT</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {['FİLO', 'DESTİNASYONLAR', 'DENEYİMLER', 'HİZMETLER', 'İLETİŞİM'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#c0c0c0] hover:text-white text-sm tracking-widest transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="px-8 py-3 bg-gradient-to-r from-[#c0c0c0] to-white text-[#0b1a2e] text-sm tracking-widest hover:scale-105 transition-transform duration-300 min-h-[44px] min-w-[44px]">
              REZERVASYON
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#c0c0c0] hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-[#0b1a2e] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
          {['FİLO', 'DESTİNASYONLAR', 'DENEYİMLER', 'HİZMETLER', 'İLETİŞİM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl tracking-[0.2em] font-light min-h-[44px] flex items-center justify-center w-full"
            >
              {item}
            </a>
          ))}
          <button className="mt-8 px-12 py-4 bg-gradient-to-r from-[#c0c0c0] to-white text-[#0b1a2e] text-lg tracking-widest min-h-[44px]">
            REZERVASYON YAP
          </button>
        </div>
      </div>
    </nav>
  );
}



