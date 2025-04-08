import React, { useRef, useState, useEffect, useCallback } from "react";
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
    managementImage: "/gym-soon.png",
    label: "Fitness Center",
    logo: "/gym-mananager.png",
    address: "https://demo.fitness.com",
  },
  {
    managementImage: "/salon-soon.png",
    label: "Hotel Management",
    logo: "/salon-manager.png",
    address: "https://demo.hotel.com",
  },
];

const StackedImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calculateOffset = useCallback(() => {
    if (containerRef.current && trackRef.current && itemRefs.current[currentIndex]) {
      const containerWidth = containerRef.current.offsetWidth;
      const currentItemElement = itemRefs.current[currentIndex];

      if (currentItemElement) {
          const itemWidth = currentItemElement.offsetWidth;
          const itemLeft = currentItemElement.offsetLeft;
          const newOffset = containerWidth / 2 - itemLeft - itemWidth / 2;
          setOffset(newOffset);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, comparisons.length);
  }, []);

  useEffect(() => {
    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, [currentIndex, calculateOffset]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1)),
  });

  return (
    <div className="carousel-container">
      {/* The main frame/viewport for the carousel */}
      <div className="carousel-frame" {...swipeHandlers} ref={containerRef}>
        {/* The track that moves horizontally */}
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              ref={el => itemRefs.current[index] = el}
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

      {/* Logo navigation */}
      <div className="logo-boxes">
        {comparisons.map((comparison, index) => (
          <div
            key={index}
            className={`logo-box ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={comparison.logo} alt={comparison.label} className="logo-box-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedImageSlider;