"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, CreditCard, ChevronRight, Zap } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { useCheckout } from '@/store/ecommerce/CheckoutContext';
import { Price } from '@/components/ecommerce/shared/Price';

export default function SupplementCheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { currentStep, setStep, checkoutData, updateData, placeOrder } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0 && currentStep !== 'SUCCESS') {
      router.push('/test-ecommerce-v4');
    }
  }, [items, currentStep, router]);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    const id = await placeOrder();
    setOrderId(id);
    clearCart();
    setIsProcessing(false);
  };

  const inputClass = "w-full bg-[#121214] border border-white/10 rounded-xl p-4 text-white focus:border-[#ccff00] focus:outline-none transition-colors placeholder:text-white/30";
  const labelClass = "block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2";

  if (currentStep === 'SUCCESS') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-[#09090b] text-white">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-24 h-24 bg-[#ccff00]/10 text-[#ccff00] rounded-full flex items-center justify-center mb-8 border border-[#ccff00]/30"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-center">
          Sipariş <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Onaylandı</span>
        </h1>
        <p className="text-white/50 text-center mb-8 max-w-md font-medium">
          Hedeflerinize bir adım daha yaklaştınız. Ürünleriniz en kısa sürede kargoya verilecektir.
        </p>
        <div className="bg-[#121214] border border-white/10 p-8 rounded-3xl w-full max-w-sm mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ccff00] to-transparent"></div>
          <p className="text-xs text-white/50 uppercase font-bold tracking-widest mb-2">Sipariş ID</p>
          <p className="text-3xl font-black text-white">{orderId || 'VTX-88301'}</p>
        </div>
        <Link href="/test-ecommerce-v4" className="bg-[#ccff00] text-black px-12 py-5 font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95">
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  const steps = [
    { id: 'INFORMATION', label: 'Teslimat' },
    { id: 'PAYMENT', label: 'Ödeme' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Forms */}
        <div className="lg:w-7/12">
           <Link href="/test-ecommerce-v4" className="flex items-center gap-2 mb-12 group">
             <div className="w-8 h-8 bg-[#ccff00] rounded flex items-center justify-center rotate-3 group-hover:-rotate-3 transition-transform">
               <Zap size={18} className="text-black" fill="currentColor" />
             </div>
             <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">
               Vertex
             </span>
           </Link>

           <nav className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-12">
              <span className="text-white/30">Sepet</span>
              <ChevronRight size={14} className="text-white/20" />
              {steps.map((s, i) => (
                <React.Fragment key={s.id}>
                  <span className={`${currentStep === s.id ? 'text-[#ccff00]' : steps.findIndex(x => x.id === currentStep) > i ? 'text-white/30 line-through' : 'text-white/30'}`}>
                    {s.label}
                  </span>
                  {i < steps.length - 1 && <ChevronRight size={14} className="text-white/20" />}
                </React.Fragment>
              ))}
           </nav>

           <AnimatePresence mode="wait">
             {currentStep === 'INFORMATION' && (
               <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="space-y-6">
                     <h2 className="text-2xl font-black uppercase tracking-tight border-b border-white/10 pb-4 mb-6">İletişim & Adres</h2>
                     
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className={labelClass}>Ad</label>
                         <input type="text" value={checkoutData.firstName} onChange={e => updateData({ firstName: e.target.value })} className={inputClass} placeholder="Ahmet" />
                       </div>
                       <div>
                         <label className={labelClass}>Soyad</label>
                         <input type="text" value={checkoutData.lastName} onChange={e => updateData({ lastName: e.target.value })} className={inputClass} placeholder="Yılmaz" />
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className={labelClass}>E-Posta</label>
                         <input type="email" value={checkoutData.email} onChange={e => updateData({ email: e.target.value })} className={inputClass} placeholder="ahmet@example.com" />
                       </div>
                       <div>
                         <label className={labelClass}>Telefon</label>
                         <input type="tel" value={checkoutData.phone} onChange={e => updateData({ phone: e.target.value })} className={inputClass} placeholder="+90 555 000 0000" />
                       </div>
                     </div>

                     <div>
                       <label className={labelClass}>Açık Adres</label>
                       <textarea rows={3} value={checkoutData.address} onChange={e => updateData({ address: e.target.value })} className={inputClass} placeholder="Mahalle, Sokak, No..."></textarea>
                     </div>

                     <div className="pt-8 flex justify-between items-center">
                        <button onClick={() => router.push('/test-ecommerce-v4/cart')} className="text-white/50 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">
                          Geri Dön
                        </button>
                        <button 
                          onClick={() => setStep('PAYMENT')}
                          disabled={!checkoutData.firstName || !checkoutData.address}
                          className="bg-[#ccff00] text-black px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm disabled:opacity-50 hover:bg-white transition-colors"
                        >
                          Ödemeye Geç
                        </button>
                     </div>
                  </div>
               </motion.div>
             )}

             {currentStep === 'PAYMENT' && (
               <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="space-y-6">
                     <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                       <h2 className="text-2xl font-black uppercase tracking-tight">Ödeme Bilgileri</h2>
                       <div className="flex items-center gap-2 text-[#ccff00] text-xs font-bold uppercase tracking-widest bg-[#ccff00]/10 px-3 py-1.5 rounded-full border border-[#ccff00]/20">
                         <ShieldCheck size={14} /> 256-Bit SSL
                       </div>
                     </div>

                     <div>
                        <label className={labelClass}>Kart Numarası</label>
                        <div className="relative">
                          <input type="text" placeholder="0000 0000 0000 0000" className={inputClass + " font-mono text-lg tracking-widest pl-12"} />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        </div>
                     </div>

                     <div>
                        <label className={labelClass}>Kart Üzerindeki İsim</label>
                        <input type="text" placeholder="AHMET YILMAZ" className={inputClass + " uppercase"} />
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Ay / Yıl</label>
                          <input type="text" placeholder="MM/YY" className={inputClass + " font-mono"} />
                        </div>
                        <div>
                          <label className={labelClass}>CVV</label>
                          <input type="text" placeholder="123" className={inputClass + " font-mono"} />
                        </div>
                     </div>

                     <div className="pt-8 flex justify-between items-center">
                        <button onClick={() => setStep('INFORMATION')} className="text-white/50 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">
                          Geri Dön
                        </button>
                        <button 
                          onClick={handlePlaceOrder}
                          disabled={isProcessing}
                          className="bg-[#ccff00] text-black px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm disabled:opacity-50 hover:bg-white transition-colors"
                        >
                          {isProcessing ? 'İşleniyor...' : 'Siparişi Tamamla'}
                        </button>
                     </div>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:w-5/12">
           <div className="bg-[#121214] border border-white/10 p-8 rounded-3xl sticky top-28">
              <h3 className="font-black text-2xl uppercase tracking-tighter mb-8">Sipariş Özeti</h3>
              
              <div className="space-y-6 mb-8 pb-8 border-b border-white/10 max-h-[40vh] overflow-y-auto custom-scrollbar pr-2">
                 {items.map(item => (
                   <div key={item.cartItemId} className="flex gap-4">
                      <div className="w-20 h-20 bg-[#09090b] rounded-xl flex items-center justify-center shrink-0 border border-white/5 p-2 relative">
                         <img src={item.product.thumbnail} alt={item.product.name} className="w-full h-full object-contain" />
                         <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black text-xs font-black flex items-center justify-center rounded-full">
                           {item.quantity}
                         </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                         <h4 className="font-bold text-white text-sm uppercase leading-tight line-clamp-2 mb-2">{item.product.name}</h4>
                         <Price amount={item.product.price * item.quantity} className="text-[#ccff00] font-bold" />
                      </div>
                   </div>
                 ))}
              </div>

              <div className="space-y-4 text-sm font-medium text-white/50 mb-8 uppercase tracking-widest text-xs">
                <div className="flex justify-between items-center">
                  <span>Ara Toplam</span>
                  <Price amount={subtotal} className="text-white" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Kargo</span>
                  <span className="text-[#ccff00] font-bold">Ücretsiz</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-3xl font-black pt-6 border-t border-white/10">
                <span className="uppercase tracking-tighter">Toplam</span>
                <Price amount={subtotal} className="text-[#ccff00]" />
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
