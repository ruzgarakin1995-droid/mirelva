"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import EventsQuoteModal from '../components/EventsQuoteModal';

const HeroSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
          alt="Luxury Event" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1A1614] backdrop-blur-[3px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <span className="text-[#E8DCC4] tracking-[0.2em] text-xs md:text-sm font-light uppercase mb-4 animate-fade-in-up">
          Özel Anların Mimarı
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hayallerinizin <br className="hidden md:block" />
          <span className="text-[#C19A6B] italic">Gerçeğe Dönüştüğü</span> Yer
        </h1>
        <p className="text-gray-200 text-sm md:text-lg max-w-2xl font-light mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          En özel günlerinizi sizin kadar önemsiyor, her detayıyla sevgiyle ilgileniyoruz. Düğün, nişan veya kurumsal davetlerinizde tüm stresi bize bırakın; siz sadece bu eşsiz anın tadını çıkarın.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-[#C19A6B] text-white px-8 py-4 rounded-none hover:bg-[#A98458] transition-colors duration-300 flex items-center justify-center group tracking-widest text-sm uppercase"
          >
            Etkinlik Planla
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link 
            href="/test-events/hizmetler"
            className="border border-white/30 text-white px-8 py-4 rounded-none hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm tracking-widest text-sm uppercase text-center flex items-center justify-center"
          >
            Hizmetlerimizi Keşfet
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      <EventsQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
};




export default HeroSection;
