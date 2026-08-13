import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { globalMockCategories, globalMockProducts } from '@/lib/mock-data/emtech-store';

export async function GET() {
  try {
    const categories = await prisma.ecomCategory.findMany({
      orderBy: { order: 'asc' }
    });

    const products = await prisma.ecomProduct.findMany({
      include: {
        category: true
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ categories, products });
  } catch (error) {
    console.warn("Database connection failed for store catalog. Falling back to global mock data.");
    
    return NextResponse.json({ 
      categories: globalMockCategories, 
      products: globalMockProducts 
    });
  }
}
