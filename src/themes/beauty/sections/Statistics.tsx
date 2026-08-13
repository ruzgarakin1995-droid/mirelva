"use client";
import { motion } from 'framer-motion';

export default function Statistics() {
  const stats = [
    { num: "15+", label: "Yıllık Deneyim" },
    { num: "10k+", label: "Mutlu Danışan" },
    { num: "50+", label: "Ödüllü Uzman" },
    { num: "99%", label: "Memnuniyet" }
  ];

  return (
    <section className="py-24 border-y border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-start border-l-2 border-[var(--primary)] pl-6">
            <span className="text-4xl md:text-6xl font-medium tracking-tighter mb-2">{s.num}</span>
            <span className="text-[var(--muted)] text-sm uppercase tracking-widest font-medium">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


