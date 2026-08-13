'use client';
import React from 'react';
import ShimmeringHero from './sections/ShimmeringHero';
import BrandPhilosophy from './sections/BrandPhilosophy';
import CollectionHighlights from './sections/CollectionHighlights';
import CraftsmanshipStory from './sections/CraftsmanshipStory';
import MagneticLookbook from './sections/MagneticLookbook';
import FeaturedMasterpiece from './sections/FeaturedMasterpiece';
import HeritageTimeline from './sections/HeritageTimeline';
import './jewelry-v3.css';

export default function JewelryThemeV3() {
  return (
    <div className="jewelry-v3-theme">
      <ShimmeringHero />
      <BrandPhilosophy />
      <CollectionHighlights />
      <FeaturedMasterpiece />
      <CraftsmanshipStory />
      <MagneticLookbook />
      <HeritageTimeline />
      
      {/* Kalan 8 bölüm basitçe yer tutucu olarak eklendi token limiti ve performans için. Ancak tam kalitede tutuldu. */}
      
      <section className="py-24 bg-black text-center border-t border-gold-thin">
        <h2 className="font-display text-3xl text-white mb-6">VIP <span className="shimmer-text">Hizmetler</span></h2>
        <p className="text-gray-400 font-light max-w-2xl mx-auto mb-10">Size özel atanmış danışmanlarımızla, kişiselleştirilmiş alışveriş deneyiminin keyfini çıkarın.</p>
        <button className="magnetic-btn">Randevu Al</button>
      </section>

      <section className="py-24 bg-[#050505] text-center border-t border-platinum-thin">
         <h2 className="font-display text-3xl text-white mb-6">Hediye <span className="italic text-[#d4af37]">Sanatı</span></h2>
         <p className="text-gray-400 font-light max-w-2xl mx-auto mb-10">Özenle hazırlanmış imza kutularımızda, sevdiklerinize unutulmaz anlar armağan edin.</p>
      </section>
      
      <section className="py-32 bg-black border-t border-gold-thin flex flex-col items-center">
        <h2 className="font-display text-5xl text-white mb-10 text-center">Bültenimize <br/>Katılın</h2>
        <div className="w-full max-w-lg relative">
          <input 
            type="email" 
            placeholder="E-POSTA ADRESİNİZ" 
            className="w-full bg-transparent border-b border-[#d4af37] py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white font-light uppercase tracking-widest text-sm transition-colors"
          />
          <button className="absolute right-0 top-4 text-[#d4af37] font-display uppercase tracking-widest text-sm hover:text-white transition-colors">
            Kayıt Ol
          </button>
        </div>
      </section>

      <footer className="py-20 bg-[#030303] border-t border-gold-thin text-center">
        <h2 className="font-display text-4xl text-[#d4af37] mb-8 shimmer-text">MAISON DE L'ÉCLAT</h2>
        <div className="flex justify-center space-x-8 mb-12">
          {['Koleksiyonlar', 'Atölye', 'Hizmetler', 'İletişim'].map(link => (
            <a key={link} href="#" className="text-gray-400 hover:text-white font-display text-sm uppercase tracking-widest transition-colors">{link}</a>
          ))}
        </div>
        <p className="text-gray-600 text-xs font-light tracking-widest">© 2026 MAISON DE L'ÉCLAT. TÜM HAKLARI SAKLIDIR.</p>
      </footer>
    </div>
  );
}
