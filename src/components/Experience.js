'use client';
import { useState, useEffect } from 'react';
import NavBarLeft from './NavBarLeft';
import Footer from './Footer';

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
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-14">
            <NavBarLeft />
            <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-5xl font-bold mb-8 text-center transition-all duration-500 ${
                        isGlowing ? "text-purple-400" : "text-gray-600"
                    }`}>
                        Professional Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
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

                    <div className="w-full max-w-lg mx-auto bg-gray-800 border-l-4 border-purple-500 p-8 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-purple-500">
                        <h3 className="text-2xl font-semibold text-purple-400">{adminExperience.title}</h3>
                        <p className="text-gray-300 mt-1">{adminExperience.company} | <span className="italic">{adminExperience.date}</span></p>
                        <div className="mt-4 space-y-2 text-gray-400">
                            {adminExperience.description.map((desc, i) => (
                                <p key={i} className="text-sm border-l-2 border-purple-400 pl-3">{desc}</p>
                            ))}
                        </div>

                        <div className="flex justify-center mt-6">
                            <a href={adminExperience.resumeLink} target="_blank" rel="noopener noreferrer"
                               className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:shadow-lg">
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Experience;
