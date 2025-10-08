'use client';
import { useState, useEffect } from 'react';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';

const educationData = [
    {
        degree: "Diploma in Programming and Systems Analysis",
        institution: "Instituto Profesional San Sebastián – Santiago, Chile",
        date: "2023 – 2025"
    },
    {
        degree: "Fundamentals of Control and Management in Cybersecurity",
        institution: "USACH, Chile",
        date: "2025"
    },
    {
        degree: "UX/UI Design with Figma",
        institution: "SENCE, Chile",
        date: "2025"
    },
    {
        degree: "Agile Methodologies: Scrum",
        institution: "SENCE, Chile",
        date: "2024"
    },
    {
        degree: "Database Design and SQL Programming",
        institution: "Instituto Profesional San Sebastián, Chile",
        date: "2024"
    },
    {
        degree: "Frontend Bootcamp – Vue.js",
        institution: "SENCE / Talento Digital, Chile",
        date: "2023"
    },
    {
        degree: "Full-Stack Development with Next.js",
        institution: "Udemy",
        date: "2023"
    }
];

const Education = () => {
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
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-500 ${
                        isGlowing ? "text-purple-400" : "text-gray-600"
                    }`}>
                        Education
                    </h2>

                    <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                        My educational journey combines formal academic training with continuous professional development.
                        From my diploma in Programming and Systems Analysis to specialized courses in cybersecurity,
                        UX/UI design, and agile methodologies, I'm committed to staying current with industry trends and technologies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500 border-l-4 border-purple-500"
                            >
                                <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                                <p className="text-gray-300 mt-2">{edu.institution}</p>
                                <p className="text-gray-400 mt-1">{edu.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Education;
