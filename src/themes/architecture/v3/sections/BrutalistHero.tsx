export default function BrutalistHero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-8 lg:px-16 bg-[#111] text-[#f4f4f0] uppercase tracking-tighter">
      <h1 className="text-[12vw] leading-[0.8] font-bold mix-blend-difference">
        MİMARİ<br />
        <span className="text-[#777]">YENİDEN</span><br />
        TANIMLANDI.
      </h1>
      <div className="mt-12 flex justify-between items-end border-t border-[#333] pt-8 group cursor-pointer">
        <p className="text-xl max-w-md">Saf form. İşlevin ötesinde bir varoluş. Kütle ve boşluğun diyalektiği.</p>
        <span className="text-4xl group-hover:translate-x-4 transition-transform duration-500">→</span>
      </div>
    </section>
  );
}
