import React from 'react';
import { Rocket, Layout, Globe, Shield } from 'lucide-react';
import './BentoSection.css';

const DeploymentBentoSection: React.FC = () => {
  return (
    <section className="bento-section bg-white py-20">
      <div className="bento-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Deployments made easy</h2>
          <p className="text-xl text-gray-600">Deploy with ease, leave complexities to us.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* First row - first card */}
          <div className="bento-item bg-gradient-to-br from-green-50 to-green-100">
            <div className="bento-content">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="bento-subtitle">Lansare în 3 pași simplii</h3>
              </div>
              <p className="bento-description">
                1. Încarcă codul tău<br/>
                2. Configurează domeniul<br/>
                3. Apasă "Lansează"
              </p>
            </div>
          </div>
          
          {/* First row - second card */}
          <div className="bento-item bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="bento-content">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Layout className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="bento-subtitle">Design Intuitiv</h3>
              </div>
              <p className="bento-description">
                Interfață prietenoasă care te ghidează prin fiecare pas al procesului de lansare.
              </p>
            </div>
          </div>

          {/* Second row - first card */}
          <div className="bento-item bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bento-content">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="bento-subtitle">Domeniu Propriu</h3>
              </div>
              <p className="bento-description">
                Conectează-ți propriul domeniu sau alege unul nou direct din platformă.
              </p>
            </div>
          </div>

          {/* Second row - second card */}
          <div className="bento-item bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="bento-content">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="bento-subtitle">Securitate avansată</h3>
              </div>
              <p className="bento-description">
                SSL gratuit, protecție DDoS și monitorizare continuă pentru site-ul tău.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentBentoSection; 