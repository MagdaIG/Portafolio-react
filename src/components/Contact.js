'use client';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCheckCircle } from 'react-icons/fa';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

const Contact = () => {
    const [isGlowing, setIsGlowing] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleFlip = (e) => {
        if (containerRef.current && containerRef.current.contains(e.target)) {
            return;
        }
        setIsFlipped(!isFlipped);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            return;
        }

        setIsSubmitted(true);
        setTimeout(() => {
            setShowModal(true);
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 800);
    };

    return (
        <div
            className="w-screen min-h-screen h-screen flex flex-col bg-gray-900 text-white px-6 relative overflow-hidden">
            <NavBarLeft/>

            {/* ✅ Ajuste para ocupar toda la pantalla sin bordes blancos */}
            <div className="flex flex-col items-center justify-center text-center flex-grow py-16 min-h-[100vh]">
                <h2 className={`text-5xl font-bold mb-8 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    Get in Touch
                </h2>

                <div className="relative w-[400px] h-[500px] mt-6 z-10">
                    <div
                        className={`flip-container ${isFlipped ? 'flipped' : ''}`}
                        onClick={handleFlip}
                    >
                        <div
                            className="front flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-800 p-8">
                            <FaHeart className="text-purple-400 text-8xl cursor-pointer animate-pulse"/>
                            <p className="text-gray-400 text-xl mt-6">Touch Me!</p>
                        </div>

                        <div
                            className="back bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center justify-between h-full"
                            ref={containerRef}>
                            <p className="text-gray-400 text-base px-6 text-center mb-6">
                                If you have any questions, suggestions, or collaboration ideas, feel free to reach out!
                            </p>

                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
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
                                        className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary w-full py-3 text-lg"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? "Sending..." : "Send Message"}
                                </button>
                            </form>

                            <div className="flex space-x-6 mt-6 mb-4">
                                <a href="mailto:magda.inalaf@gmail.com"
                                   className="p-4 rounded-lg shadow-lg hover:shadow-purple-500 transition transform hover:scale-110 bg-gray-700">
                                    <FaEnvelope className="text-purple-400 text-xl"/>
                                </a>
                                <a href="https://github.com/MagdaIG" target="_blank" rel="noopener noreferrer"
                                   className="p-4 rounded-lg shadow-lg hover:shadow-purple-500 transition transform hover:scale-110 bg-gray-700">
                                    <FaGithub className="text-purple-400 text-xl"/>
                                </a>
                                <a href="https://www.linkedin.com/in/minalaf/" target="_blank" rel="noopener noreferrer"
                                   className="p-4 rounded-lg shadow-lg hover:shadow-purple-500 transition transform hover:scale-110 bg-gray-700">
                                    <FaLinkedin className="text-purple-400 text-xl"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm">
                        <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4"/>
                        <p className="text-gray-300 text-lg">Your message has been sent successfully!</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn-primary w-full mt-4"
                        >
                            OK
                        </button>
                    </div>

                    <div>
                        <Footer/>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Contact;