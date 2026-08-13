const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/themes/doctor');
const sectionsDir = path.join(baseDir, 'sections');

// Ensure dirs exist
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });

const files = {
  'DoctorTheme.tsx': `"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import Expertise from './sections/Expertise';
import Story from './sections/Story';
import Services from './sections/Services';
import Video from './sections/Video';
import Statistics from './sections/Statistics';
import Features from './sections/Features';
import Technology from './sections/Technology';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import BeforeAfter from './sections/BeforeAfter';
import FAQ from './sections/FAQ';
import Insurance from './sections/Insurance';
import ContactMap from './sections/ContactMap';
import Footer from './sections/Footer';
import BookingModal from './sections/BookingModal';

export default function DoctorTheme({ clientData }: { clientData: any }) {
  const { name, themeConfig, features } = clientData || { name: 'Klinik', themeConfig: {}, features: {} };
  const { primaryColor = '#1A365D', accentColor = '#3182CE' } = themeConfig || {};

  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tokens = {
    '--primary': primaryColor,
    '--accent': accentColor,
    '--surface': '#FFFFFF',
    '--surface-alt': '#F7FAFC',
    '--muted': '#718096',
    '--border': '#E2E8F0',
  } as React.CSSProperties;

  return (
    <div className="bg-[var(--surface)] text-[var(--primary)] font-sans antialiased overflow-x-hidden selection:bg-[var(--accent)] selection:text-white" style={tokens}>
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={\`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 transition-all duration-500 \${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--border)] shadow-sm' : 'bg-transparent text-white'}\`}>
        <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
          <div className={\`w-8 h-8 rounded-full flex items-center justify-center \${scrolled ? 'bg-[var(--primary)] text-white' : 'bg-white text-[var(--primary)]'}\`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          {name}
        </div>
        
        <nav className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide">
          <a href="#uzmanliklar" className="hover:text-[var(--accent)] transition-colors">UZMANLIKLAR</a>
          <a href="#doktorlar" className="hover:text-[var(--accent)] transition-colors">DOKTORLAR</a>
          <a href="#iletisim" className="hover:text-[var(--accent)] transition-colors">İLETİŞİM</a>
        </nav>

        {features?.hasBooking !== false && (
          <button 
            onClick={() => setIsBookingOpen(true)}
            className={\`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg \${scrolled ? 'bg-[var(--accent)] text-white hover:opacity-90' : 'bg-white text-[var(--primary)] hover:bg-gray-100'}\`}>
            RANDEVU AL
          </button>
        )}
      </motion.header>

      <main>
        <Hero onBook={() => setIsBookingOpen(true)} />
        <Features />
        <Story />
        <Expertise />
        <Services />
        <Video />
        <Statistics />
        <Technology />
        <Team />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Insurance />
        <ContactMap />
      </main>

      <Footer name={name} />

      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal 
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
`,
  'sections/Hero.tsx': `import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Clinic Hero" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Yeni Hastalar Kabul Ediliyor
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sağlığınız İçin <br/><span className="text-blue-300">En İyisi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Alanında uzman kadromuz ve en son teknoloji tıbbi cihazlarımızla, size ve sevdiklerinize en üst düzeyde sağlık hizmeti sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBook}
              className="px-8 py-4 rounded-full bg-[var(--accent)] text-white font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(49,130,206,0.4)]">
              Hemen Randevu Al
            </button>
            <a href="#uzmanliklar" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/20">
              Uzmanlıklarımız
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`,
  'sections/Features.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Uzman Kadro',
    desc: 'Alanında deneyimli, uluslararası sertifikalı profesör ve uzman doktorlar.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )
  },
  {
    title: 'İleri Teknoloji',
    desc: 'Teşhis ve tedavide en güncel medikal ekipmanlar ve akıllı sistemler.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: '7/24 Acil Destek',
    desc: 'Beklenmedik durumlara karşı kesintisiz, hızlı ve etkili acil servis hizmeti.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white relative z-20 -mt-16 mx-6 md:mx-12 rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={\`\${i !== 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}\`}
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--surface-alt)] text-[var(--accent)] flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-[var(--muted)] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`,
  'sections/Story.tsx': `import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinic Interior" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] mb-2">25+</div>
            <div className="text-sm font-semibold text-[var(--muted)]">Yıllık Tıbbi Tecrübe</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Hakkımızda</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)] leading-tight">
            Sağlıkta Güvenin ve <br/> Kalitenin Adresi
          </h2>
          <p className="text-[var(--muted)] text-lg mb-6 leading-relaxed">
            1998 yılından bu yana, etik değerlerden ödün vermeden, hasta odaklı yaklaşımımızla on binlerce kişiye şifa dağıtmanın gururunu yaşıyoruz. Modern tıbbın sunduğu tüm imkanları, şefkatli bir bakım anlayışıyla birleştiriyoruz.
          </p>
          <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
            Amacımız, sadece hastalıkları tedavi etmek değil, bireylerin sağlıklı bir yaşam sürmeleri için koruyucu hekimlik uygulamalarını da yaygınlaştırmaktır.
          </p>
          
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover" alt="Başhekim" />
            <div>
              <div className="font-bold text-xl">Prof. Dr. Ahmet Yılmaz</div>
              <div className="text-[var(--accent)]">Başhekim / Kurucu</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`,
  'sections/Expertise.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  { name: 'Kardiyoloji', desc: 'Kalp sağlığınız için ileri tetkik ve tedavi yöntemleri.', icon: '❤️' },
  { name: 'Nöroloji', desc: 'Sinir sistemi hastalıklarında uzman teşhis.', icon: '🧠' },
  { name: 'Ortopedi', desc: 'Kas ve iskelet sistemi sorunlarında kesin çözümler.', icon: '🦴' },
  { name: 'Göz Hastalıkları', desc: 'Lazer cerrahisi ve detaylı göz taraması.', icon: '👁️' },
  { name: 'Pediatri', desc: 'Çocuklarınızın sağlığı uzman ellerde güvende.', icon: '👶' },
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
`,
  'sections/Services.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Check-Up Paketleri',
    price: '₺2.500\\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    features: ['Kapsamlı Kan Tahlili', 'EKG ve Efor Testi', 'Tüm Batın Ultrason', 'Uzman Hekim Değerlendirmesi']
  },
  {
    title: 'Estetik Cerrahi',
    price: 'Kişiye özel fiyatlandırma',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
    features: ['Burun Estetiği (Rinoplasti)', 'Meme Büyütme/Küçültme', 'Liposuction', 'Yüz Germe']
  },
  {
    title: 'Lazer Göz Tedavisi',
    price: '₺15.000\\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    features: ['No-Touch Laser', 'iLASIK', 'SMILE Lazer', 'Akıllı Lens Operasyonları']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Özel Hizmetler</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">Öne Çıkan Paketlerimiz</h2>
          </div>
          <button className="px-6 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all whitespace-nowrap">
            Tüm Paketleri İncele
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                  Popüler
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{svc.title}</h3>
                <div className="text-[var(--accent)] font-medium mb-6">{svc.price}</div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {svc.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-4 rounded-xl bg-[var(--surface-alt)] text-[var(--primary)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all">
                  Bilgi Al
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'sections/Video.tsx': `import React from 'react';
import { motion } from 'framer-motion';

export default function Video() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinic Video" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[var(--primary)] pl-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-left text-white">
            <div className="text-2xl font-bold mb-2">Klinik Turu</div>
            <div className="text-white/80">Sanal olarak kliniğimizi ziyaret edin</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`,
  'sections/Statistics.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50.000+', label: 'Mutlu Hasta', sub: 'Yıllık ortalama ziyaret' },
  { value: '120+', label: 'Uzman Doktor', sub: 'Alanında öncü hekimler' },
  { value: '45+', label: 'Klinik Bölüm', sub: 'Tam teşekküllü hizmet' },
  { value: '99%', label: 'Başarı Oranı', sub: 'Cerrahi operasyonlarda' },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={\`text-center \${i !== 0 ? 'pl-4 md:pl-0' : ''}\`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{s.value}</div>
              <div className="text-lg font-semibold text-[var(--accent)] mb-1">{s.label}</div>
              <div className="text-sm text-gray-400">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'sections/Technology.tsx': `import React from 'react';
import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">İleri Teknoloji</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)] leading-tight">
            Geleceğin Tıbbı <br/> Bugün Burada
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
            Hastalıkların erken teşhisi ve tedavisinde en güncel teknolojileri kullanıyoruz. 3 Tesla MR, Tomosentezli Dijital Mamografi ve Robotik Cerrahi sistemlerimizle, hata payını sıfıra indiriyor, iyileşme sürecini hızlandırıyoruz.
          </p>
          <ul className="space-y-4">
            {['Da Vinci Robotik Cerrahi Sistemi', '3 Tesla MR & 256 Kesit Tomografi', 'Akıllı Ameliyathaneler', 'Kişiselleştirilmiş Genetik Tarama'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[var(--primary)] font-semibold">
                <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full" alt="Tech 1" />
          <img src="https://images.unsplash.com/photo-1582719478250-c894099f72b2?q=80&w=800&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full mt-8" alt="Tech 2" />
        </motion.div>
      </div>
    </section>
  );
}
`,
  'sections/Team.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Prof. Dr. Ahmet Yılmaz', role: 'Kardiyoloji Uzmanı', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Doç. Dr. Ayşe Demir', role: 'Nöroloji Uzmanı', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
  { name: 'Op. Dr. Mehmet Can', role: 'Estetik Cerrahi', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Uzm. Dr. Zeynep Kaya', role: 'Çocuk Sağlığı', img: 'https://images.unsplash.com/photo-1594824432258-293e83957eb0?q=80&w=600&auto=format&fit=crop' },
];

export default function Team() {
  return (
    <section id="doktorlar" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Tıbbi Kadromuz</div>
          <h2 className="text-4xl font-bold mb-6 text-[var(--primary)]">Alanında Öncü Hekimler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl mb-6 relative aspect-[3/4]">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="w-full py-3 bg-white text-[var(--primary)] font-bold rounded-xl text-sm">Randevu Al</button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] text-center">{t.name}</h3>
              <div className="text-[var(--accent)] text-center font-medium">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'sections/Testimonials.tsx': `import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { text: "Yıllardır süren kalp ritim bozukluğum Prof. Ahmet Bey'in uyguladığı ablasyon tedavisiyle tamamen geçti. Klinikteki ilgi ve modern ekipmanlar gerçekten güven verici.", author: "Mustafa K.", type: "Kardiyoloji Hastası" },
  { text: "Kızımın tedavisi sürecinde pediatri ekibinin yaklaşımı harikaydı. Doktor fobisi olan çocuğum artık kontrole giderken gülümsüyor.", author: "Elif S.", type: "Hasta Yakını" },
  { text: "Estetik operasyon öncesi çok endişeliydim ama Mehmet Bey tüm süreci o kadar detaylı ve şeffaf anlattı ki içim çok rahat girdi. Sonuçtan son derece memnunum.", author: "Ceren T.", type: "Estetik Danışanı" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--primary)] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Hasta Yorumları</div>
          <h2 className="text-4xl font-bold">Bizim İçin Ne Dediler?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
            >
              <div className="text-[var(--accent)] mb-6">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{r.text}"</p>
              <div>
                <div className="font-bold text-white text-lg">{r.author}</div>
                <div className="text-sm text-gray-400">{r.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'sections/BeforeAfter.tsx': `import React from 'react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Gülüş Tasarımı Sonuçları</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">Modern diş hekimliği uygulamalarımızla hastalarımızın hayatını değiştiriyoruz.</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200">
           <div className="absolute inset-0 flex">
             <div className="w-1/2 bg-cover bg-center border-r-4 border-white relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop)' }}>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded backdrop-blur font-bold">Önce</div>
             </div>
             <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590625695509-64c8d50e64c3?q=80&w=800&auto=format&fit=crop)' }}>
                <div className="absolute bottom-4 right-4 bg-[var(--accent)] text-white px-3 py-1 rounded backdrop-blur font-bold">Sonra</div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
`,
  'sections/FAQ.tsx': `import React from 'react';

const faqs = [
  { q: "Muayene için randevu almak zorunlu mu?", a: "Evet, bekleme sürenizi en aza indirmek ve doktorlarımızın programını verimli yönetmek için randevu ile hasta kabul ediyoruz. Acil durumlar haricindedir." },
  { q: "SGK veya özel sağlık sigortası geçerli mi?", a: "Tüm özel sağlık sigortaları ve tamamlayıcı sağlık sigortaları ile anlaşmamız bulunmaktadır. SGK anlaşmamız belirli bölümlerde geçerlidir." },
  { q: "Tahlil sonuçlarımı online görebilir miyim?", a: "Evet, e-Nabız sistemi ve web sitemizdeki 'Online İşlemler' menüsünden T.C. kimlik numaranızla tüm sonuçlarınıza ulaşabilirsiniz." },
  { q: "Yurtdışından gelecek hastalar için hizmetiniz var mı?", a: "Uluslararası Hasta Departmanımız, transfer, konaklama, tercümanlık ve tedavi süreçlerinde tam destek sağlamaktadır." }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Sıkça Sorulan Sorular</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[var(--surface-alt)] rounded-2xl border border-[var(--border)] overflow-hidden">
              <summary className="font-bold text-lg p-6 cursor-pointer flex justify-between items-center text-[var(--primary)] group-open:bg-[var(--primary)] group-open:text-white transition-colors">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform text-[var(--accent)]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="p-6 text-[var(--muted)] bg-white leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  'sections/Insurance.tsx': `import React from 'react';

export default function Insurance() {
  return (
    <section className="py-16 bg-[var(--surface-alt)] border-y border-[var(--border)]">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-bold text-[var(--primary)] mb-8">Anlaşmalı Kurumlar ve Sigortalar</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black text-gray-500">Allianz</div>
          <div className="text-2xl font-black text-gray-500">Acıbadem Sigorta</div>
          <div className="text-2xl font-black text-gray-500">Mapfre</div>
          <div className="text-2xl font-black text-gray-500">Axa Sigorta</div>
          <div className="text-2xl font-black text-gray-500">SGK</div>
        </div>
      </div>
    </section>
  );
}
`,
  'sections/ContactMap.tsx': `import React from 'react';

export default function ContactMap() {
  return (
    <section id="iletisim" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">İletişim</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--primary)]">Bize Ulaşın</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-alt)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="font-bold text-[var(--primary)]">Telefon (7/24)</div>
                <div className="text-[var(--muted)] text-lg">444 0 000</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-alt)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="font-bold text-[var(--primary)]">Adres</div>
                <div className="text-[var(--muted)]">Sağlık Mah. Şifa Cad. No:12<br/>Şişli / İstanbul</div>
              </div>
            </div>
          </div>
          
          <button className="px-8 py-4 w-full md:w-auto rounded-full bg-[var(--primary)] text-white font-bold hover:bg-[var(--accent)] transition-colors">
            Yol Tarifi Al
          </button>
        </div>
        
        <div className="h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-[var(--border)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.963437340076!2d28.9868778!3d41.0588665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zU2nFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}
`,
  'sections/Footer.tsx': `import React from 'react';

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-[#0f2038] text-gray-400 py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
        <div>
          <div className="text-2xl font-bold text-white mb-6 tracking-tight">{name}</div>
          <p className="mb-6 leading-relaxed">Etik, bilimsel ve insana saygılı sağlık hizmeti anlayışıyla yıllardır yanınızdayız.</p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">In</div>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">Fb</div>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">Tw</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Hızlı Menü</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Kurumsal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Doktorlarımız</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tıbbi Birimler</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Online Randevu</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Hasta Rehberi</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Ziyaret Saatleri</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Anlaşmalı Kurumlar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">KVKK Metni</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hasta Hakları</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">E-Bülten</h4>
          <p className="mb-4 text-sm">Sağlık rehberi makaleleri ve yeniliklerden haberdar olun.</p>
          <div className="flex">
            <input type="email" placeholder="E-posta adresiniz" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-[var(--accent)]" />
            <button className="bg-[var(--accent)] text-white px-4 py-2 rounded-r-lg font-bold">Kayıt</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center">
        <div>&copy; {new Date().getFullYear()} {name}. Tüm Hakları Saklıdır.</div>
        <div className="mt-4 md:mt-0">Tasarım & Altyapı: Web Fabrikası</div>
      </div>
    </footer>
  );
}
`,
  'sections/BookingModal.tsx': `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingModal({ isOpen, onClose, primaryColor, accentColor }: any) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ dep: '', doc: '', date: '', name: '', phone: '' });

  const deps = ['Kardiyoloji', 'Göz Hastalıkları', 'Ortopedi', 'Nöroloji', 'Dahiliye'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="bg-[var(--primary)] text-white p-6 md:p-8 relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="text-[var(--accent)] font-bold text-sm uppercase mb-2">Online İşlemler</div>
          <h3 className="text-2xl md:text-3xl font-bold">Hızlı Randevu Al</h3>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h4 className="font-bold text-lg mb-4 text-[var(--primary)]">1. Bölüm Seçimi</h4>
              <div className="grid grid-cols-2 gap-3">
                {deps.map(d => (
                  <button 
                    key={d}
                    onClick={() => { setFormData({...formData, dep: d}); setStep(2); }}
                    className={\`p-4 text-left border rounded-xl hover:border-[var(--accent)] hover:bg-[var(--surface-alt)] transition-colors \${formData.dep === d ? 'border-[var(--accent)] bg-[var(--surface-alt)] ring-1 ring-[var(--accent)]' : 'border-[var(--border)]'}\`}
                  >
                    <div className="font-bold text-[var(--primary)] text-sm">{d}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <button onClick={() => setStep(1)} className="text-sm text-[var(--muted)] mb-4 flex items-center gap-1 hover:text-[var(--primary)]">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
                Bölüm Seçimine Dön ({formData.dep})
              </button>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Tarih</label>
                  <input type="date" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Ad Soyad</label>
                  <input type="text" placeholder="Örn: Ayşe Yılmaz" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Telefon</label>
                  <input type="tel" placeholder="05XX XXX XX XX" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              
              <button 
                onClick={() => setStep(3)}
                disabled={!formData.date || !formData.name || !formData.phone}
                className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Randevuyu Onayla
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-[var(--primary)] mb-2">Randevunuz Alındı!</h4>
              <p className="text-[var(--muted)] mb-8">
                Sayın {formData.name}, {formData.dep} bölümü için {formData.date} tarihli randevu talebiniz alınmıştır. Kesin saat onayı için çağrı merkezimiz sizi arayacaktır.
              </p>
              <button onClick={onClose} className="px-8 py-3 bg-[var(--surface-alt)] text-[var(--primary)] font-bold rounded-xl border border-[var(--border)] hover:bg-gray-100">
                Kapat
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
`
};

for (const [filename, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, filename);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created:', fullPath);
}
