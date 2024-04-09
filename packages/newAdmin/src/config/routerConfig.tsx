import { enumToObject } from "src/common/utils";
import type { ROUTE_ID_KEY, RouteItem, RoutesStructDataItem } from "./types";
import i18n from "src/i18n";

// =============== 路由name和id ===============
// MODERATE_AUTO_2:START
export enum ROUTE_NAME {
	HomePage,
	LoginPage,
	HelloPage,
	SysPage,
	CmsPage,
	RolePage,
	UserPage,
	DevPage,
	PageDevPage,
	PermissionPage,
	StoreDevPage,
	ApiDevPage,
	CategoryPage,
	NotFundPage,
	MenuPage,
	DealPage,
}
// MODERATE_AUTO_2:END

export const ROUTE_ID = enumToObject(ROUTE_NAME);
// =============== 路由信息对象 ===============
// ROUTE_INFO_CONFIG，路由信息字典
// MODERATE_AUTO_3:START
export const ROUTE_INFO_CONFIG: {
	[key in ROUTE_ID_KEY]: RouteItem;
} = {
	LoginPage: {
		id: "LoginPage",
		meta: {
			title: "Login",
		},
		component: "LoginPage",
		path: "/login",
		isNoAuth: true,
	},
	HomePage: {
		id: "HomePage",
		meta: {
			title: "Home",
		},
		path: "/",
		component: "HomePage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	HelloPage: {
		id: "HelloPage",
		meta: {
			title: i18n.t("dev:dev.Dashboard"),
			icon: "FundProjectionScreenOutlined",
		},
		component: "HelloPage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	SysPage: {
		id: "SysPage",
		meta: {
			title: i18n.t("dev:dev.sys"),
			icon: "ApartmentOutlined",
		},
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	CmsPage: {
		id: "CmsPage",
		meta: {
			title: i18n.t("dev:dev.cms"),
			icon: "CoffeeOutlined",
		},
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	UserPage: {
		id: "UserPage",
		meta: {
			title: "User Management",
		},
		actionPermissions: ["ADD", "EDIT"],
		component: "UserPage",
		isNoAuth: true,
	},
	RolePage: {
		id: "RolePage",
		meta: {
			title: "Role Management",
		},
		component: "RolePage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	DevPage: {
		id: "DevPage",
		meta: {
			title: i18n.t("dev:dev.name"),
			icon: "LaptopOutlined",
		},
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	PageDevPage: {
		id: "PageDevPage",
		meta: {
			title: "Router Management",
		},
		component: "PageDevPage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	PermissionPage: {
		id: "PermissionPage",
		meta: {
			title: "Permission Management",
		},
		component: "PermissionPage",
		isMenu: false,
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	StoreDevPage: {
		id: "StoreDevPage",
		meta: {
			title: "Store Management",
		},
		component: "StoreDevPage",
		actionPermissions: ["ADD", "EDIT"],
		isNoAuth: true,
	},
	ApiDevPage: {
		id: "ApiDevPage",
		meta: {
			title: "API Management",
		},
		component: "ApiDevPage",
		isNoAuth: true,
		actionPermissions: ["ADD", "EDIT"],
	},
	CategoryPage: {
		id: "CategoryPage",
		meta: {
			title: "Category Management",
		},
		component: "CategoryPage",
		isNoAuth: true,
	},
	NotFundPage: {
		id: "NotFundPage",
		meta: {
			title: "notFundPage",
		},
		component: "NotFundPage",
		isNoAuth: true,
		isMenu: false,
		path: "*",
	},
	MenuPage: {
		id: "MenuPage",
		meta: {
			title: "menuPage",
		},
		component: "MenuPage",
		isNoAuth: true,
		index: false,
	},
	DealPage: {
		id: "DealPage",
		meta: {
			title: "dealPage",
		},
		component: "DealPage",
		isNoAuth: true,
	},
}; //MODERATE_AUTO_3:END
// =============== 路由结构数据 ===============
// MODERATE_AUTO:START
export const ROUTE_STRUCT_CONFIG: RoutesStructDataItem[] = [
	{
		id: ROUTE_ID.HomePage,
		children: [
			{
				id: ROUTE_ID.CmsPage,
				children: [
					{
						id: ROUTE_ID.CategoryPage,
					},
					{
						id: ROUTE_ID.DealPage,
					},
				],
			},
			{
				id: ROUTE_ID.DevPage,
				children: [
					{
						id: ROUTE_ID.ApiDevPage,
					},
					{
						id: ROUTE_ID.PageDevPage,
					},
					{
						id: ROUTE_ID.StoreDevPage,
					},
				],
			},
			{
				id: ROUTE_ID.HelloPage,
			},
			{
				id: ROUTE_ID.NotFundPage,
			},
			{
				id: ROUTE_ID.PermissionPage,
			},
			{
				id: ROUTE_ID.SysPage,
				children: [
					{
						id: ROUTE_ID.MenuPage,
					},
					{
						id: ROUTE_ID.RolePage,
					},
					{
						id: ROUTE_ID.UserPage,
					},
				],
			},
		],
	},
	{
		id: ROUTE_ID.LoginPage,
	},
];
// MODERATE_AUTO:END
