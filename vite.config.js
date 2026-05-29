import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        variants: 'hero-variants.html',
      },
    },
  },
});
