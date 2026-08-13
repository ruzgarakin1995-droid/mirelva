import { EmtechProductDetail } from '@/themes/emtech/components/EmtechProductDetail';
import { categoriesData } from '@/themes/emtech/data/categories';
import { notFound } from 'next/navigation';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { prisma } from '@/lib/prisma';

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params;
  
  // Try to find the product in the database first
  let foundProduct: any = null;
  let categoryTitle = "";
  let detailedFeatures: { title: string, desc: string }[] = [];

  try {
    if (prisma && prisma.ecomProduct) {
      const dbProduct = await prisma.ecomProduct.findUnique({
        where: { id: resolvedParams.productId },
        include: { category: true }
      });

      if (dbProduct) {
      foundProduct = {
        id: dbProduct.id,
        slug: dbProduct.id,
        name: dbProduct.name,
        price: 'Toptan Fiyat Gör', // Always show Toptan Fiyat Gör instead of actual price for B2B
        image: dbProduct.imageUrl || '/emtech-assets/product_1.jpg',
        stock: dbProduct.inStock ? 'Stokta Var' : 'Tükendi',
      };
      categoryTitle = dbProduct.category?.name || "Tüm Ürünler";
    }
    }
  } catch (error) {
    console.error("DB Error:", error);
  }

  // Fallback to mock data if not found in DB
  if (!foundProduct) {
    for (const catKey in categoriesData) {
      const category = categoriesData[catKey as keyof typeof categoriesData];
      const product = category.products.find(p => 
        p.slug === resolvedParams.productId || 
        p.id.toString() === resolvedParams.productId ||
        `${catKey}-${p.id}` === resolvedParams.productId
      );
      
      if (product) {
        foundProduct = product;
        categoryTitle = category.title;
        detailedFeatures = category.detailedFeatures || [];
        break;
      }
    }
  }

  if (!foundProduct) {
    notFound();
  }

  // Extend the found product with its category title for the UI
  const productWithCategory = {
    ...foundProduct,
    categoryTitle,
    detailedFeatures
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1">
        <EmtechProductDetail product={productWithCategory} />
      </div>
      <EmtechFooter />
    </main>
  );
}
