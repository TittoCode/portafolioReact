import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

export default function Projects() {
    return (
        <section id="proyectos" className="py-24 bg-surface-light dark:bg-surface-dark">
            <div className="container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center mb-16 reveal-on-scroll">
                    <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 tracking-widest uppercase block mb-4">
                        // arquitectura de proyectos
                    </span>
                    <h2 className="section-title">Casos de Resolución de Problemas</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed -mt-6">
                        Cuatro proyectos construidos bajo restricciones reales. Cada entrada
                        documenta la decisión técnica central, no solo el resultado.
                    </p>
                </div>

                <div id="projects-grid" className="bento-grid max-w-6xl mx-auto" aria-label="Grilla de proyectos">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bento-card relative flex flex-col group reveal-on-scroll ${project.featured ? 'bento-card--wide' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="p-2.5 bg-accent-50 dark:bg-accent-900/20 rounded-xl text-accent-600 dark:text-accent-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: project.iconSvg }} />
                                </div>
                                <span className={`badge ${`badge-${project.difficulty}`}`}>{project.difficulty}</span>
                            </div>

                            {project.image && (
                                <div className="absolute top-0 right-0 w-48 h-48 opacity-5 dark:opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-2">
                                    <img src={project.image} alt="" className="w-full h-full object-contain" />
                                </div>
                            )}

                            <div className="relative z-10 mt-auto">
                                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                    <a href={project.url} target={project.external ? '_blank' : '_self'} rel="noopener noreferrer" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="font-mono text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
