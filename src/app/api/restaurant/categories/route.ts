import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const RESTAURANT_CLIENT_ID = "restaurant-demo-client-id";

async function ensureClient() {
  let client = await prisma.client.findUnique({ where: { slug: 'restaurant-demo' } });
  if (!client) {
    client = await prisma.client.create({
      data: {
        id: RESTAURANT_CLIENT_ID,
        name: "Gourmet Restaurant",
        slug: "restaurant-demo",
        sector: "RESTAURANT"
      }
    });
  }
  return client.id;
}

export async function GET() {
  try {
    const clientId = await ensureClient();
    const categories = await prisma.menuCategory.findMany({
      where: { clientId },
      include: { items: true },
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET Categories Error:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const clientId = await ensureClient();
    const body = await req.json();
    const { name, order } = body;
    
    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

    const category = await prisma.menuCategory.create({
      data: {
        name,
        order: order || 0,
        clientId
      }
    });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
