'use client';
import { useEffect, useState } from 'react';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaPhp, FaLaravel, FaJava, FaDatabase, FaVuejs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiNestjs, SiSpringboot, SiJquery, SiNextdotjs, SiPostgresql, SiIonic } from 'react-icons/si';

const skillsData = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "jQuery", icon: <SiJquery />, color: "#0769AD" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Ionic", icon: <SiIonic />, color: "#3880FF" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
];

const Skills = () => {
    const [isGlowing, setIsGlowing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 1200); // ⏳ Cambia cada 1.2 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6 relative">
            {/* Navbar lateral */}
            <NavBarLeft />

            <div className="flex flex-col items-center justify-center text-center py-14">
                <h2 className={`text-5xl font-bold mb-4 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    Technical Skills
                </h2>

                <p className="max-w-3xl text-lg text-gray-400 mt-2 leading-relaxed">
                    Explore the tools and technologies I have worked with, from those I master to those I have explored.
                    Some I have learned independently, driven by my curiosity and passion for development;
                    others through academic training or as part of challenging projects.
                    Each of these experiences has enriched my skills and helped me create functional and innovative projects.
                    I am committed to continuous improvement and exploring new technologies to expand my impact and professional growth.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ${
                                isGlowing ? "shadow-purple-500" : "shadow-gray-900"
                            } hover:scale-105`}
                            style={{ borderBottom: `4px solid ${skill.color}` }}
                        >
                            <div className="text-gray-400 text-5xl transition-all duration-500 hover:text-[--primary-color]">
                                {skill.icon}
                            </div>

                            <p className={`text-lg font-semibold mt-2 transition-all duration-500 ${
                                isGlowing ? "text-white" : "text-gray-600"
                            }`}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default Skills;