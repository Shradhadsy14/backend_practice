import { defineConfig } from 'vite';   // ✅ THIS LINE WAS MISSING
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000' // ✅ backend port
    }
  }
});