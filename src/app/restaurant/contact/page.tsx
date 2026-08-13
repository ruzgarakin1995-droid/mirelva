import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-4">İletişim</h1>
          <p className="text-stone-500 text-lg">Size en iyi hizmeti sunmak için buradayız.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Bize Ulaşın</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">E-Posta</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="ornek@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Konu</label>
                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Mesajınızın konusu" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button type="button" className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors">
                Mesaj Gönder
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-stone-900 text-white p-10 rounded-3xl">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-8 text-orange-500">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Adres</div>
                    <div className="text-stone-400">Levent, Büyükdere Cd. No:1, 34330<br/>Beşiktaş / İstanbul</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Telefon</div>
                    <div className="text-stone-400">+90 (212) 555 01 23</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold mb-1">E-Posta</div>
                    <div className="text-stone-400">info@kohne.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Çalışma Saatleri</div>
                    <div className="text-stone-400">Her Gün: 12:00 - 00:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden bg-stone-200 relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-bold uppercase tracking-widest">
                Harita Görünümü (Google Maps Entegre Edilecek)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
