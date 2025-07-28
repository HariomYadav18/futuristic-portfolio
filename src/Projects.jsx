import React from "react";

const projects = [
  {
    title: "Futuristic Portfolio",
    desc: "A next-gen portfolio with 3D effects, glassmorphism, and interactive animations.",
    link: "#",
    icon: "fas fa-laptop-code",
  },
  {
    title: "AI Chatbot",
    desc: "Conversational AI assistant with real-time responses and a glowing UI.",
    link: "#",
    icon: "fas fa-robot",
  },
  {
    title: "Crypto Dashboard",
    desc: "Live crypto stats with neon charts and a dark, immersive interface.",
    link: "#",
    icon: "fas fa-coins",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wider neon-glow">My <span className="text-[#00fff7]">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-[#00fff7]/30 neon-glow p-8 flex flex-col items-center gap-4 transform hover:scale-105 hover:shadow-[0_0_32px_#00fff7] transition-all duration-300 animate-float-up"
              style={{ animationDelay: `${0.2 * idx}s` }}
            >
              <div className="text-5xl text-[#00fff7] mb-2 neon-glow">
                <i className={project.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-white text-center group-hover:text-[#00fff7] transition-colors duration-300">{project.title}</h3>
              <p className="text-white/80 text-center text-base">{project.desc}</p>
            </a>
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

export default Projects; 