import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import path from "path";

export default defineConfig({
	html: {
		template: "./index.html",
	},
	source: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [pluginReact(), pluginSass()],
	server: {
		proxy: {
			"/api": {
				target: "https://admin.scaling.com.au",
				// target: "http://localhost:4002",
				changeOrigin: true, // 允许跨域
			},
		},
	},
});
