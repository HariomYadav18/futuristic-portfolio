import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#121212] to-[#1e1e1e] py-16 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#1e1e1e]" />
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-[#00fff7]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1e90ff]/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/_hariom_18/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 hover:text-white transition-colors duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hariom-yadav-066548251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 hover:text-white transition-colors duration-300"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/HariomYadav18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 hover:text-white transition-colors duration-300"
            >
              <i className="fa-brands fa-github"></i>
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/80 text-center">
            &copy; {new Date().getFullYear()} Hariom Yadav. All rights reserved.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes pulse-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .neon-glow {
          filter: drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7);
        }
      `}</style>
    </footer>
  );
};

export default Footer; 