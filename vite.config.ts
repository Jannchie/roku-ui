import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outputDir: "dist/types" })],
  build: {
    target: "modules",
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "RokuUI",
      fileName: "roku-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
