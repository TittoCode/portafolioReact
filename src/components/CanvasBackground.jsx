import { useEffect, useRef } from 'react';

const DOT_SPACING = 30;
const DOT_RADIUS = 1.2;
const DRIFT_AMPLITUDE = 6;
const DRIFT_SPEED = 0.0005;
const PARALLAX_STRENGTH = 0.018;
const PARALLAX_LERP = 0.06;
const DOT_ALPHA_LIGHT = 0.13;
const DOT_ALPHA_DARK = 0.10;

export default function CanvasBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        const ctx = canvas.getContext('2d');
        let animId;
        let mouseX = 0;
        let mouseY = 0;
        let parallaxX = 0;
        let parallaxY = 0;
        let dots = [];

        function buildDots() {
            dots = [];
            const cols = Math.ceil(canvas.width / DOT_SPACING) + 2;
            const rows = Math.ceil(canvas.height / DOT_SPACING) + 2;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    dots.push({
                        baseX: c * DOT_SPACING,
                        baseY: r * DOT_SPACING,
                        phaseX: Math.random() * Math.PI * 2,
                        phaseY: Math.random() * Math.PI * 2,
                    });
                }
            }
        }

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            buildDots();
        }

        function getDotColor() {
            const isDark = document.documentElement.classList.contains('dark');
            const alpha = isDark ? DOT_ALPHA_DARK : DOT_ALPHA_LIGHT;
            return isDark
                ? `rgba(20, 184, 166, ${alpha})`
                : `rgba(13, 148, 136, ${alpha})`;
        }

        function draw(timestamp) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const targetPX = (mouseX - centerX) * -PARALLAX_STRENGTH;
            const targetPY = (mouseY - centerY) * -PARALLAX_STRENGTH;
            parallaxX += (targetPX - parallaxX) * PARALLAX_LERP;
            parallaxY += (targetPY - parallaxY) * PARALLAX_LERP;

            ctx.fillStyle = getDotColor();

            for (const dot of dots) {
                const driftX = Math.sin(timestamp * DRIFT_SPEED + dot.phaseX) * DRIFT_AMPLITUDE;
                const driftY = Math.cos(timestamp * DRIFT_SPEED + dot.phaseY) * DRIFT_AMPLITUDE;

                const x = dot.baseX + driftX + parallaxX;
                const y = dot.baseY + driftY + parallaxY;

                ctx.beginPath();
                ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fill();
            }

            animId = requestAnimationFrame(draw);
        }

        function onMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        }

        function onResize() {
            resize();
        }

        const observer = new MutationObserver(() => { /* colour re-read on each frame */ });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        resize();
        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouseMove);
        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="hero-canvas"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}
