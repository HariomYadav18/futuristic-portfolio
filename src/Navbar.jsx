import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#232526] bg-opacity-80 backdrop-blur-lg shadow-2xl animate-fade-in-down">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-widest text-white neon-glow drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
          style={{ textShadow: "0 0 8px #00fff7, 0 0 16px #00fff7" }}
        >
          <span className="inline-block rotate-12 text-[#00fff7]">&#60;/&#62;</span>
          Futuri<span className="text-[#00fff7]">Nav</span>
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative px-3 py-1 text-white transition-all duration-300 hover:text-[#00fff7] hover:scale-110 after:content-[''] after:block after:h-0.5 after:bg-[#00fff7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 rounded-full bg-[#00fff7] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-8 h-1 rounded-full bg-[#00fff7] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-8 h-1 rounded-full bg-[#00fff7] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>
      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0f2027]/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-2xl font-bold text-white neon-glow transition-all duration-500 z-40 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ textShadow: "0 0 8px #00fff7, 0 0 16px #00fff7" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#00fff7] hover:scale-110 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .neon-glow {
          filter: drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7);
        }
      `}</style>
    </header>
  );
};

export default Navbar; 