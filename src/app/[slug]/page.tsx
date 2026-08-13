import { notFound } from 'next/navigation';
import ThemeEngine from '@/components/ThemeEngine';
import { prisma } from '@/lib/prisma';

async function getClientData(slug: string) {
  if (slug === 'test-beauty') {
    return {
      id: '1',
      name: 'Elegance Güzellik Merkezi',
      slug: 'test-beauty',
      sector: 'beauty',
      themeConfig: {
        primaryColor: '#111827',
        accentColor: '#db2777', // pink-600
        fontFamily: 'Inter',
      },
      features: {
        hasBooking: true,
      }
    };
  }

  try {
    const client = await prisma.client.findUnique({
      where: { slug },
      include: { themeConfig: true, features: true }
    });
    return client;
  } catch (error) {
    console.error("Database connection failed", error);
    return null;
  }
}

export default async function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const clientData = await getClientData(slug);
  
  if (!clientData) {
    notFound();
  }
  
  return (
    <div style={{ fontFamily: clientData.themeConfig?.fontFamily }}>
      <ThemeEngine clientData={clientData} />
    </div>
  );
}
