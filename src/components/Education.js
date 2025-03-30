'use client';
import { useState, useEffect } from 'react';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';

const educationData = [
    {
        degree: "Diploma in Computer Programming and Systems Analysis",
        institution: "Instituto Profesional San Sebastián",
        date: "Graduation Expected: 2025"
    },
    {
        degree: "Additional Coursework in Education and Computing",
        institution: "UMCE & UTEM",
        date: "Various Years"
    },
    {
        degree: "Frontend Bootcamp (Vue.js)",
        institution: "Completed",
        date: "Recent"
    },
    {
        degree: "Full-Stack Next.js Course",
        institution: "In Progress",
        date: "Current"
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
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
            <NavBarLeft />
            <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-500 ${
                        isGlowing ? "text-purple-400" : "text-gray-600"
                    }`}>
                        Education
                    </h2>

                    <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                        My educational background reflects my passion for learning and expanding my knowledge
                        in programming, systems analysis, and education.
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
