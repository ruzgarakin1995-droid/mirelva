"use client";
import { motion } from 'framer-motion';
export default function Feed() {
  return (
    <section className="py-32 px-2 md:px-6">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-sm font-medium tracking-widest text-[var(--muted)] uppercase mb-4">Sosyal Medya</h2>
        <p className="text-4xl font-medium text-[var(--primary)]">Bizi 'da Takip Edin</p>
        <p className="mt-4 text-[var(--accent)] font-medium">@guzellikmerkezi</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 max-w-[1400px] mx-auto">
        {[1,2,3,4].map((i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="aspect-square bg-stone-200 overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt=""/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



