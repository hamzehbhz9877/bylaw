import {defineConfig} from 'vite';
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'

const path = require("path")

export default ({mode}) => {
    return defineConfig({
        // @ts-ignore
        plugins: [viteReact(), tsconfigPaths({baseUrl: "./src"})],
        server: {
            https: false,
            host: false
        }
    });
};