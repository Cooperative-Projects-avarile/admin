import { PLUGIN_ROUTE_ID_KEY, PluginRouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
	[key in PLUGIN_ROUTE_ID_KEY]: PluginRouteItem;
} = {
	MdPage: {
		id: "MdPage",
		meta: { title: "MdPage" },
		isNoAuth: true,
		component: "MdPage",
	},
	WinboxPage: {
		id: "WinboxPage",
		meta: { title: "WinboxPage" },
		isNoAuth: true,
		component: "WinboxPage",
	},
	PdfPage: {
		id: "PdfPage",
		meta: { title: "PdfPage" },
		isNoAuth: true,
		component: "PdfPage",
	},
	RivePage: {
		id: "RivePage",
		meta: { title: "RivePage" },
		isNoAuth: true,
		component: "RivePage",
	},
	MusicPage: {
		id: "MusicPage",
		meta: { title: "MusicPage:MusicPageTitle" },
		isNoAuth: true,
		component: "MusicPage",
	},
};
