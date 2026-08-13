import React from 'react';
import { SupplementHeader } from '@/components/ecommerce/supplement/SupplementHeader';
import { CartProvider } from '@/store/ecommerce/CartContext';
import { WishlistProvider } from '@/store/ecommerce/WishlistContext';
import { CheckoutProvider } from '@/store/ecommerce/CheckoutContext';
import { ToastProvider } from '@/components/ecommerce/shared/Toast';
import { CartDrawer } from '@/components/ecommerce/shared/CartDrawer';
import { SplitPreloader } from '@/components/ecommerce/supplement/SplitPreloader';

export const metadata = {
  title: 'Vertex Nutrition | V4 Supplement',
  description: 'Pro-Max High End E-commerce Demo',
};

export default function SupplementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>
          <CheckoutProvider>
            <div className="min-h-screen bg-[#09090b] text-white selection:bg-[#ccff00] selection:text-black antialiased font-sans flex flex-col">
              <SplitPreloader />
              <SupplementHeader />
              <main className="flex-1 flex flex-col pt-[88px]">
                {children}
              </main>
              {/* Footer can go here later */}
              <CartDrawer theme="supplement" checkoutHref="/test-ecommerce-v4/checkout" />
            </div>
          </CheckoutProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
