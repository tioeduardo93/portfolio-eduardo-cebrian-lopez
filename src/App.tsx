import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
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
      </main>
    </>
  );
}
