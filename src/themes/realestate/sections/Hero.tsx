"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, Home } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function Hero({ name }: { name: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" 
          className="w-full h-full object-cover object-center" 
          alt="Luxury Villa" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center mt-20 text-center">
        <ScrollReveal variant="fade-up" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">{name} Özel Koleksiyon</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            <TextReveal text="Hayalinizdeki Evi Bulun." highlightedWords={["Evi", "Bulun."]} highlightClassName="text-[var(--accent)]" />
          </h1>
        </ScrollReveal>

        {/* Global Search Bar */}
        <ScrollReveal 
          variant="fade-up"
          delay={0.4}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-2xl md:rounded-full border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2"
        >
          <div className="flex-1 flex items-center gap-3 bg-white rounded-xl md:rounded-full px-6 py-4">
             <MapPin className="text-[var(--accent)]" size={24} />
             <input type="text" placeholder="Bölge, Şžehir veya İlçe arayın..." className="w-full bg-transparent outline-none text-stone-900 font-medium placeholder:text-stone-400" />
          </div>
          <div className="flex-1 flex items-center gap-3 bg-white rounded-xl md:rounded-full px-6 py-4">
             <Home className="text-[var(--accent)]" size={24} />
             <select className="w-full bg-transparent outline-none text-stone-900 font-medium cursor-pointer">
               <option>Konut Tipi</option>
               <option>Lüks Villa</option>
               <option>Penthouse</option>
               <option>Rezidans</option>
             </select>
          </div>
          <button className="bg-[var(--accent)] text-white px-8 py-4 rounded-xl md:rounded-full font-bold tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
            <Search size={20} /> ARA
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}


