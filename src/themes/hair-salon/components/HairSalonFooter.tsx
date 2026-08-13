"use client";

import { motion } from 'framer-motion';

export function HairSalonFooter() {
  return (
    <footer className="bg-[#352F2A] text-[#FDFBF7] pt-24 pb-12 border-t border-[#FDFBF7]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest mb-2">ÉCLAT</h2>
            <p className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#C4A484] mb-8">Hair Studio</p>
            <p className="font-sans font-light text-sm text-[#FDFBF7]/60 leading-relaxed max-w-xs">
              Modern kadının doğal güzelliğini, sofistike ve yaratıcı saç tasarımlarıyla ortaya çıkarıyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] uppercase mb-8 border-b border-[#FDFBF7]/20 pb-4 inline-block">Menü</h3>
            <ul className="space-y-4">
              {[
                { name: 'Hakkımızda', href: '/test-hair-salon/hakkimizda' },
                { name: 'Hizmetler', href: '/test-hair-salon/hizmetler' },
                { name: 'Ekibimiz', href: '/test-hair-salon/ekibimiz' },
                { name: 'İletişim', href: '/test-hair-salon/iletisim' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="font-serif text-lg text-[#FDFBF7]/70 hover:text-[#C4A484] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#C4A484] transition-all duration-300 group-hover:w-4"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] uppercase mb-8 border-b border-[#FDFBF7]/20 pb-4 inline-block">İletişim</h3>
            <ul className="space-y-4 font-sans font-light text-sm text-[#FDFBF7]/60">
              <li>Valikonağı Cd. No: 45</li>
              <li>Nişantaşı, İstanbul</li>
              <li className="pt-4"><a href="tel:+905551234567" className="hover:text-[#C4A484] transition-colors">+90 (555) 123 45 67</a></li>
              <li><a href="mailto:hello@eclathair.com" className="hover:text-[#C4A484] transition-colors">hello@eclathair.com</a></li>
            </ul>
          </div>

          {/* Socials & Working Hours */}
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] uppercase mb-8 border-b border-[#FDFBF7]/20 pb-4 inline-block">Saatler</h3>
            <ul className="space-y-2 font-sans font-light text-sm text-[#FDFBF7]/60 mb-8">
              <li className="flex justify-between"><span>Hafta İçi</span><span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Cumartesi</span><span>09:00 - 21:00</span></li>
              <li className="flex justify-between text-[#FDFBF7]/30"><span>Pazar</span><span>Kapalı</span></li>
            </ul>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#FDFBF7]/20 flex items-center justify-center hover:bg-[#C4A484] hover:border-[#C4A484] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-[#FDFBF7]/20 flex items-center justify-center hover:bg-[#C4A484] hover:border-[#C4A484] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#FDFBF7]/40">
          <p>&copy; {new Date().getFullYear()} Eclat Hair Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
