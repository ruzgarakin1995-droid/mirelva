"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBasket } from 'lucide-react';

export default function GroceryAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
       setIsLoading(false);
       router.push('/test-ecommerce-v3');
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col items-center justify-center p-4">
       <Link href="/test-ecommerce-v3" className="flex items-center gap-2 text-3xl font-black text-emerald-600 tracking-tight mb-8">
          <ShoppingBasket size={32} />
          TAZE
       </Link>
       
       <div className="bg-white border border-slate-200 rounded-3xl p-8 w-full max-w-md shadow-sm">
          <h1 className="text-2xl font-black text-slate-800 mb-2 text-center">Giriş Yap</h1>
          <p className="text-sm text-slate-500 mb-8 text-center">Taze Market'in avantajlı dünyasına hoş geldiniz.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
             <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">E-Posta veya Telefon</label>
                <input 
                   type="text" 
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   required
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors"
                />
             </div>
             <div>
                <div className="flex items-center justify-between mb-2">
                   <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Şifre</label>
                   <Link href="#" className="text-xs font-bold text-emerald-600 hover:underline">Şifremi Unuttum</Link>
                </div>
                <input 
                   type="password" 
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors"
                />
             </div>
             
             <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl mt-4 hover:bg-emerald-700 transition-colors disabled:opacity-70 shadow-lg shadow-emerald-200"
             >
                {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
             </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
             <span className="text-slate-500 text-sm">Hesabınız yok mu? </span>
             <Link href="#" className="text-emerald-600 font-bold hover:underline">Hemen Kayıt Ol</Link>
          </div>
       </div>
    </div>
  );
}
