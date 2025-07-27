import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6 tracking-wider neon-glow">Contact <span className="text-[#00fff7]">Me</span></h2>
        <form className="flex flex-col gap-6">
          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-5 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] neon-glow transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-5 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] neon-glow transition-all duration-300"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-5 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] neon-glow transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="self-center px-10 py-3 rounded-full bg-[#00fff7] text-[#232526] font-bold shadow-lg neon-glow hover:scale-105 hover:bg-[#00e6d2] transition-all duration-300 animate-bounce flex items-center gap-2"
          >
            <span>Send</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
        {/* Social Icons */}
        <div className="flex gap-6 mt-8 justify-center">
          <a href="https://www.instagram.com/_hariom_18/?hl=en" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hariom-yadav-066548251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow">
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
      `}</style>
    </section>
  );
};

export default Contact; 