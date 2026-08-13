export const metadata = {
  title: 'Tattoo Studio V3 | Iron & Ink',
  description: 'Premium Tattoo Studio Theme',
};

import { TattooPreloader } from '@/themes/tattoo-v3/components/TattooPreloader';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white">
      <TattooPreloader />
      {children}
    </div>
  );
}
