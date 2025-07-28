import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./Footer";

const sections = [
  { id: "home", label: "Home", icon: "fas fa-house" },
  { id: "about", label: "About", icon: "fas fa-user-astronaut" },
  { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
  { id: "skills", label: "Skills", icon: "fas fa-file-code" },
  { id: "projects", label: "Projects", icon: "fas fa-laptop-code" },
  { id: "contact", label: "Contact", icon: "fas fa-paper-plane" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Futuristic Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#6a11cb] via-[#2575fc] to-[#ff6a88]" />
      {/* Floating Sidebar Overlay */}
      <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-[#ff6a88]/30 neon-glow p-4 animate-float-in" style={{height: 'auto', minHeight: '320px'}}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`flex flex-col items-center gap-1 text-white text-xl hover:text-[#ff6a88] transition-all duration-300 focus:outline-none ${activeSection === section.id ? "text-[#ff6a88] scale-110" : "opacity-70"}`}
            onClick={() => setActiveSection(section.id)}
            aria-label={section.label}
          >
            <i className={`${section.icon} neon-glow`}></i>
            <span className="text-xs font-bold tracking-wider">{section.label}</span>
          </button>
        ))}
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 w-full px-4 py-8 transition-all duration-700 md:ml-32">
        <div className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white/10 backdrop-blur-2xl border border-[#ff6a88]/10 p-0 md:p-8 animate-section-in">
          {renderSection()}
        </div>
        <Footer />
      </main>
      <style>{`
        @keyframes float-in {
          0% { opacity: 0; transform: translateX(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-float-in {
          animation: float-in 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes section-in {
          0% { opacity: 0; transform: scale(0.95) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-section-in {
          animation: section-in 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .neon-glow {
          filter: drop-shadow(0 0 8px #ff6a88) drop-shadow(0 0 16px #ff6a88);
        }
      `}</style>
    </div>
  );
}

export default App;
