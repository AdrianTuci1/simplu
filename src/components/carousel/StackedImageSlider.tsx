import React, { useState } from "react";
import { FaHome } from "react-icons/fa"; // React Icons
import "./StackedImageSlider.css";
import { MdDashboard } from "react-icons/md";
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
      presentationImage: "/imag2.png",
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
  const [isManagementFront, setIsManagementFront] = useState(true);

  const handleSwitch = (isManagement: boolean) => {
    setIsManagementFront(isManagement);
  };

  const handleBoxClick = React.useCallback((index: number) => {
    setCurrentIndex(index);
    setIsManagementFront(true);
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

  return (
    <div className="frame-container">
  
      {/* Main Frame with Swipe Handlers */}
      <div className="frame" {...swipeHandlers}>

        {/* Images */}
        <div className="image-container">
          <div
            className={`image dashboard ${
              isManagementFront ? "visible" : "hidden"
            }`}
          >
            <img
              src={comparisons[currentIndex].managementImage}
              alt="Dashboard"
              className="management-image"
            />
          </div>
          <div
            className={`image home ${
              !isManagementFront ? "visible" : "hidden"
            }`}
          >
            <img
              src={comparisons[currentIndex].presentationImage}
              alt="Home"
              className="presentation-image"
            />
          </div>

                          {/* Combined Controls (Now in Bottom-Right) */}
        <div className="bottom-right-controls">
          <div className="logo-and-label">
          <img
                src={comparisons[currentIndex].logo}
                alt="Logo"
                className="logo-image"
              />
          </div>
          <div className="horizontal-switch">
            <button
              className={`switch-option ${isManagementFront ? "active" : ""}`}
              onClick={() => handleSwitch(true)}
            >
              <MdDashboard />
            </button>
            <button
              className={`switch-option ${!isManagementFront ? "active" : ""}`}
              onClick={() => handleSwitch(false)}
            >
              <FaHome />
            </button>
          </div>
          <a
            href={comparisons[currentIndex].address}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
          >
            See Demo
          </a>
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