import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/reefqr/', // Add this line to specify the base URL for GitHub Pages
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Keep your PostCSS config as is
  },
});