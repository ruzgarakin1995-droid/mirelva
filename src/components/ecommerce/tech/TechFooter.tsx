import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Headphones, RotateCcw, Monitor } from 'lucide-react';

export function TechFooter() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t-[4px] border-blue-600">
      
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-b border-slate-200 pb-12 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={40} className="text-blue-500 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2">Güvenli Alışveriş</h4>
            <p className="text-sm text-slate-500">256-bit SSL şifreleme ile ödemeleriniz güvende.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck size={40} className="text-blue-500 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2">Hızlı Teslimat</h4>
            <p className="text-sm text-slate-500">Aynı gün kargo ve ertesi gün teslimat seçeneği.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RotateCcw size={40} className="text-blue-500 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2">Kolay İade</h4>
            <p className="text-sm text-slate-500">14 gün içinde koşulsuz şartsız iade hakkı.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Headphones size={40} className="text-blue-500 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2">7/24 Destek</h4>
            <p className="text-sm text-slate-500">Uzman teknoloji ekibimiz her an yanınızda.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          <Link href="/test-ecommerce-v2" className="text-3xl mb-6 flex items-center gap-2">
            <Monitor size={28} className="text-blue-500" />
            <span className="font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-blue-600">TEKNOEMO</span>
          </Link>
          <p className="text-sm text-slate-500 mb-6">
            En yeni teknolojiler, en iyi fiyat garantisi ve benzersiz müşteri deneyimi ile Türkiye'nin lider teknoloji marketi.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-slate-900 mb-4">Kategoriler</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/test-ecommerce-v2/shop?category=bilgisayar" className="hover:text-blue-400">Bilgisayar & Tablet</Link></li>
            <li><Link href="/test-ecommerce-v2/shop?category=telefon" className="hover:text-blue-400">Akıllı Telefonlar</Link></li>
            <li><Link href="/test-ecommerce-v2/shop?category=ses" className="hover:text-blue-400">Ses & Görüntü</Link></li>
            <li><Link href="/test-ecommerce-v2/shop?category=oyun" className="hover:text-blue-400">Oyun & Konsol</Link></li>
            <li><Link href="/test-ecommerce-v2/shop?category=akilli-ev" className="hover:text-blue-400">Akıllı Ev Sistemleri</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-slate-900 mb-4">Müşteri Hizmetleri</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/test-ecommerce-v2/order-tracking" className="hover:text-blue-600">Sipariş Takibi</Link></li>
            <li><Link href="/test-ecommerce-v2/returns" className="hover:text-blue-600">İptal ve İade Koşulları</Link></li>
            <li><Link href="/test-ecommerce-v2/warranty" className="hover:text-blue-600">Garanti Şartları</Link></li>
            <li><Link href="/test-ecommerce-v2/faq" className="hover:text-blue-600">Sıkça Sorulan Sorular</Link></li>
            <li><Link href="/test-ecommerce-v2/contact" className="hover:text-blue-600">İletişim</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-slate-900 mb-4">Bizi Takip Edin</h3>
          <p className="text-sm text-slate-500 mb-4">İndirimlerden ve yeni ürünlerden ilk siz haberdar olun.</p>
          <div className="flex bg-white p-1 rounded-lg">
            <input type="email" placeholder="E-posta adresi" className="bg-transparent text-slate-900 px-3 py-2 text-sm focus:outline-none w-full" />
            <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 text-sm font-semibold rounded-md transition-colors">Abone Ol</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 TEKNOEMO. Tüm hakları saklıdır.</p>
        <div className="flex gap-4">
          <Link href="/test-ecommerce-v2/privacy" className="hover:text-slate-600">Gizlilik Sözleşmesi</Link>
          <Link href="/test-ecommerce-v2/terms" className="hover:text-slate-600">Mesafeli Satış Sözleşmesi</Link>
          <Link href="/test-ecommerce-v2/kvkk" className="hover:text-slate-600">KVKK Aydınlatma Metni</Link>
        </div>
      </div>
    </footer>
  );
}
