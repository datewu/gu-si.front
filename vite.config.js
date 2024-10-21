import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
//  rewrite: (path) => path.replace(/^\/api/, ''),
export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      "/api/": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
