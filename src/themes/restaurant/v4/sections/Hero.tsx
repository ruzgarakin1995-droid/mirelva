"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [lang, setLang] = useState<"TR" | "EN">("TR");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
      </div>

      {/* Navbar / Header */}
      <header className="absolute top-0 left-0 w-full z-30 px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-light tracking-widest text-white/90">L'AURORA</div>
        <div className="flex items-center space-x-6 text-sm font-medium tracking-wide">
          <button className="hover:text-[#D4AF37] transition-colors">MENÜ</button>
          <button className="hover:text-[#D4AF37] transition-colors">REZERVASYON</button>
          <div className="flex items-center space-x-2 border border-white/20 rounded-full px-3 py-1 bg-black/20 backdrop-blur-md">
            <button 
              onClick={() => setLang("TR")}
              className={`transition-colors ${lang === "TR" ? "text-[#D4AF37]" : "text-white/50 hover:text-white"}`}
            >
              TR
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setLang("EN")}
              className={`transition-colors ${lang === "EN" ? "text-[#D4AF37]" : "text-white/50 hover:text-white"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#D4AF37] tracking-[0.3em] text-sm md:text-base mb-6 uppercase"
        >
          Yüksek Gastronomi
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
        >
          Mükemmelliğin <br />
          <span className="italic font-serif text-[#D4AF37]">Tadı</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          Duyuları harekete geçiren, sanat ve lezzetin kusursuz uyumuyla tasarlanmış bir mutfak deneyimi.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="group relative px-8 py-4 bg-transparent overflow-hidden border border-[#D4AF37]/50 rounded-none hover:border-[#D4AF37] transition-all duration-500"
        >
          <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full z-0" />
          <span className="relative z-10 text-sm tracking-widest text-[#D4AF37] group-hover:text-black transition-colors duration-500">
            MASA AYIRTIN
          </span>
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 64], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
}
