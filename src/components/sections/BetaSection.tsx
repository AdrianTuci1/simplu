import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BetaSection.css';

const BetaSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const mainContent = document.getElementById('main-content');
          if (entry.isIntersecting && mainContent) {
            mainContent.style.transform = 'scale(0.95)';
            mainContent.style.opacity = '0.8';
          } else if (mainContent) {
            mainContent.style.transform = 'scale(1)';
            mainContent.style.opacity = '1';
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.beta-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Creăm un array cu mai multe repetări pentru a asigura o animație continuă
  const repeatedText = Array(8).fill("Ia parte la test! ✦ ");

  return (
    <div className="bg-black">
      <section className="beta-section relative py-16 bg-white text-black overflow-hidden rounded-b-[3rem]">
        <div 
          className="text-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="sliding-text-container">
            <div className="sliding-text">
              {repeatedText.map((text, index) => (
                <span key={index} className="text-[12rem] font-black">
                  {text}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="mt-8 relative z-10"
          >
            <button className="bg-black text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors">
              Mă bag
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BetaSection; 