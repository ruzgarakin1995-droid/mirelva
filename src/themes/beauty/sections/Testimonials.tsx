"use client";
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    { text: "Buraya adım attığınız an, dışarıdaki tüm stresi unutuyorsunuz. Cildimdeki değişime inanamıyorum.", author: "Elif B." },
    { text: "Teknoloji ve lüksün mükemmel birleşimi. Uzman kadronun ilgisi gerçekten eşsiz.", author: "Aslı T." },
    { text: "Kendime verdiğim en güzel hediye. Her seans adeta bir terapi gibi.", author: "Melis S." }
  ];
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-sm font-medium tracking-widest text-[var(--muted)] uppercase mb-16 text-center">Danışan Deneyimleri</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="bg-white p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative rounded-3xl">
              <span className="absolute top-8 left-8 text-6xl text-[var(--accent)] opacity-20 font-serif">"</span>
              <p className="text-xl font-light italic leading-relaxed text-stone-800 relative z-10 mb-8">{r.text}</p>
              <p className="font-bold tracking-wide text-sm uppercase">{r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


