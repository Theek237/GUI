import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Set a custom port
    open: true, // Optional: Open browser automatically
    historyApiFallback: true, // Enable React Router compatibility
  },
});
