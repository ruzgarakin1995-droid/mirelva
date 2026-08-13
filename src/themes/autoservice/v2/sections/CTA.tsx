"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2940&auto=format&fit=crop" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight mb-8"
        >
          Kusursuzluğa İlk Adım
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-400 font-light mb-12"
        >
          Aracınızın gerçek potansiyelini ortaya çıkarmak için hemen randevu alın veya uzman ekibimizle görüşün.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="px-10 py-5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg shadow-xl shadow-blue-900/50">
            Hemen Randevu Al
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
            WhatsApp'tan Ulaşın
          </button>
        </motion.div>
      </div>
    </section>
  );
}
