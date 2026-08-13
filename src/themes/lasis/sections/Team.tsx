"use client";
import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    { name: "Dr. Aylin Yılmaz", role: "Medikal Direktör" },
    { name: "Cemre Aksoy", role: "Baş Estetisyen" },
    { name: "Esra Çelik", role: "Lazer Uzmanı" },
  ];

  return (
    <section className="py-32 bg-[var(--primary)] text-[var(--surface)] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-medium mb-20 text-center tracking-tighter" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>Uzman Kadromuz.</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
              <div className="w-full h-[50vh] bg-stone-800 rounded-sm overflow-hidden mb-6 relative">
                 <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={t.name}/>
              </div>
              <h3 className="text-3xl font-medium">{t.name}</h3>
              <p className="text-stone-400 mt-2 font-light text-lg">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


