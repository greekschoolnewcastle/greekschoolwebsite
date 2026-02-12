import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        admissions: resolve(__dirname, 'src/admissions.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        getInvolved: resolve(__dirname, 'src/get-involved.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        contributors: resolve(__dirname, 'src/contributors.html'),
      },
    },
  },
});
