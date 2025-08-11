'use client';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';

const Contact = () => {
  const [isGlowing, setIsGlowing] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFlip = (e) => {
    if (formRef.current && formRef.current.contains(e.target)) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitted(true);

    try {
      // Using Formspree for static form handling
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/manbvygz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Server Error. Please try again later.");
      console.error("Server Error:", error);
    }

    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-14">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="relative">
            <div 
              ref={formRef}
              className={`bg-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-500 transform ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitted ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:magda@inalaf.ca"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">magda@inalaf.ca</p>
                </div>
              </a>

              <a
                href="https://github.com/magdaig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-gray-300">@magdaig</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/minalaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-700 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <FaLinkedin className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-300">minalaf</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="mb-4">
              <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
