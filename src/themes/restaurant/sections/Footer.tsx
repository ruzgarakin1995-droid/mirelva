"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-5 max-w-7xl">
        <ScrollReveal staggerChildren className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-800 pb-16">
          <ScrollRevealChild variant="fade-up" className="mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-serif text-gold uppercase tracking-widest mb-4">Aura</h2>
            <p className="text-gray-500 font-sans text-sm max-w-xs">Yemek deneyimini eşsiz bir sanat formuna dönüştürüyoruz.</p>
          </ScrollRevealChild>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16 text-center sm:text-left">
            <ScrollRevealChild variant="fade-up">
              <h4 className="text-white font-serif mb-4 text-lg">Bağlantılar</h4>
              <ul className="space-y-2 font-sans text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Hikayemiz</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Menüler</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Özel Deneyim</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Kariyer</a></li>
              </ul>
            </ScrollRevealChild>
            
            <ScrollRevealChild variant="fade-up">
              <h4 className="text-white font-serif mb-4 text-lg">Yasal</h4>
              <ul className="space-y-2 font-sans text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Hizmet Şartları</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Erişilebilirlik</a></li>
              </ul>
            </ScrollRevealChild>
          </div>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Aura Dining. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors"></a>
            <a href="#" className="hover:text-gold transition-colors"></a>
            <a href="#" className="hover:text-gold transition-colors"></a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;


