"use client";
import { motion } from 'framer-motion';
export default function BeforeAfter() {
  return (
    <section className="py-32 px-6 md:px-12 bg-stone-100">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center tracking-tight text-[var(--primary)]">Gerçek Sonuçlar.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1,2].map(i => (
             <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.2 }} className="relative h-[50vh] md:h-[70vh] bg-stone-300 rounded-sm overflow-hidden group shadow-xl">
               <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-60" alt="Before"/>
               <div className="absolute inset-0 w-1/2 overflow-hidden border-r-[3px] border-white">
                 <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-[200vw] md:w-[700px] max-w-none h-full object-cover object-center" alt="After"/>
               </div>
               <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 text-sm font-bold uppercase tracking-widest text-black">ncesi</div>
               <div className="absolute bottom-8 right-8 bg-[var(--primary)]/90 text-white backdrop-blur-md px-6 py-3 text-sm font-bold uppercase tracking-widest">Sonrası</div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


