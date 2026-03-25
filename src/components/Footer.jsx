import { PERSONAL_INFO, NAV_LINKS } from '../data/constants';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="py-10 bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                        <span className="font-mono text-sm font-bold text-accent-400">JT</span>
                        <span className="text-sm font-semibold text-white">{PERSONAL_INFO.lastName}</span>
                    </div>
                    <p className="text-xs mb-6 text-slate-500">{PERSONAL_INFO.title}</p>
                    <div className="flex justify-center flex-wrap gap-6 mb-6 text-xs">
                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.path} className="hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <p className="text-[11px] border-t border-slate-800 pt-6 text-slate-600">
                        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} {PERSONAL_INFO.lastName}. Hecho con{' '}
                        <span className="text-accent-500">React + Vite + Tailwind</span>
                    </p>
                </div>
            </footer>

            <button
                id="back-to-top"
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-10 h-10 bg-accent-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:bg-accent-700 reveal-on-scroll"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
            </button>
        </>
    );
}