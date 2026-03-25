import { SKILLS } from '../data/constants';

export default function Skills() {
    return (
        <section id="stack" className="py-24 bg-white dark:bg-slate-900/30">
            <div className="container mx-auto px-6">
                <h2 className="section-title reveal-on-scroll">Stack Tecnológico</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-14 -mt-6 reveal-on-scroll">
                    Las herramientas con las que desarrollo — elegidas por su relevancia en la industria actual.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {SKILLS.map((skill, i) => (
                        <div key={skill.category} className="skill-card reveal-on-scroll" style={i > 0 ? { transitionDelay: `${i * 80}ms` } : {}}>
                            <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">{skill.icon}</span>
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map(item => (
                                    <span key={item} className="code-inline">{item}</span>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-4 font-medium">
                                {skill.level.startsWith('Aplicado') ? skill.level : `Nivel → ${skill.level}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}