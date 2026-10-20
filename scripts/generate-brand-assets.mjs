/**
 * Genera los recursos de marca en /public con el estilo del portafolio:
 *   - favicon.svg y favicon-32.png  → logo «EC»
 *   - apple-touch-icon.png (180×180)
 *   - og-image.png (1200×630)       → imagen para compartir en redes
 *
 * Uso: npm run brand
 *
 * Satori convierte el maquetado (flexbox) y los textos en SVG usando las fuentes
 * Geist de @fontsource; resvg lo rasteriza a PNG.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

const PUBLIC_DIR = new URL('../public/', import.meta.url);

const COLORS = {
  bg: '#0C0D0F',
  s1: '#131518',
  s2: '#1A1D21',
  line: '#25292F',
  line2: '#343940',
  tx: '#EDEEF0',
  mu: '#A6ABB3',
  di: '#8B919A',
  accent: '#F26B38',
};

const font = (pkg, file) =>
  readFile(new URL(`../node_modules/@fontsource/${pkg}/files/${file}`, import.meta.url));

const FONTS = [
  { name: 'Geist', weight: 500, data: await font('geist', 'geist-latin-500-normal.woff') },
  { name: 'Geist', weight: 600, data: await font('geist', 'geist-latin-600-normal.woff') },
  {
    name: 'Geist Mono',
    weight: 400,
    data: await font('geist-mono', 'geist-mono-latin-400-normal.woff'),
  },
  {
    name: 'Geist Mono',
    weight: 700,
    data: await font('geist-mono', 'geist-mono-latin-700-normal.woff'),
  },
];

/** Crea un nodo para Satori (equivalente a un elemento JSX). */
function h(type, style, ...children) {
  return { type, props: { style: { display: 'flex', ...style }, children } };
}

const toSvg = (node, width, height) => satori(node, { width, height, fonts: FONTS });

const toPng = (svg, width) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();

/* ───────────────────────── Logo «EC» ───────────────────────── */

function logo(size, { rounded = true } = {}) {
  return h(
    'div',
    {
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: rounded ? size * 0.2 : 0,
      border: rounded ? `${Math.max(1, size / 32)}px solid ${COLORS.line2}` : 'none',
      backgroundImage: 'linear-gradient(180deg, #24282D, #15171A)',
      color: COLORS.tx,
      fontFamily: 'Geist Mono',
      fontWeight: 700,
      fontSize: size * 0.44,
      letterSpacing: size * 0.01,
    },
    'EC',
  );
}

const faviconSvg = await toSvg(logo(64), 64, 64);
await writeFile(new URL('favicon.svg', PUBLIC_DIR), faviconSvg);
await writeFile(new URL('favicon-32.png', PUBLIC_DIR), toPng(faviconSvg, 32));

// iOS redondea las esquinas por su cuenta: el icono ocupa todo el cuadrado.
const touchSvg = await toSvg(logo(180, { rounded: false }), 180, 180);
await writeFile(new URL('apple-touch-icon.png', PUBLIC_DIR), toPng(touchSvg, 180));

/* ───────────────────────── Imagen Open Graph ───────────────────────── */

const mono = (style, text) => h('span', { fontFamily: 'Geist Mono', ...style }, text);

const sheetRow = (label, value) =>
  h(
    'div',
    { borderTop: `1px solid ${COLORS.line}` },
    mono(
      {
        width: 92,
        padding: '12px 14px',
        borderRight: `1px solid ${COLORS.line}`,
        fontSize: 13,
        letterSpacing: 1,
        color: COLORS.di,
      },
      label.toUpperCase(),
    ),
    h('span', { padding: '11px 14px', fontSize: 17, color: COLORS.tx }, value),
  );

const ogImage = h(
  'div',
  {
    position: 'relative',
    width: 1200,
    height: 630,
    backgroundColor: COLORS.bg,
    fontFamily: 'Geist',
    color: COLORS.tx,
  },
  // Cuadrícula de plano, difuminada hacia los bordes como en el hero.
  h('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1200,
    height: 630,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '48px 48px',
  }),
  h('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1200,
    height: 630,
    backgroundImage: `radial-gradient(ellipse 70% 80% at 72% 38%, rgba(12,13,15,0) 10%, ${COLORS.bg} 75%)`,
  }),

  // Contenido, en una capa por encima del fondo.
  h(
    'div',
    {
      position: 'absolute',
      top: 56,
      right: 72,
      bottom: 56,
      left: 72,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    // Cabecera: logo y ubicación.
    h(
      'div',
      { alignItems: 'center', gap: 20 },
      logo(64),
      mono({ fontSize: 20, color: COLORS.mu }, 'Madrid, España'),
      mono({ fontSize: 20, color: COLORS.di }, '40.42° N · 3.70° W'),
    ),

    // Nombre, rol y cajetín.
    h(
      'div',
      { alignItems: 'flex-end', justifyContent: 'space-between' },
      h(
        'div',
        { flexDirection: 'column' },
        h(
          'div',
          {
            flexDirection: 'column',
            fontSize: 100,
            fontWeight: 600,
            lineHeight: 0.98,
            letterSpacing: -4,
          },
          h('span', {}, 'Eduardo'),
          h('span', { color: COLORS.mu }, 'Cebrián López'),
        ),
        h(
          'div',
          { marginTop: 28, gap: 10, fontSize: 34, fontWeight: 500, letterSpacing: -0.5 },
          h('span', {}, 'Desarrollador Web'),
          h('span', { color: COLORS.accent }, 'Front-End'),
        ),
      ),
      h(
        'div',
        {
          width: 320,
          flexShrink: 0,
          flexDirection: 'column',
          border: `1px solid ${COLORS.line2}`,
          borderRadius: 14,
          backgroundColor: COLORS.s1,
          overflow: 'hidden',
        },
        h(
          'div',
          { alignItems: 'flex-end', gap: 16, padding: '20px 20px' },
          h(
            'span',
            {
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 0.82,
              letterSpacing: -4,
              color: COLORS.accent,
            },
            '4',
          ),
          h(
            'span',
            { fontSize: 18, lineHeight: 1.35, width: 190 },
            'años creando sitios web para clientes reales',
          ),
        ),
        h(
          'div',
          { flexDirection: 'column' },
          sheetRow('Stack', 'React · TypeScript'),
          sheetRow('Base', 'Madrid · remoto'),
        ),
      ),
    ),
  ),
);

const ogSvg = await toSvg(ogImage, 1200, 630);
await writeFile(new URL('og-image.png', PUBLIC_DIR), toPng(ogSvg, 1200));

console.log('Recursos de marca generados en /public.');
