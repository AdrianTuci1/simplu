import React from "react";
import './homePage.css'
import { Hero } from "@/components/ui/animated-hero";
import StackedImageSlider from "@/components/carousel/StackedImageSlider";
import ScrollingCardsSection from "@/components/sections/ScrollingCardsSection";
import HighlightTextSection from "@/components/sections/HighlightTextSection";
import BentoSection from "@/components/sections/BentoSection";
import DeploymentBentoSection from "@/components/sections/DeploymentBentoSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import MobileExperienceSection from "@/components/sections/MobileExperienceSection";
import PricingSection from "@/components/sections/PricingSection";
import BetaSection from "@/components/sections/BetaSection";

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
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Chronicle</h3>
              <p className="text-gray-400">
                Experience the future of storytelling.
              </p>
              <p className="text-gray-400 mt-4">
                Being built remote on sunny shores around the world
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white inline-flex items-center">
                    Careers
                    <span className="ml-2 px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                      HIRING
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Brand Assets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow us</h4>
              <a href="#" className="inline-flex items-center text-gray-400 hover:text-white">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                on Twitter
              </a>
              <p className="mt-4 text-gray-400">
                We are still fine tuning the product and would love your help. Join our Beta to help contribute
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;