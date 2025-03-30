'use client';
import { useEffect, useState } from 'react';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';
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
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-14">
            <NavBarLeft />
            <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-5xl font-bold mb-8 text-center transition-all duration-500 ${
                        isGlowing ? "text-purple-400" : "text-gray-600"
                    }`}>
                        Technical Skills
                    </h2>

                    <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
                        Explore the tools and technologies I have worked with, from those I master to those I have explored.
                        Some I have learned independently, driven by my curiosity and passion for development;
                        others through academic training or as part of challenging projects.
                        Each of these experiences has enriched my skills and helped me create functional and innovative projects.
                        I am committed to continuous improvement and exploring new technologies to expand my impact and professional growth.
                    </p>

                    <div className="grid grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center"
                                style={{ borderBottom: `3px solid ${skill.color}` }}
                            >
                                <div className="text-4xl text-gray-400 mb-3">
                                    {skill.icon}
                                </div>
                                <p className="text-gray-400 text-sm font-medium">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;
