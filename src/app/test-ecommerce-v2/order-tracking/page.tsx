"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { PackageSearch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function OrderTrackingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Sipariş Takibi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageSearch size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Siparişinizi Takip Edin</h1>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto">Sipariş numaranız ve e-posta adresinizi girerek kargonuzun nerede olduğunu anında öğrenebilirsiniz.</p>

          {status === 'success' ? (
             <FadeIn className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl max-w-lg mx-auto">
               <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Siparişiniz Yolda!</h3>
               <p className="text-slate-600">Siparişiniz kargoya teslim edilmiştir. Tahmini teslimat süresi: <span className="font-bold">Yarın</span></p>
               <button onClick={() => setStatus('idle')} className="mt-6 text-emerald-700 font-semibold underline">Yeni bir sorgulama yap</button>
             </FadeIn>
          ) : (
             <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5 text-left">
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Sipariş Numarası</label>
                 <input type="text" required placeholder="Örn: TEK-123456789" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">E-posta Adresi</label>
                 <input type="email" required placeholder="ornek@mail.com" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
               </div>
               <button type="submit" disabled={status === 'loading'} className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 mt-2">
                 {status === 'loading' ? 'Sorgulanıyor...' : 'Siparişimi Bul'}
                 {status !== 'loading' && <ArrowRight size={20} />}
               </button>
             </form>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
