"use client";
import { motion } from 'framer-motion';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export default function BrandStory() {
  return (
    <section id="story" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <ScrollReveal variant="slide-right" className="relative h-[600px] rounded-[2rem] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Real Estate Architecture" />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
          <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
            <p className="text-[var(--accent)] font-bold tracking-widest uppercase mb-2">20 Yıllık Tecrübe</p>
            <p className="text-xl md:text-2xl font-medium text-stone-900">Güven, şeffaflık ve lüksün mimarlarıyız.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-6">Mirasımız</h2>
          <h3 className="text-4xl md:text-6xl font-black text-stone-900 leading-[1.1] mb-8 tracking-tighter">
            <TextReveal text="Yaşam alanlarını sanata dönüştürüyoruz." highlightedWords={["sanata", "dönüştürüyoruz."]} highlightClassName="text-[var(--accent)]" />
          </h3>
          <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
            Sıradan evler satmıyoruz; her detayı özenle düşünülmüş, konfor ve prestiji bir arada sunan eşsiz yaşam alanlarının kapılarını aralıyoruz. Sektördeki 20 yıllık deneyimimizle beklentilerinizin ötesine geçiyoruz.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-5xl font-black text-[var(--primary)] flex items-center">
                <AnimatedCounter value={150} />+
              </p>
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mt-2">Satılan Mülk</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[var(--primary)] flex items-center">
                %<AnimatedCounter value={99} />
              </p>
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mt-2">Mutlu Müşteri</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


