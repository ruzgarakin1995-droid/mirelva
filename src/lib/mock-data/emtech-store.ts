import { categoriesData } from '@/themes/emtech/data/categories';

export const globalMockCategories = Object.entries(categoriesData).map(([slug, data]) => ({
  id: slug,
  slug,
  name: data.title
}));

export const globalMockProducts = Object.entries(categoriesData).flatMap(([catSlug, catData]) => 
  catData.products.map(p => ({
    id: `${catSlug}-${p.id}`,
    name: p.name,
    price: 0,
    inStock: p.stock === 'Stokta Var' || p.stock === 'Kritik Stok',
    brand: catData.title,
    imageUrl: p.image,
    categoryId: catSlug,
    category: { id: catSlug, slug: catSlug, name: catData.title }
  }))
);
