import React from 'react';
import { Plane } from 'lucide-react';
import './FlightTrackingSection.css';

export default function FlightTrackingSection() {
  return (
    <section className="vip-section flight-section">
      <div className="flight-container glass-card">
        <div className="flight-content">
          <Plane size={48} className="gold-text flight-icon" />
          <h2 className="vip-section-title" style={{textAlign: 'left'}}>Canlı Uçuş Takibi</h2>
          <p className="flight-desc">
            Uçuşunuzu gerçek zamanlı olarak takip ediyoruz. Erken veya geç varmanız fark etmeksizin, şoförünüz sizi bekliyor olacak ve kusursuz bir bağlantı sağlayacaktır.
          </p>
          <div className="flight-input-group">
            <input type="text" placeholder="Uçuş Numarasını Girin (Örn: TK1991)" className="flight-input" />
            <button className="gold-button">Durumu Sorgula</button>
          </div>
        </div>
      </div>
    </section>
  );
}
