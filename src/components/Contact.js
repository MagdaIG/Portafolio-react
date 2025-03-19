'use client';
import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaCheckCircle } from 'react-icons/fa';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

const Contact = () => {
    const [isGlowing, setIsGlowing] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const recaptchaRef = useRef(null);
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

        if (!formData.name || !formData.email || !formData.message) {
            return;
        }

        // Verifica el captcha
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, token }),
        });

        const data = await response.json();
        if (data.success) {
            setShowModal(true);
            setFormData({ name: '', email: '', message: '' });
        }
        setIsSubmitted(false);
    };

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6 relative">
            <NavBarLeft />
            <div className="flex flex-col items-center justify-center text-center py-16 ml-20">
                <h2 className={`text-5xl font-bold mb-8 transition-all duration-500 ${isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"}`}>
                    Get in Touch
                </h2>

                <div className="relative w-[400px] h-[500px] mt-6 z-10">
                    <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                        <div className="front flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-800 p-8">
                            <FaHeart className="text-purple-400 text-8xl cursor-pointer animate-pulse" />
                            <p className="text-gray-400 text-xl mt-6">Touch Me!</p>
                        </div>

                        <div className="back bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center justify-between h-full" ref={formRef}>
                            <p className="text-gray-400 text-base px-6 text-center mb-6">
                                If you have any questions, suggestions, or collaboration ideas, feel free to reach out!
                            </p>

                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-4">
                                    <textarea name="message" placeholder="Message" className="w-full p-3 rounded bg-gray-700 text-white" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                                </div>

                                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={recaptchaRef} size="normal" />

                                <button type="submit" className="btn-primary w-full py-3 text-lg" disabled={isSubmitted}>
                                    {isSubmitted ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;