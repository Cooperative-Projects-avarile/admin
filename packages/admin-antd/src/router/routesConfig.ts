import { ROUTE_CONFIG_MAP as PLUGIN_ROUTE_CONFIG_MAP } from "plugins/config/router/routesConfig";
import { ROUTE_ID_KEY, RouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
	[key in ROUTE_ID_KEY]: RouteItem;
} = {
	Home: {
		id: "Home",
		meta: { title: "common:HomePageTile" },
		component: "HomePage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
		keepAlive: true,
		isTab: false,
	},
	Login: {
		id: "Login",
		component: "LoginPage",
		isNoAuth: true,
		path: "/",
	},
	Hello: {
		id: "Hello",
		meta: {
			title: "common:HelloPageTile",
			icon: "FundProjectionScreenOutlined",
		},
		component: "HelloPage",
		actionPermissions: ["ADD", "EDIT"],
		keepAlive: true,
		isNoAuth: true,
		isMenu: false,
	},
	Dev: {
		id: "Dev",
		meta: {
			title: "common:DevPageTitle",
			icon: "LaptopOutlined",
		},
		actionPermissions: ["ADD", "EDIT"],
		isPublish: false,
	},
	PageDev: {
		id: "PageDev",
		meta: { title: "common:PageDevPageTitle" },
		component: "PageDevPage",
		actionPermissions: ["ADD", "EDIT"],
	},
	StoreDev: {
		id: "StoreDev",
		meta: { title: "common:StoreDevPageTitle" },
		component: "StoreDevPage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: false,
	},
	NotFund: {
		id: "NotFund",
		meta: { title: "common:NotFundPageTitle" },
		component: "NotFundPage",
		isNoAuth: true,
		isMenu: false,
		path: "*",
		isTab: false,
	},
	Error: {
		id: "Error",
		meta: { title: "common:ErrorPageTitle" },
		component: "ErrorPage",
		isNoAuth: true,
		isMenu: false,
		path: "*",
		isTab: false,
	},
	Plugins: {
		id: "Plugins",
		meta: {
			title: "common:PluginsPageTitle",
			icon: "ProductOutlined",
		},
		component: "PluginsPage",
	},
	PluginList: {
		id: "PluginList",
		component: "PluginListPage",
		isNoAuth: true,
		isMenu: false,
		index: true,
	},
	Loading: {
		id: "Loading",
		component: "LoadingPage",
		meta: {
			title: "LoadingPage",
		},
		isMenu: false,
		isNoAuth: true,
		isTab: false,
	},
	Deal: {
		id: "Deal",
		component: "DealPage",
		meta: {
			title: "DealPage",
		},
		isNoAuth: true,
		index: true,
	},
	DealApproval: {
		id: "DealApproval",
		component: "DealApprovalPage",
		meta: {
			title: "DealApprovalPage",
		},
		isNoAuth: true,
		keepAlive: true,
	},
	DealList: {
		id: "DealList",
		component: "DealListPage",
		meta: {
			title: "DealListPage",
		},
		isNoAuth: true,
		keepAlive: true,
		index: true,
	},
	DealRank: {
		id: "DealRank",
		component: "DealRankPage",
		meta: {
			title: "DealRankPage",
		},
		keepAlive: true,
		isNoAuth: true,
	},
	...PLUGIN_ROUTE_CONFIG_MAP,
};
