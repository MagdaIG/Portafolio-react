'use client';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 text-center py-8 mt-10">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                <p className="text-sm">
                    © 2025 <span className="text-purple-400 font-semibold">Magdalena Inalaf G.</span> All rights reserved.
                </p>
                <p className="text-sm">
                    Contact: <a href="mailto:magda.inalaf@gmail.com" className="text-purple-300 hover:text-purple-500 transition">magda.inalaf@gmail.com</a>
                </p>
                <p className="text-sm flex items-center space-x-1">
                    Made with <span className="text-purple-400">💜</span> & <Link href="https://nextjs.org" className="text-purple-300 hover:text-purple-500 transition">Next.js</Link>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;