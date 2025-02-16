import { FaRobot, FaBrain, FaLink, FaShieldAlt } from "react-icons/fa";

const featuresList = [
  {
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
    icon: <FaBrain className="text-4xl text-white" />,
  },
  {
    title: "Multi-Modal Intelligence",
    description:
      "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
    icon: <FaRobot className="text-4xl text-white" />,
  },
  {
    title: "Cognitive Integration",
    description:
      "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
    icon: <FaLink className="text-4xl text-white" />,
  },
  {
    title: "Ethical AI Framework",
    description:
      "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
    icon: <FaShieldAlt className="text-4xl text-white" />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6  bg-gradient-to-b from-[#0a0f1a] to-[#111827] text-white text-center relative z-10"
    >
      <div className="space-y-5 mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neonCyan to-neonPink text-transparent bg-clip-text">
          Neural Capabilities
        </h2>
        <p className="text-lg text-gray-400">
          Powered by next-generation artificial intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="p-8 border border-neonCyan rounded-lg shadow-lg bg-[#121826] transition-transform hover:scale-105"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-neonCyan to-neonPink rounded-lg mx-auto mb-4 shadow-md">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-neonCyan">
              {feature.title}
            </h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
