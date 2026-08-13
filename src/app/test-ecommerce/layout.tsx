import React from 'react';
import { CartProvider } from '@/store/ecommerce/CartContext';
import { WishlistProvider } from '@/store/ecommerce/WishlistContext';
import { CheckoutProvider } from '@/store/ecommerce/CheckoutContext';
import { ToastProvider } from '@/components/ecommerce/shared/Toast';
import { FashionHeader } from '@/components/ecommerce/fashion/FashionHeader';
import { FashionFooter } from '@/components/ecommerce/fashion/FashionFooter';
import { CartDrawer } from '@/components/ecommerce/shared/CartDrawer';

export const metadata = {
  title: 'LOCİZSA Fashion | V1 E-commerce',
  description: 'Premium Fashion E-commerce Demo',
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>
          <CheckoutProvider>
            <div className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white font-sans">
              <FashionHeader />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
              <FashionFooter />
              <CartDrawer theme="fashion" checkoutHref="/test-ecommerce/checkout" />
            </div>
          </CheckoutProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}