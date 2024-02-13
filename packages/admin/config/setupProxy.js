const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	let proxy = {
		"/javaApi": {
			target: "http://localhost:8000/",
			changeOrigin: true,
			pathRewrite: {
				"^/javaApi": "",
			},
		},
		"/api": {
			target: "http://localhost:8681/",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "",
			},
		},
		"/api": {
			target: "https://live-admin.scaling.com.au",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "/api",
			},
		},
	};
	for (let item of Object.entries(proxy)) {
		const [key, data] = item;
		app.use(key, createProxyMiddleware(data));
	}
};
