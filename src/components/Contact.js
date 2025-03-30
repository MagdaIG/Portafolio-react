'use client';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCheckCircle } from 'react-icons/fa';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';
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
    <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6 relative">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        onLoad={() => {
          initializeTurnstile();
        }}
      />
      <NavBarLeft />
      <div className="flex flex-col items-center justify-center text-center py-16 ml-20">
        <h2 className={`text-5xl font-bold mb-8 transition-all duration-500 ${isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"}`}>
          Get in Touch
        </h2>

        <div className="relative w-[400px] h-[550px] mt-6 z-10">
          <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-800 p-8">
              <FaHeart className="text-purple-400 text-8xl cursor-pointer animate-pulse" />
              <p className="text-gray-400 text-xl mt-6">Touch Me!</p>
            </div>

            <div className="back bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center justify-between h-full" ref={formRef}>
              <p className="text-gray-400 text-base px-6 text-center mb-4">
                If you have any questions, suggestions, or collaboration ideas, feel free to reach out!
              </p>

              {errorMessage && <p className="text-red-400">{errorMessage}</p>}

              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-gray-700 text-white"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded bg-gray-700 text-white"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full p-3 rounded bg-gray-700 text-white"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div id="turnstile-widget" className="flex justify-center my-3 min-h-[65px] rounded p-2"></div>

                <button type="submit" className="btn-primary w-full py-3 text-lg" disabled={isSubmitted}>
                  {isSubmitted ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm">
            <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
            <p className="text-gray-300 text-lg">Your message has been sent successfully!</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary w-full mt-4"
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
