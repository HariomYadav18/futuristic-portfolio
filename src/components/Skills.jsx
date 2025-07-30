import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png',
      name: 'ReactJS',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
      name: 'Java',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
      name: 'JavaScript',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
      name: 'HTML5',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/css3.png',
      name: 'CSS3',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
      name: 'Node.js',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
      name: 'MongoDB',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/express.png',
      name: 'Express.js',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png',
      name: 'MySQL',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/spring-logo.png',
      name: 'Spring Boot',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/firebase.png',
      name: 'Firebase',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/stripe.png',
      name: 'Stripe',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/auth0.png',
      name: 'Auth0',
    },
    {
      icon: 'https://img.icons8.com/color/48/000000/git.png',
      name: 'Git',
    },
  ];

  return (
    <section id="skills" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wider neon-glow">
          <i className="fa-sharp fa-regular fa-file-code mr-2"></i>Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white/5 rounded-2xl border border-[#00fff7]/20 hover:bg-[#00fff7]/10 transition-all duration-300"
            >
              <div className="absolute right-0 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00fff7]/20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-star text-[#00fff7] text-sm group-hover:scale-125 transition-transform duration-300"></i>
              </div>

              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-lg hover:shadow-[0_0_32px_#00fff7] transition-shadow duration-300"
              />
              
              <p className="text-xl font-semibold text-white text-center group-hover:text-[#00fff7] transition-colors duration-300">
                {skill.name}
              </p>
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

export default Skills;
