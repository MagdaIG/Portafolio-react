'use client';
import AboutMe from '../../components/AboutMe';
import CustomCursor from '../../components/CustomCursor';
import Footer from '../../components/Footer';

const AboutPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
            <CustomCursor /> {/* 🔹 Cursor Personalizado */}
            <AboutMe />
            <Footer />
        </div>
    );
};

export default AboutPage;