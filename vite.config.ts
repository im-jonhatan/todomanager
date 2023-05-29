import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "todomanager",
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [react({ include: "**/*.jsx" }), svgr()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
