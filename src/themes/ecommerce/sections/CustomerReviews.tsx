"use client";

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Elif Yılmaz',
    title: 'Kusursuz Kalite',
    comment: 'Bu kaliteyi başka bir yerde bulamadım. Tasarımından kumaş dokusuna kadar her detayda lüksü hissediyorsunuz. Kesinlikle favori markam.',
    rating: 5
  },
  {
    id: 2,
    name: 'Deniz Aksoy',
    title: 'Zarafetin Adresi',
    comment: 'Siparişimin paketlenmesinden ürünün kalitesine kadar her şey mükemmeldi. Üzerimde taşıdığım her parça bana kendimi çok özel hissettiriyor.',
    rating: 5
  },
  {
    id: 3,
    name: 'Zeynep Kaya',
    title: 'Zamanın Ötesinde Tasarımlar',
    comment: 'Modern ve klasik çizgilerin eşsiz uyumu. Hem ofiste hem özel davetlerde kullanabildiğim harika parçalar. Teşekkürler.',
    rating: 5
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Müşteri Deneyimleri</h2>
          <p className="text-gray-500 font-light tracking-wide">Lüksün tanımını baştan yazanların hikayeleri.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-10 shadow-sm border border-gray-50">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{review.title}</h3>
              <p className="text-gray-500 font-light mb-8 leading-relaxed italic">"{review.comment}"</p>
              <div className="text-sm font-medium uppercase tracking-widest">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

