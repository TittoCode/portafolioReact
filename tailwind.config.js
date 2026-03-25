/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                surface: {
                    light: '#F8F9FA',
                    dark: '#111318',
                },
                accent: {
                    50: '#F0FDFA',
                    100: '#CCFBF1',
                    200: '#99F6E4',
                    300: '#5EEAD4',
                    400: '#2DD4BF',
                    500: '#14B8A6',
                    600: '#0D9488',
                    700: '#0F766E',
                    800: '#115E59',
                    900: '#134E4A',
                },
                badge: {
                    core: '#6366F1',
                    advanced: '#F59E0B',
                    production: '#EF4444',
                },
            },
            fontFamily: {
                sans: ['Lexend', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            gridTemplateColumns: {
                bento: 'repeat(4, 1fr)',
            },
        },
    },
    plugins: [],
};
