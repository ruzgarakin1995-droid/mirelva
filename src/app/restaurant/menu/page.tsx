import React from 'react';
import { prisma } from '@/lib/prisma';
import MenuClient from './MenuClient';

export const dynamic = 'force-dynamic';

// Ensure demo data exists if empty
async function ensureDemoData() {
  const RESTAURANT_CLIENT_ID = "restaurant-demo-client-id";
  
  let client = await prisma.client.findUnique({ where: { id: RESTAURANT_CLIENT_ID } });
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

  const catCount = await prisma.menuCategory.count({ where: { clientId: RESTAURANT_CLIENT_ID } });
  
  if (catCount === 0) {
    const cat1 = await prisma.menuCategory.create({ data: { name: "Başlangıçlar", order: 1, clientId: RESTAURANT_CLIENT_ID }});
    const cat2 = await prisma.menuCategory.create({ data: { name: "Ana Yemekler", order: 2, clientId: RESTAURANT_CLIENT_ID }});
    const cat3 = await prisma.menuCategory.create({ data: { name: "İçecekler", order: 3, clientId: RESTAURANT_CLIENT_ID }});

    await prisma.menuItem.createMany({
      data: [
        { categoryId: cat1.id, name: "Truffle Patates", description: "Taze trüf mantarı yağı, parmesan ve ince kıyım maydanoz.", price: 120, imageUrl: "https://images.unsplash.com/photo-1576107253579-a7aa0165e8be?w=400&q=80" },
        { categoryId: cat1.id, name: "Bruschetta", description: "Kızarmış ekşi maya ekmek, taze domates, sarımsak ve fesleğen.", price: 95, imageUrl: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80" },
        
        { categoryId: cat2.id, name: "Lokum Burger", description: "180gr dana lokum, karamelize soğan, cheddar, özel şef sos.", price: 280, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
        { categoryId: cat2.id, name: "Fettuccine Alfredo", description: "Taze el yapımı makarna, kremalı mantar sosu ve parmesan.", price: 210, imageUrl: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80" },
        
        { categoryId: cat3.id, name: "Ev Yapımı Limonata", description: "Taze nane ve çilek parçacıkları ile.", price: 65, imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" },
      ]
    });
  }

  return RESTAURANT_CLIENT_ID;
}

export default async function MenuPage() {
  const clientId = await ensureDemoData();

  const categories = await prisma.menuCategory.findMany({
    where: { clientId },
    include: { items: true },
    orderBy: { order: 'asc' }
  });

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-32">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-12 px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Sipariş Ver</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">Adresinize sıcak teslimat veya restorandan gel-al seçenekleriyle.</p>
      </div>
      
      {/* Client Component handles interactivity (Tabs, Add to Cart, Search) */}
      <MenuClient categories={categories} />
    </div>
  );
}
