import React from 'react';
import { CartProvider } from '@/store/ecommerce/CartContext';
import { WishlistProvider } from '@/store/ecommerce/WishlistContext';
import { CheckoutProvider } from '@/store/ecommerce/CheckoutContext';
import { ToastProvider } from '@/components/ecommerce/shared/Toast';
import { TechHeader } from '@/components/ecommerce/tech/TechHeader';
import { TechFooter } from '@/components/ecommerce/tech/TechFooter';
import { CartDrawer } from '@/components/ecommerce/shared/CartDrawer';

export const metadata = {
  title: 'TEKNOEMO | Teknoloji Alışverişi',
  description: 'Premium Electronics E-commerce Demo',
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>
          <CheckoutProvider>
            <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white font-sans">
              <TechHeader />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
              <TechFooter />
              <CartDrawer theme="tech" checkoutHref="/test-ecommerce-v2/checkout" />
            </div>
          </CheckoutProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
