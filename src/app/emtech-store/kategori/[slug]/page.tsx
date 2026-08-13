import { EmtechCategoryDetail } from '@/themes/emtech/components/EmtechCategoryDetail';
import { categoriesData } from '@/themes/emtech/data/categories';
import { notFound } from 'next/navigation';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';



export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = categoriesData[resolvedParams.slug as keyof typeof categoriesData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="flex-1">
        <EmtechCategoryDetail data={data} />
      </div>
      <EmtechFooter />
    </main>
  );
}
