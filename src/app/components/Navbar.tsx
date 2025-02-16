"use client"
import { useState } from "react";
import Link from "next/link";
import { RiRobot2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "Technology", href: "#technology" },
  { title: "Agents", href: "#agents" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0f1f] text-white border-b sticky top-0 z-50 border-neonCyan shadow-neon px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <RiRobot2Line className="text-neonCyan text-3xl" />
          <h1 className="text-xl font-bold text-white">Agentia World</h1>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-4 ">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className=" text-textLight hover:text-neonPink transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <button className="hidden md:block bg-neonPink px-4 py-2 rounded-lg text-white font-semibold shadow-pinkGlow hover:scale-105 transition-transform">
            Launch Console
          </button>

          <button
            className="md:hidden text-3xl text-neonCyan"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-900 text-white border-t border-neonCyan shadow-neon mt-2 p-4">
          {navLinks.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="block py-2 text-center text-lg hover:text-neonPink transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <button className="w-full mt-4 bg-neonPink px-4 py-2 rounded-lg text-white shadow-pinkGlow hover:scale-105 transition-transform">
            Launch Console
          </button>
        </nav>
      )}
    </header>
  );
}
