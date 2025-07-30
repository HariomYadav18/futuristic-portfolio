import React, { useState } from 'react';

const projectsData = [
  {
    title: 'FoodHome',
    description: 'A food delivery app built with React, Node.js, MongoDB, Express, Auth0 for authentication, and Stripe for payments.',
    image: 'https://img.freepik.com/free-vector/food-delivery-app-landing-page_52683-25452.jpg?w=740',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Auth0', 'Stripe'],
    category: 'reactjs',
  },
  {
    title: 'Catch The Fruits Game',
    description: 'A fun game where players catch fruits falling from the sky using HTML5 Canvas and JavaScript.',
    image: 'https://img.freepik.com/free-vector/fruit-catch-game-concept_1284-18445.jpg?w=740',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
    category: 'html-css-js',
  },
  {
    title: 'Incident Reporting',
    description: 'A full-stack web application for incident management with user authentication and reporting features.',
    image: 'https://img.freepik.com/free-vector/incident-reporting-system-concept_1284-18446.jpg?w=740',
    technologies: ['React', 'Spring Boot', 'MySQL'],
    category: 'reactjs',
  },
  {
    title: 'Dice Game',
    description: 'A responsive dice game with a modern UI built using React and styled-components.',
    image: 'https://img.freepik.com/free-vector/dice-game-concept_1284-18447.jpg?w=740',
    technologies: ['React', 'styled-components'],
    category: 'reactjs',
  },
  {
    title: 'ATM Machine',
    description: 'A Java-based ATM simulation with object-oriented programming concepts and data structures.',
    image: 'https://img.freepik.com/free-vector/atm-machine-concept_1284-18448.jpg?w=740',
    technologies: ['Java', 'Collections', 'OOP'],
    category: 'java',
  },
  {
    title: 'Contact App',
    description: 'A contact management application with CRUD operations using React and Firebase.',
    image: 'https://img.freepik.com/free-vector/contact-app-concept_1284-18449.jpg?w=740',
    technologies: ['React', 'Firebase'],
    category: 'reactjs',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-wider neon-glow">
          <i className="fa-solid fa-list-check mr-2"></i>Projects
        </h2>

        {/* Filter Menu */}
        <div className="flex gap-4 mb-8 justify-center">
          {['all', 'reactjs', 'java', 'html-css-js'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#00fff7] text-[#232526] hover:bg-[#00e6d2]'
                  : 'bg-white/10 hover:bg-[#00fff7]/20'
              }`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-[#00fff7]/20 hover:bg-[#00fff7]/10 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00fff7] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 text-sm bg-[#00fff7]/20 rounded-full text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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

export default Projects;
