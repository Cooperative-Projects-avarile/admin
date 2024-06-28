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
			{
				find: /^plugins(.+)/,
				replacement: path.join(process.cwd(), "plugins/$1"),
			},
		],
	},
	build: {
		rollupOptions: {
			output: {
				// key自定义 value[] 插件同步package.json名称 或 src/相对路径下的指定文件 （自己鼠标点击进去可以看manualChunks ts类型）
				manualChunks: {
					react: [
						"react",
						"react-dom",
						"react-router-dom",
						"history",
						"dayjs",
					],
					antd: ["antd", "@ant-design/icons"],
					lodash: ["lodash-es", "lodash"],
					axios: ["axios"],
					"vendor-mian": [
						"@dnd-kit/core",
						"@dnd-kit/modifiers",
						"@dnd-kit/sortable",
						"@dnd-kit/utilities",
						"framer-motion",
						"qs",
						"i18next",
						"i18next-browser-languagedetector",
						"i18next-http-backend",
						"react-i18next",
						"react-responsive",
						"redux-eazy",
					],
				},
			},
		},
	},
	server: {
		port: 8032,
		proxy: {
			"/gitee": {
				target: "https://gitee.com",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace(/^\/gitee/, ""),
			},
			"/pdfWorkerCdn": {
				target: "https://cdnjs.cloudflare.com",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace(/^\/pdfWorkerCdn/, ""),
			},
			"/res": {
				target: "	https://qiniu.moderate.run",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace(/^\/res/, ""),
			},
			"/api": {
				target: "https://admin.scaling.com.au",
				// target: "http://localhost:4002",
				changeOrigin: true, // 允许跨域
			},
			"/devApi": {
				target: "http://localhost:8681",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace(/^\/devApi/, ""),
			},
		},
	},
});
