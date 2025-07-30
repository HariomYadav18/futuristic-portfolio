import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessageSent(false);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_0000000',
          template_id: 'template_0000000',
          user_id: 'user_0000000',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setMessageSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
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

            <button
              type="submit"
              className="w-full py-3 bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1e90ff]/30"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin mr-2"></i>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
