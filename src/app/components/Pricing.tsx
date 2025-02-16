const pricingPlans = [
  {
    title: "Starter",
    price: "$499/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
      "Community Access",
      "Email Reports",
      "Essential Security",
    ],
    buttonText: "Get Started",
    borderColor: "border-neonCyan",
    buttonBg: "bg-neonCyan font-semibold",
  },
  {
    title: "Professional",
    price: "$999/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
      "Dedicated Account Manager",
    ],
    buttonText: "Get Started",
    borderColor: "border-neonPink",
    buttonBg: "bg-neonPink font-semibold",
  },
  {
    title: "Enterprise",
    price: "$Custom",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
    buttonText: "Get Started",
    borderColor: "border-neonPurple",
    buttonBg: "bg-neonPurple font-semibold",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-[#0a0f22] text-white relative z-10"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-neonCyan to-neonPink text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-400  max-w-4xl mx-auto mt-2">
          Scale your AI capabilities with our flexible pricing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 border ${plan.borderColor} rounded-lg shadow-lg bg-[#121826] transition-transform hover:scale-105`}
          >
            <h3 className="text-xl font-bold text-white">{plan.title}</h3>
            <p className="text-2xl font-semibold mt-2 text-gray-300">
              {plan.price}
            </p>

            <ul className="mt-6 space-y-2 text-gray-400 text-sm text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-neonCyan mr-2">●</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`${plan.buttonBg} px-6 py-3 rounded-lg text-white shadow-lg hover:scale-105 transition-transform w-full mt-6`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
