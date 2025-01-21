import React, { useState } from "react";

const PaymentStep: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<string>("monthly");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const serviceData = {
    serviceName: "DentalSync",
    logo: "/logoclinic.png", // Example logo
    plans: [
      { name: "Basic", price: "$49/month" },
      { name: "Standard", price: "$99/month" },
      { name: "Premium", price: "$199/month" },
    ],
    billingCycles: ["monthly", "yearly"],
  };

  const handleCardChange = (field: string, value: string) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log({
      selectedPlan,
      billingCycle,
      cardDetails,
    });
    alert("Payment Submitted!");
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-full p-6 bg-white shadow-lg rounded-lg overflow-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Upgrade Your Plan</h1>
        <p className="text-gray-600">Choose a plan and complete your payment.</p>
      </div>

      {/* Service Info */}
      <div className="flex items-center gap-4 p-4 border rounded-lg mb-6">
        <div className="w-12 h-12  text-white font-bold flex items-center justify-center rounded-lg">
          <img
            src={serviceData.logo}
            alt={serviceData.serviceName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{serviceData.serviceName}</h2>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="p-4 border rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Select a Plan</h3>
        <div className="flex flex-col gap-4">
          {serviceData.plans.map((plan) => (
            <label
              key={plan.name}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                selectedPlan === plan.name
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <span>
                {plan.name} - {plan.price}
              </span>
              <input
                type="radio"
                name="plan"
                value={plan.name}
                checked={selectedPlan === plan.name}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="form-radio text-blue-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Billing Cycle */}
      <div className="p-4 border rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Billing Cycle</h3>
        <div className="flex flex-col gap-2">
          {serviceData.billingCycles.map((cycle) => (
            <label
              key={cycle}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                billingCycle === cycle
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <span>
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)} -{" "}
                {cycle === "monthly" ? "$99.00 per month" : "$1,000 per year"}
              </span>
              <input
                type="radio"
                name="billingCycle"
                value={cycle}
                checked={billingCycle === cycle}
                onChange={(e) => setBillingCycle(e.target.value)}
                className="form-radio text-blue-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 border rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Card Details</h3>
        <p className="text-sm text-gray-500 mb-4">
          This is a secure 128-bit SSL encrypted payment.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border rounded-lg p-3"
            value={cardDetails.cardNumber}
            onChange={(e) => handleCardChange("cardNumber", e.target.value)}
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border rounded-lg p-3"
              value={cardDetails.expiry}
              onChange={(e) => handleCardChange("expiry", e.target.value)}
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 border rounded-lg p-3"
              value={cardDetails.cvc}
              onChange={(e) => handleCardChange("cvc", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!selectedPlan || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvc}
        className={`w-full py-3 rounded-lg text-white font-semibold ${
          selectedPlan && cardDetails.cardNumber && cardDetails.expiry && cardDetails.cvc
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentStep;