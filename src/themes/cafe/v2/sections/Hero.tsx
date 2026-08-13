"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [lang, setLang] = useState<"TR" | "EN">("TR");

  const content = {
    TR: {
      title: "Zamanı Durduran Lezzetler.",
      subtitle: "Özenle seçilmiş taze çekirdekler ve ustalıkla hazırlanmış artisan tatlar eşliğinde, kendinize ayırdığınız o eşsiz an.",
      cta: "MENÜYÜ KEŞFEDİN"
    },
    EN: {
      title: "Flavors That Stop Time.",
      subtitle: "Carefully selected fresh beans and masterfully crafted artisan flavors for that unique moment you set aside for yourself.",
      cta: "DISCOVER MENU"
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center bg-[#FAF7F2] text-[#2C2825] overflow-hidden">
      {/* Navbar / Header area */}
      <div className="absolute top-0 left-0 right-0 p-8 sm:p-12 flex justify-between items-center z-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl tracking-[0.2em] font-light"
        >
          LUMIÈRE
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setLang(lang === "TR" ? "EN" : "TR")}
          className="text-sm tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className={lang === "TR" ? "opacity-100" : "opacity-40"}>TR</span>
          <span className="mx-2 font-light">|</span>
          <span className={lang === "EN" ? "opacity-100" : "opacity-40"}>EN</span>
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
          alt="Premium Cafe Ambiyans" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-[#FAF7F2]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          key={lang + "-title"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl font-light tracking-tight mb-8 leading-tight"
        >
          {content[lang].title}
        </motion.h1>
        
        <motion.p 
          key={lang + "-subtitle"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl font-light opacity-70 mb-12 max-w-2xl leading-relaxed"
        >
          {content[lang].subtitle}
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="px-10 py-4 bg-[#2C2825] text-[#FAF7F2] rounded-full tracking-[0.2em] text-xs font-medium hover:bg-[#4A443E] transition-all duration-300 hover:scale-105"
        >
          {content[lang].cta}
        </motion.button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] font-medium opacity-40 uppercase">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#2C2825]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
