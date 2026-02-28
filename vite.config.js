import { defineConfig } from 'vite';

export default defineConfig({
    base: '/french-grammar-quest/',
    server: {
        port: 3000
    },
    root: '.',
    build: {
        outDir: 'dist'
    }
});
