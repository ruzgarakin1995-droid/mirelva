export default function ContactMassive() {
  return (
    <section className="py-40 px-8 lg:px-16 bg-[#111] text-[#f4f4f0]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[10vw] font-bold uppercase leading-none hover:text-[#555] transition-colors duration-500 cursor-pointer">
          BİZE YAZIN
        </h2>
        <div className="mt-16 w-full max-w-2xl h-[2px] bg-[#333] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#f4f4f0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        </div>
      </div>
    </section>
  );
}
