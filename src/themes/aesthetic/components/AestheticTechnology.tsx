"use client";

import { motion } from 'framer-motion';

export function AestheticTechnology() {
  return (
    <section className="py-32 bg-[#FDFCF9] px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Images Side */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
          
          {/* Back Image (Interior) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 w-[70%] h-[75%] rounded-sm overflow-hidden"
          >
            <img 
              src="/aesthetic/aesthetic_clinic_interior.jpg" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Front Image (Treatment) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 bottom-0 w-[60%] h-[65%] rounded-sm overflow-hidden border-8 border-[#FDFCF9] shadow-2xl"
          >
            <img 
              src="/aesthetic/aesthetic_treatment.jpg" 
              alt="Aesthetic Treatment" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Güven & Teknoloji</span>
            <div className="w-12 h-[1px] bg-[#1C1C1C]/20"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight mb-8"
          >
            Sadece FDA Onaylı, <br/>
            <span className="italic text-[#C4A79A] font-light">Klinik Olarak Kanıtlanmış</span> Sistemler.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 font-sans font-light text-[#1C1C1C]/70 leading-relaxed text-sm md:text-base max-w-lg"
          >
            <p>
              Mirelva Beauty Clinic'te kullandığımız her cihaz ve ürün, uluslararası sağlık otoriteleri tarafından onaylanmış, güvenlik ve etkinlik testlerinden geçmiş markalardır.
            </p>
            <p>
              Cilt sağlığınızı asla riske atmıyor; steril, hijyenik ve modern mimariye sahip özel odalarımızda premium bir medikal deneyim sunuyoruz.
            </p>
          </motion.div>

          {/* Feature List */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-[#1C1C1C]/10"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1C1C1C]/5 flex items-center justify-center text-[#C4A79A] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-serif text-lg text-[#1C1C1C] mb-2">Maksimum Güvenlik</h4>
              <p className="font-sans font-light text-xs text-[#1C1C1C]/60">Tamamen steril medikal ortam</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-[#1C1C1C]/5 flex items-center justify-center text-[#C4A79A] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-serif text-lg text-[#1C1C1C] mb-2">Bilimsel Analiz</h4>
              <p className="font-sans font-light text-xs text-[#1C1C1C]/60">Detaylı dijital cilt taraması</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


