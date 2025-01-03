import { message } from "antd";
import axios from "axios";
import { dpChain } from "src/service";
import storageHelper from "../utils/storageHelper";
import { HttpError } from "./HttpError";
import { overrideHttpType } from "./overrideHttpType";
import { notify } from "@/mui/components";
const _http = axios.create({
	timeout: 1000 * 5,
});

export const _httpForUpload = axios.create({
	timeout: 1000 * 5,
});

_http.interceptors.request.use(
	(config) => {
		config.headers.Authorization =
			"Bearer " + storageHelper.getItem("ACCESS_TOKEN");
		return config;
	},
	(err) => {
		throw err;
	},
);
const handleError = ({
	code,
	message,
}: {
	code: string | number;
	message: string;
}) => {
	throw new HttpError(message, Number(code));
};
_http.interceptors.response.use(
	(response) => {
		const { data = {} } = response;
		const { code, msg } = data;
		if (
			code &&
			Number(code) !== 0 &&
			Number(code) !== 200 &&
			Number(code) !== 1
		) {
			message.warning(msg);
			return handleError({
				code,
				message: msg,
			});
		}
		return response.data;
	},
	(error) => {
		let errInfo = error.response?.data?.message ||
			error.message || ["error"];
		errInfo?.map((item) => {
			notify.error(item);
		});

		handleError({
			code: "",
			message: "",
		});
	},
);

export const http = overrideHttpType(_http);
export const httpBase = _http;
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
