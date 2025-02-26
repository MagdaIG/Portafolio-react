'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';

const primaryProjects = [
    {
        name: "Course Manager",
        description: "A Course Management system built with Vue.js and API integration.",
        image: "/projects/course-manager.png",
        link: "https://administrador-cursos.onrender.com/"
    },
    {
        name: "Game Catalog",
        description: "A dynamic catalog of games with user interactions and comments. Built with Vue.js.",
        image: "/projects/game-catalog.png",
        link: "https://magdaig.github.io/video-juegos-vue/"
    },
    {
        name: "My Portfolio (Vue.js)",
        description: "An earlier version of my portfolio built with Vue.js, showcasing my skills and projects.",
        image: "/projects/vue-portfolio.png",
        link: "https://magdaig.github.io/Portafolio-vue/"
    }
];

const secondaryProjects = [
    {
        name: "Star Wars Explorer",
        description: "Explore character details from Star Wars using JavaScript and API integration.",
        image: "/projects/star-wars-explorer.png",
        link: "https://magdaig.github.io/star-wars-js/"
    },
    {
        name: "Travel Website",
        description: "A beautifully designed travel website with interactive UI elements.",
        image: "/projects/travel-website.png",
        link: "https://magdaig.github.io/web-viajes/"
    },
    {
        name: "Shopping Cart",
        description: "A fully functional shopping cart built with HTML, CSS, and JavaScript.",
        image: "/projects/shopping-cart.png",
        link: "https://magdaig.github.io/carrito-compra/"
    },
    {
        name: "Social Travel Network",
        description: "A social media platform for travel enthusiasts to share experiences.",
        image: "/projects/social-travel.png",
        link: "https://magdaig.github.io/Red-social-travel/"
    },
    {
        name: "Portfolio MIG",
        description: "Another portfolio experiment with a unique design and layout.",
        image: "/projects/mig-portfolio.png",
        link: "https://magdaig.github.io/portafolio-MIG/"
    },
    {
        name: "Price Calculator",
        description: "A price calculator with discount simulation using JavaScript.",
        image: "/projects/price-calculator.png",
        link: "https://magdaig.github.io/calculador-precios/"
    }
];

const Projects = () => {
    const [isGlowing, setIsGlowing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white px-6 relative">
            {/* Navbar */}
            <NavBarLeft />

            <div className="flex flex-col items-center text-center py-16 lg:ml-20 relative">
                {/* 🔹 Título con efecto de parpadeo */}
                <h2 className={`text-5xl font-bold mb-10 transition-all duration-500 ${
                    isGlowing ? "text-purple-400 shadow-lg" : "text-gray-600"
                }`}>
                    My Projects
                </h2>

                {/* 🔹 Sección de Proyectos Principales */}
                <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Main Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {primaryProjects.map((project, index) => (
                        <div key={index} className="p-5 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500">
                            <div className="relative w-full h-48 rounded-md overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:opacity-90 transition duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-purple-400 mt-4">{project.name}</h3>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                               className="mt-3 inline-flex items-center text-white hover:text-secondary transition transform hover:scale-110">
                                <FaExternalLinkAlt className="text-lg mr-1" />
                                <span className="text-sm">Live View</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-gray-700 my-12"></div>

                {/* 🔹 Sección de Proyectos Secundarios */}
                <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Some Other Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {secondaryProjects.map((project, index) => (
                        <div key={index} className="p-5 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500">
                            <div className="relative w-full h-48 rounded-md overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:opacity-90 transition duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-purple-400 mt-4">{project.name}</h3>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                               className="mt-3 inline-flex items-center text-white hover:text-secondary transition transform hover:scale-110">
                                <FaExternalLinkAlt className="text-lg mr-1" />
                                <span className="text-sm">Live View</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* 🔹 Sección de GitHub */}
                <div className="flex flex-col items-center justify-center mt-20 bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                    <Image
                        src="/projects/github-profile.png"
                        alt="GitHub Profile"
                        width={200}
                        height={200}
                        className="rounded-md"
                    />
                    <h3 className="text-2xl font-bold text-purple-400 mt-4">Explore More Projects</h3>
                    <p className="text-gray-300 text-center mt-2 max-w-md">
                        If you want to explore more repositories with different technologies, feel free to check out my public GitHub repositories! I have over 40 projects available.
                    </p>
                    <a href="https://github.com/magdaig" target="_blank" rel="noopener noreferrer"
                       className="mt-4 inline-flex items-center text-white hover:text-secondary transition transform hover:scale-110">
                        <FaGithub className="text-3xl mr-2" />
                        <span className="text-lg">Visit My GitHub</span>
                    </a>
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Projects;