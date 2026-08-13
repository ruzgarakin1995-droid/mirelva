import React from 'react';
export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="text-center md:text-left">
            <span className="font-serif text-3xl text-slate-200 block mb-2">LEX MAJESTAS</span>
            <span className="text-yellow-600/70 text-xs tracking-[0.3em] uppercase block mb-6">Hukuk & Danışmanlık</span>
            <p className="text-slate-500 text-sm max-w-xs font-light">Gücünü geleneğinden, vizyonunu gelecekten alan hukuk bürosu.</p>
          </div>
          <div className="flex gap-16 text-center md:text-left">
            <div>
              <span className="text-slate-200 text-sm font-serif mb-4 block">Merkez Ofis</span>
              <p className="text-slate-500 text-xs leading-loose font-light">Levent, Büyükdere Cad.<br/>No: 199, Şişli<br/>İstanbul, Türkiye</p>
            </div>
            <div>
              <span className="text-slate-200 text-sm font-serif mb-4 block">İletişim</span>
              <p className="text-slate-500 text-xs leading-loose font-light">T: +90 212 555 0000<br/>F: +90 212 555 0001<br/>info@lexmajestas.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-xs font-light">
            © 2026 Lex Majestas. Tüm hakları mahfuzdur.
          </div>
          <div className="text-slate-500 text-xs tracking-[0.1em] uppercase flex gap-6 font-light">
            <span className="cursor-pointer hover:text-yellow-500 transition-colors">Gizlilik Politikası</span>
            <span className="cursor-pointer hover:text-yellow-500 transition-colors">Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
