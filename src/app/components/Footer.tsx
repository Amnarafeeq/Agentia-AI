import { RiRobot2Line } from "react-icons/ri";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "API"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Compliance"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f1a] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <RiRobot2Line className="text-neonCyan text-3xl" /> Agentia World
          </h2>
          <p className="text-gray-400 mt-2 max-w-sm">
            Next-generation AI agents powering the future of enterprise
            intelligence.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-neonPink transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-500">
          © 2025 <span className="text-neonCyan">Agentia World</span>. Powered
          by <span className="text-neonPink">Panaversity</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
