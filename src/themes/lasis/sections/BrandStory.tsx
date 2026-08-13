"use client";
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section id="story" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}>
          <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop" alt="Founder" className="w-full h-[60vh] md:h-[80vh] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-12">
          <h2 className="font-light leading-[1.1] tracking-tight text-[var(--primary)]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            Güzellik bir standart değil, kiğisel bir imzadır.
          </h2>
          <div className="space-y-6 text-[var(--muted)] text-lg md:text-xl font-light leading-relaxed max-w-lg">
            <p>15 yılı aşkın tecrübemizle, lüksü ve bilimi aynı potada eritiyoruz. Klinişimiz, sadece bir bakım merkezi değil, kendinize ayırdışınız en deşerli zaman dilimidir.</p>
            <p>En son teknoloji cihazlar ve dünya çapında kanıtlanmış protokollerle, doşal güzelliğinizi ortaya çıkarıyoruz.</p>
          </div>
          <button className="text-[var(--primary)] border-b border-[var(--primary)] pb-1 font-medium tracking-widest text-sm hover:opacity-50 transition-opacity">
            HİKAYEMİZİ OKUYUN
          </button>
        </motion.div>
      </div>
    </section>
  );
}


