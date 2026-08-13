import { HairSalonHeader } from '@/themes/hair-salon/components/HairSalonHeader';
import { HairSalonPhilosophy } from '@/themes/hair-salon/components/HairSalonPhilosophy';
import { HairSalonCallToAction } from '@/themes/hair-salon/components/HairSalonCallToAction';
import { HairSalonFooter } from '@/themes/hair-salon/components/HairSalonFooter';

export default function AboutPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen text-[#352F2A] selection:bg-[#C4A484] selection:text-[#352F2A]">
      <HairSalonHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-8 bg-[#352F2A] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C4A484]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Hakkımızda</h1>
          <p className="font-sans font-light text-[#FDFBF7]/60 max-w-xl mx-auto">
            Güzellik anlayışımızın temeline sağlığı ve doğallığı koyduğumuz, Paris zarafetini taşıyan stüdyomuza hoş geldiniz.
          </p>
        </div>
      </section>

      <HairSalonPhilosophy />
      
      {/* Extended Text Section */}
      <section className="py-32 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-[#352F2A] mb-8">Vizyonumuz</h2>
        <p className="font-sans font-light text-[#352F2A]/70 leading-relaxed text-lg mb-8">
          Eclat Hair Studio, sadece bir saç tasarım merkezi değil, aynı zamanda kendinizi bulduğunuz bir arınma noktasıdır. Dünyaca ünlü teknikleri, sürdürülebilir ve %100 vegan ürünlerle harmanlıyoruz. Amacımız, her misafirimizin kendi benzersiz güzelliğini keşfetmesini sağlamaktır.
        </p>
      </section>

      <HairSalonCallToAction />
      <HairSalonFooter />
    </main>
  );
}
