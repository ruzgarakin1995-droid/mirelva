import React from 'react';
import Link from 'next/link';
import { ShoppingBasket, MapPin, Phone, Mail } from 'lucide-react';

export function GroceryFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 pr-8">
            <Link href="/test-ecommerce-v3" className="flex items-center gap-2 text-2xl font-black text-emerald-600 tracking-tight mb-4">
              <ShoppingBasket size={28} />
              TAZE MARKET
            </Link>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              En taze meyve sebzeler, güvenilir et ürünleri ve temel gıda ihtiyaçlarınız kapınıza gelsin. Hızlı, güvenilir ve uygun fiyatlı alışverişin adresi.
            </p>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <p className="flex items-center gap-2"><MapPin size={18} className="text-emerald-500"/> Merkez: Kadıköy, İstanbul</p>
              <p className="flex items-center gap-2"><Phone size={18} className="text-emerald-500"/> 0850 123 45 67</p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-emerald-500"/> destek@tazemarket.com</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-emerald-100 hover:text-emerald-600 transition-colors text-xs font-bold">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-emerald-100 hover:text-emerald-600 transition-colors text-xs font-bold">TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-emerald-100 hover:text-emerald-600 transition-colors text-xs font-bold">FB</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Kategoriler</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/test-ecommerce-v3/shop?category=meyve-sebze" className="hover:text-emerald-600 transition-colors">Meyve & Sebze</Link></li>
              <li><Link href="/test-ecommerce-v3/shop?category=et-tavuk" className="hover:text-emerald-600 transition-colors">Et, Tavuk & Balık</Link></li>
              <li><Link href="/test-ecommerce-v3/shop?category=sut-kahvalti" className="hover:text-emerald-600 transition-colors">Süt & Kahvaltılık</Link></li>
              <li><Link href="/test-ecommerce-v3/shop?category=temel-gida" className="hover:text-emerald-600 transition-colors">Temel Gıda</Link></li>
              <li><Link href="/test-ecommerce-v3/shop?category=atistirmalik" className="hover:text-emerald-600 transition-colors">Atıştırmalık</Link></li>
              <li><Link href="/test-ecommerce-v3/shop?category=icecek" className="hover:text-emerald-600 transition-colors">İçecekler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Müşteri Hizmetleri</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Sipariş Takibi</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">İptal ve İade</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Teslimat Bölgeleri</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Mobil Uygulamalar</h3>
            <p className="text-sm text-slate-500 mb-4">Uygulamamızı indirin, fırsatları kaçırmayın!</p>
            <div className="space-y-3">
               <button className="w-full bg-slate-900 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                 <span className="font-semibold text-sm">App Store'dan İndir</span>
               </button>
               <button className="w-full bg-slate-900 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                 <span className="font-semibold text-sm">Google Play'den İndir</span>
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">© 2026 Taze Market Demo. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-slate-900">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-slate-900">Kullanım Koşulları</Link>
            <Link href="#" className="hover:text-slate-900">Aydınlatma Metni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
