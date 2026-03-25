export default function Skills() {
    return (
        <section id="stack" className="py-24 bg-white dark:bg-slate-900/30">
            <div className="container mx-auto px-6">
                <h2 className="section-title reveal-on-scroll">Stack Tecnológico</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-14 -mt-6 reveal-on-scroll">
                    Las herramientas que uso y enseño — elegidas por su didáctica y relevancia en la industria.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <div className="skill-card reveal-on-scroll">
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">💻</span>
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="has-tooltip code-inline">HTML5<span className="tooltip-content">Lenguaje de marcado que define la estructura del contenido web. La base de todo.</span></span>
                            <span className="has-tooltip code-inline">CSS3<span className="tooltip-content">Hojas de estilo para diseño visual: layout, colores, tipografía y animaciones.</span></span>
                            <span className="has-tooltip code-inline">JavaScript<span className="tooltip-content">Lenguaje de programación del navegador. Permite crear interactividad y lógica en la web.</span></span>
                            <span className="has-tooltip code-inline">Tailwind CSS<span className="tooltip-content">Framework utility-first: escribes estilos directamente en el HTML con clases como <code>flex</code>, <code>p-4</code>, <code>text-lg</code>.</span></span>
                            <span className="has-tooltip code-inline">Bootstrap<span className="tooltip-content">Framework CSS con componentes prediseñados. Ideal para prototipos rápidos.</span></span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Fundamentos puros antes de frameworks.</p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '80ms' }}>
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">⚙️</span>
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="has-tooltip code-inline">PHP<span className="tooltip-content">Lenguaje del lado del servidor, dominante en WordPress y sistemas legacy. Enseña conceptos server-side.</span></span>
                            <span className="has-tooltip code-inline">Python<span className="tooltip-content">Lenguaje versátil: usado en web, ciencia de datos e IA. Sintaxis limpia, ideal para aprender.</span></span>
                            <span className="has-tooltip code-inline">Node.js<span className="tooltip-content">Runtime de JavaScript fuera del navegador. Permite crear servidores y herramientas con JS.</span></span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Un lenguaje compilado y uno interpretado.</p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '160ms' }}>
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">🗄️</span>
                            Bases de Datos
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="has-tooltip code-inline">MySQL<span className="tooltip-content">BD relacional de código abierto. Ideal para aprender SQL y diseño de tablas.</span></span>
                            <span className="has-tooltip code-inline">SQL Server<span className="tooltip-content">BD relacional de Microsoft. Común en entornos empresariales y sistemas administrativos.</span></span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Diseño relacional es fundamental.</p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '240ms' }}>
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">🛠️</span>
                            Herramientas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="has-tooltip code-inline">Git<span className="tooltip-content">Sistema de control de versiones. Permite rastrear cambios, colaborar y volver a versiones anteriores.</span></span>
                            <span className="has-tooltip code-inline">VS Code<span className="tooltip-content">Editor de código con extensiones, terminal integrada y debugging. Estándar de la industria.</span></span>
                            <span className="has-tooltip code-inline">Vite<span className="tooltip-content">Bundler moderno que usa ES Modules nativos. Hot reload instantáneo en desarrollo.</span></span>
                            <span className="has-tooltip code-inline">npm<span className="tooltip-content">Gestor de paquetes de Node.js. Permite instalar y compartir librerías de código.</span></span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Workflow profesional desde el inicio.</p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '320ms' }}>
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">🖥️</span>
                            Hardware & Soporte
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="code-inline">Diagnóstico</span>
                            <span className="code-inline">Mantenimiento</span>
                            <span className="code-inline">Redes</span>
                            <span className="code-inline">Soporte Remoto</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Entender el hardware hace mejor developer.</p>
                    </div>

                    <div className="skill-card reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-50 dark:bg-accent-900/20 rounded-lg flex items-center justify-center text-sm">📐</span>
                            Metodología
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="has-tooltip code-inline">Agile<span className="tooltip-content">Metodología iterativa: entregar valor en ciclos cortos, recibir feedback, mejorar.</span></span>
                            <span className="has-tooltip code-inline">Clean Code<span className="tooltip-content">Escribir código que otros puedan leer y entender fácilmente. Nombres claros, funciones cortas.</span></span>
                            <span className="has-tooltip code-inline">Modular<span className="tooltip-content">Dividir el código en módulos independientes y reutilizables. Como este portafolio.</span></span>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 font-medium">¿Por qué? → Buenas prácticas no se negocian.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
