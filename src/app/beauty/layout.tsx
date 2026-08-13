import Link from 'next/link';

export const metadata = {
  title: 'Lumière Beauty & Clinic',
  description: 'Premium Güzellik ve Klinik Merkezi',
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FCFAEF] text-gray-800 selection:bg-[#E8C5C8] selection:text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F2DFE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/beauty" className="text-3xl font-light tracking-widest text-[#B47C84]">
                LUMIÈRE<span className="font-semibold text-gray-900">CLINIC</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/beauty" className="text-sm font-medium text-gray-600 hover:text-[#B47C84] transition-colors duration-300">
                ANA SAYFA
              </Link>
              <Link href="/beauty/services" className="text-sm font-medium text-gray-600 hover:text-[#B47C84] transition-colors duration-300">
                HİZMETLERİMİZ
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[#B47C84] transition-colors duration-300">
                HAKKIMIZDA
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-[#B47C84] transition-colors duration-300">
                İLETİŞİM
              </Link>
            </nav>
            <div className="hidden md:flex">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-[#B47C84] hover:bg-[#A36C74] shadow-sm transition-all duration-300 hover:shadow-md"
              >
                RANDEVU AL
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF5F6] border-t border-[#F2DFE1] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/beauty" className="text-2xl font-light tracking-widest text-[#B47C84] block mb-4">
                LUMIÈRE<span className="font-semibold text-gray-900">CLINIC</span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Size özel hazırlanan medikal estetik ve güzellik ritüellerimizle, içsel ışıltınızı dışarı yansıtın. Uzman kadromuzla yanınızdayız.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Menü</h3>
              <ul className="space-y-3">
                <li><Link href="/beauty" className="text-sm text-gray-500 hover:text-[#B47C84] transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/beauty/services" className="text-sm text-gray-500 hover:text-[#B47C84] transition-colors">Hizmetlerimiz</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#B47C84] transition-colors">Hakkımızda</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#B47C84] transition-colors">Randevu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">İletişim</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-500">Nişantaşı, Şişli / İstanbul</li>
                <li className="text-sm text-gray-500">info@lumiereclinic.com</li>
                <li className="text-sm text-gray-500">+90 (212) 555 00 00</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#F2DFE1] flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Lumière Clinic. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
