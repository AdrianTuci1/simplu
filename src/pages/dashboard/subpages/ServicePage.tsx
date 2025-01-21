import React, { useState, useEffect } from "react";
import eventEmitter from "../../../utils/eventEmitter";
import AddServiceForm from "@/components/creation/AddServiceForm";


interface Service {
  name: string;
  category: string;
  price: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    { name: "Consultation", category: "Medical", price: "$50" },
    { name: "Membership", category: "Fitness", price: "$30" },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleAddService = (service: Service) => {
      setServices((prevServices) => [...prevServices, service]);
    };

    eventEmitter.on("addService", handleAddService);

    return () => {
      eventEmitter.off("addService", handleAddService);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 relative max-h-screen"
    >
      <h2 className="text-2xl font-bold mb-6">Services</h2>

      {/* Services Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{service.name}</td>
                <td className="px-4 py-2">{service.category}</td>
                <td className="px-4 py-2">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Service Button */}
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setIsFormOpen(true)}
      >
        Add Service
      </button>

      {/* Add Service Form Overlay */}
      {isFormOpen && (
        <AddServiceForm
          closeForm={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default ServicesPage;