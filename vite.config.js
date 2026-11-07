import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' để deploy được ở mọi nơi (Vercel, Netlify, GitHub Pages...).
export default defineConfig({
  plugins: [react()],
  base: './',
});
