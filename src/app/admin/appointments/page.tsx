import React from "react";
import { getAppointments } from "../actions/appointments";
import { PremiumDataGrid } from "@/components/admin/table/PremiumDataGrid";

export default async function AppointmentsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const clientId = "demo-client-id"; // Gerçekte auth() ile alınacak
  
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const search = searchParams.search || "";

  const result = await getAppointments(clientId, page, 10, search);
  const data = result.success ? result.data : [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Randevular</h1>
          <p className="mt-1 text-sm text-gray-400">Sistemdeki tüm randevuları yönetin.</p>
        </div>

        <PremiumDataGrid data={data} />
      </div>
    </div>
  );
}
