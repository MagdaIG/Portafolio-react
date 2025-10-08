'use client';
import { useEffect, useState } from 'react';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaPhp, FaLaravel, FaJava, FaDatabase, FaVuejs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiNestjs, SiSpringboot, SiJquery, SiNextdotjs, SiPostgresql, SiIonic } from 'react-icons/si';

const skillsData = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "jQuery", icon: <SiJquery />, color: "#0769AD" },
    { name: "React", icon: <FaJs />, color: "#61DAFB" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Oracle", icon: <FaDatabase />, color: "#F80000" },
    { name: "Git", icon: <FaGithub />, color: "#181717" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Docker", icon: <FaGithub />, color: "#2496ED" },
    { name: "Kubernetes", icon: <FaGithub />, color: "#326CE5" },
    { name: "AWS", icon: <FaGithub />, color: "#FF9900" },
    { name: "Jest", icon: <FaJs />, color: "#C21325" },
    { name: "Cypress", icon: <FaJs />, color: "#17202C" },
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
                        Explore the comprehensive technical skills I've developed as a Software Developer.
                        From frontend frameworks like React, Vue.js, and Next.js to backend technologies like Laravel and NestJS,
                        I work with modern tools and methodologies. Experienced in CI/CD pipelines, Docker, Kubernetes,
                        and cloud platforms like AWS. Strong foundation in testing with Jest and Cypress,
                        and design principles with Figma. Committed to continuous learning and staying current with
                        emerging technologies in the software development landscape.
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
