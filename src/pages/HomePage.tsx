import React from "react";
import './homePage.css'
import { Hero } from "@/components/ui/animated-hero";
import StackedImageSlider from "@/components/carousel/StackedImageSlider";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center bg-gray-100 pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-14">
        
        {/* Left Side: Hero Text */}
        <div className="w-full md:w-1/2 mb-1 md:mb-0 text-center md:text-left">
          <Hero />
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center py-0">
          <img 
            src="/hero-simplu.png" 
            alt="Hero Image"
            className="min-w-[350px] object-cover h-auto"
          />
        </div>
      </div>
      </section>
      <StackedImageSlider />

      {/* Key Features Section */}
      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">

        {/* First Row: Title + Features */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          
          {/* Left Column: Title & Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              O platformă, experiențe personalizate
            </h2>
            <p className="text-lg text-gray-600">
                  Indiferent de domeniul tău, <span className="font-semibold">Simplu </span>
            îți permite să creezi un site de prezentare adaptat nevoilor specifice.
            Fie că administrezi o clinică dentară, o sală de fitness sau un hotel, 
            platforma se ajustează pentru a oferi o experiență unică fiecărui tip de client.
            </p>
          </div>

          {/* Right Column: Three Features */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
            
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/web-design.png" alt="Feature 1" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Soluții Personalizate</h4>
              <p className="text-gray-600 text-sm">
                Platforma se adaptează afacerii tale, ai funcționalități dedicate pentru fiecare domeniu.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/browser.png" alt="Feature 2" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Utilizare Simpla</h4>
              <p className="text-gray-600 text-sm">
                Functioneaza in browser, nu trebuie sa descarci nimic.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/simplify.png" alt="Feature 3" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Automatizare</h4>
              <p className="text-gray-600 text-sm">
                Clienții pot solicita rezervări direct, iar sistemul le procesează automat.
              </p>
            </div>

          </div>
        </div>

        {/* Second Row: Full-Width Gradient Background with Image */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-16 relative overflow-hidden rounded-[24px]">
          <div className="container mx-auto relative">
            <div className="relative w-full h-[500px]">
              <img 
                src="/feature1.png" 
                alt="Feature preview" 
                className="absolute top-0 left-10 object-left object-contain h-full w-[100%] md:w-full aspect-5/3"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Employee Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">

      {/* First Row: Title + Features */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-12">
        
        {/* Left Column: Title & Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Puterea echipei tale, amplificată
          </h2>
          <p className="text-lg text-gray-600">
            Angajații tăi pot lucra mai eficient și fără stres, având toate informațiile la un loc. 
            Fie că este vorba de programări, notificări sau gestionarea timpului, platforma noastră îi ajută să se concentreze pe ceea ce contează cu adevărat.
          </p>
        </div>

        {/* Right Column: Three Features */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
          
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-start text-start">
            <img src="/calendar.png" alt="Feature 1" className="w-12 h-12 mb-2" />
            <h4 className="font-semibold text-lg">Gestionare</h4>
            <p className="text-gray-600 text-sm">
              Vizualizează și editează programările fără apeluri și mesaje manuale.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-start text-start">
            <img src="/lightbulb.png" alt="Feature 2" className="w-12 h-12 mb-2" />
            <h4 className="font-semibold text-lg">Notificări automate</h4>
            <p className="text-gray-600 text-sm">
              Primiți alerte pentru programări noi, anulări și modificări în timp real.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 flex flex-col items-start text-start">
            <img src="/eye.png" alt="Feature 3" className="w-12 h-12 mb-2" />
            <h4 className="font-semibold text-lg">Utilizare</h4>
            <p className="text-gray-600 text-sm">
              Interfata prietenoasa cu simboluri usor de recunoscut.
            </p>
          </div>

        </div>
      </div>

      {/* Second Row: Full-Width Gradient Background with Image */}
      <div className="w-full bg-gradient-to-r from-green-500 to-blue-600 py-16 relative overflow-hidden rounded-[24px]">
        <div className="container mx-auto relative">
          <div className="relative w-full h-[500px]">
            <img 
              src="/dashboard-preview.png" 
              alt="Interfață pentru angajați" 
              className="absolute top-0 left-0 h-full object-cover object-left w-[150%] md:w-full"
            />
          </div>
        </div>
      </div>

      </section>

      {/* General Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">

        {/* First Row: Title + Features */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          
          {/* Left Column: Title & Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              Control complet asupra afacerii tale
            </h2>
            <p className="text-lg text-gray-600">
              Indiferent dacă ai un singur punct de lucru sau mai multe locații, platforma îți oferă flexibilitatea de care ai nevoie.  
              Configurează-ți afacerea exact așa cum vrei și oferă clienților o experiență personalizată.
            </p>
          </div>

          {/* Right Column: Three Features */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
            
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/domain.png" alt="Domeniu propriu" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Domeniu propriu</h4>
              <p className="text-gray-600 text-sm">
                Personalizează-ți site-ul cu un domeniu propriu și oferă o experiență profesională clienților.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/connection-chart.png" alt="Multiple locații" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Multiple locații</h4>
              <p className="text-gray-600 text-sm">
                Gestionează mai multe locații dintr-un singur dashboard, fără complicații.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-start text-start">
              <img src="/configuration.png" alt="Configurare ușoară" className="w-12 h-12 mb-2" />
              <h4 className="font-semibold text-lg">Configurare ușoară</h4>
              <p className="text-gray-600 text-sm">
                Setează-ți platforma rapid, fără cunoștințe tehnice avansate.
              </p>
            </div>

          </div>
        </div>

        {/* Second Row: Full-Width Gradient Background with Image */}
        <div className="w-full bg-gradient-to-r from-purple-500 to-blue-600 py-16 relative overflow-hidden rounded-[24px]">
          <div className="container mx-auto relative">
            <div className="relative w-full h-[500px]">
              <img 
                src="/features-collage.png" 
                alt="Preview features" 
                className="absolute top-0 left-0 h-full object-cover object-left w-[150%] md:w-full"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Try Now Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-32 bg-white text-center">
        
        {/* Title & Description */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Încearcă acum, fără cont!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Testează platforma gratuit, fără înregistrare. Descoperă cum îți poate transforma afacerea!
          </p>
          
          {/* Call to Action */}
          <a href="/demo" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition duration-300 hover:bg-blue-700">
            Accesează versiunea demo
          </a>
        </div>

      </section>

      {/* Features Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-12">
          Tot ce ai nevoie pentru afacerea ta.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {/* Calendar */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/calendar.png" alt="Calendar" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Calendar</h4>
            <p className="text-gray-600 text-sm">Gestionează programările și evenimentele.</p>
          </div>

          {/* Acasa */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/home.png" alt="Acasa" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Acasă</h4>
            <p className="text-gray-600 text-sm">Interfață simplă pentru administrare rapidă.</p>
          </div>

          {/* Website */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/browser.png" alt="Website" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Website</h4>
            <p className="text-gray-600 text-sm">Prezență online profesională, fără efort.</p>
          </div>

          {/* Solicitări */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/simplify.png" alt="Solicitari" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Solicitări</h4>
            <p className="text-gray-600 text-sm">Primește și gestionează cererile clienților.</p>
          </div>

          {/* Evidențiere */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/favorite.png" alt="Evidentiere" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Evidențiere</h4>
            <p className="text-gray-600 text-sm">Monitorizează datele esențiale pentru afacerea ta.</p>
          </div>

          {/* Reduceri */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/price-tag.png" alt="Reduceri" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Reduceri</h4>
            <p className="text-gray-600 text-sm">Oferă promoții și fidelizează clienții.</p>
          </div>

          {/* Fiscal */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/receipt.png" alt="Fiscal" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Fiscal</h4>
            <p className="text-gray-600 text-sm">Emiterea facturilor și bonurilor conform legislației.</p>
          </div>

          {/* Rapoarte */}
          <div className="flex flex-col items-start text-left transition-transform duration-300 hover:scale-105">
            <img src="/data-management.png" alt="Rapoarte" className="w-14 h-14 mb-4" />
            <h4 className="font-semibold text-lg">Rapoarte</h4>
            <p className="text-gray-600 text-sm">Analize detaliate pentru decizii mai bune.</p>
          </div>

        </div>

      </section>

      {/* Get Started Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white flex flex-col items-center">

        {/* Title & Description (Centered, but Left-Aligned Text) */}
        <div className="max-w-3xl text-left text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Începe acum fără riscuri! 🚀
          </h2>
          <p className="text-lg text-gray-600">
            Încearcă platforma noastră și dacă nu ești mulțumit, îți returnăm banii în <span className="font-semibold text-gray-900">30 de zile</span>.
          </p>
        </div>

        {/* Stepper (Centered, but Left-Aligned Text) */}
        <div className="relative max-w-2xl w-full">

          {/* Stepper Vertical Line */}
          <div className="absolute left-6 top-0 w-1 bg-gray-200 h-full rounded-lg"></div>

          {/* Steps Container */}
          <div className="flex flex-col gap-10 pl-12">

            {/* Step 1 */}
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg">Te înregistrezi</h4>
                <p className="text-gray-600 text-sm">Completează formularul și alege planul potrivit.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg">Configurezi</h4>
                <p className="text-gray-600 text-sm">Personalizează platforma pentru afacerea ta.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg">Lansezi</h4>
                <p className="text-gray-600 text-sm">Site-ul și dashboard-ul sunt gata de utilizare!</p>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="/register"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md text-lg transition duration-300 hover:bg-blue-700"
          >
            Începe acum
          </a>
          <p className="text-gray-500 text-sm mt-3">Ai 30 de zile să testezi platforma, fără riscuri.</p>
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