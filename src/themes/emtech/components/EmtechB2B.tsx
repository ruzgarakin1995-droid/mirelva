"use client";
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '@/themes/tech-repair-v1/components/MagneticButton';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function EmtechB2B() {
  return (
    <section id="iletisim" className="py-24 bg-zinc-950 text-white relative z-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-zinc-950 border border-zinc-800 overflow-hidden"
          >
            <div className="absolute inset-0">
              <video 
                src="/emtech-assets/b2b_video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-zinc-950/40"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-[#0055FF] flex items-center justify-center animate-pulse shadow-[0_0_20px_#0055FF]">
                 <span className="font-mono font-bold text-xs">B2B</span>
              </div>
              <span className="font-space font-bold uppercase tracking-widest text-sm">Laboratuvar Test Onaylı</span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Kurumsal İş Ortaklığı ]</h2>
            <h3 className="text-4xl md:text-6xl font-space font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Teknik<br/>Servislere<br/>Özel Altyapı
            </h3>
            
            <p className="text-zinc-400 font-inter text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Sadece son kullanıcıya değil, Türkiye'nin dört bir yanındaki teknik servislere yüksek kaliteli yedek parça tedariki sağlıyoruz. B2B portalımıza katılarak laboratuvar çıkışlı ürünlerimizde özel indirimlerden faydalanın.
            </p>

            <ul className="space-y-4 mb-10">
              {['Toplu alımlarda %40\'a varan bayi indirimi', 'Sıfır hata toleranslı laboratuvar testleri', 'Sadece bayilere özel anlık stok ayırma sistemi'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#0055FF] flex-shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            <MagneticButton>
              <Link href="/emtech-store/kurumsal/bayimiz-ol">
                <button className="h-14 px-8 bg-white text-zinc-950 font-space text-xs font-bold uppercase tracking-widest hover:bg-[#0055FF] hover:text-white transition-colors rounded-sm flex items-center gap-3">
                  Bayi Başvurusu Yap <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </MagneticButton>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
