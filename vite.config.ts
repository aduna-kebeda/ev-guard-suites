import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Disable rollup native modules for Vercel compatibility
      external: [],
      output: {
        // Ensure no native module loading
        inlineDynamicImports: false,
      },
    },
  },
  // Set environment variable to skip native rollup modules
  define: {
    'process.env.ROLLUP_SKIP_NATIVE': JSON.stringify('true'),
  },
}));
