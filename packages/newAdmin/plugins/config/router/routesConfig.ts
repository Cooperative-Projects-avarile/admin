import { PLUGIN_ROUTE_ID_KEY, PluginRouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
	[key in PLUGIN_ROUTE_ID_KEY]: PluginRouteItem;
} = {
	WinboxPage: {
		id: "WinboxPage",
		meta: { title: "WinboxPage" },
		isNoAuth: true,
		component: "WinboxPage",
	},
	RivePage: {
		id: "RivePage",
		meta: { title: "RivePage" },
		isNoAuth: true,
		component: "RivePage",
	},
	PdfPage: {
		id: "PdfPage",
		meta: { title: "PdfPage" },
		isNoAuth: true,
		component: "PdfPage",
	},
};
