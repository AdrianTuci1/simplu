import React, { useEffect } from "react";
import ChooseLocation from "./ChooseLocation";
import ImageBox from "./image-box/ImageBox";

interface InfoStepProps {
  data: {
    name: string;
    identifier: string;
    subdomain: string;
    description: string;
    country: string;
    city: string;
    pictures: File[];
  };
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { name: string; value: string }
  ) => void;
  onLocationChange: (location: { address: string; coordinates: [number, number] }) => void;
  onPicturesChange: (files: File[]) => void;
}

const InfoStep: React.FC<InfoStepProps> = ({
  data,
  onChange,
  onLocationChange,
  onPicturesChange,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onPicturesChange(Array.from(e.target.files));
    }
  };

  useEffect(() => {
    if (data.name) {
      const sanitizedName = data.name.toLowerCase().replace(/\s+/g, "-");
      onChange({ name: "subdomain", value: `${sanitizedName}.example.com` });
    }
  }, [data.name, onChange]);

  return (
    <div className="h-full overflow-auto"
    >
      <h2 className="text-xl font-bold mb-4">Service Info</h2>

      {/* Gray Box */}
      <div className="w-[600px] h-[400px] mb-6" >
        <ImageBox />
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Identifier */}
      <div className="mb-4">
        <label
          htmlFor="identifier"
          className="block text-gray-700 font-medium mb-2"
        >
          Identifier
        </label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          value={data.identifier}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Subdomain */}
      <div className="mb-4">
        <label
          htmlFor="subdomain"
          className="block text-gray-700 font-medium mb-2"
        >
          Subdomain
        </label>
        <input
          type="text"
          id="subdomain"
          name="subdomain"
          value={data.subdomain}
          readOnly
          className="w-full px-3 py-2 border bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Country */}
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-gray-700 font-medium mb-2"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={data.country}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* City */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={data.city}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Choose Location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 font-medium mb-2"
        >
          Location
        </label>
        <ChooseLocation
          onLocationSelect={onLocationChange}
          initialAddress={data.description}
        />
      </div>

      {/* Pictures */}
      <div className="mb-4">
        <label
          htmlFor="pictures"
          className="block text-gray-700 font-medium mb-2"
        >
          Pictures
        </label>
        <input
          type="file"
          id="pictures"
          name="pictures"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full px-3 py-2 border rounded"
        />
        <div className="mt-2">
          {data.pictures.map((file, index) => (
            <p key={index} className="text-sm text-gray-600">
              {file.name}
            </p>
          ))}
        </div>
      </div>
      </div>
  );
};

export default InfoStep;