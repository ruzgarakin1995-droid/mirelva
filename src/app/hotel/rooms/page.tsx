import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function ensureDemoData() {
  try {
    let client = await prisma.client.findFirst({
      where: { slug: 'luxe-hotel-demo' }
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: 'Luxe Hotel Demo',
          slug: 'luxe-hotel-demo',
          sector: 'HOTEL',
          status: 'LIVE',
        }
      });
    }

    const roomCount = await prisma.room.count({
      where: { clientId: client.id }
    });

    if (roomCount === 0) {
      await prisma.room.createMany({
        data: [
          {
            clientId: client.id,
            roomNumber: '101',
            roomType: 'STANDARD',
            capacity: 2,
            pricePerNight: 250.00,
            isAvailable: true,
          },
          {
            clientId: client.id,
            roomNumber: '201',
            roomType: 'DELUXE',
            capacity: 2,
            pricePerNight: 450.00,
            isAvailable: true,
          },
          {
            clientId: client.id,
            roomNumber: '301',
            roomType: 'SUITE',
            capacity: 4,
            pricePerNight: 1200.00,
            isAvailable: true,
          }
        ]
      });
    }
    return client.id;
  } catch (error) {
    console.error("Demo data creation failed:", error);
    return null;
  }
}

const roomMeta: Record<string, { image: string, desc: string, title: string }> = {
  'STANDARD': {
    title: 'Standart Oda',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
    desc: 'Zarif ve konforlu standart odalarımızda kusursuz rahatlığı hissedin.'
  },
  'DELUXE': {
    title: 'Deluxe Oda',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    desc: 'Geniş yaşam alanı ve ekstra lüks detaylarla donatılmış ayrıcalıklı bir deneyim.'
  },
  'SUITE': {
    title: 'Premium Süit',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
    desc: 'Eşsiz bir manzara, özel ikramlar ve krallara layık kusursuz lüks.'
  }
};

export default async function RoomsPage() {
  const clientId = await ensureDemoData();
  
  let rooms: any[] = [];
  if (clientId) {
    rooms = await prisma.room.findMany({
      where: { clientId },
      orderBy: { pricePerNight: 'asc' }
    });
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Odalarımız</h1>
          <div className="w-24 h-1 bg-[#B59461] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Eşsiz tasarımı, sonsuz konforu ve lüks detayları ile kendinizi ayrıcalıklı hissedeceğiniz odalarımız.
          </p>
        </div>

        {rooms.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            Veri yüklenemedi veya oda bulunmamaktadır.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room) => {
              const meta = roomMeta[room.roomType] || roomMeta['STANDARD'];
              return (
                <div key={room.id} className="bg-[#1a1a1a] border border-[#B59461]/20 flex flex-col group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={meta.image} 
                      alt={meta.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-[#B59461] px-4 py-2 font-serif border border-[#B59461]/30">
                      ${Number(room.pricePerNight).toFixed(0)} / Gece
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-serif text-white group-hover:text-[#B59461] transition-colors">{meta.title}</h3>
                      <span className="text-sm text-gray-500">Oda {room.roomNumber}</span>
                    </div>
                    
                    <p className="text-gray-400 font-light mb-6 flex-grow">{meta.desc}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-8 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span>👤</span> {room.capacity} Kişilik
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={room.isAvailable ? "text-green-500" : "text-red-500"}>
                          {room.isAvailable ? "Müsait" : "Dolu"}
                        </span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/hotel/reservations" 
                      className="w-full text-center py-4 border border-[#B59461] text-[#B59461] hover:bg-[#B59461] hover:text-black uppercase tracking-widest text-sm font-medium transition-colors"
                    >
                      Hemen Rezervasyon
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
