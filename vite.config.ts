import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactUiLib",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es.ts" : "ts"}`,
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
