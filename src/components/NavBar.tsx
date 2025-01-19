import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-orange-600">
            Simplu.
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <div 
          className="relative group"
          onMouseEnter={() => setDropdownVisible(true)} 
          onMouseLeave={() => setDropdownVisible(false)}
          >
            <button className="text-gray-700 hover:text-blue-600">
              Solutions
            </button>
            <div
              className={`absolute bg-white shadow-lg mt-2 w-48 rounded transition-all duration-300 ${
                dropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/solutions/dental"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dental Clinics
              </Link>
              <Link
                to="/solutions/salons"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Salons
              </Link>
              <Link
                to="/solutions/gyms"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Gyms
              </Link>
              <Link
                to="/solutions/hotels"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Hotels
              </Link>
            </div>
          </div>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link
            to="/get-started"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <div className="border-t border-gray-200"></div>
          <div className="px-4 py-2 text-gray-700">Solutions:</div>
          <Link
            to="/solutions/dental"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Dental Clinics
          </Link>
          <Link
            to="/solutions/salons"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Salons
          </Link>
          <Link
            to="/solutions/gyms"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Gyms
          </Link>
          <Link
            to="/solutions/hotels"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Hotels
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Link
            to="/get-started"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            onClick={toggleMobileMenu}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;