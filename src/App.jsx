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
      {/* Top Navigation Bar */}
      <nav className="w-full flex justify-center gap-8 bg-white/10 backdrop-blur-2xl shadow-2xl border-b border-[#ff6a88]/30 neon-glow py-4 animate-float-in sticky top-0 z-50">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`flex flex-col items-center gap-1 text-white text-lg hover:text-[#ff6a88] transition-all duration-300 focus:outline-none ${activeSection === section.id ? "text-[#ff6a88] scale-110" : "opacity-70"}`}
            onClick={() => setActiveSection(section.id)}
            aria-label={section.label}
          >
            <i className={`${section.icon} neon-glow`}></i>
            <span className="text-xs font-bold tracking-wider">{section.label}</span>
          </button>
        ))}
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 w-full px-0 py-8 transition-all duration-700">
        <div className="w-full rounded-3xl shadow-2xl bg-white/10 backdrop-blur-2xl border border-[#ff6a88]/10 p-0 md:p-8 animate-section-in">
          {renderSection()}
        </div>
        <Footer />
      </main>
      <style>{`
        @keyframes float-in {
          0% { opacity: 0; transform: translateY(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
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
