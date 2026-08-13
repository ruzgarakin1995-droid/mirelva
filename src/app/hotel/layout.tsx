import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Luxe Hotel | Premium Experience',
  description: 'Experience luxury at its finest.',
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f4ebd0] font-sans selection:bg-[#B59461] selection:text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#B59461]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/hotel" className="text-2xl font-serif tracking-widest text-[#B59461]">
            LUXE<span className="text-white">HOTEL</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <Link href="/hotel" className="hover:text-[#B59461] transition-colors">Ana Sayfa</Link>
            <Link href="/hotel/rooms" className="hover:text-[#B59461] transition-colors">Odalar</Link>
            <Link href="/hotel/reservations" className="hover:text-[#B59461] transition-colors">Rezervasyon</Link>
            <Link href="/hotel/contact" className="hover:text-[#B59461] transition-colors">İletişim</Link>
          </nav>
          <button className="md:hidden text-[#B59461]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#B59461]/20 pt-16 pb-8 text-center text-sm text-gray-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start text-left">
            <h3 className="text-[#B59461] font-serif text-xl mb-4 tracking-widest">LUXEHOTEL</h3>
            <p className="max-w-xs text-gray-400">En eşsiz anılarınızı biriktireceğiniz, lüks ve konforun buluştuğu nokta.</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-left">
            <h4 className="text-white uppercase tracking-widest mb-4">İletişim</h4>
            <p>123 Lüks Cad. No:1, İstanbul</p>
            <p>info@luxehotel.com</p>
            <p>+90 555 123 45 67</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-left">
            <h4 className="text-white uppercase tracking-widest mb-4">Bülten</h4>
            <p className="mb-4">Yeniliklerden haberdar olmak için abone olun.</p>
            <div className="flex w-full">
              <input type="email" placeholder="E-posta" className="bg-[#1a1a1a] text-white px-4 py-2 w-full focus:outline-none focus:border-[#B59461] border border-transparent transition-colors" />
              <button className="bg-[#B59461] text-black px-4 py-2 uppercase font-medium hover:bg-[#D4AF37] transition-colors">Abone Ol</button>
            </div>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Luxe Hotel. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
