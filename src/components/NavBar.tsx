import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Icons for mobile menu

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Left Side: flex-1, content aligned start */}
        <div className="flex-1 flex justify-start items-center space-x-2 z-10">
          <Link to="/" className="flex items-center text-orange-600">
             <img src='/logo-portocaliu.png' alt='logo' className="transition-all duration-300 ease-in-out w-8 h-8" />
             <span className={`text-2xl font-bold transition-all duration-300 ease-in-out overflow-hidden text-shadow-sm ${isScrolled ? 'max-w-0 opacity-0 ml-0' : 'max-w-xs opacity-100 ml-2'}`}>
               simplu
             </span>
          </Link>
        </div>

        {/* Middle Section: flex-grow-0, content centered */}
        <div className={`flex-grow-0 hidden md:flex justify-center space-x-6 transition-opacity duration-300 ease-in-out ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'} text-shadow-sm`}>
            <Link
              to="/product"
              className={`text-gray-700 hover:text-blue-600 ${location.pathname === "/product" ? "underline" : ""}`}
            >
              Produs
            </Link>
            <Link
              to="/story"
              className={`text-gray-700 hover:text-blue-600 ${location.pathname === "/story" ? "underline" : ""}`}
            >
              Povestea noastra
            </Link>
            <Link
              to="/careers"
              className={`text-gray-700 hover:text-blue-600 ${location.pathname === "/careers" ? "underline" : ""}`}
            >
              Cariere
            </Link>
          </div>

        {/* Right Side: flex-1, content aligned end */}
        <div className="flex-1 flex justify-end items-center z-10">
           {/* Desktop Buttons Container */}
           <div className="hidden md:flex items-center space-x-4">
               {/* Apply group hover effect for text scroll */}
               <Link 
                 to="/get-started" 
                 className="group px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-shadow-sm transition duration-300 ease-in-out overflow-hidden"
               >
                 {/* Container for the scrolling text */}
                 <span className="relative inline-block h-5 overflow-hidden align-top"> {/* Adjust h-5 based on font-size/line-height */}
                   {/* Original text: moves up on hover */}
                   <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                     Încearcă Acum
                   </span>
                   {/* Second text instance: starts below, moves into view on hover */}
                   <span className="block absolute inset-0 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                     Încearcă Acum
                   </span>
                 </span>
              </Link>
              {/* Apply group hover effect for text scroll */}
              <Link
                  to="/login"
                  className="group px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-shadow-sm transition duration-300 ease-in-out overflow-hidden"
                >
                  {/* Container for the scrolling text */}
                  <span className="relative inline-block h-5 overflow-hidden align-top"> {/* Adjust h-5 based on font-size/line-height */}
                    {/* Original text: moves up on hover */}
                    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      Intră în cont
                    </span>
                    {/* Second text instance: starts below, moves into view on hover */}
                    <span className="block absolute inset-0 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      Intră în cont
                    </span>
                  </span>
                </Link>
            </div>
            {/* Mobile Menu Button */} 
            <button className="md:hidden text-gray-700 z-20 ml-4" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-[calc(100%-0.5rem)] left-0 w-full">
          <Link
            to="/product"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Produs
          </Link>
          <Link
            to="/story"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Povestea noastra
          </Link>
          <Link
            to="/careers"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Cariere
          </Link>

          <div className="border-t border-gray-200 my-2"></div>

          <Link 
            to="/login" 
            className="block mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            onClick={toggleMobileMenu}
          >
              Intră în cont
            </Link>

          <Link
            to="/get-started"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            onClick={toggleMobileMenu}
          >
            Încearcă Acum
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;