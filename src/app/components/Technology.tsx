import { FaBrain, FaNetworkWired, FaRobot, FaGlobe } from "react-icons/fa";

const technologyFeatures = [
  {
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
    icon: <FaBrain className="text-4xl text-white" />,
  },
  {
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
    icon: <FaNetworkWired className="text-4xl text-white" />,
  },
  {
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
    icon: <FaRobot className="text-4xl text-white" />,
  },
  {
    title: "Global Scale",
    description: "Distributed AI processing across global network",
    icon: <FaGlobe className="text-4xl text-white" />,
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="py-24 px-6 flex flex-col gap-y-14 bg-[#0a0f1f] text-white text-center"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neonCyan to-neonPink text-transparent bg-clip-text">
          Powered by Advanced AI
        </h2>
        <p className="mt-5 text-lg text-gray-400">
          Built on cutting-edge neural architectures
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {technologyFeatures.map((feature, index) => (
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
