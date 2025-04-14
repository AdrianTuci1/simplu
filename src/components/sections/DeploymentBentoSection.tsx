import React from 'react';
import { Rocket, Layout, Globe, Shield } from 'lucide-react';
import styles from './DeploymentBentoSection.module.css';
import ChromeWindow from '@/components/ui/ChromeWindow';
import ConnectedSteps from '@/components/ui/ConnectedSteps';
import EncryptedLock from '@/components/ui/EncryptedLock';
import TabletMockup from '../mockups/TabletMockup';

const DeploymentBentoSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>
          <div className={styles.gridRow}>
            {/* First row - 70% card */}
            <div className={styles.cardGreen}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <Rocket style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
                  </div>
                  <h3 className={styles.cardTitle}>Lansare în 3 pași simplii</h3>
                </div>
                <p className={styles.cardDescription}>Lasa complicatiile in seama noastra si incepe sa lucrezi in doar 3 pasi.</p>
                <div className="mt-4">
                  <ConnectedSteps />
                </div>
              </div>
            </div>
            
            {/* First row - 30% card */}
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
                <div className='mt-4'>
                  <TabletMockup />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.gridRow}>
            {/* Second row - 30% card */}
            <div className={styles.cardBlue}>
            <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Shield style={{ width: '2rem', height: '2rem', color: '#ea580c' }} />
              </div>
              <h3 className={styles.cardTitle}>Securitate avansată</h3>
            </div>
            <p className={styles.cardDescription}>
              Datele tale sunt criptate end-to-end. Nici măcar noi nu le putem accesa, dar sunt mereu disponibile pentru tine si pot fi descarcate.
            </p>
            <div className="mt-4 flex justify-center">
              <EncryptedLock />
            </div>
            </div>
            </div>

            {/* Second row - 70% card */}
            <div className={styles.cardOrange}>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <Globe style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
                  </div>
                  <h3 className={styles.cardTitle}>Domeniu Propriu</h3>
                </div>
                <p className={styles.cardDescription}>
                  Conectează-ți propriul domeniu sau foloseste-l pe cel oferit de noi.
                </p>
                <div className={styles.chromeWindowContainer}>
                  <ChromeWindow domain="your-business.com" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentBentoSection; 


