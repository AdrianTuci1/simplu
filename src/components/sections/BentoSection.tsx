import React from 'react';
import styles from './BentoSection.module.css';

const BentoSection: React.FC = () => {
  return (
    <section className={styles.bentoSection}>
      <div className={styles.bentoContainer}>
        {/* First row - full width */}
        <div className={`${styles.bentoItem} ${styles.fullWidth}`}>
          <div className={`${styles.bentoContent} ${styles.twoColumns}`}>
            <div className={styles.column}>
              <span className={styles.smallText}> ✧ VEZI INFORMATIILE</span>
              <h3 className={styles.bentoSubtitle}>Design de top accesibil tuturor</h3>
              <p className={styles.bentoDescription}>
                Componentele sunt create cu precizie pentru a oferi o experiență plăcută și intuitivă clienților tăi.
              </p>
            </div>
            <div className={styles.column}>
              <div className={styles.purpleElement}>
                Element Mov
              </div>
            </div>
          </div>
        </div>
        
        {/* Second row - two windows */}
        <div className={styles.bentoRow}>
          <div className={styles.bentoItem}>
            <div className={styles.bentoContent}>
              <div className={styles.twoRows}>
                <div>
                  <div className={styles.purpleElement}>
                    Element Mov
                  </div>
                </div>
                <div>
                <span className={styles.smallText}> ✧ ADMINISTRARE</span>
                <h3 className={styles.bentoSubtitle}>Usor de administrat. <br/> Greu de gresit.</h3>
                  <p className={styles.bentoDescription}>
                    Administreaza programari, clienti si resurse intr-un singur loc, fara complicatii.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.bentoItem}>
            <div className={styles.bentoContent}>
              <div className={styles.twoRows}>
                <div>
                  <div className={styles.purpleElement}>
                    Element Mov
                  </div>
                </div>
                <div>
                  <span className={styles.smallText}> ✧ INTEGRARE</span>
                  <h3 className={styles.bentoSubtitle}>O fereastra catre munca ta</h3>
                  <p className={styles.bentoDescription}>
                    Sistemul nostru inteligent poate prelua rezervari, analiza preturi si promova afacerea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection; 