import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] overflow-hidden"
    >
      {/* Parallax/Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#00fff7]/30 rounded-full blur-2xl animate-pulse" />
      </div>
      {/* Hero Card */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7597.jpg?w=740"
            alt="Avatar"
            className="w-48 h-48 rounded-full border-4 border-[#00fff7] shadow-xl neon-glow object-cover hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 0 32px #00fff7, 0 0 64px #00fff7" }}
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Hello <span className="inline-block animate-wave">👋</span>,<br />
            I'm <span className="text-[#00fff7]">Hariom Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-xl animate-fade-in">
            I am a <span className="font-bold text-[#00fff7]">Programmer</span> and <span className="font-bold text-[#00fff7]">Developer</span> <span className="text-type font-bold"></span>
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full bg-[#00fff7] text-[#232526] font-bold shadow-lg neon-glow hover:scale-105 hover:bg-[#00e6d2] transition-all duration-300 animate-bounce"
            >
              My Works
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border-2 border-[#00fff7] text-[#00fff7] font-bold shadow-lg hover:bg-[#00fff7] hover:text-[#232526] transition-all duration-300"
            >
              Contact
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a href="https://www.instagram.com/_hariom_18/?hl=en" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/hariom-yadav-066548251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s infinite;
        }
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float-up {
          animation: float-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        .neon-glow {
          filter: drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7);
        }
      `}</style>
    </section>
  );
};

export default Home; 