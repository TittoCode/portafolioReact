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
                        <span className="text-sm font-semibold text-white">Yampa</span>
                    </div>
                    <p className="text-xs mb-6 text-slate-500">Docente de Programación & Desarrollador Web</p>
                    <div className="flex justify-center gap-6 mb-6 text-xs">
                        <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
                        <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
                        <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
                        <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                    </div>
                    <p className="text-[11px] border-t border-slate-800 pt-6 text-slate-600">
                        &copy; 2025 Jose Titto Yampa. Hecho con{' '}
                        <span className="has-tooltip text-accent-500 border-none cursor-default">
                            React + Vite + Tailwind
                            <span className="tooltip-content" style={{ bottom: 'auto', top: '-70px' }}>
                                Este portafolio fue migrado a React utilizando componentes JSX, Tailwind CSS y Vite.
                            </span>
                        </span>
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
