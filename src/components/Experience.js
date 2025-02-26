'use client';
import { useState, useEffect } from 'react';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

const experienceData = [
    {
        title: "Software Developer (Internship)",
        company: "IVI SpA",
        date: "Nov 2023 – Feb 2024",
        description: [
            "Developed an order and product unifier with Next.js.",
            "Implemented Git & GitHub workflows.",
            "Applied agile methodologies (Kanban)."
        ]
    },
    {
        title: "Software Developer (Short-term Internship)",
        company: "ReImpact.cl",
        date: "Jan 2024 – Feb 2024",
        description: [
            "Implemented E2E and unit tests.",
            "Optimized policies and Eloquent-based features.",
            "Used Git & GitHub for version control."
        ]
    }
];

const adminExperience = {
    title: "Administrator",
    company: "IVI SpA",
    date: "Jul 2020 – Sept 2023",
    description: [
        "Managed business operations and order fulfillment.",
        "Handled government procurement and bidding.",
        "Developed and optimized proposals for government contracts."
    ],
    resumeLink: "/Magdalena-Inalaf-Frontend-Developer.pdf"
};

const Experience = () => {
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

            <div className="flex flex-col items-center text-center py-16">
                {/* 🔹 Título con efecto de parpadeo */}
                <h2 className={`text-5xl font-bold mb-10 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    Professional Experience
                </h2>

                {/* 🔹 Sección de Experiencia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {experienceData.map((job, index) => (
                        <div key={index} className="p-6 bg-gray-800 border-l-4 border-purple-500 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-purple-500">
                            <h3 className="text-2xl font-semibold text-purple-400">{job.title}</h3>
                            <p className="text-gray-300 mt-1">{job.company} | <span className="italic">{job.date}</span></p>
                            <div className="mt-4 space-y-2 text-gray-400">
                                {job.description.map((desc, i) => (
                                    <p key={i} className="text-sm border-l-2 border-purple-400 pl-3">{desc}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔹 Sección de Administración y Descarga del CV */}
                <div className="mt-14 w-full max-w-lg bg-gray-800 border-l-4 border-purple-500 p-8 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-purple-500">
                    <h3 className="text-2xl font-semibold text-purple-400">{adminExperience.title}</h3>
                    <p className="text-gray-300 mt-1">{adminExperience.company} | <span className="italic">{adminExperience.date}</span></p>
                    <div className="mt-4 space-y-2 text-gray-400">
                        {adminExperience.description.map((desc, i) => (
                            <p key={i} className="text-sm border-l-2 border-purple-400 pl-3">{desc}</p>
                        ))}
                    </div>

                    {/* 🔹 Botón para descargar el CV */}
                    <div className="flex justify-center mt-6">
                        <a href={adminExperience.resumeLink} target="_blank" rel="noopener noreferrer"
                           className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:shadow-lg">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Experience;