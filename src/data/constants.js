export const SOCIAL_LINKS = {
    github: 'https://github.com/TittoCode',
    linkedin: 'https://linkedin.com/in/titto-yampa',
    whatsapp: 'https://wa.me/59174059430',
    cv: 'assets/cv/CV_Jose_Titto_Yampa.pdf',
    email: 'jtittoy@gmail.com',
    phoneLabel: '+591 74059430'
};

export const NAV_LINKS = [
    { name: 'Inicio', path: '#inicio' },
    { name: 'Enfoque', path: '#metodologia' },
    { name: 'Trayectoria', path: '#trayectoria' },
    { name: 'Stack', path: '#stack' },
    { name: 'Proyectos', path: '#proyectos' },
    { name: 'Contacto', path: '#contacto' }
];

export const PERSONAL_INFO = {
    name: 'Jose Titto',
    lastName: 'Yampa',
    title: 'Desarrollador Web · Php · React · Python',
    subtitle: 'Junior Dev',
    description: 'Desarrollador web, especializado en Php,React y Python. Me apasiona construir interfaces limpias y funcionales, y tengo experiencia enseñando programación — lo que me dio una forma muy clara de entender y explicar código. Busco oportunidad profesional para seguir creciendo cómo desarrollador.',
    githubUser: 'TittoCode'
};


export const SKILLS = [
    {
        category: 'Frontend',
        icon: '💻',
        items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
        level: 'Intermedio'
    },
    {
        category: 'Backend',
        icon: '⚙️',
        items: ['Python', 'PHP', 'Node.js'],
        level: 'Intermedio'
    },
    {
        category: 'Bases de Datos',
        icon: '🗄️',
        items: ['MySQL', 'PostgreSQL', 'SQLite'],
        level: 'Intermedio'
    },
    {
        category: 'Herramientas',
        icon: '🛠️',
        items: ['Git', 'GitHub', 'VS Code', 'Antigrabity' 'npm'],
        level: 'Intermedio'
    },
    {
        category: 'Hardware & Soporte',
        icon: '🖥️',
        items: ['Diagnóstico', 'Mantenimiento', 'Soporte Remoto'],
        level: 'Básico'
    },
    {
        category: 'Metodología',
        icon: '📐',
        items: ['Agil', 'Código Modular'],
        level: 'Aplicado en todos los proyectos'
    }
];

export const EXPERIENCE = [
    {
        title: 'Pasante — Área de Legalizaciones',
        company: 'SEDUCA, La Paz',
        period: 'Nov 2024 — Ene 2025',
        dotColor: 'bg-accent-500 ring-4 ring-surface-light dark:ring-surface-dark',
        responsibilities: [
            'Digitalización y registro de trámites en el sistema institucional.',
            'Organización de documentación bajo normativa del Ministerio de Educación.',
            'Gestión de bases de datos para seguimiento masivo de expedientes.'
        ]
    },
    {
        title: 'Técnico Superior en Sistemas Informáticos',
        company: 'Instituto Tecnológico Don Bosco',
        period: '2023 — 2025',
        dotColor: 'bg-accent-400 ring-4 ring-surface-light dark:ring-surface-dark',
        responsibilities: [
            'Formación en desarrollo de software, arquitectura de sistemas y bases de datos relacionales.',
            'Proyectos de ciclo con PHP + MySQL y aplicaciones web con JavaScript moderno.',
            'Buenas prácticas de Clean Code y control de versiones con Git desde el primer año.'
        ]
    }
];

export const CERTIFICATIONS = [
    {
        entity: 'Microsoft Learn Student Ambassador',
        title: 'Git y GitHub I: Control de Versiones',
        date: 'Marzo 2025'
    },
    {
        entity: 'Microsoft Learn Student Ambassador',
        title: 'Desarrollo Web con Python II',
        date: 'Abril 2025'
    }
];

export const WORK_APPROACH = [
    {
        title: 'Clean Code',
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />',
        iconColors: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20',
        description: 'Escribo código pensando en quien lo va a leer después. Nombres claros, funciones con una sola responsabilidad y sin efectos secundarios inesperados.'
    },
    {
        title: 'Git Flow',
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />',
        iconColors: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
        description: 'Commits atómicos con mensajes descriptivos, ramas por feature y revisión antes de integrar. El historial de Git como parte de la documentación.'
    },
    {
        title: 'Código Reutilizable',
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />',
        iconColors: 'text-teal-500 bg-teal-50 dark:bg-teal-900/20',
        description: 'Divido interfaces en componentes con responsabilidad única. Menos duplicación, más mantenibilidad.'
    }
];

export const WORK_STATS = [
    { value: '2', label: 'Años enseñando programación' },
    { value: '4', label: 'Proyectos en GitHub' },
    { value: '100%', label: 'Código abierto y revisable' }
];
