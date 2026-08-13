import { EmtechHero } from '@/themes/emtech/components/EmtechHero';
import { EmtechBrands } from '@/themes/emtech/components/EmtechBrands';
import { EmtechNewProducts } from '@/themes/emtech/components/EmtechNewProducts';
import { EmtechHighlights } from '@/themes/emtech/components/EmtechHighlights';
import { EmtechCategories } from '@/themes/emtech/components/EmtechCategories';
import { EmtechStore } from '@/themes/emtech/components/EmtechStore';
import { EmtechStats } from '@/themes/emtech/components/EmtechStats';
import { EmtechProcess } from '@/themes/emtech/components/EmtechProcess';
import { EmtechB2B } from '@/themes/emtech/components/EmtechB2B';
import { EmtechReviews } from '@/themes/emtech/components/EmtechReviews';
import { EmtechFAQ } from '@/themes/emtech/components/EmtechFAQ';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';

export default function EmtechStorePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <EmtechHero />
      <EmtechBrands />
      <EmtechNewProducts />
      <EmtechHighlights />
      <EmtechCategories />
      <EmtechStore />
      <EmtechStats />
      <EmtechProcess />
      <EmtechB2B />
      <EmtechReviews />
      <EmtechFAQ />
      <EmtechFooter />
    </main>
  );
}
