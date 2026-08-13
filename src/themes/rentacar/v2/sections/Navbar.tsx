"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const links = ["Filo", "Hizmetler", "Hikayemiz", "İletişim"];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
            LUXE<span className="text-blue-600">DRIVE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <a 
                key={i} 
                href={`#${link.toLowerCase()}`} 
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-black' : 'text-white/80 hover:text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              <button className="hover:text-blue-600 transition-colors">TR</button>
              <span className="opacity-50">|</span>
              <button className="opacity-50 hover:opacity-100 transition-opacity">EN</button>
            </div>
            <button className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              isScrolled ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              <User className="w-4 h-4" /> Giriş Yap
            </button>
            <button className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-black text-white hover:bg-black/80 hover:scale-105' 
                : 'bg-white text-black hover:bg-white/90 hover:scale-105'
            }`}>
              Rezervasyon
            </button>
          </div>

          <button 
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-[100] bg-white flex flex-col p-6"
      >
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-black tracking-tighter text-black">
            LUXE<span className="text-blue-600">DRIVE</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-8 h-8 text-black" />
          </button>
        </div>
        <div className="flex flex-col gap-8 mt-12 px-4">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-light tracking-tight text-black"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="mt-auto px-4 pb-12 flex flex-col gap-4">
          <div className="flex justify-center items-center gap-4 mb-2 text-slate-900 font-semibold text-lg">
            <button className="text-blue-600">TR</button>
            <span className="opacity-50">|</span>
            <button className="opacity-50 hover:opacity-100 transition-opacity">EN</button>
          </div>
          <button className="w-full py-4 text-center text-lg font-medium text-slate-600 border border-slate-200 rounded-2xl">
            Giriş Yap
          </button>
          <button className="w-full py-4 text-center text-lg font-semibold text-white bg-black rounded-2xl">
            Rezervasyon Başlat
          </button>
        </div>
      </motion.div>
    </>
  );
};
