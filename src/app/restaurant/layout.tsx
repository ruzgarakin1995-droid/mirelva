"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, Search, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CartProvider, useCart } from '@/components/CartContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  
  const isDarkHero = pathname === '/restaurant' || pathname === '/restaurant/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/restaurant' },
    { name: 'Menü & Sipariş', href: '/restaurant/menu' },
    { name: 'Rezervasyon', href: '/restaurant/reservation' },
    { name: 'Hakkımızda', href: '/restaurant/about' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen || !isDarkHero ? 'bg-white shadow-md py-4 text-stone-900' : 'bg-transparent py-6 text-white'
        }`}
        style={{ top: isScrolled ? 0 : 'auto', position: isScrolled ? 'fixed' : 'absolute' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/restaurant" className="text-3xl font-serif tracking-[0.2em] font-light uppercase flex items-center">
              KÖHNE
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition-colors hover:text-orange-500 relative ${
                  pathname === link.href 
                    ? 'text-orange-500' 
                    : isScrolled || mobileMenuOpen || !isDarkHero ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div layoutId="underline" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              isScrolled || mobileMenuOpen || !isDarkHero ? 'bg-stone-100 hover:bg-stone-200' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}>
              <Search className="w-4 h-4" />
              <span>Arama</span>
            </button>
            <Link href="/restaurant/auth/login" className="hover:text-orange-500 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/restaurant/cart" className="relative hover:text-orange-500 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col text-stone-900"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-stone-100 pb-4 ${pathname === link.href ? 'text-orange-500' : 'text-stone-900'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link href="/restaurant/auth/login" className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl flex justify-center mb-4">Giriş Yap / Üye Ol</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-serif tracking-[0.2em] font-light text-white uppercase flex items-center mb-6">
              KÖHNE
            </div>
            <p className="text-sm leading-relaxed mb-6">Modern gastronomi dünyasına eşsiz bir dokunuş. En taze malzemeler, usta şefler ve unutulmaz bir deneyim.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Sayfalar</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/restaurant/menu" className="hover:text-white transition-colors">Menü</Link>
              <Link href="/restaurant/reservation" className="hover:text-white transition-colors">Rezervasyon</Link>
              <Link href="/restaurant/about" className="hover:text-white transition-colors">Hakkımızda</Link>
              <Link href="/restaurant/contact" className="hover:text-white transition-colors">İletişim</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Yasal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/restaurant/terms" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
              <Link href="/restaurant/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
              <Link href="/restaurant/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
              <Link href="/restaurant/cookies" className="hover:text-white transition-colors">Çerez Politikası</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Bülten</h4>
            <p className="text-sm mb-4">Yeni tatlar ve özel davetlerden haberdar olun.</p>
            <div className="flex">
              <input type="email" placeholder="E-Posta adresiniz" className="bg-stone-900 text-white px-4 py-3 rounded-l-lg outline-none w-full text-sm focus:ring-1 ring-orange-500" />
              <button className="bg-orange-500 text-white px-4 py-3 rounded-r-lg font-bold hover:bg-orange-600 transition-colors">→</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-sm text-center">
          © {new Date().getFullYear()} Köhne Restaurant. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutContent>{children}</LayoutContent>
    </CartProvider>
  );
}
