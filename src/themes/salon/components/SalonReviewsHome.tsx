"use client";

import { motion } from 'framer-motion';

export function SalonReviewsHome() {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex items-center justify-center text-center">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF9] via-white to-[#F0EBE6]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 text-[#D4A3A3]"
        >
          {/* Elegant Quote SVG */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto opacity-30">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl font-serif text-[#4A403F] leading-snug mb-12"
        >
          "Hayatımda yaptırdığım en kusursuz ve kalıcı jel tırnak uygulamasıydı. Stüdyonun atmosferi öylesine huzur verici ki, zamanın nasıl geçtiğini anlamıyorsunuz. Artık tek adresim."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="font-sans font-medium text-sm tracking-widest uppercase text-[#4A403F] mb-1">
            Melisa Y.
          </span>
          <div className="flex text-[#D4A3A3] text-sm gap-1">
            ★★★★★
          </div>
        </motion.div>

      </div>
    </section>
  );
}
