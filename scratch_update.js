const fs = require('fs');
const path = 'src/app/test-ecommerce-v2/page.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('FadeIn')) {
  content = content.replace('import { motion } from \'framer-motion\';', 'import { motion } from \'framer-motion\';\nimport { FadeIn } from \'@/components/ecommerce/shared/FadeIn\';');
}

const sections = [
  '{/* Trust Badges */}',
  '{/* Flash Deals */}',
  '{/* Category Banner */}',
  '{/* Best Sellers */}'
];

sections.forEach(sec => {
  if (content.includes(sec)) {
    const regex = new RegExp('(' + sec.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\s*<section[\\s\\S]*?</section>)', 'g');
    content = content.replace(regex, '<FadeIn delay={0.1}>\n      $1\n      </FadeIn>');
  }
});

const ecosystemSection = `      {/* Ecosystem Section */}
      <FadeIn delay={0.1}>
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Kesintisiz Deneyim</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">LOCİZSA. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ekosistemi</span></h2>
            <p className="text-slate-400 font-light leading-relaxed text-lg">Tüm cihazlarınız birbiriyle kusursuz bir uyum içinde çalışır. İşinizi, eğlencenizi ve yaşamınızı tek bir merkezden, akıllıca yönetin.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
             <div className="md:col-span-8 bg-slate-800 rounded-3xl p-10 relative overflow-hidden group">
                <div className="relative z-10 max-w-sm">
                   <h3 className="text-2xl font-bold mb-3">Akıllı Evinizin Kalbi</h3>
                   <p className="text-slate-400 mb-6">Tek dokunuşla tüm akıllı ev aletlerinizi kontrol edin. Güvenlik, aydınlatma ve iklimlendirme parmaklarınızın ucunda.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop" className="absolute right-0 bottom-0 w-2/3 h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 rounded-tl-3xl" />
             </div>
             
             <div className="md:col-span-4 grid grid-rows-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end">
                   <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">Mobil Özgürlük</h3>
                      <p className="text-blue-100 text-sm">Gittiğiniz her yerde gücünüzü koruyun.</p>
                   </div>
                </div>
                
                <div className="bg-slate-800 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end">
                   <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-white">Giyilebilir Teknoloji</h3>
                      <p className="text-slate-400 text-sm">Sağlığınız ve bildirimleriniz her an bileğinizde.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      </FadeIn>`;

content = content.replace(/\s*<FadeIn delay={0.1}>\s*{\/\* Best Sellers \*\/}/, '\n\n' + ecosystemSection + '\n\n      <FadeIn delay={0.1}>\n      {/* Best Sellers */}');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated page.tsx');
