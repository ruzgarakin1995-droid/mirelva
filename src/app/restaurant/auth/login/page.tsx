"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      // Redirect to profile or home
      router.push('/restaurant');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Background" />
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full relative z-10 border border-stone-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-orange-500/30">G</div>
          <h2 className="text-2xl font-black text-stone-900 uppercase tracking-tighter">Hoş Geldiniz</h2>
          <p className="text-stone-500 text-sm mt-2">Sipariş vermek ve rezervasyon yapmak için giriş yapın.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-2">E-Posta Adresi</label>
            <div className="relative">
              <input required type="email" placeholder="ornek@mail.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-orange-500 transition-colors" />
              <Mail className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Şifre</label>
            <div className="relative">
              <input required type="password" placeholder="••••••••" className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-orange-500 transition-colors" />
              <Lock className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
            </div>
            <div className="text-right mt-2">
              <Link href="#" className="text-xs font-bold text-orange-500 hover:underline">Şifremi Unuttum</Link>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-stone-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-xl disabled:opacity-70 flex justify-center items-center gap-2">
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-stone-200 flex-1"></div>
          <span className="text-xs text-stone-400 font-bold uppercase">Veya</span>
          <div className="h-px bg-stone-200 flex-1"></div>
        </div>

        <button className="w-full bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-3">
          <Apple className="w-5 h-5" /> Apple ile Devam Et
        </button>

        <div className="text-center mt-8 text-sm text-stone-500">
          Hesabınız yok mu? <Link href="#" className="font-bold text-orange-500 hover:underline">Ücretsiz Kayıt Olun</Link>
        </div>
      </div>
    </div>
  );
}
