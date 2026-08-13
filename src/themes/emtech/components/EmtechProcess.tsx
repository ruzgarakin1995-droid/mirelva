"use client";
import { motion } from 'framer-motion';
import { PackageSearch, TestTube2, Truck } from 'lucide-react';

const steps = [
  {
    title: "Tedarik & Seçim",
    desc: "Orijinal ve OEM bileşenler küresel tedarik ağımızdan endüstri standartlarına uygun olarak seçilir.",
    icon: PackageSearch
  },
  {
    title: "Laboratuvar Testi",
    desc: "Ekran parlaklığı, dokunmatik hassasiyeti ve batarya döngüleri özel donanımlarla test edilir.",
    icon: TestTube2
  },
  {
    title: "Aynı Gün Kargo",
    desc: "Testten geçen ürünler anti-statik poşetlerle paketlenerek saat 16:00'a kadar kargolanır.",
    icon: Truck
  }
];

export function EmtechProcess() {
  return (
    <section className="py-24 bg-white relative z-10 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        
        <div className="text-center mb-16">
          <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Sıfır Hata Toleransı ]</h2>
          <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">
            Kalite Kontrol Süreci
          </h3>
        </div>

        <div className="relative mt-20">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[2px] bg-zinc-100 z-0">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-[#0055FF]/20 origin-left"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.3 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white border-2 border-zinc-200 rounded-2xl flex items-center justify-center mb-8 relative group-hover:border-[#0055FF] group-hover:bg-[#0055FF]/5 transition-colors duration-500 shadow-sm group-hover:shadow-[0_0_30px_rgba(0,85,255,0.15)]">
                    <Icon className="w-10 h-10 text-zinc-900 group-hover:text-[#0055FF] transition-colors" />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-zinc-950 text-white font-mono font-bold flex items-center justify-center rounded-full border-4 border-white shadow-sm">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h4 className="font-space font-bold text-xl uppercase tracking-widest text-zinc-900 mb-4">
                    {step.title}
                  </h4>
                  <p className="font-inter text-sm text-zinc-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
