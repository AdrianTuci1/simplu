import React from "react";

interface ChooseServiceStepProps {
  onSelectService: (serviceType: string) => void;
}

const ChooseServiceStep: React.FC<ChooseServiceStepProps> = ({ onSelectService }) => {
  const services = [
    { id: "Medical", name: "Medical", logo: "/path/to/medical-logo.png" },
    { id: "Fitness", name: "Fitness", logo: "/path/to/fitness-logo.png" },
    { id: "Salon", name: "Salon", logo: "/path/to/salon-logo.png" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Choose Service</h2>
      <div className="flex space-x-4 justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service.id)} // Move to next step
            className="cursor-pointer w-16 h-16 flex flex-col items-center justify-center bg-gray-100 hover:bg-blue-100 border border-gray-300 rounded shadow"
          >
            <img src={service.logo} alt={service.name} className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium text-gray-700">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseServiceStep;