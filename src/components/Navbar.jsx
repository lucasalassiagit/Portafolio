import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'education', label: 'Formación' },
    { id: 'contact', label: 'Contacto' },
];

const Navbar = () => {
    const [active, setActive] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Highlight active section on scroll
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);
            for (const { id } of NAV_ITEMS) {
                const el = document.getElementById(id);
                if (el) {
                    const { top, bottom } = el.getBoundingClientRect();
                    if (top <= 100 && bottom >= 100) {
                        setActive(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            {/* ── Navbar bar ────────────────────────────────────────── */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#141414]/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">



                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={() => setActive(id)}
                                    className={`text-sm font-medium tracking-wide transition-colors pb-1 border-b-2 ${active === id ? 'text-blue-400 border-blue-400' : 'text-gray-300 border-transparent hover:text-white'}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger button (mobile only) */}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className="md:hidden text-white p-2 focus:outline-none"
                    >
                        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>

                </div>
            </nav>

            {/* ── Mobile overlay ────────────────────────────────────── */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-[#141414]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden">
                    <ul className="flex flex-col items-center gap-4 w-full px-10">
                        {NAV_ITEMS.map(({ id, label }) => (
                            <li key={id} className="w-full text-center">
                                <a
                                    href={`#${id}`}
                                    onClick={() => { setActive(id); setMenuOpen(false); }}
                                    className={`block text-2xl font-semibold py-4 w-full border-b border-gray-800 transition-colors ${active === id ? 'text-blue-400' : 'text-gray-200 hover:text-white'}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
