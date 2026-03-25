export default function Contact() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Since it's a static site, you might want to integrate EmailJS or Formspree
        const btn = document.getElementById('btnEmail');
        const ogText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Enviando...`;
        
        setTimeout(() => {
            btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Enviado con éxito`;
            btn.classList.replace('bg-slate-700', 'bg-accent-600');
            btn.classList.replace('dark:bg-slate-600', 'dark:bg-accent-600');
            e.target.reset();
            setTimeout(() => {
                btn.innerHTML = ogText;
                btn.classList.replace('bg-accent-600', 'bg-slate-700');
                btn.classList.replace('dark:bg-accent-600', 'dark:bg-slate-600');
            }, 3000);
        }, 1500);
    };

    const handleWhatsApp = () => {
        const nombre = document.getElementById('nombre').value || '';
        const asunto = document.getElementById('asunto').value || '';
        const mensaje = document.getElementById('mensaje').value || '';
        const telefono = document.getElementById('telefono').value || '';
        const email = document.getElementById('email').value || '';
        
        let msjFormateado = `Hola, mi nombre es ${nombre}.`;
        if (asunto) msjFormateado += `\n\n*Asunto*: ${asunto}`;
        if (mensaje) msjFormateado += `\n\n*Mensaje*: ${mensaje}`;
        if (telefono || email) {
            msjFormateado += `\n\n*Mis datos de contacto:*`;
            if (telefono) msjFormateado += `\nTeléfono: ${telefono}`;
            if (email) msjFormateado += `\nEmail: ${email}`;
        }
        
        const url = `https://wa.me/59174059430?text=${encodeURIComponent(msjFormateado)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contacto" className="py-24 bg-white dark:bg-slate-900/30 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="section-title reveal-on-scroll">Contacto</h2>

                <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">
                    <div className="space-y-10 reveal-on-scroll">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-800 dark:text-white">
                                ¿Tienes un proyecto <br /><span className="text-accent-600 dark:text-accent-400">en mente?</span>
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                                Estoy disponible para proyectos de desarrollo web, mentoría técnica y colaboración educativa. Respondo en menos de 24 horas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:jtittoy@gmail.com" className="group p-5 bg-surface-light dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-5 hover:border-accent-400/40 transition-all">
                                <div className="w-11 h-11 bg-accent-50 dark:bg-accent-900/20 rounded-xl flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-400 font-medium mb-0.5">Email</span>
                                    <span className="text-sm font-semibold text-slate-700 dark:text-white group-hover:text-accent-600 transition-colors">jtittoy@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://wa.me/59174059430" target="_blank" rel="noopener noreferrer" className="group p-5 bg-surface-light dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-5 hover:border-emerald-400/40 transition-all">
                                <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-400 font-medium mb-0.5">WhatsApp</span>
                                    <span className="text-sm font-semibold text-slate-700 dark:text-white group-hover:text-emerald-600 transition-colors">+591 74059430</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-surface-light dark:bg-slate-800/30 p-7 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
                        <form id="contactForm" className="space-y-5" onSubmit={handleFormSubmit}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="nombre" className="text-xs font-semibold text-slate-600 dark:text-slate-300">Nombre</label>
                                    <input type="text" id="nombre" className="form-input" placeholder="Tu nombre" required />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-300">Email</label>
                                    <input type="email" id="email" className="form-input" placeholder="correo@ejemplo.com" required />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="telefono" className="text-xs font-semibold text-slate-600 dark:text-slate-300">Teléfono / WhatsApp</label>
                                <div className="flex gap-2">
                                    <select id="codigoPais" className="form-input w-24 text-sm" defaultValue="591">
                                        <option value="591">+591</option>
                                        <option value="51">+51</option>
                                        <option value="54">+54</option>
                                        <option value="55">+55</option>
                                        <option value="56">+56</option>
                                        <option value="57">+57</option>
                                        <option value="52">+52</option>
                                        <option value="1">+1</option>
                                        <option value="">Otro</option>
                                    </select>
                                    <input type="tel" id="telefono" className="form-input flex-1" placeholder="70000000" required />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="asunto" className="text-xs font-semibold text-slate-600 dark:text-slate-300">Asunto</label>
                                <input type="text" id="asunto" className="form-input" placeholder="Consulta sobre..." required />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="mensaje" className="text-xs font-semibold text-slate-600 dark:text-slate-300">Mensaje</label>
                                <textarea id="mensaje" rows="3" className="form-input resize-none" placeholder="Hola, me gustaría..." required></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <button type="button" onClick={handleWhatsApp} id="btnWhatsapp" className="flex-1 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </button>
                                <button type="submit" id="btnEmail" className="flex-1 px-5 py-3 bg-slate-700 dark:bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
