"use client";
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <section className="py-32 relative bg-black text-white">
      {/* Subtle background pattern/image */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615966650071-855b11f653ce?q=80&w=2000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-8">Masanızı <span className="italic font-serif text-[#D4AF37]">Ayırtın</span></h2>
          <p className="text-white/60 mb-12 font-light">
            Özel bir deneyim için rezervasyon yapmanızı tavsiye ederiz. <br className="hidden md:block"/>
            Özel etkinlikler ve grup yemekleri için lütfen bizimle iletişime geçin.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <div className="relative">
            <input 
              type="text" 
              placeholder="Adınız Soyadınız" 
              className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="E-posta Adresiniz" 
              className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Kişi Sayısı" 
              className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="relative">
            <input 
              type="date" 
              className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white/80 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          
          <div className="md:col-span-2 mt-8">
            <button 
              type="button"
              className="w-full py-4 bg-[#D4AF37] text-black font-medium tracking-[0.2em] hover:bg-white transition-colors duration-300"
            >
              REZERVASYON YAP
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
