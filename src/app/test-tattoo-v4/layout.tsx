import { TattooV4Header } from '@/themes/tattoo-v4/components/TattooV4Header';
import { TattooV4Footer } from '@/themes/tattoo-v4/components/TattooV4Footer';
import { TattooV4Preloader } from '@/themes/tattoo-v4/components/TattooV4Preloader';

export const metadata = {
  title: 'La Ligne | Fine Line Tattoo Studio',
  description: 'Premium Boutique Tattoo Studio Theme',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#B59461] selection:text-white antialiased flex flex-col">
      <TattooV4Preloader />
      <TattooV4Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <TattooV4Footer />
    </div>
  );
}
