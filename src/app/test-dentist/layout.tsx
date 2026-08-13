import React from 'react';
import { DentistHeader } from '@/themes/dentist/components/DentistHeader';
import { DentistFooter } from '@/themes/dentist/components/DentistFooter';
import { Preloader } from '@/themes/dentist/components/Preloader';

export const metadata = {
  title: 'Dişmekan | Dental',
  description: 'Estetik diş hekimliğinde sanat ve bilimin buluştuğu nokta.',
};

export default function DentistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-[#D4C9C3] selection:text-[#1A1A1A] antialiased">
      <Preloader />
      <DentistHeader />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <DentistFooter />
    </div>
  );
}
