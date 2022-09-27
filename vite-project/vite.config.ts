import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/getJoke": {
        target: "https://api.apiopen.top",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/getJoke/, ""),
      },
      "^/aa": {
        target: "https://www.ai0626.top/index.php",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aa/, ""),
      },
    },
  },
});
