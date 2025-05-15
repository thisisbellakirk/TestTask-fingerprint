import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true, // This allows it to listen on your local IP (0.0.0.0)
    port: 5173, // Optional: You can specify a port
  },
});
