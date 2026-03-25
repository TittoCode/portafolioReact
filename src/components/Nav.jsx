import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/constants';

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
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.path} className="text-sm font-medium text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">
                            {link.name}
                        </a>
                    ))}
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
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.path} onClick={() => setIsMenuOpen(false)} className="mobile-link">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}