import React from "react";
import './homePage.css'
import { Hero } from "@/components/ui/animated-hero";
import StackedImageSlider from "@/components/carousel/StackedImageSlider";
import ScrollingCardsSection from "@/components/sections/ScrollingCardsSection";
import HighlightTextSection from "@/components/sections/HighlightTextSection";
import BentoSection from "@/components/sections/BentoSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import MobileExperienceSection from "@/components/sections/MobileExperienceSection";
import PricingSection from "@/components/sections/PricingSection";
import BetaSection from "@/components/sections/BetaSection";
import DeploymentBentoSection from "@/components/sections/DeploymentBentoSection";
import Footer from "@/components/sections/Footer";

const Homepage: React.FC = () => {
  return (
    <div className="homepage min-h-screen bg-black">
      <div id="main-content" className="bg-white transform-gpu transition-all duration-500 origin-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-start min-h-[80vh]">
          <div className="w-full flex items-center justify-center pt-10">
            <Hero />
          </div>
          
          <div className="w-full max-w-[90%] mx-auto mt-[-5vh] mb-16 z-10 relative">
            <StackedImageSlider />
          </div>
        </section>

        {/* Scrolling Cards Section */}
        <ScrollingCardsSection />

        {/* Highlight Text Section */}
        <HighlightTextSection />

        {/* Bento Section */}
        <BentoSection />

        {/* Mobile Experience Section */}
        <MobileExperienceSection />

        {/* Deployment Bento Section */}
        <DeploymentBentoSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Templates Section */}
        <TemplatesSection />

        {/* Beta Section */}
        <BetaSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;