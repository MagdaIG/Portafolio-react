import ClientAvatar3D from '../components/ClientAvatar3D';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
            <div className="p-4 lg:p-12 mb-20 transition-all duration-300 md:translate-x-32">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-8">
                        {/* Introducción */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Hi! I&apos;m <span className="text-purple-500">Magdalena</span>,<br/>
                                a <span className="text-gray-200">Software Developer</span> + <span className="text-purple-500">UX Designer</span>
                            </h1>

                            {/* Botón de descarga del CV y redes sociales */}
                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                                <a href="/Magdalena-Inalaf-Frontend-Developer.pdf" target="_blank" rel="noopener noreferrer"
                                   className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:shadow-lg text-sm md:text-base">
                                    Download CV
                                </a>
                                <div className="flex space-x-6">
                                    <a href="https://github.com/magdaig" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-400 text-2xl md:text-3xl hover:text-white transition">
                                        <FaGithub/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/minalaf/" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-400 text-2xl md:text-3xl hover:text-white transition">
                                        <FaLinkedin/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Avatar */}
                        <div className="flex justify-center">
                            <ClientAvatar3D/>
                        </div>

                        {/* Specialization */}
                        <div className="lg:col-span-2 text-center lg:text-left">
                            <p className="text-md md:text-lg lg:text-xl text-gray-300 font-mono">
                                I specialize in <span className="px-2 py-1 rounded-md text-white font-semibold bg-gray-700">
                                    solving complex problems
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
