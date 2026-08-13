"use client";

import React from 'react';
import { Package, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: <Package className="w-8 h-8 text-black mb-4" />,
    title: 'Ücretsiz Kargo',
    description: 'Tüm yurt içi siparişlerinizde ücretsiz kargo ayrıcalığı.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-black mb-4" />,
    title: 'Güvenli Ödeme',
    description: '256-bit şifreleme ile %100 güvenli alışveriş deneyimi.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-black mb-4" />,
    title: 'Kolay İade',
    description: '30 gün içinde koşulsuz ücretsiz iade ve değişim hakkı.'
  },
  {
    icon: <Clock className="w-8 h-8 text-black mb-4" />,
    title: '7/24 Destek',
    description: 'Özel müşteri temsilciniz ile kesintisiz iletişim.'
  }
];

export default function PremiumServices() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center transform transition-transform group-hover:-translate-y-2 duration-300">
                {service.icon}
              </div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

