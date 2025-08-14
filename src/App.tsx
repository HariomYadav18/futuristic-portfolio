import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./Footer";
import ThreeBackground from "./components/ThreeBackground";
import Settings from "./components/Settings";
import { usePreferences } from "./context/PreferencesContext";

interface Section {
  id: string;
  label: string;
  icon: string;
}

const sections: Section[] = [
  { id: "home", label: "Home", icon: "fas fa-house" },
  { id: "about", label: "About", icon: "fas fa-user-astronaut" },
  { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
  { id: "skills", label: "Skills", icon: "fas fa-file-code" },
  { id: "projects", label: "Projects", icon: "fas fa-laptop-code" },
  { id: "contact", label: "Contact", icon: "fas fa-paper-plane" },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const { preferences } = usePreferences();

  const renderSection = (): React.ReactNode => {
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
    <div className="min-h-screen w-screen relative overflow-x-hidden">
      {/* Settings Panel */}
      <Settings />
      {/* 3D Background */}
      {preferences.animations.enabled && <ThreeBackground />}
      {/* Gradient Background (fallback) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#121212] to-[#1e1e1e]" />
      {/* Navigation */}
      <Navbar />
      <nav className="flex justify-center gap-4 p-4">
        {sections.map((section) => (
          <a
            key={section.id}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-white/20 text-white'
                : 'hover:bg-white/10'
            }`}
            href={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}
            aria-label={section.label}
          >
            <i className={section.icon} /> {section.label}
          </a>
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