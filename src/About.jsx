import React from "react";

const aboutData = [
  {
    icon: "fas fa-user-astronaut",
    title: "Who am I?",
    desc: "A passionate developer with a futuristic vision, blending creativity and technology to build immersive digital experiences.",
  },
  {
    icon: "fas fa-code-branch",
    title: "Tech Stack",
    desc: "React, JavaScript, Tailwind CSS, Node.js, and more. Always exploring new tech!",
  },
  {
    icon: "fas fa-rocket",
    title: "Mission",
    desc: "To create visually stunning, interactive, and user-friendly web applications that stand out.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4 tracking-wider neon-glow">About <span className="text-[#00fff7]">Me</span></h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {aboutData.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col items-center bg-white/10 rounded-2xl p-6 shadow-lg border border-[#00fff7]/20 neon-glow hover:scale-105 transition-transform duration-300 animate-float-up"
              style={{ animationDelay: `${0.2 * idx}s` }}
            >
              <div className="text-4xl text-[#00fff7] mb-2 neon-glow">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 text-center">{item.title}</h3>
              <p className="text-white/80 text-center text-base max-w-xs">{item.desc}</p>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default About; 