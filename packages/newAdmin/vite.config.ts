import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { bootstrap } from "global-agent";
process.env.GLOBAL_AGENT_HTTP_PROXY = "http://127.0.0.1:8118"; // 代理地址:端口
bootstrap();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^src(.+)/,
				replacement: path.join(process.cwd(), "src/$1"),
			},
		],
	},
	server: {
		port: 8032,
		proxy: {
			"/api": {
				target: "https://admin.scaling.com.au",
				changeOrigin: true, // 允许跨域
			},
			"/doc": {
				target: "https://d2k5mqgnyo4nix.cloudfront.net",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace(/^\/doc/, ""),
			},
			// "/api": {
			//   target: "http://localhost:8681",
			//   changeOrigin: true, // 允许跨域
			//   rewrite: (path) => path.replace(/^\/api/, ""),
			// },
			"/admin-api": {
				target: "http://127.0.0.1:48080",
				changeOrigin: true, // 允许跨域
			},
		},
	},
});
