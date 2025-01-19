import React from "react";
import './homePage.css'
import { Hero } from "@/components/ui/animated-hero";
import StackedImageSlider from "@/components/carousel/StackedImageSlider";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center py-20 bg-gray-100">
        <Hero />
        <StackedImageSlider />
      </section>

      {/* Key Features Section */}
      <section className="features-section py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">De ce să alegi Simplu?</h2>
          <p className="text-lg text-center mb-12">
            Economisește timp, reduce costuri și îmbunătățește productivitatea cu servicii create special pentru afacerea ta.
          </p>

          {/* Feature 1 */}
          <div className="feature-row flex flex-col md:flex-row items-center mb-12">
            <div className="blue-box-container md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src="/pentru-tine.png" alt=""/>
            </div>
            <div className="feature-content md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Conceput pentru nevoile tale</h3>
              <p>
                Indiferent dacă îți administrezi o clinică dentară, un salon, o sală de sport sau un hotel, Simplu îți oferă
                soluții personalizate pentru a răspunde cerințelor specifice afacerii tale. Optimizează-ți operațiunile și
                oferă experiențe de top clienților, folosind servicii flexibile și ușor de integrat.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-row flex flex-col-reverse md:flex-row items-center mb-12">
            <div className="feature-content md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Funcționează impecabil pe orice dispozitiv</h3>
              <p>
                Simplu este proiectat să fie receptiv și ușor de folosit pe orice dispozitiv. Administrează-ți afacerea
                folosind un computer, o tabletă sau un smartphone, asigurând o experiență fluentă atât pentru tine,
                cât și pentru clienții tăi.
              </p>
            </div>
            <div className="blue-box-container md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src="/dispozitive.png" alt="" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-row flex flex-col md:flex-row items-center">
            <div className="blue-box-container md:w-1/2 flex justify-center mb-6 md:mb-0">
              <div className="blue-box w-48 h-48 bg-blue-200"></div>
            </div>
            <div className="feature-content md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Configurare rapidă, rezultate imediate</h3>
              <p>
                Spune adio proceselor complicate și costisitoare de implementare. Cu Simplu, pui totul în funcțiune
                în doar câțiva pași, ca să te poți concentra pe creșterea afacerii tale în timp ce noi ne ocupăm
                de restul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Designed for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="industry">
              <div className="red-box w-full h-40 bg-blue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Dental Clinics</h3>
              <p>Manage appointments, patient records, and treatments effortlessly.</p>
            </div>
            <div className="industry">
              <div className="red-box w-full h-40 bg-blue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Salons</h3>
              <p>Simplify bookings, staff schedules, and inventory management.</p>
            </div>
            <div className="industry">
              <div className="red-box w-full h-40 bg-blue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Gyms</h3>
              <p>Track memberships, classes, and attendance.</p>
            </div>
            <div className="industry">
              <div className="red-box w-full h-40 bg-blue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Hotels</h3>
              <p>Optimize room bookings, guest preferences, and housekeeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Getting Started is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Create your account and select your business type.</p>
            </div>
            <div className="step">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Customize</h3>
              <p>Follow simple steps to configure your dashboard and website.</p>
            </div>
            <div className="step">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p>Go live in minutes and start managing your business seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section py-10 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>© 2025 Dexter. All Rights Reserved.</p>
          <p>Email: support@dexter.com | Phone: +1 (800) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;