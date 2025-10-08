'use client';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';

const AboutMe = () => {
    const [isGlowing, setIsGlowing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 1200); // ⏳ Efecto de parpadeo cada 1.2 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6 relative">
            <div className="flex flex-col items-center justify-center text-center py-14">
                <h2 className={`text-5xl font-bold mb-4 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center max-w-5xl bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-purple-500">
                    <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                        <ProfileImage />
                    </div>

                    <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left max-w-2xl">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Software developer specialized in building scalable, responsive, and interactive
                            applications with React, Vue.js, and Next.js. Experienced in GitHub workflows,
                            CI/CD pipelines, and agile methodologies.
                        </p>
                        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                            Strong collaboration, communication, and problem-solving skills, with proven
                            adaptability and continuous learning mindset. Based in Vancouver, BC, Canada,
                            I bring a unique perspective combining technical expertise with user-centered
                            design principles to create meaningful digital solutions.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <div className="flex space-x-4 bg-gray-800 p-4 rounded-xl shadow-lg text-sm md:text-base opacity-0 animate-fadeIn delay-500">
                        <a href="/experience" className="btn-primary">Experience</a>
                        <a href="education" className="btn-primary">Education</a>
                        <a href="certifications" className="btn-primary">Certifications</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;
