import React from 'react';
import './BentoSection.css';

const BentoSection: React.FC = () => {
  return (
    <section className="bento-section">
      <div className="bento-container">
        {/* First row - full width */}
        <div className="bento-item full-width">
          <div className="bento-content">
            <h2 className="bento-title">Soluții personalizate pentru afacerea ta</h2>
            <p className="bento-description">
              Platforma noastră se adaptează nevoilor specifice ale afacerii tale,
              oferind funcționalități dedicate pentru fiecare domeniu.
            </p>
            <button className="bento-button">Află mai multe</button>
          </div>
        </div>
        
        {/* Second row - two windows */}
        <div className="bento-row">
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-subtitle">Gestionare simplificată</h3>
              <p className="bento-description">
                Administrează programări, clienți și resurse într-un singur loc,
                fără complicații.
              </p>
              <button className="bento-button secondary">Explorează</button>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="bento-content">
              <h3 className="bento-subtitle">Analiză avansată</h3>
              <p className="bento-description">
                Obține insights valoroase despre performanța afacerii tale
                cu rapoarte detaliate și statistici în timp real.
              </p>
              <button className="bento-button secondary">Vezi exemple</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection; 