import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  server: {
    port: 5173,
    open: true,
    strictPort: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "classnames", "axios", "@tanstack/react-query"],
  },
  build: {
    outDir: "dist",
    sourcemap: process.env.NODE_ENV !== "production",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("tailwindcss") || id.includes("@tailwindcss")) return "tailwind-vendor";
            return "vendor";
          }
        },
      },
    },
  },
});
