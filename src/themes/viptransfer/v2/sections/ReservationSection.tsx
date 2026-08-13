import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import './ReservationSection.css';

export default function ReservationSection() {
  return (
    <section className="reservation-wrapper">
      <div className="reservation-container glass-card">
        <h2 className="reservation-title">Yolculuğunuzu Planlayın</h2>
        <form className="reservation-form">
          <div className="form-group">
            <label><MapPin size={16} /> Alınış Noktası</label>
            <input type="text" placeholder="Havalimanı, Otel veya Adres" />
          </div>
          <div className="form-group">
            <label><MapPin size={16} /> Varış Noktası</label>
            <input type="text" placeholder="Havalimanı, Otel veya Adres" />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label><Calendar size={16} /> Tarih</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label><Clock size={16} /> Saat</label>
              <input type="time" />
            </div>
            <div className="form-group">
              <label><Users size={16} /> Yolcu Sayısı</label>
              <select>
                <option>1-2 Yolcu</option>
                <option>3-4 Yolcu</option>
                <option>5-7 Yolcu</option>
              </select>
            </div>
          </div>
          
          <button type="button" className="gold-button full-width">Müsait Araçları Gör</button>
        </form>
      </div>
    </section>
  );
}
