const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	let proxy = {
		"/api": {
			target: "https://admin.scaling.com.au/",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "",
			},
		},
	};
	for (let item of Object.entries(proxy)) {
		const [key, data] = item;
		app.use(key, createProxyMiddleware(data));
	}
};
