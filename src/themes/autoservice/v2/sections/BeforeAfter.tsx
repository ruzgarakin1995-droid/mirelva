"use client";
import { motion } from 'framer-motion';

export function BeforeAfter() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-slate-900 tracking-tight mb-6">
              Farkı Kendi Gözlerinizle Görün
            </h2>
            <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">
              Oksitlenmiş, matlaşmış ve çiziklerle dolu bir yüzeyin, detaylı bir işçilikle nasıl cam gibi bir yansımaya dönüştüğüne şahit olun.
            </p>
            
            <ul className="space-y-6">
              {[
                "Kılcal Çiziklerin %95 Oranında Giderilmesi",
                "Derin ve Zengin Renk Yansıması",
                "Su ve Kir İtici Hidrofobik Etki"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Simüle edilmiş Before-After görseli */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-left relative grayscale brightness-75">
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-sm font-bold rounded-full">
                  ÖNCESİ
                </div>
              </div>
              <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-right relative">
                <div className="absolute top-6 right-6 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full">
                  SONRASI
                </div>
              </div>
            </div>
            {/* Ayırıcı Çizgi */}
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10 transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
