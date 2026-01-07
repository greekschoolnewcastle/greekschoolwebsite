import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/greekschoolwebsite/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        admissions: resolve(__dirname, 'admissions.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        getInvolved: resolve(__dirname, 'get-involved.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
