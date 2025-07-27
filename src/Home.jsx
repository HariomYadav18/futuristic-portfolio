import React from "react";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-12 overflow-hidden">
      {/* Animated 3D/Neon Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="450" cy="450" rx="350" ry="350" fill="#00fff7" fillOpacity="0.08">
            <animate attributeName="rx" values="350;370;350" dur="6s" repeatCount="indefinite" />
            <animate attributeName="ry" values="350;370;350" dur="6s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#00fff7]/30 rounded-full blur-2xl animate-pulse" />
      </div>
      {/* Holographic Avatar Card */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up max-w-xl mx-auto">
        <div className="relative flex flex-col items-center">
          <div className="w-44 h-44 rounded-full border-4 border-[#00fff7] shadow-xl neon-glow overflow-hidden bg-gradient-to-br from-[#00fff7]/30 to-[#232526] animate-avatar-float">
            <img
              src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7597.jpg?w=740"
              alt="Avatar"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 rounded-full border-2 border-[#00fff7]/60 animate-avatar-glow" />
          </div>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00fff7]/80 text-[#232526] font-bold text-xs shadow-lg neon-glow animate-bounce">Futuristic Dev</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center tracking-tight animate-title-glow">
          <span className="block text-[#00fff7]">Welcome</span> to the <span className="text-[#00fff7]">Next-Gen</span> Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-medium text-center max-w-lg animate-fade-in">
          Hi, I'm <span className="font-bold text-[#00fff7]">Hariom Yadav</span>.<br />
          I build <span className="font-bold text-[#00fff7]">immersive</span>, <span className="font-bold text-[#00fff7]">interactive</span> digital experiences.<br />
          <span className="text-[#00fff7] font-bold">Scroll or use the sidebar to explore!</span>
        </p>
        <div className="flex gap-6 mt-2">
          <a href="https://www.instagram.com/_hariom_18/?hl=en" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow animate-social-float">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hariom-yadav-066548251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow animate-social-float">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <style>{`
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
        @keyframes avatar-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-avatar-float {
          animation: avatar-float 3s ease-in-out infinite;
        }
        @keyframes avatar-glow {
          0%, 100% { box-shadow: 0 0 32px #00fff7, 0 0 64px #00fff7; }
          50% { box-shadow: 0 0 48px #00fff7, 0 0 96px #00fff7; }
        }
        .animate-avatar-glow {
          animation: avatar-glow 2.5s ease-in-out infinite;
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 16px #00fff7, 0 0 32px #00fff7; }
          50% { text-shadow: 0 0 32px #00fff7, 0 0 64px #00fff7; }
        }
        .animate-title-glow {
          animation: title-glow 2.5s ease-in-out infinite;
        }
        @keyframes social-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        .animate-social-float {
          animation: social-float 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home; 