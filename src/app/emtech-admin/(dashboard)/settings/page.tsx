"use client";
import { useState, useEffect } from 'react';
import { Save, Building, Mail, Phone, MapPin, AtSign, Clock, MessageCircle } from 'lucide-react';

export default function SettingsAdminPage() {
  const [formData, setFormData] = useState({
    storeName: '',
    phone: '',
    whatsapp: '',
    address: '',
    email: '',
    instagram: '',
    workingHours: ''
  });

  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(res => res.json())
      .then(data => {
        setFormData({
          storeName: data.storeName || '',
          phone: data.phone || '',
          whatsapp: data.whatsapp || '',
          address: data.address || '',
          email: data.email || '',
          instagram: data.instagram || '',
          workingHours: data.workingHours || ''
        });
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
      }
    } catch (error) {
      console.error("Failed to save settings", error);
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500 animate-pulse text-sm">Ayarlar yükleniyor...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Mağaza Ayarları</h2>
        <p className="text-slate-500 text-sm">İletişim bilgilerinizi ve genel mağaza detaylarını güncelleyin.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-indigo-400" /> Mağaza Adı
            </label>
            <input 
              type="text" 
              value={formData.storeName} onChange={e => setFormData({...formData, storeName: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" /> E-Posta
            </label>
            <input 
              type="email" 
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" /> Telefon
            </label>
            <input 
              type="text" 
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-500" /> WhatsApp Numarası
            </label>
            <input 
              type="text" 
              value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-400" /> Açık Adres
          </label>
          <textarea 
            rows={3}
            value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
            className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <AtSign className="w-4 h-4 text-pink-500" /> Instagram Kullanıcı Adı
            </label>
            <input 
              type="text" 
              value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" /> Çalışma Saatleri
            </label>
            <input 
              type="text" 
              value={formData.workingHours} onChange={e => setFormData({...formData, workingHours: e.target.value})}
              className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="pt-6 mt-2 border-t border-slate-200/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <span className={`text-sm font-medium text-emerald-600 transition-all duration-300 ${isSaved ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Ayarlar başarıyla kaydedildi!
            </span>
          </span>
          <button 
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-medium text-sm flex justify-center items-center gap-2 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0 active:shadow-none transition-all"
          >
            <Save className="w-5 h-5" /> Değişiklikleri Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
