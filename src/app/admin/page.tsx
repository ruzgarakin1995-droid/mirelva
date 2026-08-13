import { getDashboardMetrics } from "./actions/dashboard";
import DashboardClient from "./DashboardClient";

export default async function AdminPage() {
  // Şimdilik demo/hardcoded bir clientId kullanıyoruz (Örn: Güzellik salonu)
  // Gerçek senaryoda bu `auth()` üzerinden veya URL params/subdomain üzerinden alınacak
  const clientId = "demo-client-id"; 
  
  const result = await getDashboardMetrics(clientId);
  
  const metrics = result.success ? result.data : null;

  return <DashboardClient metrics={metrics} />;
}
