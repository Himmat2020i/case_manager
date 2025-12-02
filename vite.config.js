import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log("Loaded ENV ===>", env);

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        bootstrap: path.resolve(__dirname, "node_modules/bootstrap")
      }
    },
    server: {
      port: 3000,
      open: true,
      strictPort: true,
      historyApiFallback: true
    }
  };
});
