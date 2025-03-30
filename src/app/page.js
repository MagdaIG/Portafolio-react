import ClientAvatar3D from '../components/ClientAvatar3D';
import NavBar from '../components/NavBar';
import NavBarLeft from '../components/NavBarLeft';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Page() {
    return (
        <div className="w-screen min-h-screen bg-gray-900 text-white relative">
            <NavBarLeft />

            <div className="flex min-h-screen">
                {/* Espacio para NavBarLeft */}
                <div className="w-32 flex-shrink-0"></div>

                {/* Contenedor Principal */}
                <div className="flex-grow flex flex-col items-center">
                    <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 mt-16 lg:mt-8">
                            {/* Introducción */}
                            <div className="flex flex-col space-y-6 max-w-lg text-center lg:text-left row-start-1 lg:col-start-1">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Hi! I&apos;m <span className="text-purple-500">Magdalena</span>,<br/>
                                    a <span className="text-gray-200">Software Developer</span> + <span className="text-purple-500">UX Designer</span>
                                </h1>

                                {/* Botón de descarga del CV y redes sociales */}
                                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
                                    <a href="/Magdalena-Inalaf-Frontend-Developer.pdf" target="_blank" rel="noopener noreferrer"
                                       className="bg-purple-600 text-white text-sm md:text-lg px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:shadow-lg">
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
                            <div className="w-full lg:w-auto flex justify-center row-start-2 lg:row-start-1 lg:col-start-2">
                                <ClientAvatar3D/>
                            </div>

                            {/* Specialization */}
                            <div className="flex flex-col space-y-6 max-w-lg text-center lg:text-left row-start-3 lg:row-start-2 lg:col-span-2 mt-4">
                                <p className="text-md md:text-lg lg:text-xl text-gray-300 font-mono">
                                    I specialize in <span className="px-2 py-1 rounded-md text-white font-semibold bg-gray-700">
                                        solving complex problems
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-10">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}
