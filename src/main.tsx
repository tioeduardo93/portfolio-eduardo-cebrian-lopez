import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/geist-sans/latin-400.css';
import '@fontsource/geist-sans/latin-500.css';
import '@fontsource/geist-sans/latin-600.css';
import '@fontsource/geist-sans/latin-700.css';
import '@fontsource/geist-mono/latin-400.css';
import '@fontsource/geist-mono/latin-500.css';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('No se encuentra el elemento #root');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
