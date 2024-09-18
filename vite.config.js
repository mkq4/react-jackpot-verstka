// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  plugins: [react()],
  base: '/react-jackpot-verstka/'
});
