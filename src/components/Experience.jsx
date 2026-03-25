import { EXPERIENCE, CERTIFICATIONS } from '../data/constants';

export default function Experience() {
    return (
        <section id="trayectoria" className="py-24 bg-surface-light dark:bg-surface-dark">
            <div className="container mx-auto px-6">
                <h2 className="section-title reveal-on-scroll">Trayectoria</h2>
                <div className="max-w-3xl mx-auto">

                    <div className="relative border-l border-accent-300/40 dark:border-accent-700/40 pl-8 ml-3 space-y-12">

                        {EXPERIENCE.map((exp, i) => (
                            <div key={exp.title} className="relative reveal-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
                                <div className={`absolute -left-[37px] top-1 w-3 h-3 rounded-full ${exp.dotColor}`}></div>
                                <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        <span className="text-accent-600 dark:text-accent-400 text-sm font-medium">{exp.company}</span>
                                    </div>
                                    <span className="bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                                    {exp.responsibilities.map((task, index) => (
                                        <li key={index} className="flex gap-2"><span className="text-accent-500">›</span> {task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="relative reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                            <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-slate-400 ring-4 ring-white dark:ring-slate-900"></div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Certificaciones & Formación Continua</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {CERTIFICATIONS.map(cert => (
                                    <div key={cert.title} className="flex flex-col gap-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-xl max-w-[240px]">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{cert.entity}</span>
                                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">{cert.title}</span>
                                        <span className="text-[11px] text-slate-500 font-mono">{cert.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}