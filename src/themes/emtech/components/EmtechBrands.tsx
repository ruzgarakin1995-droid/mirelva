"use client";
import React from 'react';
import Image from 'next/image';

const brands = [
  { name: "Apple", src: "/emtech-assets/markalar/markalar-apple-icon-1230.png" },
  { name: "Samsung", src: "/emtech-assets/markalar/markalar-samsung-icon-1231.png" },
  { name: "Xiaomi", src: "/emtech-assets/markalar/markalar-mi-icon-1232.png" },
  { name: "Redmi", src: "/emtech-assets/markalar/markalar-redmi-icon-1233.png" },
  { name: "Huawei", src: "/emtech-assets/markalar/markalar-huawei-icon-1239.png" },
  { name: "Oppo", src: "/emtech-assets/markalar/markalar-oppo-icon-1234.png" },
  { name: "Vivo", src: "/emtech-assets/markalar/markalar-vivo-icon-1236.png" },
  { name: "General Mobile", src: "/emtech-assets/markalar/markalar-general-mobile-icon-1240.png" },
  { name: "Casper", src: "/emtech-assets/markalar/markalar-casper-icon-1237.png" },
  { name: "Reeder", src: "/emtech-assets/markalar/markalar-reeder-icon-1235.png" },
  { name: "Omix", src: "/emtech-assets/markalar/markalar-omix-icon-1238.png" },
];

export function EmtechBrands() {
  return (
    <section className="py-10 bg-zinc-50 border-t border-b border-zinc-200 overflow-hidden relative z-20">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 text-center">
        <h4 className="font-mono text-[10px] text-zinc-400 tracking-[0.2em] uppercase">Uyumlu Yedek Parça Markaları</h4>
      </div>

      <div className="flex w-full overflow-hidden">
        {/* CSS-only marquee for max performance */}
        <div className="flex animate-[scroll_15s_linear_infinite] whitespace-nowrap">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-16 px-12">
              <div className="relative w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image src={brand.src} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll_15s_linear_infinite] whitespace-nowrap" aria-hidden="true">
          {brands.map((brand, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-16 px-12">
              <div className="relative w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image src={brand.src} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
