import { defineConfig } from 'vite';

export default defineConfig({
    base: '/frenchgalaxyquest/',
    server: {
        port: 3000,
        allowedHosts: true,
    },
    root: '.',
    build: {
        outDir: 'dist'
    }
});
