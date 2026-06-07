import { defineConfig } from 'vite';

export default defineConfig({
    base: '/french-grammar-quest/',
    server: {
        port: 3000,
        allowedHosts: true,
    },
    root: '.',
    build: {
        outDir: 'dist'
    }
});
