import React, { useEffect, useRef, useState } from "react";
import "./StackedImageSlider.css";
import { useSwipeable } from "react-swipeable";

interface ComparisonItem {
  managementImage: string;
  presentationImage: string;
  label: string;
  logo: string;
  address: string; // New address field for the demo button
}



const StackedImageSlider: React.FC = () => {
  const comparisons: ComparisonItem[] = [
    {
      managementImage: "/prezentare.png",
      presentationImage: "/acasa.png",
      label: "DENTAL CLINIC",
      logo: "/logoclinic.png",
      address: "https://demo.dental.com",
    },
    {
      managementImage: "/gym-soon.png",
      presentationImage: "/gym-soon.png",
      label: "Fitness Center",
      logo: "/gym-mananager.png",
      address: "https://demo.fitness.com",
    },
    {
      managementImage: "/salon-soon.png",
      presentationImage: "/salon-soon.png",
      label: "Hotel Management",
      logo: "/salon-manager.png",
      address: "https://demo.hotel.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handleBoxClick = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === comparisons.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? comparisons.length - 1 : prevIndex - 1
      );
    },
  });

  const parentRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState<number>(0);

  useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
    // Recalculate on window resize
    const handleResize = () => {
      if (parentRef.current) {
        setParentHeight(parentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="frame-container">
  
      {/* Main Frame with Swipe Handlers */}
      <div className="frame" {...swipeHandlers}>

        {/* Images */}
        <div className="image-container" ref={parentRef}>
      {/* Dashboard Image */}
      <div className="image dashboard">
        <img
          src={comparisons[currentIndex].managementImage}
          alt="Dashboard"
          className="management-image"
        />
      </div>

      {/* Overlay: Home Presentation Image */}
      <div className="image home"       style={{
        height: `${parentHeight}px`,}}>
        <img
          src={comparisons[currentIndex].presentationImage}
          alt="Home"
          className="presentation-image"
          style={{
            height: `${parentHeight}px`,}}
        />
              {/* Separator Line */}
      <div className="separator">
      </div>
      </div>
      </div>
    </div>
  
      {/* Logo Boxes: Positioned Underneath the Images */}
      <div className="logo-boxes">
        {comparisons.map((comparison, index) => (
          <div
            key={index}
            className={`logo-box ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleBoxClick(index)}
          >
            <img
              src={comparison.logo}
              alt={`Logo ${index}`}
              className="logo-box-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedImageSlider;