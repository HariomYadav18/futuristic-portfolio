import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full py-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#232526] shadow-2xl border-t border-[#00fff7]/30 neon-glow animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <div className="flex items-center gap-2 text-lg font-bold text-white neon-glow">
          <span className="inline-block rotate-12 text-[#00fff7]">&#60;/&#62;</span>
          Futuri<span className="text-[#00fff7]">Footer</span>
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/_hariom_18/?hl=en" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow hover:scale-110">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hariom-yadav-066548251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow hover:scale-110">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="text-white/70 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Hariom Yadav. All rights reserved.
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .neon-glow {
          filter: drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7);
        }
      `}</style>
    </footer>
  );
};

export default Footer; 