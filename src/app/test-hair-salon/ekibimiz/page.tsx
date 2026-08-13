import { HairSalonHeader } from '@/themes/hair-salon/components/HairSalonHeader';
import { HairSalonTeam } from '@/themes/hair-salon/components/HairSalonTeam';
import { HairSalonGallery } from '@/themes/hair-salon/components/HairSalonGallery';
import { HairSalonCallToAction } from '@/themes/hair-salon/components/HairSalonCallToAction';
import { HairSalonFooter } from '@/themes/hair-salon/components/HairSalonFooter';

export default function TeamPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen text-[#352F2A] selection:bg-[#C4A484] selection:text-[#352F2A]">
      <HairSalonHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-8 bg-[#352F2A] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C4A484]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Ekibimiz</h1>
          <p className="font-sans font-light text-[#FDFBF7]/60 max-w-xl mx-auto">
            Dünyaca ünlü eğitimlerden geçmiş, yaratıcılığı ve vizyonuyla saçlarınıza imzasını atacak ustalarımız.
          </p>
        </div>
      </section>

      <HairSalonTeam />
      <HairSalonGallery />
      
      <HairSalonCallToAction />
      <HairSalonFooter />
    </main>
  );
}
