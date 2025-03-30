'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaBook, FaGraduationCap, FaAward, FaChevronRight, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const NavBarLeft = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    const handleClickOutside = (event) => {
        const navContainer = event.target.closest('.nav-container');
        const navToggle = event.target.closest('.nav-toggle');

        if (!navContainer && !navToggle) {
            setIsVisible(false);
        }
    };

    const toggleNav = () => {
        setIsVisible(prevState => !prevState);
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    // Cerrar el navbar en móvil cuando se cambia de ruta
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsVisible(false);
        }
    }, [pathname]);

    return (
        <>
            {/* Botón para móviles */}
            <button
                className="fixed left-4 top-4 z-[60] bg-gray-800 text-white p-3 rounded-lg shadow-lg hover:bg-purple-500 transition-all nav-toggle md:hidden flex items-center justify-center w-12 h-12"
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
            >
                {isVisible ? <FaTimes className="text-2xl" /> : <FaChevronRight className="text-2xl" />}
            </button>

            {/* Botón para pantallas grandes */}
            {!isVisible && (
                <button
                    className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-r-lg shadow-lg hover:bg-purple-500 transition-all nav-toggle hidden md:flex items-center justify-center w-12 h-12"
                    onClick={toggleNav}
                    aria-label="Toggle navigation menu"
                >
                    <FaChevronRight className="text-2xl" />
                </button>
            )}

            {/* Overlay para móviles */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden ${
                    isVisible ? 'opacity-50 z-[55]' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleNav}
            />

            {/* Navbar lateral */}
            <nav
                className={`fixed left-0 top-0 h-full w-32 flex flex-col space-y-4 bg-gray-800 p-4 rounded-r-xl shadow-lg transition-all duration-300 nav-container z-[56] ${
                    isVisible ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
            >
                <div className="flex justify-end md:hidden mb-4">
                    <button
                        className="text-gray-400 hover:text-white transition p-2"
                        onClick={toggleNav}
                        aria-label="Close navigation menu"
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                </div>

                <Link href="/"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaHome className="text-2xl" />
                    <span className="text-xs mt-1">Home</span>
                </Link>

                <Link href="/aboutme"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/aboutme" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaUser className="text-2xl" />
                    <span className="text-xs mt-1">About Me</span>
                </Link>

                <Link href="/projects"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/projects" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaProjectDiagram className="text-2xl" />
                    <span className="text-xs mt-1">Projects</span>
                </Link>

                <Link href="/skills"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/skills" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaTools className="text-2xl" />
                    <span className="text-xs mt-1">Skills</span>
                </Link>

                <Link href="/experience"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/experience" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaBook className="text-2xl" />
                    <span className="text-xs mt-1">Experience</span>
                </Link>

                <Link href="/education"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/education" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaGraduationCap className="text-2xl" />
                    <span className="text-xs mt-1">Education</span>
                </Link>

                <Link href="/certifications"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/certifications" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaAward className="text-2xl" />
                    <span className="text-xs mt-1">Certifications</span>
                </Link>

                <Link href="/contact"
                    className={`text-gray-400 hover:text-white transition flex flex-col items-center p-2 ${pathname === "/contact" ? "text-purple-400" : ""}`}
                    onClick={() => window.innerWidth < 768 && setIsVisible(false)}
                >
                    <FaEnvelope className="text-2xl" />
                    <span className="text-xs mt-1">Contact</span>
                </Link>
            </nav>
        </>
    );
};

export default NavBarLeft;
