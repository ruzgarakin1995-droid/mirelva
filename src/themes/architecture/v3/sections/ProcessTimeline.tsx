export default function ProcessTimeline() {
  return (
    <section className="py-40 px-8 lg:px-16 bg-[#111] text-[#f4f4f0]">
      <h2 className="text-8xl font-bold uppercase mb-20">Süreç</h2>
      <div className="space-y-12 border-l-2 border-[#333] pl-8 ml-4">
        {[
          { step: '01', title: 'Araştırma & Kazı', desc: 'Arazinin ruhunu okumak, bağlamı deşifre etmek.' },
          { step: '02', title: 'Kavramsal Çizim', desc: 'İlk çizgiler, radikal fikirlerin saf hali.' },
          { step: '03', title: 'Hacimsel Analiz', desc: '3D maketler ile kütle boşluk dengesi.' },
          { step: '04', title: 'Uygulama', desc: 'Betonun dökülmesi, çeliğin bükülmesi.' }
        ].map((p, i) => (
          <div key={i} className="group relative">
            <div className="absolute -left-[42px] top-3 w-5 h-5 bg-[#111] border-2 border-[#555] group-hover:bg-[#f4f4f0] group-hover:border-[#f4f4f0] transition-colors duration-300" />
            <h3 className="text-4xl font-bold uppercase"><span className="text-[#555] mr-4">{p.step}</span>{p.title}</h3>
            <p className="text-xl mt-4 text-[#aaa] max-w-xl">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
