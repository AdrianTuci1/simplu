import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-page bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <section className="bg-white py-20 shadow">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Dexter</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dexter is more than just software – it's a solution. We are dedicated to helping businesses like dental clinics, salons, gyms, and hotels streamline operations and achieve success with ease.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-loose">
              At Dexter, our mission is to simplify business management for professionals across industries. We believe in empowering business owners by automating tedious tasks and giving them more time to focus on delivering exceptional services to their clients.
            </p>
          </div>
          <div className="blue-box w-full h-64 bg-blue-200"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="feature">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Speed</h3>
              <p className="text-gray-700">
                Launch your management system and website in just a few minutes.
              </p>
            </div>
            <div className="feature">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
              <p className="text-gray-700">
                Tailored solutions for dental clinics, salons, gyms, and hotels.
              </p>
            </div>
            <div className="feature">
              <div className="blue-box w-16 h-16 bg-blue-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-700">
                Dedicated support to ensure your success at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet Our Team</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Behind Dexter is a team of passionate professionals dedicated to creating innovative solutions for businesses. From developers to customer support, we are here to help you succeed.
          </p>
          <div className="blue-box w-full h-64 bg-blue-200 mx-auto"></div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Business?</h2>
          <p className="text-white text-lg mb-6">
            Join the growing number of businesses trusting Dexter to streamline their operations.
          </p>
          <a
            href="/get-started"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;