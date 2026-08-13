import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let client = await prisma.client.findFirst({
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

    let extraSettings = {};
    if (client.tags) {
      try {
        extraSettings = JSON.parse(client.tags);
      } catch (e) {
        // ignore JSON parse error
      }
    }

    const settings = {
      storeName: client.name || 'Emtech Store',
      phone: client.phone || '',
      email: client.email || '',
      address: client.address || '',
      instagram: client.instagram || '',
      whatsapp: (extraSettings as any).whatsapp || '',
      workingHours: (extraSettings as any).workingHours || ''
    };

    return NextResponse.json(settings);
  } catch (error) {
    console.error("GET Admin Settings Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    let client = await prisma.client.findFirst({
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

    // Save extra fields in tags as JSON
    let extraSettings = {};
    if (client.tags) {
      try {
        extraSettings = JSON.parse(client.tags);
      } catch (e) {}
    }
    
    extraSettings = {
      ...extraSettings,
      whatsapp: body.whatsapp,
      workingHours: body.workingHours
    };

    const updatedClient = await prisma.client.update({
      where: { id: client.id },
      data: {
        name: body.storeName,
        phone: body.phone,
        email: body.email,
        address: body.address,
        instagram: body.instagram,
        tags: JSON.stringify(extraSettings)
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT Admin Settings Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
