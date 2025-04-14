import React, { useRef, useState, useEffect } from "react";
import "./StackedImageSlider.css";
import { useSwipeable } from "react-swipeable";

interface ComparisonItem {
  managementImage: string;
  label: string;
  logo: string;
  address: string;
}

const comparisons: ComparisonItem[] = [
  {
    managementImage: "/prezentare.png",
    label: "DENTAL CLINIC",
    logo: "/logoclinic.png",
    address: "https://demo.dental.com",
  },
  {
    managementImage: "/hotel.png",
    label: "Fitness Center",
    logo: "/gym-mananager.png",
    address: "https://demo.fitness.com",
  },
  {
    managementImage: "/gym.png",
    label: "Hotel Management",
    logo: "/salon-manager.png",
    address: "https://demo.hotel.com",
  },
];

const StackedImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, comparisons.length);
  }, []);

  const handleCardClick = (index: number) => {
    if (!animating && index !== currentIndex) {
      setAnimating(true);
      setPreviousIndex(currentIndex);
      
      // Delay changing the current index to allow for animation
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setAnimating(false);
          setPreviousIndex(null);
        }, 300);
      }, 300);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!animating) {
        handleCardClick(currentIndex === comparisons.length - 1 ? 0 : currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (!animating) {
        handleCardClick(currentIndex === 0 ? comparisons.length - 1 : currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const getItemStyle = (index: number): React.CSSProperties => {
    // Calculate base visibility and position
    const isActive = index === currentIndex;
    const isPrevious = previousIndex !== null && index === previousIndex;
    
    // Calculate normalized position in stack (0 = current, 1 = next, 2 = next+1, n-1 = prev)
    let stackPosition = (index - currentIndex + comparisons.length) % comparisons.length;
    
    // Reorder so that we have: 0 = current, 1 = prev, 2 = prev-1, etc.
    // This makes it easier to stack cards behind current one
    if (stackPosition !== 0) {
      stackPosition = comparisons.length - stackPosition;
    }
    
    // Always show all cards (limited to maxVisibleCards)
    const maxVisibleCards = 4;
    const shouldShow = stackPosition < maxVisibleCards;
    
    // Base z-index - current card highest, others lower
    let zIndex = 100 - stackPosition * 10;
    
    // Hover effect raises z-index slightly
    if (hoverIndex === index && !isActive) {
      zIndex += 5;
    }
    
    // Position cards behind current one higher up (smaller values = higher on screen)
    // Space out the cards evenly
    const topOffset = stackPosition === 0 ? 0 : -60 * stackPosition;
    
    // Scale down cards that are behind - more gradually
    const scale = stackPosition === 0 ? 1 : Math.max(0.85, 1 - (stackPosition * 0.07));
    
    // Hover effect - lift card up slightly
    const hoverYOffset = hoverIndex === index && !isActive ? -15 : 0;
    
    // Animation when card is clicked
    let transform = `translate3d(0px, ${topOffset + hoverYOffset}px, 0px) scale(${scale})`;
    let opacity = shouldShow ? 1 : 0;
    
    // Animation for the card that was previously in front (moving out of the way)
    if (isPrevious && animating) {
      transform = `translate3d(0px, -120px, 100px) scale(1.2)`;
      opacity = 0;
      zIndex = 101; // Ensure it's above all other cards during animation
    }
    
    return {
      transform,
      opacity,
      zIndex,
      transformOrigin: 'center top',
      transition: animating ? 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'all 0.3s ease',
      boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.15)' : '0 5px 15px rgba(0, 0, 0, 0.1)',
      cursor: !isActive && shouldShow ? 'pointer' : 'default',
      pointerEvents: shouldShow ? 'auto' : 'none'
    };
  };

  return (
    <div className="carousel-container">
      <div className="carousel-frame" {...swipeHandlers} ref={containerRef}>
        <div className="carousel-stack-container">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`carousel-item 
                ${index === currentIndex ? "active" : ""} 
                ${hoverIndex === index ? "hover" : ""}
                ${previousIndex === index ? "exiting" : ""}`}
              ref={el => itemRefs.current[index] = el}
              style={getItemStyle(index)}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="carousel-item-inner">
                <img
                  src={comparison.managementImage}
                  alt={`${comparison.label} View`}
                  className="carousel-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedImageSlider;