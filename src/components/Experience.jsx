export default function Experience() {
    return (
        <section id="trayectoria" className="py-24 bg-surface-light dark:bg-surface-dark">
            <div className="container mx-auto px-6">
                <h2 className="section-title reveal-on-scroll">Trayectoria</h2>
                <div className="max-w-3xl mx-auto">

                    <div className="relative border-l border-accent-300/40 dark:border-accent-700/40 pl-8 ml-3 space-y-12">

                        <div className="relative reveal-on-scroll">
                            <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-surface-light dark:ring-surface-dark"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold">Pasante — Área de Legalizaciones</h3>
                                    <span className="text-accent-600 dark:text-accent-400 text-sm font-medium">SEDUCA, La Paz</span>
                                </div>
                                <span className="bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                    Nov 2024 — Ene 2025
                                </span>
                            </div>
                            <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                                <li className="flex gap-2">
                                    <span className="text-accent-500">›</span> Registro y{' '}
                                    <span className="has-tooltip">digitalización
                                        <span className="tooltip-content">Proceso de convertir documentos físicos a formato digital, usando escáneres y software de gestión documental.</span>
                                    </span>{' '}
                                    de trámites en sistema institucional.
                                </li>
                                <li className="flex gap-2"><span className="text-accent-500">›</span> Organización de documentación bajo normativa del Ministerio de Educación.</li>
                                <li className="flex gap-2">
                                    <span className="text-accent-500">›</span> Manejo de{' '}
                                    <span className="has-tooltip">bases de datos
                                        <span className="tooltip-content">Sistemas como MySQL o SQL Server para almacenar, consultar y gestionar información de forma estructurada.</span>
                                    </span>{' '}
                                    para seguimiento masivo de trámites.
                                </li>
                            </ul>
                        </div>

                        <div className="relative reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
                            <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent-400 ring-4 ring-surface-light dark:ring-surface-dark"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold">Técnico Superior en Sistemas Informáticos</h3>
                                    <span className="text-accent-600 dark:text-accent-400 text-sm font-medium">Instituto Tecnológico Don Bosco</span>
                                </div>
                                <span className="bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                    2023 — 2025
                                </span>
                            </div>
                            <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                                <li className="flex gap-2"><span className="text-accent-500">›</span> Formación técnica en desarrollo de software, arquitectura de sistemas y administración de bases de datos.</li>
                                <li className="flex gap-2">
                                    <span className="text-accent-500">›</span> Proyectos de ciclo con{' '}
                                    <span className="has-tooltip">PHP + MySQL
                                        <span className="tooltip-content">Stack del lado del servidor: PHP para la lógica de negocio y acceso a datos, MySQL como motor de base de datos relacional.</span>
                                    </span>{' '}
                                    y aplicaciones web con JavaScript moderno.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-accent-500">›</span> Aplicación de estándares de{' '}
                                    <span className="has-tooltip">Clean Code
                                        <span className="tooltip-content">Convenciones de escritura de código que priorizan la legibilidad y el mantenimiento a largo plazo, siguiendo principios de Robert C. Martin.</span>
                                    </span>{' '}
                                    y control de versiones con Git desde el inicio de la formación.
                                </li>
                            </ul>
                        </div>

                        <div className="relative reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                            <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-slate-400 ring-4 ring-white dark:ring-slate-900"></div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Certificaciones & Formación Continua</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex flex-col gap-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-xl max-w-[240px]">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Microsoft Learn Student Ambassador</span>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Git y GitHub I: Control de Versiones</span>
                                    <span className="text-[11px] text-slate-500 font-mono">Marzo 2025 </span>
                                </div>

                                <div className="flex flex-col gap-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-xl max-w-[240px]">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Microsoft Learn Student Ambassador</span>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">Desarrollo Web con Python II</span>
                                    <span className="text-[11px] text-slate-500 font-mono">Abril 2025 </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
