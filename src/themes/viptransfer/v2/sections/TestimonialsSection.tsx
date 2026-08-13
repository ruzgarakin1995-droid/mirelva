import React from 'react';
import { Quote } from 'lucide-react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Şimdiye kadar deneyimlediğim en kusursuz ve gizliliğe önem veren transfer hizmeti. Detaylara verdikleri önem gerçekten rakipsiz.",
      author: "E. Rothschild",
      role: "Yönetici"
    },
    {
      text: "Dakik, profesyonel ve lüks. Araçlar tertemiz ve şoförler dünya standartlarında.",
      author: "A. Sterling",
      role: "CEO"
    }
  ];

  return (
    <section className="vip-section testimonials-section">
      <h3 className="vip-section-subtitle">Müşterilerimiz</h3>
      <h2 className="vip-section-title">Prestijli Yorumlar</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card glass-card">
            <Quote size={32} className="gold-text quote-icon" />
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <h4>{t.author}</h4>
              <span className="gold-text">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
