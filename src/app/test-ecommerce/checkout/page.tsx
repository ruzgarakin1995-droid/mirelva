"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Lock, CreditCard } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { useCheckout } from '@/store/ecommerce/CheckoutContext';
import { Price } from '@/components/ecommerce/shared/Price';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { currentStep, setStep, checkoutData, updateData, placeOrder } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  // If cart is empty and not on success step, go back
  useEffect(() => {
    if (items.length === 0 && currentStep !== 'SUCCESS') {
      router.push('/test-ecommerce/shop');
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Siparişiniz Alındı!</h1>
        <p className="text-zinc-500 text-center mb-8 max-w-md">
          Teşekkür ederiz. Siparişiniz başarıyla oluşturuldu. Sipariş onayınız <strong>{checkoutData.email || 'email adresinize'}</strong> gönderilecektir.
        </p>
        <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl w-full max-w-sm mb-8 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Sipariş Numarası</p>
          <p className="text-lg font-bold">{orderId || 'YZLK-000000'}</p>
        </div>
        <Link href="/test-ecommerce" className="bg-zinc-900 text-white px-8 py-4 font-medium hover:bg-zinc-800 transition-colors">
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  const steps = [
    { id: 'INFORMATION', label: 'Bilgi' },
    { id: 'SHIPPING', label: 'Kargo' },
    { id: 'PAYMENT', label: 'Ödeme' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 w-full flex flex-col lg:flex-row gap-12">
      
      {/* Left Column - Forms */}
      <div className="lg:w-3/5">
        <Link href="/test-ecommerce" className="text-2xl font-bold tracking-tighter block mb-8">LOCİZSA</Link>
        
        {/* Breadcrumb Steps */}
        <nav className="flex items-center gap-2 text-sm mb-10">
          <span className="text-zinc-500">Sepet</span>
          <ChevronRight size={14} className="text-zinc-300" />
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <span className={`font-medium ${
                currentStep === s.id ? 'text-zinc-900' : 
                steps.findIndex(x => x.id === currentStep) > i ? 'text-zinc-500 line-through' : 'text-zinc-300'
              }`}>
                {s.label}
              </span>
              {i < steps.length - 1 && <ChevronRight size={14} className="text-zinc-300" />}
            </React.Fragment>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {currentStep === 'INFORMATION' && (
            <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl font-semibold mb-6">İletişim Bilgileri</h2>
              <input 
                type="email" 
                placeholder="E-posta adresi" 
                value={checkoutData.email}
                onChange={e => updateData({ email: e.target.value })}
                className="w-full border border-zinc-300 rounded-md p-3 mb-8 focus:border-zinc-900 focus:outline-none" 
              />

              <h2 className="text-xl font-semibold mb-6">Teslimat Adresi</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Ad" 
                  value={checkoutData.firstName}
                  onChange={e => updateData({ firstName: e.target.value })}
                  className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" 
                />
                <input 
                  type="text" 
                  placeholder="Soyad"
                  value={checkoutData.lastName}
                  onChange={e => updateData({ lastName: e.target.value })}
                  className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Adres"
                value={checkoutData.address}
                onChange={e => updateData({ address: e.target.value })}
                className="w-full border border-zinc-300 rounded-md p-3 mb-4 focus:border-zinc-900 focus:outline-none" 
              />
              <div className="grid grid-cols-2 gap-4 mb-8">
                <input 
                  type="text" 
                  placeholder="İl/İlçe" 
                  value={checkoutData.city}
                  onChange={e => updateData({ city: e.target.value })}
                  className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" 
                />
                <input 
                  type="text" 
                  placeholder="Posta Kodu" 
                  value={checkoutData.postalCode}
                  onChange={e => updateData({ postalCode: e.target.value })}
                  className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" 
                />
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link href="/test-ecommerce/cart" className="text-sm text-zinc-500 hover:text-zinc-900">&lt; Sepete Dön</Link>
                <button 
                  onClick={() => handleNextStep('SHIPPING')}
                  disabled={!checkoutData.email || !checkoutData.firstName || !checkoutData.address}
                  className="bg-zinc-900 text-white px-8 py-4 font-medium rounded-md hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Kargoya Geç
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'SHIPPING' && (
            <motion.div key="shipping" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="border border-zinc-200 rounded-md p-4 mb-8 space-y-4 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                  <div className="flex gap-8"><span className="text-zinc-500 w-16">İletişim</span> <span>{checkoutData.email}</span></div>
                  <button onClick={() => setStep('INFORMATION')} className="text-xs font-medium underline">Değiştir</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-8"><span className="text-zinc-500 w-16">Alıcı</span> <span>{checkoutData.address}, {checkoutData.city}</span></div>
                  <button onClick={() => setStep('INFORMATION')} className="text-xs font-medium underline">Değiştir</button>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-6">Kargo Yöntemi</h2>
              <div className="border border-zinc-900 rounded-md p-4 flex justify-between items-center bg-zinc-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-zinc-900 bg-white" />
                  <span>Standart Kargo</span>
                </div>
                <span className="font-medium">Ücretsiz</span>
              </div>

              <div className="flex justify-between items-center pt-8 mt-8 border-t border-zinc-200">
                <button onClick={() => setStep('INFORMATION')} className="text-sm text-zinc-500 hover:text-zinc-900">&lt; Bilgilere Dön</button>
                <button 
                  onClick={() => handleNextStep('PAYMENT')}
                  className="bg-zinc-900 text-white px-8 py-4 font-medium rounded-md hover:bg-zinc-800"
                >
                  Ödemeye Geç
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'PAYMENT' && (
            <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Ödeme</h2>
                <span className="flex items-center gap-1 text-xs text-zinc-500"><Lock size={12}/> Güvenli Bağlantı (Demo)</span>
              </div>
              
              <div className="border border-zinc-200 rounded-lg overflow-hidden mb-8">
                <div className="p-4 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-medium">
                    <CreditCard size={18} /> Kredi/Banka Kartı
                  </div>
                </div>
                <div className="p-6 bg-white space-y-4">
                  <input type="text" placeholder="Kart Numarası" className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" />
                  <input type="text" placeholder="Kart Üzerindeki İsim" className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="SKT (AA/YY)" className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" />
                    <input type="text" placeholder="CVV" className="w-full border border-zinc-300 rounded-md p-3 focus:border-zinc-900 focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-zinc-200">
                <button onClick={() => setStep('SHIPPING')} className="text-sm text-zinc-500 hover:text-zinc-900">&lt; Kargoya Dön</button>
                <button 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="bg-zinc-900 text-white px-8 py-4 font-medium rounded-md hover:bg-zinc-800 disabled:opacity-70 flex items-center gap-2"
                >
                  {isProcessing ? 'İşleniyor...' : 'Siparişi Tamamla'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:w-2/5">
        <div className="bg-zinc-50 p-6 md:p-8 rounded-2xl sticky top-28">
          <h3 className="font-semibold mb-6">Sipariş Özeti</h3>
          
          <div className="space-y-4 mb-6 pb-6 border-b border-zinc-200">
            {items.map(item => (
              <div key={item.cartItemId} className="flex gap-4">
                <div className="relative w-16 h-16 bg-white rounded-md overflow-hidden shrink-0 border border-zinc-100">
                  <img src={item.product.thumbnail} alt={item.product.name} className="w-full h-full object-cover" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-zinc-500 text-white text-[10px] flex items-center justify-center rounded-full border border-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-900 line-clamp-1">{item.product.name}</h4>
                    {item.selectedVariants && (
                      <p className="text-xs text-zinc-500 mt-1">
                        {Object.values(item.selectedVariants).map(v => v.name).join(' / ')}
                      </p>
                    )}
                  </div>
                  <Price amount={item.product.price * item.quantity} className="text-sm shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-zinc-600 mb-6">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <Price amount={subtotal} />
            </div>
            <div className="flex justify-between">
              <span>Kargo</span>
              <span>Ücretsiz</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-lg font-bold text-zinc-900 pt-6 border-t border-zinc-200">
            <span>Toplam</span>
            <Price amount={subtotal} />
          </div>
        </div>
      </div>

    </div>
  );
}