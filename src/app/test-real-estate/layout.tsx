import React from 'react';
import { RealEstateHeader } from '@/components/ecommerce/realestate/RealEstateHeader';
import { RealEstateFooter } from '@/components/ecommerce/realestate/RealEstateFooter';
import { RealEstateWishlistProvider } from '@/store/ecommerce/RealEstateWishlistContext';
import { Preloader } from '@/components/ecommerce/realestate/Preloader';

export const metadata = {
  title: 'AURA | Lüks Gayrimenkul',
  description: 'Awwwards Quality Real Estate Theme',
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-[#f5f5f0] antialiased font-sans flex flex-col">
      <RealEstateWishlistProvider>
        <Preloader />
        <RealEstateHeader />
        <main className="flex-1 flex flex-col pt-[88px]">
          {children}
        </main>
        
        <RealEstateFooter />
      </RealEstateWishlistProvider>
    </div>
  );
}
