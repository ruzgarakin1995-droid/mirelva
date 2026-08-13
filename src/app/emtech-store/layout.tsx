import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Roboto_Mono } from 'next/font/google';
import { SmoothScroll } from '@/themes/tech-repair-v1/components/SmoothScroll';
import { EmtechPreloader } from '@/themes/emtech/components/EmtechPreloader';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/themes/emtech/components/CartDrawer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'EMTECH | Toptan ve Perakende Telefon Yedek Parça',
  description: 'Türkiye\'nin en kaliteli telefon ekranları, bataryaları ve onarım parçaları.',
};
import { SettingsProvider } from '@/context/SettingsContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#0055FF] selection:text-white overflow-x-hidden`}>
      <SettingsProvider>
        <CartProvider>
          <EmtechPreloader />
          <SmoothScroll>
            <EmtechHeader />
            {children}
          </SmoothScroll>
          <CartDrawer />
        </CartProvider>
      </SettingsProvider>
    </div>
  );
}
