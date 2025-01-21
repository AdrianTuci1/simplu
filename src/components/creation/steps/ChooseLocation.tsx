import React, { useState } from "react";

interface ChooseLocationProps {
  onLocationSelect: (location: { address: string; coordinates: [number, number] }) => void;
  initialAddress?: string;
}

const ChooseLocation: React.FC<ChooseLocationProps> = ({
  onLocationSelect,
  initialAddress = "",
}) => {
  const [address, setAddress] = useState(initialAddress);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleLocationPick = () => {
    // Simulate picking a location on a map
    const mockCoordinates: [number, number] = [40.7128, -74.006]; // Example: New York
    setCoordinates(mockCoordinates);
    onLocationSelect({ address, coordinates: mockCoordinates });
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="button"
        onClick={handleLocationPick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Pick Location on Map
      </button>
      {coordinates && (
        <p className="text-sm text-gray-600 mt-2">
          Coordinates: {coordinates[0]}, {coordinates[1]}
        </p>
      )}
    </div>
  );
};

export default ChooseLocation;