"use client";
import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  { name: 'Kardiyoloji', desc: 'Kalp sağlığınız için ileri tetkik ve tedavi yöntemleri.', icon: 'â¤ï¸' },
  { name: 'Nöroloji', desc: 'Sinir sistemi hastalıklarında uzman teşhis.', icon: 'ğŸ§ ' },
  { name: 'Ortopedi', desc: 'Kas ve iskelet sistemi sorunlarında kesin çözümler.', icon: 'ğŸ¦´' },
  { name: 'Göz Hastalıkları', desc: 'Lazer cerrahisi ve detaylı göz taraması.', icon: 'ğŸ‘ï¸' },
  { name: 'Pediatri', desc: 'Çocuklarınızın sağlığı uzman ellerde güvende.', icon: 'ğŸ‘¶' },
  { name: 'Dermatoloji', desc: 'Cilt sağlığınız ve medikal estetik çözümler.', icon: '✨' },
];

export default function Expertise() {
  return (
    <section id="uzmanliklar" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Tıbbi Birimler</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)]">Uzmanlık Alanlarımız</h2>
          <p className="text-[var(--muted)] text-lg">
            Farklı disiplinlerden gelen uzman hekimlerimiz, en karmaşık vakalarda bile multidisipliner bir yaklaşımla en doğru tedaviyi sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dep, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--surface-alt)] border border-[var(--border)] hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {dep.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{dep.name}</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">{dep.desc}</p>
              <div className="text-[var(--accent)] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Detaylı Bilgi
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


