import Link from 'next/link';
import { motion } from 'framer-motion';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], weight: ['300'] });

export function LasisHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        />
        {/* Soft overlay to make text readable */}
        <div className="absolute inset-0 bg-[#3E2B2B]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF5F0]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-[#FDFCF9] mb-4 drop-shadow-lg leading-[1.1]">
            Kendinizi <br className="md:hidden"/>
            <span className="italic text-[#D4A373] drop-shadow-[0_4px_8px_rgba(62,43,43,0.6)]">Özel Hissedin.</span>
          </h2>
          <p className={`${jost.className} tracking-[0.05em] text-lg md:text-xl text-[#FDFCF9]/95 max-w-2xl mx-auto mb-10 drop-shadow-md leading-[1.8] font-light`}>
            Q-Switch Lazer, Masseter Botoksu ve Karbon Peeling gibi yenilikçi medikal estetik uygulamalarıyla kusursuz bir görünüme kavuşun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-6">
            <Link href="/lasis-klinik/hizmetler" className="inline-flex items-center justify-center border border-[#FDFCF9]/60 text-[#FDFCF9] font-sans font-medium text-[10px] tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#FDFCF9] hover:text-[#3E2B2B] transition-all duration-500 backdrop-blur-sm">
              Tüm Hizmetler
            </Link>
            <button onClick={() => window.dispatchEvent(new Event('openLasisBooking'))} className="inline-flex items-center justify-center bg-[#D4A373] text-[#FDFCF9] font-sans font-medium text-[10px] tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#3E2B2B] hover:border-[#3E2B2B] transition-all duration-500 shadow-lg border border-[#D4A373]">
              Randevu Al
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
