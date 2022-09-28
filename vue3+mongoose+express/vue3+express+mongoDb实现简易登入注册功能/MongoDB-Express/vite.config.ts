import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: "/hams/",
  server: {
    host: "0.0.0.0",
    proxy: {
      "/talk": {
        target: "http://localhost:3002",
      },
    },
  },
  build: {
    // assetsDir: 'static',
    rollupOptions: {
      external: [
        // '/static/libs/Cesium/Widgets/widgets.css',
        // '/static/libs/leaflet/leaflet.css',
        // '/static/libs/leaflet/iclient-leaflet.min.css'
      ],
    },
  },
});
