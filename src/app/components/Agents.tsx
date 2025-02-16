import { FaCogs, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const agentsList = [
  {
    title: "Autonomous Agents",
    description: "Self-learning AI systems for real-time decision-making",
    icon: <FaCogs className="text-4xl text-white" />,
  },
  {
    title: "Distributed AI",
    description: "AI-powered networks for large-scale automation",
    icon: <FaNetworkWired className="text-4xl text-white" />,
  },
  {
    title: "Secure AI Agents",
    description: "Privacy-focused AI with end-to-end encryption",
    icon: <FaShieldAlt className="text-4xl text-white" />,
  },
];

export default function Agents() {
  return (
    <section
      id="agents"
      className="py-24 px-6  bg-gradient-to-b from-[#0a0f1a] to-[#111827] text-white text-center relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neonCyan to-white text-transparent bg-clip-text mb-5">
        AI Agents
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        Empowering industries with intelligent AI-driven agents
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {agentsList.map((agent, index) => (
          <div
            key={index}
            className="p-8 border border-neonCyan rounded-lg shadow-lg bg-[#121826] transition-transform hover:scale-105"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-neonCyan to-neonPink rounded-lg mx-auto mb-4 shadow-md">
              {agent.icon}
            </div>
            <h3 className="text-2xl font-bold text-neonCyan">{agent.title}</h3>
            <p className="text-gray-300 mt-2">{agent.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
