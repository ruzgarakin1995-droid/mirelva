"use client";
import { motion } from 'framer-motion';

export default function Services({ accentColor }: { accentColor: string }) {
  const services = [
    { title: "Medikal Cilt Bakımı", desc: "Hücresel yenilenme saşlayan FDA onaylı anti-aging protokolleri." },
    { title: "Lazer Teknolojileri", desc: "Sıfır acı, maksimum etki prensibiyle çalışan yeni nesil sistemler." },
    { title: "Bölgesel İncelme", desc: "Ameliyatsız, konforlu ve kalıcı sonuçlar sunan lüks vücut şekillendirme." }
  ];

  return (
    <section id="services" className="py-32 md:py-48 px-6 md:px-12 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-medium leading-none tracking-tighter text-[var(--primary)]" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
            İmza<br/>Hizmetler.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[var(--muted)] max-w-sm text-lg md:text-xl font-light">Her misafirimiz için özel tasarlanan premium tedavi protokolleri.</motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer">
              <div className="overflow-hidden mb-8 rounded-sm">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" alt={s.title} className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--primary)] group-hover:opacity-70 transition-opacity">{s.title}</h3>
              <p className="text-[var(--muted)] text-lg font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


