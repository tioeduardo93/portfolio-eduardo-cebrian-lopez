import { Footer } from './components/layout/Footer';
import { Nav } from './components/layout/Nav';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Tech } from './components/sections/Tech';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-60 rounded-lg bg-accent px-4 py-3 font-semibold text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <Experience />
        <Tech />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
