import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticLoader } from '@/themes/aesthetic/components/AestheticLoader';
import { AestheticHero } from '@/themes/aesthetic/components/AestheticHero';
import { AestheticServices } from '@/themes/aesthetic/components/AestheticServices';
import { AestheticTransformations } from '@/themes/aesthetic/components/AestheticTransformations';
import { AestheticBeforeAfter } from '@/themes/aesthetic/components/AestheticBeforeAfter';
import { AestheticSkincare } from '@/themes/aesthetic/components/AestheticSkincare';
import { AestheticTechnology } from '@/themes/aesthetic/components/AestheticTechnology';
import { AestheticDoctors } from '@/themes/aesthetic/components/AestheticDoctors';
import { AestheticProcess } from '@/themes/aesthetic/components/AestheticProcess';
import { AestheticFAQ } from '@/themes/aesthetic/components/AestheticFAQ';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';

export const metadata = {
  title: 'Mirelva Beauty Clinic | Gelişmiş Medikal Estetik',
  description: 'Güzelliğe bilimsel yaklaşım. FDA onaylı cihazlar ve uzman doktor kadrosu.',
};

export default function AestheticHomePage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticLoader />
      <AestheticHeader />
      <AestheticHero />
      <AestheticTechnology />
      <AestheticServices />
      <AestheticTransformations />
      <AestheticBeforeAfter />
      <AestheticSkincare />
      <AestheticProcess />
      <AestheticDoctors />
      <AestheticFAQ />
      <AestheticFooter />
    </main>
  );
}


