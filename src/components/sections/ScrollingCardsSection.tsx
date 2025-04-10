import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './ScrollingCardsSection.css'; // We will create this CSS file

interface CardData {
  id: number;
  column: number; // Now 1 through 6
  title: string;
  content: string;
  bgColor?: string; // Optional background color class
  size?: 'small' | 'medium' | 'large'; // Add size property
}

// Updated data for 11 cards across 6 columns (2, 2, 1, 2, 2, 2)
const cardData: CardData[] = [
  // Col 1 (2 cards)
  { id: 1, column: 1, title: 'Inspiration Board', content: 'Visual ideas.', bgColor: 'bg-blue-50', size: 'medium' },
  { id: 4, column: 1, title: 'Website Playground', content: 'Layout experiments.', bgColor: 'bg-purple-50', size: 'large' },
  // Col 2 (2 cards)
  { id: 7, column: 2, title: 'Client Feedback', content: 'User reviews.', bgColor: 'bg-red-50', size: 'small' },
  { id: 2, column: 2, title: 'Marketing Stats', content: 'KPI tracking.', bgColor: 'bg-green-50', size: 'large' },
  // Col 3 (1 card)
  { id: 5, column: 3, title: 'Traffic Sources', content: 'Acquisition channels.', bgColor: 'bg-pink-50', size: 'medium' },
  // Col 4 (2 cards)
  { id: 8, column: 4, title: 'Roadmap v2.0', content: 'Next quarter plans.', bgColor: 'bg-teal-50', size: 'medium' },
  { id: 3, column: 4, title: 'Project Timeline', content: 'Milestones.', bgColor: 'bg-yellow-50', size: 'small' },
  // Col 5 (2 cards)
  { id: 6, column: 5, title: 'Team Tasks', content: 'Assignments.', bgColor: 'bg-indigo-50', size: 'medium' },
  { id: 9, column: 5, title: 'Competitor Analysis', content: 'Market research.', bgColor: 'bg-orange-50', size: 'large' },
  // Col 6 (2 cards) - New cards
  { id: 10, column: 6, title: 'Feature Requests', content: 'User suggestions.', bgColor: 'bg-cyan-50', size: 'large' },
  { id: 11, column: 6, title: 'API Status', content: 'Service health.', bgColor: 'bg-lime-50', size: 'small' },
];

interface CardProps {
  data: CardData;
  yTransform: MotionValue<number>;
}

const Card: React.FC<CardProps> = ({ data, yTransform }) => {
  // Add size class, default to medium if not specified
  const sizeClass = `card-${data.size || 'medium'}`;

  return (
    <motion.div
      className={`card ${data.bgColor || 'bg-gray-50'} ${sizeClass}`}
      style={{ y: yTransform }} // Apply the transformed y value
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.02, opacity: 1, zIndex: 5 }} // Slightly less scale, add zIndex
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h3 className="card-title">{data.title}</h3>
      <p className="card-content">{data.content}</p>
      {/* Add more card elements here if needed */}
    </motion.div>
  );
};

const ScrollingCardsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'] // Animate throughout the section's visibility
  });

  // 6 transforms for 6 columns - adjust speeds as desired
  const cardYTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, -400]),  // Col 1 (Move more upward)
    useTransform(scrollYProgress, [0, 1], [-10, -180]), // Col 2 (Keep as is)
    useTransform(scrollYProgress, [0, 1], [-50, 0]),    // Col 3 (Move slightly down)
    useTransform(scrollYProgress, [0, 1], [0, 100]),    // Col 4 (Move slightly down)
    useTransform(scrollYProgress, [0, 1], [-10, -180]), // Col 5 (Keep as is)
    useTransform(scrollYProgress, [0, 1], [0, -400])    // Col 6 (Move more upward)
  ];

  // Remove text parallax transform
  // const textYTransform = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Group cards into 6 columns
  const columns = Array.from({ length: 6 }, (_, i) =>
    cardData.filter(card => card.column === i + 1)
  );

  return (
    <section ref={containerRef} className="scrolling-cards-section bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden relative">
      {/* Text Content Area - Now static positioning */}
      {/* Make it a regular div if no other animations planned */}
      <div className="text-content-area">
        <h2 className="section-title">Un mod nou și ușor de a crea.</h2>
        <p className="section-description">
          Explorează blocurile predefinite și construiește vizual interfețe complexe fără efort.
        </p>
      </div>

      {/* Cards Grid Area - Keep wide setup */}
      <div className="cards-grid-area">
        <div className="cards-grid cards-grid-6-cols"> {/* New class for 6 columns */} 
          {columns.map((columnCards, colIndex) => (
            // Pass the correct transform based on colIndex (0-5)
            <div key={colIndex} className={`cards-column column-${colIndex + 1}`}> {/* Add specific column class */} 
              {columnCards.map(card => (
                <Card key={card.id} data={card} yTransform={cardYTransforms[colIndex]} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingCardsSection; 