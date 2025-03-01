

const demoClients = [
  { id: "dental", label: "Dental Clinic", url: "https://demo-dental.simplu.io" },
  { id: "gym", label: "Fitness Center", url: "https://demo-gym.simplu.io" },
  { id: "barber", label: "Barber Shop", url: "https://demo-barber.simplu.io" },
  { id: "hotel", label: "Hotel Management", url: "https://demo-hotel.simplu.io" },
];

const DemoSelector = () => {
  const handleSelect = (client: any) => {
    window.location.href = client.url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-semibold mb-6">Select a Demo</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {demoClients.map((client) => (
          <button
            key={client.id}
            onClick={() => handleSelect(client)}
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            {client.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DemoSelector;