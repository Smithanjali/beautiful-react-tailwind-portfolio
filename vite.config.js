import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// https://vitejs.dev/config/
export default defineConfig({
  base: isGithubActions ? "/beautiful-react-tailwind-portfolio/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
