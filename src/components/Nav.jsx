import { useState, useEffect } from 'react';

export default function Nav({ isDark, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-1.5">
                    <span className="font-mono text-xl font-bold text-accent-600 dark:text-accent-400">JT</span>
                    <span className="text-lg font-semibold text-slate-800 dark:text-white tracking-tight">Yampa</span>
                </a>

                <div className="hidden md:flex items-center space-x-7">
                    <a href="#inicio" className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">Inicio</a>
                    <a href="#metodologia" className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">Metodología</a>
                    <a href="#trayectoria" className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">Trayectoria</a>
                    <a href="#stack" className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">Stack</a>
                    <a href="#proyectos" className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">Proyectos</a>
                    <a href="#contacto" className="px-4 py-2 bg-accent-600 text-white text-sm rounded-lg font-medium hover:bg-accent-700 transition-all">Contacto</a>
                    <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors focus:outline-none text-sm">
                        {isDark ? <span>☀️</span> : <span>🌙</span>}
                    </button>
                </div>

                <div className="md:hidden flex items-center space-x-3">
                    <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm">
                        {isDark ? <span>☀️</span> : <span>🌙</span>}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-white focus:outline-none">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            <div className={`md:hidden absolute w-full left-0 top-full shadow-lg border-t border-slate-100 dark:border-slate-800 transition-all duration-300 bg-white dark:bg-surface-dark ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-1 p-5">
                    <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="mobile-link">Inicio</a>
                    <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="mobile-link">Metodología</a>
                    <a href="#trayectoria" onClick={() => setIsMenuOpen(false)} className="mobile-link">Trayectoria</a>
                    <a href="#stack" onClick={() => setIsMenuOpen(false)} className="mobile-link">Stack</a>
                    <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="mobile-link">Proyectos</a>
                    <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="mobile-link font-semibold text-accent-600 border-none">Contacto</a>
                </div>
            </div>
        </header>
    );
}
