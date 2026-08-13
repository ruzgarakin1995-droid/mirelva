const fs = require('fs');

const pagePath = 'src/app/test-ecommerce-v2/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

// The section to remove starts with {/* 5. Sustainability (Apple Green Theme) */}
// and ends right before {/* (Trust badges were removed from here...

const replacementCode = `
      {/* New Detail Area: Ecosystem Integration */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Kusursuz Ekosistem.</h2>
                  <p className="text-lg text-slate-400">Tüm cihazlarınız birbiriyle mükemmel uyum içinde çalışır.</p>
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <FadeIn delay={0.1} className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between h-[400px] group relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                     <Laptop className="text-blue-500 w-10 h-10 mb-4" />
                     <h3 className="text-2xl font-bold mb-2">Çalışma İstasyonu</h3>
                     <p className="text-slate-400">MacBook ve harici monitörünüzle profesyonel stüdyonuzu her yere taşıyın.</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                     <div className="text-blue-500 font-semibold group-hover:underline cursor-pointer flex items-center gap-1">
                        Keşfet <ArrowRight size={16} />
                     </div>
                  </div>
               </FadeIn>
               <FadeIn delay={0.2} className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between h-[400px] group relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                     <Smartphone className="text-purple-500 w-10 h-10 mb-4" />
                     <h3 className="text-2xl font-bold mb-2">Mobil Özgürlük</h3>
                     <p className="text-slate-400">Telefonunuzdan başlattığınız bir işi anında bilgisayarınızdan tamamlayın.</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                     <div className="text-purple-500 font-semibold group-hover:underline cursor-pointer flex items-center gap-1">
                        Keşfet <ArrowRight size={16} />
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* Infinite Marquee Product Scroll (Soldan Sağa) */}
      <section className="py-20 bg-black overflow-hidden border-t border-zinc-900">
         <FadeIn>
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-4xl font-bold">Vitrin Ürünleri</h2>
               <p className="text-slate-400 mt-2">Göz atmanız gereken en seçkin teknolojiler</p>
            </div>
         </FadeIn>
         
         <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-black after:to-transparent">
            {/* 
              Soldan sağa akması için x: ["-50%", "0%"]
              İçerikteki ürünlerin pürüzsüz dönmesi için listeyi 4 kez kopyaladık (ekranı kaplaması için). 
            */}
            <motion.div 
               animate={{ x: ["-50%", "0%"] }} 
               transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
               className="flex gap-6 w-max"
            >
               {[...techProducts, ...techProducts, ...techProducts, ...techProducts].map((product, i) => (
                  <div key={i} className="w-[300px] shrink-0">
                     <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden pointer-events-auto hover:border-blue-500/50 transition-colors">
                        <TechProductCard product={product} />
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>
`;

// Extract everything before the sustainability section
const parts = page.split('{/* 5. Sustainability (Apple Green Theme) */}');
if (parts.length === 2) {
    const endParts = parts[1].split('{/* (Trust badges were removed from here per user request, as they are already in the TechFooter component) */}');
    const newPage = parts[0] + replacementCode + '\n      {/* (Trust badges were removed from here per user request, as they are already in the TechFooter component) */}' + endParts[1];
    fs.writeFileSync(pagePath, newPage, 'utf8');
    console.log("Successfully replaced sustainability section with Ecosystem and Infinite Marquee sections.");
} else {
    console.log("Could not find the target section.");
}
