"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { PackageSearch, MoveRight, MapPin, CheckCircle2, Clock } from 'lucide-react';

export default function TrackingPage() {
  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Takip numarası kontrol ediliyor...');
  };

  return (
    <FadeIn>
    <div className="w-full bg-slate-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA.', href: '/test-ecommerce-v2' },
            { label: 'Sipariş Takibi' }
          ]} 
          className="mb-8"
        />

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2">
              
              <div className="p-12 md:p-16 flex flex-col justify-center">
                 <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <PackageSearch size={32} strokeWidth={1.5} />
                 </div>
                 <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900">Siparişinizi <span className="text-blue-600">Takip Edin</span></h1>
                 <p className="text-slate-500 font-light mb-10 leading-relaxed">
                    Sipariş onay e-postasında veya SMS ile size iletilen 12 haneli kargo takip numaranızı girerek kargonuzun nerede olduğunu anlık olarak öğrenebilirsiniz.
                 </p>
                 
                 <form onSubmit={handleTracking} className="space-y-4">
                    <div>
                       <label className="text-sm font-bold text-slate-900 mb-2 block">Kargo Takip Numarası</label>
                       <input 
                          type="text" 
                          required 
                          placeholder="Örn: 1A2B3C4D5E6F" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 font-medium tracking-widest focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all uppercase"
                       />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white h-14 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                       Sorgula <MoveRight size={18} />
                    </button>
                 </form>
              </div>
              
              <div className="bg-slate-900 p-12 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <PackageSearch size={200} />
                 </div>
                 <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-8">Örnek Kargo Süreci</h2>
                    
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-slate-800">
                       
                       <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-slate-900 bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800 p-4 rounded-xl shadow">
                             <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-blue-400">Teslim Edildi</h3>
                                <span className="text-xs text-slate-400">10:42</span>
                             </div>
                             <p className="text-sm text-slate-300">Sayın Müşterimize teslim edilmiştir.</p>
                          </div>
                       </div>
                       
                       <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-slate-900 bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/50 p-4 rounded-xl">
                             <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-slate-300">Dağıtıma Çıktı</h3>
                                <span className="text-xs text-slate-500">08:15</span>
                             </div>
                             <p className="text-sm text-slate-400">Kurye dağıtım şubesinden ayrıldı.</p>
                          </div>
                       </div>
                       
                       <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-slate-900 bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/50 p-4 rounded-xl">
                             <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-slate-300">Transfer Merkezinde</h3>
                                <span className="text-xs text-slate-500">Dün, 22:30</span>
                             </div>
                             <p className="text-sm text-slate-400">Gönderi aktarma merkezine ulaştı.</p>
                          </div>
                       </div>

                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
    </FadeIn>
  );
}
