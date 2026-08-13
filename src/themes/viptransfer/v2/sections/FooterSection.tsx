import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="vip-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>VIP Transfer</h2>
          <p>Lüks taşımacılığın zirvesi.</p>
        </div>
        <div className="footer-links">
          <h4>İletişim</h4>
          <p><Phone size={14}/> +1 (800) 123-4567</p>
          <p><Mail size={14}/> prestige@viptransfer.com</p>
          <p><MapPin size={14}/> 5th Avenue, New York, NY</p>
        </div>
        <div className="footer-links">
          <h4>Yasal Bilgiler</h4>
          <p>Gizlilik Politikası</p>
          <p>Hizmet Şartları</p>
          <p>Çerez Politikası</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VIP Transfer V2. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
