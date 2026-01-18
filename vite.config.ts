import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // نستخدم مساراً نسبياً بسيطاً بدلاً من مكتبة path لضمان التوافق مع Vercel
      '@': '/',
    },
  },
  build: {
    // هذا السطر يمنع توقف البناء عند وجود تحذيرات بسيطة
    chunkSizeWarningLimit: 1600,
  }
});
