import { overrideHttpType } from "./overrideHttpType";
import { HttpError } from "./HttpError";
import axios from "axios";
import { message } from "antd";
import { ROUTE_ID } from "src/router";
import { dpChain, routerHelper } from "src/service";
import { storageHelper } from "../utils";

const _http = axios.create({
	timeout: 1000 * 30,
});

_http.interceptors.request.use(
	(config) => {
		config.headers.Authorization =
			"bearer " + sessionStorage.getItem("ACCESS_TOKEN");
		return config;
	},
	(err) => {
		throw err;
	},
);

_http.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(err) => {
		const { response } = err;
		const { status, data } = response;
		if (Number(status) === 401) {
			message.info(data.message);
			routerHelper.jumpTo(ROUTE_ID.Login);
			throw new HttpError(data.message, Number(err.code));
		} else {
			message.info(data.message || "network error");
			throw new HttpError(data.message, Number(err.code || err.status));
		}
	},
);

export const http = overrideHttpType(_http);
export const http2 = _http;

_http.fetch = ((config, options) => {
	if (options?.showLoading) {
		storageHelper.setItem("IS_PLUGIN_INSTALLING", 1);
		dpChain("appStore").setIsLoading(true);
	}
	return _http.request(config).finally(() => {
		if (options?.showLoading) {
			dpChain("appStore").setIsLoading(false);
			storageHelper.setItem("IS_PLUGIN_INSTALLING", 0);
		}
	});
}) as typeof _http.fetch;
