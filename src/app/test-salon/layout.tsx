import React from 'react';
import { SalonPreloader } from '@/themes/salon/components/SalonPreloader';

export const metadata = {
  title: 'Lumina Nail Art Studio | Ethereal Elegance',
  description: 'Premium Nail Art & Manicure Experience',
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#4A403F] selection:bg-[#E0B6B6] selection:text-[#FCFBF9] antialiased">
      <SalonPreloader />
      {children}
    </div>
  );
}
