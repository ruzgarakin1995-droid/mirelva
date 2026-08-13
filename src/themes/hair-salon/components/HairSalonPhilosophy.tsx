"use client";

import { motion } from 'framer-motion';

export function HairSalonPhilosophy() {
  return (
    <section className="py-32 bg-[#FDFBF7] px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        
        {/* Left Side: Images */}
        <div className="w-full md:w-1/2 relative h-[700px] flex items-center justify-center">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-10 w-[70%] h-[80%] z-10"
          >
            <img 
              src="/hair-salon/hair_salon_interior.jpg" 
              alt="Salon Interior" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </motion.div>
          
          {/* Accent Image (Overlapping) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 bottom-0 w-[55%] h-[60%] z-20"
          >
            <div className="absolute inset-0 bg-[#C4A484]/10 translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/hair-salon/hair_model_1.jpg" 
              alt="Hair Styling" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#352F2A]/50">Felsefemiz</span>
            <div className="w-12 h-[1px] bg-[#352F2A]/20"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-[#352F2A] leading-tight mb-10"
          >
            Saçınız, en değerli <br/>
            <span className="italic text-[#C4A484] font-light">imzanızdır.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6 font-sans font-light text-[#352F2A]/70 leading-relaxed text-lg max-w-lg"
          >
            <p>
              Sağlıklı saçın lüksün temeli olduğuna inanıyoruz. Eclat Studio'da her işlem, saçınızın doğal yapısını korumak ve güçlendirmek üzerine tasarlanır.
            </p>
            <p>
              Dünyaca ünlü markaların sadece sülfatsız ve vegan serilerini kullanarak, size sadece anlık bir güzellik değil, kalıcı bir saç sağlığı vadediyoruz. Bizim için kuaförlük bir zanaat, saçınız ise kusursuz bir tuval.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-[#352F2A]/10 grid grid-cols-2 gap-8"
          >
            <div>
              <span className="block text-4xl font-serif text-[#352F2A] mb-2">15+</span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#352F2A]/50">Yıllık Tecrübe</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-[#352F2A] mb-2">100%</span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#352F2A]/50">Vegan Ürünler</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
