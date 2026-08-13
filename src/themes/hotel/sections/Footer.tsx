import React from 'react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-[#1A1C20] text-white/60 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-2xl font-serif text-white tracking-widest uppercase mb-6">{name}</div>
          <p className="font-light text-sm leading-relaxed mb-6">
            Zarafet, lüks ve kusursuz hizmetin bir araya geldiği adres.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[var(--accent)] transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors"><FacebookIcon /></a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors"><TwitterIcon /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Keşfet</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><a href="#rooms" className="hover:text-white transition-colors">Konaklama</a></li>
            <li><a href="#dining" className="hover:text-white transition-colors">Restoranlar</a></li>
            <li><a href="#spa" className="hover:text-white transition-colors">Wellness & Spa</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Toplantı & Etkinlik</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Kurumsal</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Basın Odası</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sürdürülebilirlik</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Bülten</h4>
          <p className="font-light text-sm mb-4">Özel tekliflerden haberdar olmak için bültenimize abone olun.</p>
          <div className="flex border-b border-white/30 pb-2 focus-within:border-white transition-colors">
            <input type="email" placeholder="E-Posta Adresiniz" className="bg-transparent border-none outline-none w-full text-white placeholder-white/30 text-sm" />
            <button className="text-white font-bold tracking-widest text-xs uppercase hover:text-[var(--accent)] transition-colors">Kaydol</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light">
        <p>&copy; {new Date().getFullYear()} {name}. Tüm Hakları Saklıdır.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
        </div>
      </div>
    </footer>
  );
}

