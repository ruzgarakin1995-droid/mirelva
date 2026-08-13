import React from 'react';

export const metadata = {
  title: 'Bomonti Hair Studio | Premium Grooming',
  description: 'Gentlemen\'s Lounge - Premium Barber Experience',
};

import { BarberPreloader } from '@/themes/barber/components/BarberPreloader';

export default function BarberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#2A2522] selection:bg-[#C1A68D] selection:text-[#F8F7F5] antialiased">
      <BarberPreloader />
      {children}
    </div>
  );
}
