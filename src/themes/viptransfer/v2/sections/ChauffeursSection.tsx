import React from 'react';
import './ChauffeursSection.css';

export default function ChauffeursSection() {
  const chauffeurs = [
    {
      name: "Alexander",
      languages: "İngilizce, Almanca",
      experience: "15+ Yıl",
      img: "https://images.unsplash.com/photo-1563240619-44ce02d36ab6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Marcus",
      languages: "İngilizce, Fransızca",
      experience: "10+ Yıl",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section className="vip-section chauffeurs-section">
      <h3 className="vip-section-subtitle">Ekibimiz</h3>
      <h2 className="vip-section-title">Profesyonel Şoförler</h2>
      <div className="chauffeurs-grid">
        {chauffeurs.map((c, idx) => (
          <div key={idx} className="chauffeur-card glass-card">
            <div className="chauffeur-image">
              <img src={c.img} alt={c.name} />
            </div>
            <div className="chauffeur-info">
              <h4>{c.name}</h4>
              <p>Diller: <span className="gold-text">{c.languages}</span></p>
              <p>Deneyim: <span className="gold-text">{c.experience}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
