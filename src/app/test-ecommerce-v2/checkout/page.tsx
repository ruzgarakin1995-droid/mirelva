"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, ChevronRight, Monitor } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { useCheckout } from '@/store/ecommerce/CheckoutContext';
import { Price } from '@/components/ecommerce/shared/Price';

export default function TechCheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { currentStep, setStep, checkoutData, updateData, placeOrder } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0 && currentStep !== 'SUCCESS') {
      router.push('/test-ecommerce-v2/shop');
    }
  }, [items, currentStep, router]);

  const handleNextStep = (step: any) => {
    setStep(step);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    const id = await placeOrder();
    setOrderId(id);
    clearCart();
    setIsProcessing(false);
  };

  if (currentStep === 'SUCCESS') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-slate-50">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-center text-slate-900">Siparişiniz Başarıyla Alındı!</h1>
        <p className="text-slate-500 text-center mb-8 max-w-md">
          Bizi tercih ettiğiniz için teşekkür ederiz. Sipariş detaylarınız <strong>{checkoutData.email}</strong> adresine gönderilmiştir.
        </p>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl w-full max-w-sm mb-8 text-center shadow-sm">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Sipariş Takip Numarası</p>
          <p className="text-2xl font-black text-blue-600">{orderId || 'TECH-000000'}</p>
        </div>
        <Link href="/test-ecommerce-v2" className="bg-blue-600 text-white px-8 py-4 font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
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
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full flex flex-col lg:flex-row gap-8 bg-slate-50 min-h-screen">
      
      {/* Left Column - Forms */}
      <div className="lg:w-7/12">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <Link href="/test-ecommerce-v2" className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center gap-2 mb-10">
            <Monitor size={24} className="text-blue-500" /> TEKNOEMO
          </Link>
          
          {/* Breadcrumb Steps */}
          <nav className="flex items-center gap-2 text-sm mb-10 font-bold">
            <span className="text-slate-400">Sepet</span>
            <ChevronRight size={16} className="text-slate-300" />
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <span className={`${
                  currentStep === s.id ? 'text-blue-600' : 
                  steps.findIndex(x => x.id === currentStep) > i ? 'text-slate-400 line-through' : 'text-slate-300'
                }`}>
                  {s.label}
                </span>
                {i < steps.length - 1 && <ChevronRight size={16} className="text-slate-300" />}
              </React.Fragment>
            ))}
          </nav>

          <AnimatePresence mode="wait">
            {currentStep === 'INFORMATION' && (
              <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl font-bold mb-6 text-slate-900">İletişim ve Teslimat Bilgileri</h2>
                <div className="space-y-4 mb-8">
                  <input 
                    type="email" 
                    placeholder="E-posta adresi" 
                    value={checkoutData.email}
                    onChange={e => updateData({ email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Ad" 
                      value={checkoutData.firstName}
                      onChange={e => updateData({ firstName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                    />
                    <input 
                      type="text" 
                      placeholder="Soyad"
                      value={checkoutData.lastName}
                      onChange={e => updateData({ lastName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Açık Adres"
                    value={checkoutData.address}
                    onChange={e => updateData({ address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="İl/İlçe" 
                      value={checkoutData.city}
                      onChange={e => updateData({ city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                    />
                    <input 
                      type="text" 
                      placeholder="Telefon" 
                      value={checkoutData.phone}
                      onChange={e => updateData({ phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <Link href="/test-ecommerce-v2/cart" className="text-sm font-bold text-slate-500 hover:text-blue-600">&lt; Sepete Dön</Link>
                  <button 
                    onClick={() => handleNextStep('PAYMENT')}
                    disabled={!checkoutData.email || !checkoutData.firstName || !checkoutData.address}
                    className="bg-blue-600 text-white px-8 py-4 font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg shadow-blue-200"
                  >
                    Ödemeye Geç
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 'PAYMENT' && (
              <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Güvenli Ödeme</h2>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-600"><Lock size={14}/> 256-bit SSL</span>
                </div>
                
                <div className="border-2 border-blue-600 rounded-xl overflow-hidden mb-8 shadow-sm">
                  <div className="p-4 bg-blue-50 border-b border-blue-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-blue-900">
                      <CreditCard size={20} /> Kredi / Banka Kartı
                    </div>
                  </div>
                  <div className="p-6 bg-white space-y-4">
                    <input type="text" placeholder="Kart Numarası" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none" />
                    <input type="text" placeholder="Kart Üzerindeki İsim" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="SKT (AA/YY)" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none" />
                      <input type="text" placeholder="CVV" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                  <button onClick={() => setStep('INFORMATION')} className="text-sm font-bold text-slate-500 hover:text-blue-600">&lt; Teslimata Dön</button>
                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="bg-blue-600 text-white px-8 py-4 font-bold rounded-xl hover:bg-blue-700 disabled:opacity-70 flex items-center gap-2 shadow-lg shadow-blue-200"
                  >
                    {isProcessing ? 'İşleniyor...' : 'Siparişi Tamamla'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:w-5/12">
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl sticky top-28 shadow-sm">
          <h3 className="font-bold text-lg mb-6 flex items-center justify-between">
             <span>Sipariş Özeti</span>
             <span className="text-sm font-normal text-slate-500">{items.length} Ürün</span>
          </h3>
          
          <div className="space-y-4 mb-6 pb-6 border-b border-slate-100 max-h-[40vh] overflow-y-auto pr-2">
            {items.map(item => (
              <div key={item.cartItemId} className="flex gap-4">
                <div className="relative w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 p-2">
                  <img src={item.product.thumbnail} alt={item.product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight">{item.product.name}</h4>
                    {item.selectedVariants && (
                      <p className="text-[11px] font-medium text-slate-500 mt-1">
                        {Object.values(item.selectedVariants).map(v => v.name).join(' | ')}
                      </p>
                    )}
                  </div>
                  <Price amount={item.product.price * item.quantity} className="text-sm text-blue-700" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm font-medium text-slate-600 mb-6">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <Price amount={subtotal} />
            </div>
            <div className="flex justify-between">
              <span>Kargo</span>
              <span className="text-green-600">Ücretsiz</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xl font-black text-slate-900 pt-6 border-t border-slate-100">
            <span>Ödenecek Tutar</span>
            <Price amount={subtotal} className="text-blue-700" />
          </div>
          
          <div className="mt-6 bg-slate-50 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-500">
             <ShieldCheck size={16} className="text-blue-500 shrink-0 mt-0.5" />
             <p>TEKNOEMO güvencesiyle siparişiniz özenle hazırlanıp en kısa sürede kargoya teslim edilecektir.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
