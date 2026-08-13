export default function PhilosophyGrid() {
  return (
    <section className="py-40 px-8 lg:px-16 bg-[#f4f4f0] text-[#111]">
      <div className="grid grid-cols-12 gap-y-16 md:gap-8 border-t-2 border-[#111] pt-16">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h3 className="text-3xl font-bold uppercase mb-4">01. Kütle</h3>
          <p className="text-lg">Yerçekimine meydan okuyan, arazinin doğal bir uzantısı gibi duran ağır formlar.</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h3 className="text-3xl font-bold uppercase mb-4">02. Işık</h3>
          <p className="text-lg">Mekanı tanımlayan yegane araç. Gölgenin keskinliğiyle var olan formlar.</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h3 className="text-3xl font-bold uppercase mb-4">03. Malzeme</h3>
          <p className="text-lg">Ham beton, paslanmaz çelik ve işlenmemiş ahşabın saf poetikası.</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h3 className="text-3xl font-bold uppercase mb-4">04. Bağlam</h3>
          <p className="text-lg">Geçmişe saygı duyan ancak geleceği dikte eden radikal müdahaleler.</p>
        </div>
      </div>
    </section>
  );
}
