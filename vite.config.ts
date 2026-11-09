import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO2.0/', // <--- Indispensable pour GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}); 