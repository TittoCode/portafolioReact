import { WORK_APPROACH, WORK_STATS } from '../data/constants';

export default function About() {
    return (
        <section id="metodologia" className="py-24 bg-white dark:bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center mb-16 reveal-on-scroll">
                    <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 tracking-widest uppercase block mb-4">
                        // mi enfoque de trabajo
                    </span>
                    <h2 className="section-title">Cómo Trabajo en Equipo</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed -mt-6">
                        Tres principios que aplico en cada proyecto — aprendidos en el aula
                        y consolidados desarrollando software real.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    {WORK_APPROACH.map((item, i) => (
                        <div key={item.title} className="skill-card reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                            <div className={`w-10 h-10 mb-5 rounded-lg flex items-center justify-center ${item.iconColors}`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: item.iconSvg }} />
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-20 reveal-on-scroll">
                    {WORK_STATS.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <span className="block font-mono text-2xl font-bold text-accent-600 dark:text-accent-400">{stat.value}</span>
                            <span className="text-xs text-slate-500 font-medium mt-1 block">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}