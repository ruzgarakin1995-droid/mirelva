import { HairSalonHeader } from '@/themes/hair-salon/components/HairSalonHeader';
import { HairSalonServices } from '@/themes/hair-salon/components/HairSalonServices';
import { HairSalonRitual } from '@/themes/hair-salon/components/HairSalonRitual';
import { HairSalonProducts } from '@/themes/hair-salon/components/HairSalonProducts';
import { HairSalonCallToAction } from '@/themes/hair-salon/components/HairSalonCallToAction';
import { HairSalonFooter } from '@/themes/hair-salon/components/HairSalonFooter';

export default function ServicesPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen text-[#352F2A] selection:bg-[#C4A484] selection:text-[#352F2A]">
      <HairSalonHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-8 bg-[#352F2A] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C4A484]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Hizmetlerimiz</h1>
          <p className="font-sans font-light text-[#FDFBF7]/60 max-w-xl mx-auto">
            Sağlıklı saçın lüksün temeli olduğuna inanıyoruz. Size özel hazırladığımız bakım ve tasarım menüsünü keşfedin.
          </p>
        </div>
      </section>

      <HairSalonRitual />
      <HairSalonServices />
      <HairSalonProducts />
      
      <HairSalonCallToAction />
      <HairSalonFooter />
    </main>
  );
}
