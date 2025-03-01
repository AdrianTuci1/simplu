import React, { useRef, useState } from "react";
import "./StackedImageSlider.css";
import { useSwipeable } from "react-swipeable";

interface ComparisonItem {
  managementImage: string;
  label: string;
  logo: string;
  address: string;
  features: string[];
}

const comparisons: ComparisonItem[] = [
  {
    managementImage: "/prezentare.png",
    label: "DENTAL CLINIC",
    logo: "/logoclinic.png",
    address: "https://demo.dental.com",
    features: ["Appointment Scheduling", "Billing & Invoices", "Patient Records"],
  },
  {
    managementImage: "/gym-soon.png",
    label: "Fitness Center",
    logo: "/gym-mananager.png",
    address: "https://demo.fitness.com",
    features: ["Membership Management", "Class Scheduling", "Trainer Booking"],
  },
  {
    managementImage: "/salon-soon.png",
    label: "Hotel Management",
    logo: "/salon-manager.png",
    address: "https://demo.hotel.com",
    features: ["Room Reservations", "Guest Management", "Billing & Payments"],
  },
];

const StackedImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1)),
  });

  return (
    <div className="frame-container">
      <div className="info-container">
        <div className="feature-chips">
          {comparisons[currentIndex].features.map((feature, index) => (
            <span key={index} className="chip">{feature}</span>
          ))}
        </div>
      </div>
      <div className="frame" {...swipeHandlers} ref={parentRef}>
          <div className="image-wrapper">
            <img
              src={comparisons[currentIndex].managementImage}
              alt="Management View"
              className="manage-image"
              style={{borderRadius:'14px'}}
            />
          </div>
      </div>
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