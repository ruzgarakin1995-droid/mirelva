import { BarberHeader } from '@/themes/barber/components/BarberHeader';
import { BarberHero } from '@/themes/barber/components/BarberHero';
import { BarberPhilosophy } from '@/themes/barber/components/BarberPhilosophy';
import { BarberProcess } from '@/themes/barber/components/BarberProcess';
import { BarberServices } from '@/themes/barber/components/BarberServices';
import { BarberTeam } from '@/themes/barber/components/BarberTeam';
import { BarberProducts } from '@/themes/barber/components/BarberProducts';
import { BarberAmbience } from '@/themes/barber/components/BarberAmbience';
import { BarberFooter } from '@/themes/barber/components/BarberFooter';

export default function BarberPage() {
  return (
    <>
      <BarberHeader />
      <main className="flex-1 flex flex-col pt-24">
        <BarberHero />
        <BarberPhilosophy />
        <BarberProcess />
        <BarberServices />
        <BarberTeam />
        <BarberProducts />
        <BarberAmbience />
      </main>
      <BarberFooter />
    </>
  );
}
