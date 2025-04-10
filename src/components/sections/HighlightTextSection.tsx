import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './HighlightTextSection.css'; // Create this CSS file

// Define the text lines
const textLines = [
  "Construiește experiențe digitale remarcabile.",
  "Platforma noastră îți oferă uneltele",
  "și flexibilitatea necesare pentru a inova",
  "rapid și eficient, transformând",
  "viziunile complexe în realitate."
];

interface HighlightSpanProps {
  line: string;
  bgPositionX: MotionValue<string>;
}

// Component for each animated line
const HighlightSpan: React.FC<HighlightSpanProps> = ({ line, bgPositionX }) => {
  return (
    <motion.span
      className="highlight-text-line"
      style={{ '--bg-pos-x': bgPositionX } as React.CSSProperties}
    >
      {line}
    </motion.span>
  );
};

const HighlightTextSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the entire section height (0 to 1 over 300vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'] 
  });

  // --- Recalculate Stagger based on Sticky Duration --- 
  const numLines = textLines.length;
  const animationOverlap = 0.6; // How much animations overlap

  // Define the effective progress range where the text is sticky and animation happens
  const animationStartProgress = 0; // Starts when sticky starts
  const animationEndProgress = 2/3; // Ends when sticky ends (200vh / 300vh)
  const animationEffectiveRange = animationEndProgress - animationStartProgress; // = 2/3

  // Calculate duration for each line's animation within the effective range
  const baseDurationPerLine = animationEffectiveRange / (1 + (numLines - 1) * (1 - animationOverlap));

  // Create an array of backgroundPositionX transforms, one for each line
  const backgroundPositions = textLines.map((_, index) => {
    // Calculate start and end points within the [0, 2/3] range
    const start = animationStartProgress + index * (1 - animationOverlap) * baseDurationPerLine;
    const end = start + baseDurationPerLine;
    
    // Clamp values just in case to stay within the overall section progress [0, 1]
    // Although they should naturally fall within [0, 2/3] with correct calculation
    const clampedStart = Math.max(0, start);
    const clampedEnd = Math.min(1, end);

    // Map the calculated progress range [clampedStart, clampedEnd] back to background position [0%, 100%]
    return useTransform(scrollYProgress, [clampedStart, clampedEnd], ['100%', '0%']);
  });
  // --- End Recalculation --- 

  return (
    // Section needs significant height to allow scrolling *through* it
    <section ref={containerRef} className="highlight-text-section">
      {/* Sticky container keeps the text centered while scrolling through the section */}
      <div className="highlight-sticky-container">
        {/* Container for the text block itself */}
        <div className="highlight-text-block">
          {textLines.map((line, index) => (
            <HighlightSpan key={index} line={line} bgPositionX={backgroundPositions[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightTextSection; 