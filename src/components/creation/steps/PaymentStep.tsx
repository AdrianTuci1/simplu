import React from "react";

interface PaymentStepProps {
  data: { price: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ data, onChange }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Info</h2>
      <label
        htmlFor="price"
        className="block text-gray-700 font-medium mb-2"
      >
        Price
      </label>
      <input
        type="text"
        id="price"
        name="price"
        value={data.price}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
};

export default PaymentStep;