import React from 'react';
import './ServicesSection.css';
import { Briefcase, Map, GlassWater } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Havalimanı Transferleri",
      icon: <Map size={40} />,
      desc: "Tüm ana havalimanlarına özel karşılama hizmetiyle sorunsuz ve dakik transferler."
    },
    {
      title: "Kurumsal Seyahat",
      icon: <Briefcase size={40} />,
      desc: "Modern iş seyahatleri için tasarlanmış kurumsal taşımacılık çözümleri."
    },
    {
      title: "Saatlik Tahsis",
      icon: <GlassWater size={40} />,
      desc: "İhtiyacınız olduğu sürece şoförünüzü hazır bulundurun. Şehir turları veya iş görüşmeleri için mükemmel."
    }
  ];

  return (
    <section className="vip-section services-section">
      <h3 className="vip-section-subtitle">Hizmetlerimiz</h3>
      <h2 className="vip-section-title">İhtiyaçlarınıza Özel</h2>
      <div className="services-grid">
        {services.map((svc, idx) => (
          <div key={idx} className="service-card glass-card">
            <div className="service-icon gold-text">{svc.icon}</div>
            <h4 className="service-title">{svc.title}</h4>
            <p className="service-desc">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
