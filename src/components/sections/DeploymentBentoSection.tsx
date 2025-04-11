import React from 'react';
import { Rocket, Layout, Globe, Shield } from 'lucide-react';
import styles from './DeploymentBentoSection.module.css';

const DeploymentBentoSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Deployments made easy</h2>
          <p className={styles.subtitle}>Deploy with ease, leave complexities to us.</p>
        </div>

        <div className={styles.grid}>
          {/* First row - first card */}
          <div className={styles.cardGreen}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Rocket style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
                </div>
                <h3 className={styles.cardTitle}>Lansare în 3 pași simplii</h3>
              </div>
              <p className={styles.cardDescription}>
                1. Încarcă codul tău<br/>
                2. Configurează domeniul<br/>
                3. Apasă "Lansează"
              </p>
            </div>
          </div>
          
          {/* First row - second card */}
          <div className={styles.cardPurple}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Layout style={{ width: '2rem', height: '2rem', color: '#9333ea' }} />
                </div>
                <h3 className={styles.cardTitle}>Design Intuitiv</h3>
              </div>
              <p className={styles.cardDescription}>
                Interfață prietenoasă care te ghidează prin fiecare pas al procesului de lansare.
              </p>
            </div>
          </div>

          {/* Second row - first card */}
          <div className={styles.cardBlue}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Globe style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
                </div>
                <h3 className={styles.cardTitle}>Domeniu Propriu</h3>
              </div>
              <p className={styles.cardDescription}>
                Conectează-ți propriul domeniu sau alege unul nou direct din platformă.
              </p>
            </div>
          </div>

          {/* Second row - second card */}
          <div className={styles.cardOrange}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <Shield style={{ width: '2rem', height: '2rem', color: '#ea580c' }} />
                </div>
                <h3 className={styles.cardTitle}>Securitate avansată</h3>
              </div>
              <p className={styles.cardDescription}>
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