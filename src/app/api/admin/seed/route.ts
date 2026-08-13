import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { categoriesData } from '@/themes/emtech/data/categories';

export async function GET() {
  try {
    // 1. Create a Client for Emtech if it doesn't exist
    let client = await prisma.client.findUnique({
      where: { slug: 'emtech-store' }
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: 'Emtech Store',
          slug: 'emtech-store',
          sector: 'E-commerce',
          status: 'LIVE'
        }
      });
    }

    // 2. Iterate over categoriesData and seed Database
    const categoryEntries = Object.entries(categoriesData);
    let totalProducts = 0;

    for (let i = 0; i < categoryEntries.length; i++) {
      const [slug, data] = categoryEntries[i];

      // Create or find category
      let category = await prisma.ecomCategory.findFirst({
        where: { slug, clientId: client.id }
      });

      if (!category) {
        category = await prisma.ecomCategory.create({
          data: {
            clientId: client.id,
            name: data.title,
            slug: slug,
            order: i
          }
        });
      }

      // Seed products for this category
      for (const productData of data.products) {
        // Use name + categoryId to prevent duplicates if seed runs multiple times
        const existingProduct = await prisma.ecomProduct.findFirst({
          where: { 
            name: productData.name,
            categoryId: category.id
          }
        });

        if (!existingProduct) {
          // Determine stock boolean from text
          const inStock = productData.stock === 'Stokta Var' || productData.stock === 'Kritik Stok';
          
          // Generate a fake price if it says 'Toptan Fiyat Gör'
          // We will store it as 0 for now since the schema expects a Decimal.
          // Or we can parse it.
          let price = 0;
          if (productData.price !== 'Toptan Fiyat Gör') {
            price = parseFloat(productData.price.toString().replace(/[^0-9,.-]/g, '')) || 0;
          }

          await prisma.ecomProduct.create({
            data: {
              clientId: client.id,
              categoryId: category.id,
              name: productData.name,
              price: price,
              inStock: inStock,
              imageUrl: productData.image,
              brand: data.title // Using category title as brand for now
            }
          });
          totalProducts++;
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Seeded ${categoryEntries.length} categories and ${totalProducts} new products.`
    });

  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
