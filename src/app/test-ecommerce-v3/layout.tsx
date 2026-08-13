import React from 'react';
import { CartProvider } from '@/store/ecommerce/CartContext';
import { WishlistProvider } from '@/store/ecommerce/WishlistContext';
import { CheckoutProvider } from '@/store/ecommerce/CheckoutContext';
import { ToastProvider } from '@/components/ecommerce/shared/Toast';
import { GroceryHeader } from '@/components/ecommerce/grocery/GroceryHeader';
import { GroceryFooter } from '@/components/ecommerce/grocery/GroceryFooter';
import { CartDrawer } from '@/components/ecommerce/shared/CartDrawer';

export const metadata = {
  title: 'Taze Market | V3 E-commerce',
  description: 'Fast Grocery E-commerce Demo',
};

export default function GroceryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>
          <CheckoutProvider>
            <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white font-sans">
              <GroceryHeader />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
              <GroceryFooter />
              <CartDrawer theme="grocery" checkoutHref="/test-ecommerce-v3/checkout" />
            </div>
          </CheckoutProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
