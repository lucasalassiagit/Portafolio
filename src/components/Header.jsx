import { FaRocket, FaPaperPlane } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Particles Placeholder / Simple CSS Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-primary to-primary"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">
                    Lucas Nahuel Alassia
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
                    Técnico Universitario en Programación
                </p>
                <p className="text-lg md:text-xl text-accent font-medium mb-10">
                    Desarrollador FullStack
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        <FaRocket />
                        Ver Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                    >
                        <FaPaperPlane />
                        Contactar
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
