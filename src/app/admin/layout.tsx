import React from 'react';
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import { prisma } from "@/lib/prisma";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  // Fetch client sector
  let sector = "default";
  if (session.user?.clientId) {
    const client = await prisma.client.findUnique({
      where: { id: session.user.clientId },
      select: { sector: true }
    });
    if (client) sector = client.sector;
  }

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white overflow-hidden font-sans">
      <AdminSidebar sector={sector} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader user={session.user} />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
