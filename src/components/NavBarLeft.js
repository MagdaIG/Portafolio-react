'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaBook, FaGraduationCap, FaAward } from 'react-icons/fa';

const NavBarLeft = () => {
    const pathname = usePathname();
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {

        if (["/aboutme", "/skills", "/projects", "/contact", "/experience", "/education", "/certifications"].includes(pathname)) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [pathname]);

    if (!showNav) return null;

    return (
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-gray-800 p-4 rounded-xl shadow-lg transition-all duration-300">
            <Link href="/" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/" ? "text-purple-400" : ""
            }`}>
                <FaHome className="text-2xl" />
                <span className="text-xs mt-1">Home</span>
            </Link>

            <Link href="/aboutme" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/aboutme" ? "text-purple-400" : ""
            }`}>
                <FaUser className="text-2xl" />
                <span className="text-xs mt-1">About Me</span>
            </Link>

            <Link href="/projects" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/projects" ? "text-purple-400" : ""
            }`}>
                <FaProjectDiagram className="text-2xl" />
                <span className="text-xs mt-1">Projects</span>
            </Link>

            <Link href="/skills" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/skills" ? "text-purple-400" : ""
            }`}>
                <FaTools className="text-2xl" />
                <span className="text-xs mt-1">Skills</span>
            </Link>

            <Link href="/experience" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/experience" ? "text-purple-400" : ""
            }`}>
                <FaBook className="text-2xl" />
                <span className="text-xs mt-1">Experience</span>
            </Link>

            <Link href="/education" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/education" ? "text-purple-400" : ""
            }`}>
                <FaGraduationCap className="text-2xl" />
                <span className="text-xs mt-1">Education</span>
            </Link>

            <Link href="/certifications" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/certifications" ? "text-purple-400" : ""
            }`}>
                <FaAward className="text-2xl" />
                <span className="text-xs mt-1">Certifications</span>
            </Link>

            <Link href="/contact" className={`text-gray-400 hover:text-white transition flex flex-col items-center ${
                pathname === "/contact" ? "text-purple-400" : ""
            }`}>
                <FaEnvelope className="text-2xl" />
                <span className="text-xs mt-1">Contact</span>
            </Link>
        </nav>
    );
};

export default NavBarLeft;