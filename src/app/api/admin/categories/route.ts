import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { globalMockCategories } from '@/lib/mock-data/emtech-store';

export async function GET() {
  try {
    const categories = await prisma.ecomCategory.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.warn("Database connection failed for categories. Using mock data.");
    return NextResponse.json(globalMockCategories);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    try {
      const client = await prisma.client.findFirst();
      const newCategory = await prisma.ecomCategory.create({
        data: {
          name: body.name,
          slug: body.name.toLowerCase().replace(/ /g, '-'),
          clientId: client?.id || 'dummy-client-id'
        }
      });
      return NextResponse.json(newCategory, { status: 201 });
    } catch (dbError) {
      console.warn("DB offline, using mock POST for categories", dbError);
      const newMockCat = {
        id: body.name.toLowerCase().replace(/ /g, '-'),
        slug: body.name.toLowerCase().replace(/ /g, '-'),
        name: body.name
      };
      globalMockCategories.push(newMockCat);
      return NextResponse.json(newMockCat, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
