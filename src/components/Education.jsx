import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: 'B.Tech in CSE',
      institution: 'VIT Bhopal University',
      year: '2022-2026',
      gpa: 'CGPA: 8.63',
    },
    {
      title: 'Class 12th | CBSE Board',
      institution: 'Narayana Junior College',
      year: '2020-2022',
      gpa: 'GPA: 7.78',
    },
    {
      title: 'Class 10th | CBSE Board',
      institution: 'Delhi Public School, Bangalore North',
      year: '2019-2020',
      gpa: 'GPA: 9.3',
    },
  ];

  return (
    <section id="education" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wider neon-glow">
          <i className="fa-solid fa-graduation-cap mr-2"></i>Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative p-6 bg-white/5 rounded-2xl border border-[#00fff7]/20">
              <div className="absolute right-0 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00fff7]/20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-graduation-cap text-[#00fff7] text-xl"></i>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                <p className="text-white/80">{edu.institution}</p>
                <p className="text-white/70">{edu.year}</p>
                <p className="text-[#00fff7] font-semibold">{edu.gpa}</p>
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

export default Education;
