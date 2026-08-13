import { TechHero } from '@/themes/tech-repair-v1/components/TechHero';
import { TechServices } from '@/themes/tech-repair-v1/components/TechServices';
import { TechStore } from '@/themes/tech-repair-v1/components/TechStore';

export default function TechRepairPage() {
  return (
    <main className="min-h-screen bg-[#05050A]">
      <TechHero />
      <TechServices />
      <TechStore />
    </main>
  );
}
