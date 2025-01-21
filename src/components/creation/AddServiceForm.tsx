import React, { useState } from "react";
import eventEmitter from "../../utils/eventEmitter";
import ChooseServiceStep from "./steps/ChooseServiceStep";
import InfoStep from "./steps/InfoStep";
import PaymentStep from "./steps/payment-step/PaymentStep";

const AddServiceForm: React.FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    identifier: "",
    subdomain: "",
    description: "",
    country: "",
    city: "",
    location: { address: "", coordinates: [0, 0] },
    pictures: [] as File[],
    price: "",
  });

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleInputChange = (
    input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string }
  ) => {
    if ("name" in input) {
      // Direct object update
      const { name, value } = input;
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // Handle ChangeEvent
      const { name, value } = input.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectService = (serviceType: string) => {
    setFormData((prev) => ({ ...prev, serviceType }));
    handleNext(); // Automatically move to the next step
  };

  // Update location state from ChooseLocation component
  const handleLocationChange = (location: { address: string; coordinates: [number, number] }) => {
    setFormData((prev) => ({ ...prev, location }));
  };

  // Update pictures state
  const handlePicturesChange = (files: File[]) => {
    setFormData((prev) => ({ ...prev, pictures: files }));
  };

  // Submit the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    eventEmitter.emit("addService", formData); // Emit the new service
    closeForm(); // Close the form
  };

  return (
    <div className="absolute inset-0 bg-white bg-opacity-100 flex items-center justify-center z-1"
         style={{ height: "calc(100vh - 100px)" }}
    >
              {/* Cancel Button */}
      <button
          onClick={closeForm}
          className="absolute top-2 left-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 z-4"
        >
          Cancel
      </button>

        {/* Render Step */}
        {step === 1 && <ChooseServiceStep onSelectService={handleSelectService} />}
        {step === 2 && 
        <InfoStep
            data={formData}
            onChange={handleInputChange}
            onLocationChange={handleLocationChange}
            onPicturesChange={handlePicturesChange}
          />}
        {step === 3 && <PaymentStep />}

        {/* Navigation Buttons */}
        <div className="absolute bottom-2 right-2 flex justify-between flex-end mt-10">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
  );
};

export default AddServiceForm;