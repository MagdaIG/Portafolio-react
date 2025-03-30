'use client';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCheckCircle } from 'react-icons/fa';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';
import Script from 'next/script';

const Contact = () => {
  const [isGlowing, setIsGlowing] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const turnstileRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const initializeTurnstile = () => {
    if (window.turnstile) {
      window.turnstile.render('#turnstile-widget', {
        sitekey: "0x4AAAAAABDI7S7HQ_arXfti",
        callback: function(token) {
          turnstileRef.current = token;
        },
        'error-callback': function() {
          console.error('Turnstile error');
          setErrorMessage("Error al cargar la verificación de seguridad. Por favor, recarga la página.");
        }
      });
    } else {
      console.error('Turnstile not loaded');
    }
  };

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

    if (!turnstileRef.current) {
      setErrorMessage("Please complete the security check.");
      return;
    }

    setIsSubmitted(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token: turnstileRef.current }),
      });

      const data = await response.json();

      if (data.success) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset Turnstile
        if (window.turnstile) {
          window.turnstile.reset();
          turnstileRef.current = null;
        }
      } else {
        setErrorMessage(data.error || "There was an error sending your message. Please try again.");
        console.error("Error:", data.error);
      }
    } catch (error) {
      setErrorMessage("Server Error. Please try again later.");
      console.error("Server Error:", error);
    }

    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        onLoad={() => {
          initializeTurnstile();
        }}
      />
      <NavBarLeft />
      <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-center transition-all duration-500 ${
            isGlowing ? "text-purple-400" : "text-gray-600"
          }`}>
            Get in Touch
          </h2>

          <div className="flex justify-center px-4 md:px-0">
            <div className="w-full max-w-[400px] relative h-[600px] md:h-[550px]">
              <div className={`flip-container absolute w-full h-full ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="front absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg bg-gray-800 p-6 md:p-8 border-l-4 border-purple-500">
                  <FaHeart className="text-purple-400 text-6xl md:text-8xl cursor-pointer animate-pulse" />
                  <p className="text-gray-400 text-lg md:text-xl mt-4 md:mt-6">Touch Me!</p>
                </div>

                <div className="back absolute w-full h-full bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg flex flex-col border-l-4 border-purple-500" ref={formRef}>
                  <p className="text-gray-400 text-sm md:text-base text-center mb-4 md:mb-6">
                    If you have any questions, suggestions, or collaboration ideas, feel free to reach out!
                  </p>

                  {errorMessage && <p className="text-red-400 text-xs md:text-sm mb-3 md:mb-4">{errorMessage}</p>}

                  <form className="w-full flex-grow flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-3 md:mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-2.5 md:p-3 rounded bg-gray-700 text-white text-sm md:text-base"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 md:mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-2.5 md:p-3 rounded bg-gray-700 text-white text-sm md:text-base"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 md:mb-4 flex-grow">
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full h-[120px] md:h-full min-h-[100px] p-2.5 md:p-3 rounded bg-gray-700 text-white text-sm md:text-base"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div id="turnstile-widget" className="flex justify-center mb-3 md:mb-4 min-h-[65px] rounded"></div>

                    <button
                      type="submit"
                      className="w-full py-2.5 md:py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition duration-300 text-sm md:text-lg"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-gray-800 p-5 md:p-6 rounded-xl shadow-lg text-center w-full max-w-sm border-l-4 border-purple-500">
            <FaCheckCircle className="text-green-400 text-4xl md:text-5xl mx-auto mb-3 md:mb-4" />
            <p className="text-gray-300 text-base md:text-lg">Your message has been sent successfully!</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 md:mt-4 py-2.5 md:py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition duration-300 text-sm md:text-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
