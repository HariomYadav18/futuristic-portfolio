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
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#00fff7]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00fff7]/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#00fff7]/30 neon-glow animate-float-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wider neon-glow">
          <i className="fa-solid fa-headset mr-2"></i>Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-[#00fff7]/30 text-white placeholder-[#00fff7]/60 focus:outline-none focus:ring-2 focus:ring-[#00fff7] transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-8 py-3 rounded-full bg-[#00fff7] text-[#232526] font-bold shadow-lg neon-glow transition-all duration-300 ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {submitting ? 'Sending...' : success ? 'Sent!' : 'Send Message'}
            <i className="fa-solid fa-paper-plane ml-2"></i>
          </button>
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
