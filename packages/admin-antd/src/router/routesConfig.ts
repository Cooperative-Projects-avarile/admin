import { ROUTE_CONFIG_MAP as PLUGIN_ROUTE_CONFIG_MAP } from "plugins/config/router/routesConfig";
import { ROUTE_ID_KEY, RouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
	[key in ROUTE_ID_KEY]: RouteItem;
} = {
	HomePage: {
		id: "HomePage",
		meta: { title: "common:HomePageTile" },
		component: "HomePage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
		keepAlive: true,
		isTab: false,
	},
	LoginPage: {
		id: "LoginPage",
		component: "LoginPage",
		isNoAuth: true,
		path: "/",
	},

	NotFundPage: {
		id: "NotFundPage",
		meta: { title: "common:NotFundPageTitle" },
		component: "NotFundPage",
		isNoAuth: true,
		isMenu: false,
		path: "*",
		isTab: false,
	},
	ErrorPage: {
		id: "ErrorPage",
		meta: { title: "common:ErrorPageTitle" },
		component: "ErrorPage",
		isNoAuth: true,
		isMenu: false,
		path: "*",
		isTab: false,
	},
	LoadingPage: {
		id: "LoadingPage",
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
			title: "Deal",
		},
		isNoAuth: true,
		index: true,
	},
	DealApproval: {
		id: "DealApproval",
		component: "DealApprovalPage",
		meta: {
			title: "Deal Approval",
		},
		isNoAuth: true,
		keepAlive: true,
	},
	DealList: {
		id: "DealList",
		component: "DealListPage",
		meta: {
			title: "Deal List",
		},
		isNoAuth: true,
		keepAlive: true,
		index: true,
	},
	DealRank: {
		id: "DealRank",
		component: "DealRankPage",
		meta: {
			title: "Deal Rank",
		},
		keepAlive: true,
		isNoAuth: true,
	},
	DealEdit: {
		id: "DealEdit",
		meta: {
			title: "Deal edit",
			icon: "FundProjectionScreenOutlined",
		},
		depends: ["DealList"],
		isMenu: false,
		component: "DealEditPage",
		keepAlive: false,
	},
	CategoryPage: {
		id: "CategoryPage",
		meta: {
			title: "Category",
			icon: "FundProjectionScreenOutlined",
		},
		component: "CategoryPage",
		keepAlive: false,
		isNoAuth: true,
	},
	CategoryListPage: {
		id: "CategoryListPage",
		meta: {
			title: "Category List",
			icon: "FundProjectionScreenOutlined",
		},
		component: "CategoryListPage",
		keepAlive: false,
		isNoAuth: true,
	},
	SubsPage: {
		id: "SubsPage",
		meta: {
			title: "Subscription",
			icon: "FundProjectionScreenOutlined",
		},
		component: "SubsPage",
		keepAlive: false,
		isNoAuth: true,
	},
	SubsListPage: {
		id: "SubsListPage",
		meta: {
			title: "Subscription List",
			icon: "FundProjectionScreenOutlined",
		},
		component: "SubsListPage",
		keepAlive: false,
		isNoAuth: true,
	},
	...PLUGIN_ROUTE_CONFIG_MAP,
};
