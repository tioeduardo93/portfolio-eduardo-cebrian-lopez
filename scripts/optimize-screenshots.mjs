/**
 * Convierte las capturas originales de /capturas en WebP optimizado (16:10)
 * dentro de src/assets/projects/, donde la web las detecta automáticamente.
 *
 * Uso:
 *   1. Guarda la captura en /capturas con el id del proyecto como nombre
 *      (por ejemplo capturas/brazza.png). Formatos: png, jpg, jpeg o webp.
 *   2. Ejecuta: npm run screenshots
 *
 * El recorte se ancla arriba para conservar la cabecera de la web. En la tarjeta,
 * si el hueco no es 16:10 (destacado en escritorio), se recorta por la derecha.
 */
import { mkdir, readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SOURCE_DIR = fileURLToPath(new URL('../capturas/', import.meta.url));
const OUTPUT_DIR = fileURLToPath(new URL('../src/assets/projects/', import.meta.url));

/** Ids de proyectos destacados (featured: true en src/data/projects.ts): se exportan más grandes. */
const FEATURED_IDS = new Set(['rueda']);

const SIZES = {
  featured: { width: 1600, height: 1000 },
  default: { width: 1200, height: 750 },
};

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg', '.webp']);

await mkdir(OUTPUT_DIR, { recursive: true });

const files = (await readdir(SOURCE_DIR)).filter((file) =>
  SUPPORTED.has(extname(file).toLowerCase()),
);

if (files.length === 0) {
  console.log('No hay capturas en /capturas. Añade, por ejemplo, capturas/brazza.png.');
}

for (const file of files) {
  const id = basename(file, extname(file));
  const { width, height } = FEATURED_IDS.has(id) ? SIZES.featured : SIZES.default;

  const info = await sharp(join(SOURCE_DIR, file))
    .resize(width, height, { fit: 'cover', position: 'top' })
    .webp({ quality: 80, effort: 6 })
    .toFile(join(OUTPUT_DIR, `${id}.webp`));

  console.log(`✓ ${id}.webp  ${width}×${height}  ${(info.size / 1024).toFixed(0)} KB`);
}
