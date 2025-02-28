import { PricingSection } from "@/components/ui/pricing-section";

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export const TIERS = [
  {
    id: "solo",
    name: "Solo",
    price: {
      monthly: 150,
      yearly: 120,
    },
    description: "Pentru persoane fizice",
    features: [
      "Webiste clienti",
      "1 singur cont de management",
      "limita vanzari",
      "Limited reporting tools",
    ],
    cta: "Get started",
  },
  {
    id: "business",
    name: "Business",
    price: {
      monthly: 120,
      yearly: 100,
    },
    description: "Perfect for small businesses",
    features: [
      "Advanced management dashboard",
      "20 team member accounts",
      "50GB storage",
      "Customizable workflows",
      "Priority support",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: 250,
      yearly: 200,
    },
    description: "For growing organizations",
    features: [
      "Complete management suite",
      "Unlimited team member accounts",
      "500GB storage",
      "Detailed analytics and reporting",
      "Dedicated account manager",
    ],
    cta: "Get started",
  },
  {
    id: "custom",
    name: "Custom",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "Tailored solutions for enterprises",
    features: [
      "Full suite of management tools",
      "Unlimited integrations",
      "Customizable limits",
      "24/7 premium support",
      "Custom pricing plans",
    ],
    cta: "Contact Us",
    highlighted: true,
  },
];

export function PricePage() {
  return (
    <div className="w-full relative min-h-screen pt-[60px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Pricing Section */}
      <PricingSection
        title="Simple Pricing for Management"
        subtitle="Choose the right plan for your business"
        frequencies={PAYMENT_FREQUENCIES}
        tiers={TIERS}
      />
    </div>
  );
}