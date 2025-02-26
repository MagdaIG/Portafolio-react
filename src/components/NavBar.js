'use client';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="w-auto mx-auto p-2 md:p-3 bg-gray-800 rounded-lg shadow-md flex space-x-3 justify-center">
            <Link href="/aboutme" className="btn-primary text-sm md:text-lg px-4 py-2">About Me</Link>
            <Link href="/projects" className="btn-primary text-sm md:text-lg px-4 py-2">Projects</Link>
            <Link href="/skills" className="btn-primary text-sm md:text-lg px-4 py-2">Skills</Link>
            <Link href="/contact" className="btn-primary text-sm md:text-lg px-4 py-2">Contact</Link>
        </nav>
    );
};

export default NavBar;