import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

export default defineConfig({
  server: {
    port: parseInt(process.env.CLIENT_PORT),
  },
  define: {
    client_PORT: JSON.stringify(process.env.CLIENT_PORT),
    server_PORT: JSON.stringify(process.env.SERVER_PORT),
  },
  plugins: [react()],
});
