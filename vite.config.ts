import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // هذا السطر يضمن أن @ تشير إلى مجلد src البرمجي
      '@': '/src',
    },
  },
  build: {
    // التأكد من أن البناء يتم بشكل صحيح للمتصفحات الحديثة
    target: 'esnext'
  }
});
