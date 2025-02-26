'use client';
import { useState, useEffect } from 'react';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

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
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6">
            <NavBarLeft />

            <div className="flex flex-col items-center justify-center text-center py-16">
                <h2 className={`text-5xl font-bold mb-6 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    Education
                </h2>

                <p className="max-w-3xl text-lg text-gray-400 mt-2 leading-relaxed">
                    My educational background reflects my passion for learning and expanding my knowledge
                    in programming, systems analysis, and education.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300
                            hover:shadow-purple-500 hover:scale-105">
                            <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                            <p className="text-gray-300">{edu.institution}</p>
                            <p className="text-gray-400">{edu.date}</p>
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

export default Education;