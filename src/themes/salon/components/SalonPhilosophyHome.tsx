"use client";

import { motion } from 'framer-motion';

export function SalonPhilosophyHome() {
  return (
    <section className="py-32 bg-[#F0EBE6] text-[#4A403F] relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="text-[15vw] font-serif leading-none tracking-tighter whitespace-nowrap">PHILOSOPHY</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image with offset frame */}
        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#D4A3A3]/20 translate-x-4 translate-y-4"></div>
            <img 
              src="/salon/nail_gallery_hands_1786239195280.jpg" 
              alt="Lumina Philosophy" 
              className="relative w-full h-[500px] object-cover grayscale opacity-90"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Felsefemiz</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
          >
            Sağlıklı Tırnaklar, <br/>
            <span className="italic text-[#D4A3A3] font-light">Sınırsız Yaratıcılık.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans font-light text-base text-[#4A403F]/70 leading-relaxed mb-6"
          >
            Güzelliğin temelinin sağlık olduğuna inanıyoruz. Lumina Nail Art Studio'da sadece estetik açıdan kusursuz tasarımlar yaratmakla kalmıyor, aynı zamanda tırnak yapınızın doğal sağlığını koruyacak premium malzemeler ve vegan ürünler kullanıyoruz.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-sans font-light text-base text-[#4A403F]/70 leading-relaxed mb-10"
          >
            Siz kahvenizi yudumlarken, biz parmak uçlarınıza sanatı işliyoruz.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F] border border-[#4A403F]/20 px-8 py-4 hover:bg-[#D4A3A3] hover:border-[#D4A3A3] hover:text-[#FCFBF9] transition-all duration-500 rounded-full"
          >
            Hikayemizi Okuyun
          </motion.button>
        </div>

      </div>
    </section>
  );
}
