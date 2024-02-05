import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //      Server is yet to be implemented, saving for later
  //   server: {
  //     port: 3000,
  //     open: true,
  //     proxy: {
  //       "/graphql": {
  //         target: "http://localhost:3001",
  //         secure: false,
  //         changeOrigin: true,
  //       },
  //     },
  //   },
});
