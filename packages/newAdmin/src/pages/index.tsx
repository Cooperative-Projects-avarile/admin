import { lazy } from "react";
import { pageList as pluginsPages } from "plugins/config/pages";

const isProd = process.env.NODE_ENV == "production";
// MODERATE_AUTO_PAGE_LAZY_IMPORT:START
const HomePage = lazy(() => import("./HomePage/homePage"));
const LoginPage = lazy(() => import("./LoginPage/loginPage"));
const HelloPage = lazy(() => import("./HomePage/HelloPage/helloPage"));
// 角色管理
export const RolePage = lazy(
	() => import("./HomePage/SysPage/RolePage/rolePage"),
);
//storeDevPage
const StoreDevPage = isProd
	? null
	: lazy(() => import("./HomePage/DevPage/StoreDevPage"));
// 页面管理
const PageDevPage = isProd
	? null
	: lazy(() => import("./HomePage/DevPage/PageDevPage"));
////notFundPage
const NotFundPage = lazy(() => import("./HomePage/NotFundPage/notFundPage"));
const ErrorPage = lazy(() => import("./HomePage/NotFundPage/notFundPage"));

//menuPage
const MenuPage = lazy(() => import("./HomePage/SysPage/MenuPage/menuPage"));

//PluginsPage
const PluginsPage = isProd
	? null
	: lazy(() => import("./HomePage/PluginsPage"));

//PluginListPage
const PluginListPage = isProd
	? null
	: lazy(() => import("./HomePage/PluginsPage/PluginListPage"));
const DealPage = lazy(() => import("./HomePage/DealPage"));
const DealListPage = lazy(() => import("./HomePage/DealPage/DealListPage"));
const DealApprovalPage = lazy(
	() => import("./HomePage/DealPage/DealApprovalPage"),
);
const DealRankPage = lazy(() => import("./HomePage/DealPage/DealRankPage"));
const LoadingPage = lazy(() => import("./HomePage/LoadingPage"));
const UserPage = lazy(() => import("./HomePage/UserPage"));
const CategoryPage = lazy(() => import("./HomePage/CategoryPage"));
const EnquiryPage = lazy(() => import("./HomePage/EnquiryPage"));
//MODERATE_AUTO_PAGE_LAZY_IMPORT:END
export const pageList = {
	...pluginsPages,
	HomePage,
	LoginPage,
	HelloPage,
	UserPage,
	RolePage,
	PageDevPage,
	StoreDevPage,
	NotFundPage,
	MenuPage,
	PluginsPage,
	PluginListPage,
	ErrorPage,
	DealPage,
	DealListPage,
	DealApprovalPage,
	DealRankPage,
	LoadingPage,
	CategoryPage,
	EnquiryPage,
};
