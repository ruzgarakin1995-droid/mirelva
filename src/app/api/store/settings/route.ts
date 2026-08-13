import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await prisma.client.findFirst({
      where: { slug: 'emtech-store' }
    });

    if (!client) {
      return NextResponse.json({
        storeName: 'Emtech Store',
        phone: '0510 221 59 32',
        whatsapp: '+905102215932',
        address: 'Tahtakale Mah. Tomruk Sok. Yıldız İş Hanı No: 14 Eminönü, Fatih / İstanbul',
        email: 'info@kartelgsm.com.tr',
        instagram: '@emtechstore',
        workingHours: 'Pzt - Cmt: 09:00 - 18:00'
      });
    }

    let extraSettings = {};
    if (client.tags) {
      try {
        extraSettings = JSON.parse(client.tags);
      } catch (e) {}
    }

    const settings = {
      storeName: client.name || 'Emtech Store',
      phone: client.phone || '0510 221 59 32',
      email: client.email || 'info@kartelgsm.com.tr',
      address: client.address || 'Tahtakale Mah. Tomruk Sok. Yıldız İş Hanı No: 14 Eminönü, Fatih / İstanbul',
      instagram: client.instagram || '@emtechstore',
      whatsapp: (extraSettings as any).whatsapp || '+905102215932',
      workingHours: (extraSettings as any).workingHours || 'Pzt - Cmt: 09:00 - 18:00'
    };

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({
        storeName: 'Emtech Store',
        phone: '0510 221 59 32',
        whatsapp: '+905102215932',
        address: 'Tahtakale Mah. Tomruk Sok. Yıldız İş Hanı No: 14 Eminönü, Fatih / İstanbul',
        email: 'info@kartelgsm.com.tr',
        instagram: '@emtechstore',
        workingHours: 'Pzt - Cmt: 09:00 - 18:00'
    });
  }
}
