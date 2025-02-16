"use client";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-[#0a0f1f] shadow-lg shadow-neonCyan" : "bg-transparent"
      } text-white border-b sticky top-0 z-50 border-neonCyan px-6 py-4 transition-all duration-300`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <RiRobot2Line className="text-neonCyan text-3xl" />
          <h1 className="text-xl font-bold text-white">Agentia World</h1>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative text-textLight hover:text-neonPink transition-all duration-300
                           before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0
                           before:h-[2px] before:bg-neonPink before:transition-all before:duration-300 
                           hover:before:w-full"
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
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
                setMenuOpen(false);
              }}
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
