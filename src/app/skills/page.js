import Skills from '../../components/Skills';
import NavBarLeft from '../../components/NavBarLeft';
import Footer from '../../components/Footer';

export default function SkillsPage() {
    return (
        <div className="w-screen min-h-screen flex bg-gray-900 text-white relative">
            <NavBarLeft /> {/* Navbar lateral solo en esta página */}

            <div className="w-full flex flex-col items-center justify-center">
                <Skills />
            </div>
            <Footer />
        </div>
    );
}