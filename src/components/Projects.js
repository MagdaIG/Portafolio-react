'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Footer from './Footer';

const primaryProjects = [
    {
        name: "PortafolioJS - Educational Portfolio",
        description: "Educational portfolio documenting my JavaScript Bootcamp journey with detailed project breakdowns, technical solutions, and learning milestones. Features interactive demonstrations of complex projects like Kanban boards, e-commerce systems, and PostgreSQL database management.",
        image: "/images/portafolio-js.png",
        link: "https://magdaig.github.io/portafoliojs/"
    },
    {
        name: "App Productos - Backend Management",
        description: "Complete backend web application for product management built with Node.js and Express.js. Features data persistence with JSON files, file handling with Multer, dynamic routes, CRUD operations, and comprehensive error handling. Includes responsive frontend with form validation and real-time feedback. Demonstrates Node.js bootcamp skills in server-side development.",
        image: "/images/gestor-productos.png",
        link: "https://magdaig.github.io/portafoliojs/gestor-productos.html"
    },
    {
        name: "Inventory System - PostgreSQL",
        description: "Complete inventory management system built with PostgreSQL relational database. Features ERD design, normalization to 3NF, complex SQL queries with JOINs, triggers for automatic stock updates, and transaction management. Includes comprehensive database modeling with primary/foreign keys and data integrity constraints.",
        image: "/images/gestor-inventario.png",
        link: "https://magdaig.github.io/portafoliojs/bd-inventario.html"
    },
    {
        name: "Task Management - Kanban Board",
        description: "Complete task management system with Kanban board interface built with JavaScript and Supabase. Features drag & drop functionality, user authentication, real-time data synchronization, task CRUD operations, and responsive design. Includes dashboard with analytics and modern UI/UX.",
        image: "/images/gestion-tareas.png",
        link: "https://magdaig.github.io/Gestion-de-tareas-con-javascript/"
    },
    {
        name: "Inventory System v2.0 - Enhanced",
        description: "Advanced inventory management system v2.0 with PostgreSQL and PL/pgSQL. Features advanced validations, custom SQL functions, modular architecture, comprehensive documentation, Git submodules for version control, automated testing scripts, and professional database design. Includes triggers, stored procedures, and data integrity constraints.",
        image: "/images/gestor-inventario-v2.png",
        link: "https://magdaig.github.io/portafoliojs/bd-inventario-v2.html"
    },
    {
        name: "Contact List - Contact Manager",
        description: "Complete contact management system with modern UI/UX built with JavaScript. Features contact CRUD operations, search functionality, favorites system, birthday tracking, and responsive grid layout. Includes interactive contact cards with edit, delete, and favorite actions, plus advanced filtering and data persistence.",
        image: "/images/gestor-contacto.png",
        link: "https://magdaig.github.io/portafoliojs/gestor-contactos.html"
    },
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
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-14">
            <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-500 ${
                        isGlowing ? "text-purple-400" : "text-gray-600"
                    }`}>
                        My Projects
                    </h2>

                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Main Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {primaryProjects.map((project, index) => (
                            <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500 border-l-4 border-purple-500">
                                <div className="relative w-full h-48 rounded-md overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:opacity-90 transition duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-purple-400 mt-4">{project.name}</h3>
                                <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                   className="mt-4 inline-flex items-center text-white hover:text-purple-400 transition transform hover:scale-110">
                                    <FaExternalLinkAlt className="text-lg mr-2" />
                                    <span className="text-sm">Live View</span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gray-700 my-12"></div>

                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Some Other Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {secondaryProjects.map((project, index) => (
                            <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-purple-500 border-l-4 border-purple-500">
                                <div className="relative w-full h-48 rounded-md overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:opacity-90 transition duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-purple-400 mt-4">{project.name}</h3>
                                <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                   className="mt-4 inline-flex items-center text-white hover:text-purple-400 transition transform hover:scale-110">
                                    <FaExternalLinkAlt className="text-lg mr-2" />
                                    <span className="text-sm">Live View</span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg mx-auto border-l-4 border-purple-500">
                        <div className="flex justify-center">
                            <Image
                                src="/projects/github-profile.png"
                                alt="GitHub Profile"
                                width={150}
                                height={150}
                                className="rounded-md"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-purple-400 mt-4 text-center">Explore More Projects</h3>
                        <p className="text-gray-300 text-center mt-3">
                            If you want to explore more repositories with different technologies, feel free to check out my public GitHub repositories! I have over 40 projects available.
                        </p>
                        <div className="flex justify-center mt-4">
                            <a href="https://github.com/magdaig" target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center text-white hover:text-purple-400 transition transform hover:scale-110">
                                <FaGithub className="text-2xl mr-2" />
                                <span>Visit My GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
