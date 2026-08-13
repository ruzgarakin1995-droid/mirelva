import React from 'react';
import './FleetSection.css';

export default function FleetSection() {
  const fleet = [
    {
      name: 'Mercedes-Benz S-Class',
      type: 'Lüks Sedan',
      pax: 3,
      bags: 2,
      img: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: 'Mercedes-Benz V-Class',
      type: 'VIP Minivan',
      pax: 7,
      bags: 7,
      img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <section className="vip-section fleet-section">
      <h3 className="vip-section-subtitle">Filomuz</h3>
      <h2 className="vip-section-title">Ödün Vermeyen Lüks</h2>
      
      <div className="fleet-grid">
        {fleet.map((vehicle, idx) => (
          <div key={idx} className="fleet-card glass-card">
            <div className="fleet-image-container">
              <img src={vehicle.img} alt={vehicle.name} className="fleet-img" />
            </div>
            <div className="fleet-details">
              <h4 className="fleet-name">{vehicle.name}</h4>
              <p className="fleet-type gold-text">{vehicle.type}</p>
              <div className="fleet-specs">
                <span>{vehicle.pax} Yolcu</span> • <span>{vehicle.bags} Bagaj</span>
              </div>
              <button className="outline-button" style={{width: '100%', marginTop: '1.5rem'}}>Araç Seçin</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
