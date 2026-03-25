import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [isDark, toggleTheme] = useDarkMode();
  useScrollReveal();

  return (
    <>
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
