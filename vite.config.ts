/// <reference types="vitest" />
import {defineConfig, PluginOption} from 'vite'
import react from '@vitejs/plugin-react'
import {patchCssModules} from "vite-css-modules";
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import { EmitMetadataPlugin } from '@cratis/applications.vite';


export default defineConfig({
    build: {
        copyPublicDir: false,
        outDir: './wwwroot',
        assetsDir: '',
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: [
            ],
        },
    },
    plugins: [
        // TanStackRouterVite(),
        // patchCssModules(),
        react(),
        EmitMetadataPlugin({
            tsconfigPath:'./tsconfig.app.json'

        }) as PluginOption,
        tsconfigPaths(),

    ],
    test: {
        environment: "happy-dom",
    }
})
