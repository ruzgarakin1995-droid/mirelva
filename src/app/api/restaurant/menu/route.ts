import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { categoryId, name, description, price, imageUrl } = body;
    
    if (!categoryId || !name || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const item = await prisma.menuItem.create({
      data: {
        categoryId,
        name,
        description,
        price: parseFloat(price),
        imageUrl
      }
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Create MenuItem Error:", error);
    return NextResponse.json({ error: "Failed to create menu item" }, { status: 500 });
  }
}
