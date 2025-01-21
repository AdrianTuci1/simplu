import { useState } from "react";

import ServicesPage from "./subpages/ServicePage";

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "services":
        return <ServicesPage />;
      case "finance":
        return <FinanceSection />;
      case "support":
        return <SupportSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex bg-gray-100 pt-[60px] h-screen"
    >
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 text-lg font-bold text-blue-600">Dashboard</div>
        <nav className="flex flex-col space-y-2 p-4">
          <button
            className={`p-2 text-left rounded ${
              activeSection === "home" ? "bg-blue-100 text-blue-600" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>
          <button
            className={`p-2 text-left rounded ${
              activeSection === "services" ? "bg-blue-100 text-blue-600" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("services")}
          >
            Services
          </button>
          <button
            className={`p-2 text-left rounded ${
              activeSection === "finance" ? "bg-blue-100 text-blue-600" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("finance")}
          >
            Finance
          </button>
          <button
            className={`p-2 text-left rounded ${
              activeSection === "support" ? "bg-blue-100 text-blue-600" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("support")}
          >
            Support
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Content Area */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

/* Section Components */
const HomeSection = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Home</h2>
    <p>Welcome to your dashboard! Here you can see a quick overview of your account.</p>
  </div>
);



const FinanceSection = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Finance</h2>
    <p>Track and manage your financial data here.</p>
    {/* Example Summary */}
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="p-4 bg-white shadow rounded">
        <h3 className="font-bold text-gray-700">Total Revenue</h3>
        <p className="text-lg text-green-600">$15,000</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="font-bold text-gray-700">Expenses</h3>
        <p className="text-lg text-red-600">$5,000</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="font-bold text-gray-700">Net Profit</h3>
        <p className="text-lg text-blue-600">$10,000</p>
      </div>
    </div>
  </div>
);

const SupportSection = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Support</h2>
    <p>Get help or contact our support team.</p>
    <ul className="mt-4">
      <li>Email: support@example.com</li>
      <li>Phone: +1 (555) 123-4567</li>
      <li>Live Chat: Available 24/7</li>
    </ul>
  </div>
);

export default DashboardPage;