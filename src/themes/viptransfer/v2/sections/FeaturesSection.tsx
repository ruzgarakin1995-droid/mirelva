import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield size={32} className="gold-text" />,
      title: "Mutlak Gizlilik",
      description: "Gizliliğiniz en büyük önceliğimizdir. Şoförlerimiz, tam bir mahremiyet sağlamak üzere özel olarak eğitilmiştir."
    },
    {
      icon: <Star size={32} className="gold-text" />,
      title: "Kusursuz Standartlar",
      description: "Her aracımız titizlikle bakımdan geçirilir ve yolculuğunuz için kusursuz bir ortam sunar."
    },
    {
      icon: <Clock size={32} className="gold-text" />,
      title: "Daima Dakik",
      description: "Zamanında varış garantisi veriyoruz. Zamanınız çok değerli, bu bilinçle hareket ediyoruz."
    }
  ];

  return (
    <section className="vip-section features-section">
      <h3 className="vip-section-subtitle">Neden Biz?</h3>
      <h2 className="vip-section-title">Mükemmellik Standardı</h2>
      <div className="features-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="feature-card glass-card">
            <div className="feature-icon">{feat.icon}</div>
            <h4 className="feature-title">{feat.title}</h4>
            <p className="feature-desc">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
