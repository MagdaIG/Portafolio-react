import Avatar3D from '../components/Avatar3D';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Page() {
    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-900 text-white relative">
            {/* Contenedor Principal */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-10 flex-grow mt-16 lg:mt-0">
                {/* Introducción */}
                <div className="flex flex-col space-y-6 max-w-lg text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Hi! I'm <span className="text-purple-500">Magdalena</span>,<br/>
                        a <span className="text-gray-200">Software Developer</span> + <span className="text-purple-500">UX Designer</span>
                    </h1>
                    <p className="text-md md:text-lg lg:text-xl text-gray-300 font-mono">
                        I specialize in <span className="px-2 py-1 rounded-md text-white font-semibold bg-gray-700">
        solving complex problems
    </span>
                    </p>

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
                <div className="w-full lg:w-auto flex justify-center">
                    <Avatar3D/>
                </div>
            </div>

            {/* Navbar Posicionado Responsivamente */}
            <div className="flex justify-center mt-6 lg:mt-[-20px] md:mt-[-25px]">
                <NavBar/>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-10">
                <Footer/>
            </div>
        </div>
    );
}