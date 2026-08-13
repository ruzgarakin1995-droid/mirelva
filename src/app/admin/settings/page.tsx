import React from 'react';
import { Settings2, Store, CreditCard, Bell, Shield, PaintBucket } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Ayarlar</h1>
          <p className="mt-1 text-sm text-white/40">İşletmenizin yapılandırmalarını ve sistem tercihlerini yönetin.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Navigation / Tabs */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/5 transition-colors">
            <span className="flex items-center gap-3">
              <Store className="w-5 h-5 text-white/60" />
              Genel Ayarlar
            </span>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <span className="flex items-center gap-3">
              <PaintBucket className="w-5 h-5" />
              Marka ve Görünüm
            </span>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <span className="flex items-center gap-3">
              <CreditCard className="w-5 h-5" />
              Ödeme & Fatura
            </span>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <span className="flex items-center gap-3">
              <Bell className="w-5 h-5" />
              Bildirimler
            </span>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <span className="flex items-center gap-3">
              <Shield className="w-5 h-5" />
              Güvenlik & İzinler
            </span>
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <div>
              <h3 className="text-lg font-medium text-white mb-6">İşletme Bilgileri</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">İşletme Adı</label>
                  <input type="text" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all" defaultValue="Luxury Güzellik Merkezi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">İletişim E-posta</label>
                  <input type="email" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all" defaultValue="contact@luxury.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Telefon Numarası</label>
                  <input type="tel" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all" defaultValue="+90 555 123 4567" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <h3 className="text-lg font-medium text-white mb-6">Çalışma Saatleri</h3>
              
              <div className="space-y-4">
                {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day) => (
                  <div key={day} className="flex items-center justify-between p-3 rounded-lg bg-[#1A1A1A] border border-white/5">
                    <span className="text-sm font-medium text-white/80 w-24">{day}</span>
                    <div className="flex items-center gap-2">
                      <input type="time" defaultValue="09:00" className="bg-[#111] border border-white/10 rounded-md px-2 py-1 text-sm text-white/80 outline-none" />
                      <span className="text-white/40">-</span>
                      <input type="time" defaultValue="18:00" className="bg-[#111] border border-white/10 rounded-md px-2 py-1 text-sm text-white/80 outline-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex justify-end">
              <button className="bg-white text-black px-6 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-colors shadow-lg">
                Değişiklikleri Kaydet
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
