import { useEffect, useRef } from 'react';
import CanvasBackground from './CanvasBackground';

export default function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-surface-light dark:bg-surface-dark">
            <CanvasBackground />
            <div className="absolute inset-0 dot-pattern opacity-50 reduced-motion-only" aria-hidden="true"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 md:order-1 reveal-on-scroll">
                    <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 tracking-widest uppercase block mb-5">
                        // arquitectura de software · formación técnica
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 dark:text-slate-100">
                        Jose Titto<br />
                        <span className="text-accent-600 dark:text-accent-400">Yampa</span>
                    </h1>

                    <div className="text-slate-700 dark:text-slate-400 text-[15px] leading-relaxed max-w-lg mb-10">
                        <p>
                            Desarrollador Frontend especializado en arquitectura modular y claridad estructural. Mi práctica
                            profesional fusiona la ingeniería de software con la formación técnica, priorizando la{' '}
                            <span className="has-tooltip font-medium text-slate-900 dark:text-slate-200 border-b border-slate-300 cursor-help">
                                separación de responsabilidades
                                <span className="tooltip-content">Arquitectura de desacoplamiento que facilita el testing y la escalabilidad.</span>
                            </span>{' '}
                            y el dominio de estándares nativos como{' '}
                            <span className="has-tooltip font-medium text-slate-900 dark:text-slate-200 border-b border-slate-300 cursor-help">
                                ES Modules
                                <span className="tooltip-content">Gestión nativa de dependencias para sistemas modernos.</span>
                            </span>.
                            Entiendo la <strong className="font-semibold text-slate-900 dark:text-white">escalabilidad como una
                            restricción de diseño</strong> que permite equipos colaborativos sin fricción, transformando el
                            código en un activo estratégico y pedagógico.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                        <a href="#proyectos" className="px-6 py-3 bg-accent-600 text-white rounded-lg font-medium text-sm hover:bg-accent-700 transition-all duration-300 shadow-sm hover:shadow-md">
                            Ver Proyectos
                        </a>
                        <a href="#metodologia" className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg font-medium text-sm hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-300">
                            Estándares de Trabajo
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/TittoCode" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                            github
                        </a>
                        <a href="https://wa.me/59174059430" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                            whatsapp
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
                    <div className="relative w-56 h-56 md:w-72 md:h-72">
                        <div className="absolute inset-0 rounded-full border border-dashed border-accent-300/30 dark:border-accent-600/20 animate-[spin_40s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-accent-200/40 dark:border-accent-700/20"></div>

                        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden shadow-xl">
                            <svg className="w-28 h-28 md:w-36 md:h-36 text-accent-600/60 dark:text-accent-400/50" viewBox="0 0 120 120" fill="none" aria-label="Avatar minimalista">
                                <circle cx="60" cy="38" r="20" fill="currentColor" opacity="0.75" />
                                <path d="M28 108 C28 78, 42 68, 60 68 C78 68, 92 78, 92 108" fill="currentColor" opacity="0.55" />
                                <text x="14" y="56" fontFamily="monospace" fontSize="13" fill="currentColor" opacity="0.25">&lt;/&gt;</text>
                                <text x="80" y="56" fontFamily="monospace" fontSize="13" fill="currentColor" opacity="0.25">{`{ }`}</text>
                            </svg>
                        </div>

                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 whitespace-nowrap">
                            <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 font-medium tracking-wide">
                                Junior Dev · Educator
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
