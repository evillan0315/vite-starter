import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/socket.io': {
        target: process.env.VITE_WS_URL,
        changeOrigin: true,
        ws: true,
      },
    },
    cors: {
      origin: ['*'],
      methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH', 'PUT'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    },
    allowedHosts: [
      'app.local',
      'localhost',
      'viduk.swinglifestyle.com',
      'chatv.swinglifestyle.com',
    ],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.GITHUB_CALLBACK_URL': JSON.stringify(
      process.env.GITHUB_CALLBACK_URL,
    ),
    'process.env.GOOGLE_CALLBACK_URL': JSON.stringify(
      process.env.GOOGLE_CALLBACK_URL,
    ),
    'import.meta.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
    'import.meta.env.VITE_FRONTEND_URL': JSON.stringify(process.env.VITE_FRONTEND_URL),
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.ITE_API_URL),
    'import.meta.env.VITE_WS_URL': JSON.stringify(process.env.VITE_WS_URL),
  },
});
