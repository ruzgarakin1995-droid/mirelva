"use client";
import React, { useState } from 'react';
import { CalendarDays, Clock, Users, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function ReservationPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    guestCount: '2',
    date: '',
    time: '19:30',
    specialRequests: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/restaurant/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 px-6 pb-24 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full border border-stone-100">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-stone-900 mb-2">Talebiniz Alındı!</h2>
          <p className="text-stone-500 mb-6">Rezervasyonunuz onaylandığında size SMS ile bilgi vereceğiz.</p>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mb-8 text-sm text-stone-600 text-left">
            <p><strong>İsim:</strong> {formData.customerName}</p>
            <p><strong>Tarih:</strong> {formData.date} - {formData.time}</p>
            <p><strong>Kişi Sayısı:</strong> {formData.guestCount} Kişi</p>
          </div>
          <Link href="/restaurant" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors inline-block w-full">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-32">
      <div className="bg-stone-900 text-white py-16 px-6 mb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Restaurant Interior" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Masa Ayırt</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">Unutulmaz bir gastronomi deneyimi için yerinizi şimdiden hazırlayalım.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-stone-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-6">İletişim & Konum</h3>
              <div className="space-y-6 text-sm text-stone-400">
                <div>
                  <h4 className="font-bold text-white mb-1">Adres</h4>
                  <p>Teşvikiye Mah. Vali Konağı Cad. No:11<br/>Nişantaşı, Şişli / İstanbul</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Telefon</h4>
                  <p>+90 (212) 555 01 23</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Çalışma Saatleri</h4>
                  <p>Pzt - Paz: 10:00 - 23:30<br/>Mutfak Kapanış: 23:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Rezervasyon Detayları</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Ad Soyad *</label>
                  <input required type="text" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Telefon *</label>
                  <input required type="tel" value={formData.customerPhone} onChange={e => setFormData({...formData, customerPhone: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-1"><Users className="w-4 h-4"/> Kişi Sayısı *</label>
                  <select required value={formData.guestCount} onChange={e => setFormData({...formData, guestCount: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} Kişi</option>)}
                    <option value="11+">10+ Kişi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-1"><CalendarDays className="w-4 h-4"/> Tarih *</label>
                  <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-1"><Clock className="w-4 h-4"/> Saat *</label>
                  <select required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors">
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Özel İstekleriniz (Opsiyonel)</label>
                <textarea value={formData.specialRequests} onChange={e => setFormData({...formData, specialRequests: e.target.value})} rows={3} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 shadow-[0_0_20px_rgba(249,115,22,0.3)] mt-8"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Rezervasyonu Tamamla"}
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
