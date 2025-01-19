import React from "react";

const DentalClinics: React.FC = () => {
  return (
    <div className="dental-clinics-page bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <section className="bg-white py-20 shadow">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Dental Clinics</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to a modern, web-based solution tailored for dental clinics. Dexter helps you streamline patient management, improve the welcoming experience, and handle requests effortlessly – all while staying compatible across all your devices.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Dexter for Your Clinic?</h2>
            <p className="text-gray-700 leading-loose mb-4">
              Dexter is designed to meet the unique needs of dental clinics. From welcoming patients to managing appointments and requests, we simplify your operations with a sleek and easy-to-use platform.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Web-based platform, accessible from any device.</li>
              <li>Modern and simple design for easy navigation.</li>
              <li>Dedicated domain for your clinic’s online presence.</li>
              <li>Connect and manage multiple clinics under one account.</li>
              <li>Efficient patient request and appointment handling.</li>
            </ul>
          </div>
          <div className="blue-box w-full h-64 bg-blue-200"></div>
        </div>
      </section>

      {/* Device Compatibility Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="blue-box w-full h-64 bg-blue-200"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Works Across All Devices</h2>
            <p className="text-gray-700 leading-loose">
              Dexter’s web-based platform ensures seamless compatibility across all devices – desktops, tablets, and smartphones. Manage your clinic’s operations from anywhere without the need for special software or installations.
            </p>
          </div>
        </div>
      </section>

      {/* Modern and Simple Design Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Modern, and Professional</h2>
            <p className="text-gray-700 leading-loose">
              Dexter combines simplicity and modernity to create a platform that’s easy to navigate for both your staff and patients. Make a great first impression with an interface that reflects professionalism and care.
            </p>
          </div>
          <div className="blue-box w-full h-64 bg-blue-200"></div>
        </div>
      </section>

      {/* Dedicated Domain Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="blue-box w-full h-64 bg-blue-200"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dedicated Domain for Your Clinic</h2>
            <p className="text-gray-700 leading-loose">
              Stand out with your own dedicated domain, giving your clinic a professional online presence. Patients can easily find information about your services and book appointments directly through your website.
            </p>
          </div>
        </div>
      </section>

      {/* Manage Multiple Clinics Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Multiple Clinics with Ease</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Do you own or manage more than one clinic? Dexter allows you to connect multiple clinics under one account. Manage schedules, staff, and patient requests for all your locations from a single platform.
          </p>
          <div className="blue-box w-full h-64 bg-blue-200 mx-auto"></div>
        </div>
      </section>



      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Flexible Pricing for Every Clinic</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            Choose a plan that fits your clinic’s needs. No hidden fees, no surprises – just simple and transparent pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Basic</h3>
              <p className="text-gray-700 mb-6">Ideal for small clinics getting started.</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">$29<span className="text-lg">/month</span></p>
              <ul className="text-gray-700 text-left mb-6 space-y-2">
                <li>- Patient management tools</li>
                <li>- Appointment scheduling</li>
                <li>- Basic analytics</li>
                <li>- Single clinic support</li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Basic
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Standard</h3>
              <p className="text-gray-700 mb-6">Perfect for growing clinics.</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">$49<span className="text-lg">/month</span></p>
              <ul className="text-gray-700 text-left mb-6 space-y-2">
                <li>- Everything in Basic</li>
                <li>- Multi-clinic support</li>
                <li>- Advanced analytics</li>
                <li>- Custom domain</li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Standard
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Premium</h3>
              <p className="text-gray-700 mb-6">Best for large, multi-location clinics.</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">$99<span className="text-lg">/month</span></p>
              <ul className="text-gray-700 text-left mb-6 space-y-2">
                <li>- Everything in Standard</li>
                <li>- Priority support</li>
                <li>- Advanced integrations</li>
                <li>- Custom solutions</li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Clinic?</h2>
          <p className="text-white text-lg mb-6">
            Join other dental clinics using Dexter to deliver exceptional patient experiences while simplifying operations.
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

export default DentalClinics;