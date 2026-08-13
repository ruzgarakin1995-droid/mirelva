import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function ensureDemoData() {
  // Try to find the demo beauty client, create if not exists
  let client = await prisma.client.findFirst({
    where: { slug: 'demo-beauty' }
  });

  if (!client) {
    client = await prisma.client.create({
      data: {
        name: 'Lumière Beauty & Clinic',
        slug: 'demo-beauty',
        sector: 'beauty',
        status: 'LIVE'
      }
    });
  }

  // Check if services exist for this client
  const servicesCount = await prisma.service.count({
    where: { clientId: client.id }
  });

  if (servicesCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          clientId: client.id,
          name: 'Premium Cilt Bakımı',
          description: 'Kişiye özel serumlar, derinlemesine temizlik ve yenileme protokolü ile cildinize ışıltı katan imza bakımımız.',
          duration: 60,
          price: 1500
        },
        {
          clientId: client.id,
          name: 'Anti-Aging Altın İğne',
          description: 'Kolajen üretimini tetikleyen, kırışıklık ve leke tedavisi sağlayan devrim niteliğinde anti-aging çözümü.',
          duration: 45,
          price: 3000
        },
        {
          clientId: client.id,
          name: 'Aromaterapi Spa Ritüeli',
          description: 'Organik esansiyel yağlarla tüm vücudunuzu rahatlatan, stres ve yorgunluğu arındıran holistik masaj terapisi.',
          duration: 90,
          price: 2000
        },
        {
          clientId: client.id,
          name: 'Hydrafacial MD Serisi',
          description: 'Vakum teknolojisi ile gözenek temizliği, peeling ve yoğun nemlendirmeyi bir arada sunan Amerikan cilt bakımı.',
          duration: 45,
          price: 1800
        },
        {
          clientId: client.id,
          name: 'Bölgesel İncelme & Sıkılaşma',
          description: 'Son teknoloji odaklı ultrason ile yağ hücrelerini parçalayan ameliyatsız vücut şekillendirme.',
          duration: 60,
          price: 2500
        },
        {
          clientId: client.id,
          name: 'Medikal Pedikür & El Bakımı',
          description: 'Uzman podologlar eşliğinde el ve ayak sağlığını korumaya yönelik, lüks ve hijyenik tırnak bakımı.',
          duration: 45,
          price: 800
        }
      ]
    });
  }

  // Fetch and return the services
  const services = await prisma.service.findMany({
    where: { clientId: client.id },
    orderBy: { createdAt: 'desc' }
  });

  return services;
}

export default async function ServicesPage() {
  const services = await ensureDemoData();

  return (
    <div className="min-h-screen bg-[#FCFAEF] pb-24">
      {/* Page Header */}
      <div className="bg-white border-b border-[#F2DFE1] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Ayrıcalıklı <span className="font-serif italic text-[#B47C84]">Hizmetlerimiz</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#E8C5C8] mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Güzelliğinizi ve sağlığınızı desteklemek için, en güncel teknolojiler ve premium ürünlerle tasarlanmış medikal estetik ve bakım menümüz.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#F2DFE1] flex flex-col h-full"
            >
              <div className="mb-6 overflow-hidden rounded-xl h-48 -mx-4 -mt-4 relative">
                {/* Dynamically picking an image based on index for demo variety */}
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1614859324967-bdf324e930f7?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
                  ][index % 6]} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#B47C84]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <h2 className="text-xl font-medium text-gray-900 mb-3">{service.name}</h2>
              <p className="text-gray-500 font-light text-sm mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Süre</span>
                  <span className="text-gray-800 font-medium">{service.duration} Dk</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ücret</span>
                  <span className="text-[#B47C84] font-medium">₺{Number(service.price).toLocaleString('tr-TR')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
