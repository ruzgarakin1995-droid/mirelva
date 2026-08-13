import { SmoothScroll } from '@/themes/tech-repair-v1/components/SmoothScroll';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Roboto_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'TechLab | Premium Device Repair & Store',
  description: 'Cyber-elegance themed tech repair and e-commerce experience.',
};

import { TechHeader } from '@/themes/tech-repair-v1/components/TechHeader';
import { TechPreloader } from '@/themes/tech-repair-v1/components/TechPreloader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-[#05050A] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        <TechPreloader />
        <SmoothScroll>
          <TechHeader />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
