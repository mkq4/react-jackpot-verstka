// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // или другой алиас, если используешь
    },
  },
  plugins: [react()],
});
