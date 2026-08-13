import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

import { globalMockProducts, globalMockCategories } from '@/lib/mock-data/emtech-store';

export async function GET() {
  try {
    const products = await prisma.ecomProduct.findMany({
      orderBy: { createdAt: 'desc' },
      include: { category: true }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.warn("Database connection failed. Using mock data.");
    return NextResponse.json(globalMockProducts);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    try {
      // Find the first client or create a dummy one for the relation
      let client = await prisma.client.findFirst();
      if (!client) {
        client = await prisma.client.create({
          data: {
            name: "Emtech Store",
            slug: "emtech",
            sector: "E-commerce"
          }
        });
      }
      
      // Need a category to link to
      let category = await prisma.ecomCategory.findFirst();
      if (!category) {
        category = await prisma.ecomCategory.create({
          data: {
            name: "Genel",
            slug: "genel",
            clientId: client.id
          }
        });
      }

      const newProduct = await prisma.ecomProduct.create({
        data: {
          name: body.name,
          price: 0,
          inStock: body.inStock,
          brand: body.brand,
          imageUrl: body.imageUrl,
          categoryId: body.categoryId || category.id,
          clientId: client.id
        }
      });
      return NextResponse.json(newProduct, { status: 201 });
    } catch (dbError) {
      console.warn("DB offline, using mock POST", dbError);
      const newMockProduct = {
        id: Math.random().toString(36).substr(2, 9),
        name: body.name,
        price: body.price,
        inStock: body.inStock,
        brand: body.brand,
        imageUrl: body.imageUrl || ''
      };
      globalMockProducts.unshift(newMockProduct as any);
      return NextResponse.json(newMockProduct, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    try {
      const updatedProduct = await prisma.ecomProduct.update({
        where: { id: body.id },
        data: {
          name: body.name,
          inStock: body.inStock,
          brand: body.brand,
          imageUrl: body.imageUrl,
          ...(body.categoryId && { categoryId: body.categoryId })
        }
      });
      return NextResponse.json(updatedProduct);
    } catch (dbError) {
      console.warn("DB offline, using mock PUT");
      const idx = globalMockProducts.findIndex(p => p.id === body.id);
      if (idx !== -1) {
        globalMockProducts[idx] = { ...globalMockProducts[idx], ...body };
      }
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    try {
      await prisma.ecomProduct.delete({
        where: { id }
      });
      return NextResponse.json({ success: true });
    } catch (dbError) {
      console.warn("DB offline, using mock DELETE");
      const idx = globalMockProducts.findIndex(p => p.id === id);
      if (idx !== -1) globalMockProducts.splice(idx, 1);
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
