"use client";
import React, { useState, useEffect } from 'react';

export function TattooV4Preloader() {
  const [split, setSplit] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Yükleme sırasında scroll'u engelle
    document.body.style.overflow = 'hidden';
    
    // Animasyonu 1.2s sonra başlat (logo görüldükten sonra)
    const splitTimer = setTimeout(() => {
      setSplit(true);
      document.body.style.overflow = 'auto'; // Scroll'u geri aç
    }, 1200);

    // Animasyon tamamen bittiğinde DOM'dan kaldır (yaklaşık 1s sürüyor)
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      {/* Sol Panel */}
      <div 
        className={`w-1/2 h-full bg-[#1A1A1A] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          split ? '-translate-x-full' : 'translate-x-0'
        }`}
      />
      
      {/* Sağ Panel */}
      <div 
        className={`w-1/2 h-full bg-[#1A1A1A] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          split ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Merkez Logo */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
        split ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}>
        <span className="text-4xl md:text-6xl font-serif text-[#FAF9F6] tracking-wider animate-pulse">La Ligne</span>
        <span className="text-xs text-[#8C8A84] tracking-[0.4em] uppercase mt-4 hidden md:block">Fine Line Studio</span>
      </div>
    </div>
  );
}
