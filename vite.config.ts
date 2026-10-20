import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { LINKS } from './src/data/links.ts';
import { SITE_URL } from './src/data/site.ts';

/**
 * Inyecta la URL de producción (src/data/site.ts) en las etiquetas canonical y
 * Open Graph de index.html, y avisa en el build si falta el CV en /public.
 */
function siteMeta(): Plugin {
  return {
    name: 'site-meta',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    buildStart() {
      const cvPath = fileURLToPath(new URL(`./public${LINKS.cv}`, import.meta.url));
      if (!existsSync(cvPath)) {
        this.warn(`No se encuentra el CV en public${LINKS.cv}: el botón "Descargar CV" dará 404.`);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMeta()],
});
