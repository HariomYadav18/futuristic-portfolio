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
  const [currentSection, setCurrentSection] = useState(null);

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#121212] to-[#1e1e1e] shadow-lg border-b border-white/10">
      {/* Elegant Background */}
      <div className="absolute inset-x-0 top-0 h-16 bg-[#00fff7]/10 blur-3xl animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <i className="fa-solid fa-code text-2xl text-[#00fff7] mr-2"></i>
            <span className="text-xl font-bold text-white">Futuri<span className="text-[#00fff7]">Dev</span></span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-white/80 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg ${
                  currentSection === link.name ? 'text-white bg-white/10' : ''
                }`}
                onClick={() => setCurrentSection(link.name)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
            >
              {menuOpen ? (
                <i className="fa-solid fa-xmark text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`block text-white/80 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg ${
                  currentSection === link.name ? 'text-white bg-white/10' : ''
                }`}
                onClick={() => {
                  toggleMobileMenu();
                  setCurrentSection(link.name);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
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