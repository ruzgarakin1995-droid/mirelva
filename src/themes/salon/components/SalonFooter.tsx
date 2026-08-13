"use client";

import Link from 'next/link';

export function SalonFooter() {
  return (
    <footer className="bg-[#FCFBF9] text-[#4A403F] pt-32 pb-12 relative overflow-hidden">
      
      {/* Decorative floral/abstract blur background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0B6B6] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A3A3] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-20 border-b border-[#4A403F]/10">
          
          {/* Brand & Intro */}
          <div className="md:col-span-2 flex flex-col items-start pr-12">
            <h2 className="text-3xl font-serif mb-2">LUMINA</h2>
            <p className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#D4A3A3] mb-8">Nail Art Studio</p>
            <p className="font-sans font-light text-sm text-[#4A403F]/70 leading-relaxed max-w-sm mb-8">
              Tırnaklarınızı birer tuval gibi işleyerek, kişisel tarzınızı zarif ve yaratıcı dokunuşlarla parmak uçlarınıza taşıyoruz.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#4A403F]/50 hover:text-[#D4A3A3] transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-[#4A403F]/50 hover:text-[#D4A3A3] transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-[#4A403F]/50 hover:text-[#D4A3A3] transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 mb-2">İletişim</h3>
            <a href="tel:+905551234567" className="font-serif text-xl hover:text-[#D4A3A3] transition-colors">+90 (555) 123 45 67</a>
            <a href="mailto:hello@luminanailart.com" className="font-sans text-sm font-light hover:text-[#D4A3A3] transition-colors">hello@luminanailart.com</a>
            <p className="font-sans font-light text-sm text-[#4A403F]/70 mt-4 leading-relaxed">
              Nişantaşı, Teşvikiye Cd.<br/>No: 15, Şişli / İstanbul
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 mb-2">Hızlı Menü</h3>
            {['Hizmetlerimiz', 'Tasarım Kataloğu', 'Bakım Ürünleri', 'Kariyer', 'İletişim'].map(link => (
              <Link 
                key={link} 
                href="#" 
                className="font-sans text-sm font-light text-[#4A403F]/80 hover:text-[#D4A3A3] transition-colors w-fit"
              >
                {link}
              </Link>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-widest uppercase text-[#4A403F]/40">
          <p>© {new Date().getFullYear()} LUMINA NAIL ART STUDIO. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#4A403F] transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-[#4A403F] transition-colors">Çerez Politikası</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
