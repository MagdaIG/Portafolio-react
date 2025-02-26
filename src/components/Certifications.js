'use client';
import { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

const certificationsData = [
    {
        name: "Methodologies for Software Development",
        file: "/certificates/methodologies.pdf",
        description: "Understanding different software development methodologies has allowed me to approach projects with an adaptive and strategic mindset."
    },
    {
        name: "UX/UI & Figma 2024",
        file: "/certificates/magdalena-inalaf-ux-ui.pdf",
        description: "Designing intuitive and visually appealing interfaces has strengthened my ability to blend aesthetics with usability."
    },
    {
        name: "Agile Methodologies",
        file: "/certificates/magdalena-inalaf-agile.pdf",
        description: "In my pursuit of growth, I have embraced Agile methodologies to enhance collaboration and adaptability in fast-paced projects."
    },
    {
        name: "Frontend Bootcamp (Vue.js)",
        file: "/certificates/vue.pdf",
        description: "Mastering Vue.js has empowered me to build dynamic and interactive user experiences with a modern approach."
    },
    {
        name: "Database Management",
        file: "/certificates/databases.pdf",
        description: "Managing structured data efficiently has been key to ensuring optimized performance in backend solutions."
    },
    {
        name: "Object-Oriented Programming",
        file: "/certificates/oop.pdf",
        description: "Applying OOP principles has enabled me to write clean, modular, and scalable code across various programming languages."
    },
    {
        name: "Design & Web Development",
        file: "/certificates/magdalena-inalaf-web.pdf",
        description: "Exploring design principles and web development frameworks has allowed me to create responsive and aesthetically pleasing web experiences."
    }
];

const Certifications = () => {
    const [isGlowing, setIsGlowing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6">
            <NavBarLeft />

            <div className="flex flex-col items-center justify-center text-center py-12">
                <h2 className={`text-5xl font-bold mb-8 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className={`p-5 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500 max-w-[350px] mx-auto
                                ${certificationsData.length % 2 !== 0 && index === certificationsData.length - 1 ? "lg:col-span-3 text-center" : ""}`
                            }
                        >
                            <h3 className="text-lg font-semibold text-purple-400">{cert.name}</h3>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{cert.description}</p>
                            <a href={cert.file} target="_blank" rel="noopener noreferrer"
                               className="mt-3 inline-flex items-center text-white hover:text-secondary transition transform hover:scale-110">
                                <FaArrowDown className="text-lg mr-1" />
                                <span className="text-sm">View Certificate</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Certifications;