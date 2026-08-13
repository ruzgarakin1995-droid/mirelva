"use client";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 px-6 md:px-12">
      <ScrollReveal staggerChildren className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12 border-b border-stone-800 pb-16 mb-8">
        <ScrollRevealChild variant="fade-up" className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">{name}</h2>
          <p className="max-w-sm font-medium leading-relaxed">
            Türkiye'nin en seçkin gayrimenkul portföyü. Güven, hız ve gizlilik prensipleriyle lüks konut sektörüne yön veriyoruz.
          </p>
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up">
          <h4 className="text-white font-bold tracking-widest uppercase mb-6">Kurumsal</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Hizmetlerimiz</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Kariyer</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">İletişim</a></li>
          </ul>
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up">
          <h4 className="text-white font-bold tracking-widest uppercase mb-6">Portföy</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Yalılar</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Penthouse</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Rezidanslar</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Ticari Mülkler</a></li>
          </ul>
        </ScrollRevealChild>
      </ScrollReveal>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} {name} Real Estate. Tüm hakları saklıdır.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors">KVKK</a>
        </div>
      </div>
    </footer>
  );
}

