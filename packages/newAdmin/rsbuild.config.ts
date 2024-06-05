import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";

export default defineConfig({
  source: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [pluginReact()],
  server: {
    proxy: {
      "/devApi": {
        target: "http://localhost:8681",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
