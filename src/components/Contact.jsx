import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    try {
      // Here you would typically make an API call to send the form data
      // For now, we'll just simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#1e1e1e] py-20 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#1e1e1e]" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00fff7]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#1e90ff]/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto p-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wider">
          <i className="fa-solid fa-envelope mr-2"></i>Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-[#1e90ff]/10 transition-all duration-300">
              <i className="fa-solid fa-phone text-2xl text-[#00fff7]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                <p className="text-white/80">+91 88279 00431</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-[#1e90ff]/10 transition-all duration-300">
              <i className="fa-solid fa-envelope text-2xl text-[#00fff7]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-white/80">hariom18yadav@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-[#1e90ff]/10 transition-all duration-300">
              <i className="fa-solid fa-location-dot text-2xl text-[#00fff7]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                <p className="text-white/80">India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#1e90ff]/20 focus:border-[#1e90ff] focus:ring-2 focus:ring-[#1e90ff]/30 text-white placeholder-white/50 outline-none transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#1e90ff]/20 focus:border-[#1e90ff] focus:ring-2 focus:ring-[#1e90ff]/30 text-white placeholder-white/50 outline-none transition-all duration-300"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#1e90ff]/20 focus:border-[#1e90ff] focus:ring-2 focus:ring-[#1e90ff]/30 text-white placeholder-white/50 outline-none transition-all duration-300"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 h-40 bg-white/5 rounded-lg border border-white/10 hover:border-[#1e90ff]/20 focus:border-[#1e90ff] focus:ring-2 focus:ring-[#1e90ff]/30 text-white placeholder-white/50 outline-none transition-all duration-300 resize-none"
              required
            />
              <a href="https://github.com/HariomYadav18" target="_blank" rel="noopener noreferrer" className="text-[#00fff7] hover:text-white transition-colors duration-300">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/_hariom_18/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hariom-yadav-066548251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#00fff7] hover:text-white transition-colors duration-300 neon-glow"
          >
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
