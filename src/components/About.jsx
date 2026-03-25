export default function About() {
    return (
        <section id="metodologia" className="py-24 bg-white dark:bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center mb-16 reveal-on-scroll">
                    <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 tracking-widest uppercase block mb-4">
                        // estándares de metodología
                    </span>
                    <h2 className="section-title">Cómo Trabajo y Enseño</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed -mt-6">
                        Tres pilares aplicados de forma consistente en cada proyecto y en cada sesión de formación.
                        No son aspiraciones: son restricciones de diseño verificables en el código.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    <div className="skill-card reveal-on-scroll">
                        <div className="w-10 h-10 mb-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Clean Code</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Código escrito para ser leído. Funciones de una sola responsabilidad, nombres que documentan
                            intención y ausencia de efectos secundarios ocultos.
                        </p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '80ms' }}>
                        <div className="w-10 h-10 mb-5 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Git Flow</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            El historial de Git como documentación. Commits atómicos con Conventional Commits, ramas de
                            features, y revisión de código antes de integración a main.
                        </p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '160ms' }}>
                        <div className="w-10 h-10 mb-5 bg-teal-50 dark:bg-teal-900/20 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Componentización</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Unidades de UI y lógica con interfaz explícita y responsabilidad única. Aplicable con o sin
                            frameworks reactivos — es un principio, no una herramienta.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-20 reveal-on-scroll">
                    <div className="text-center">
                        <span className="block font-mono text-2xl font-bold text-accent-600 dark:text-accent-400">3+</span>
                        <span className="text-xs text-slate-500 font-medium mt-1 block">Años de formación técnica</span>
                    </div>
                    <div className="text-center">
                        <span className="block font-mono text-2xl font-bold text-accent-600 dark:text-accent-400">4</span>
                        <span className="text-xs text-slate-500 font-medium mt-1 block">Proyectos documentados</span>
                    </div>
                    <div className="text-center">
                        <span className="block font-mono text-2xl font-bold text-accent-600 dark:text-accent-400">100%</span>
                        <span className="text-xs text-slate-500 font-medium mt-1 block">Código revisable en GitHub</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
