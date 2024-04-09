import { lazy } from "react";

// MODERATE_AUTO_PAGE_LAZY_IMPORT:START
const HomePage = lazy(() => import("./homePage/homePage"));
const LoginPage = lazy(() => import("./loginPage/loginPage"));
const HelloPage = lazy(() => import("./homePage/helloPage/helloPage"));
// 系统管理 sysPage
// 用户管理
const UserPage = lazy(() => import("./homePage/sysPage/userPage/userPage"));
// 角色管理
const RolePage = lazy(() => import("./homePage/sysPage/rolePage/rolePage"));
// 内容管理 cmsPage
// 图片管理
// 页面管理
const PageDevPage = lazy(() => import("./homePage/devPage/pageDevPage"));
//permissionPage
const PermissionPage = lazy(
	() => import("./homePage/permissionPage/permissionPage"),
);
//storeDevPage
const StoreDevPage = lazy(() => import("./homePage/devPage/storeDevPage"));
//apiDevPage
const ApiDevPage = lazy(() => import("./homePage/devPage/apiDevPage"));
////categoryPage
const CategoryPage = lazy(() => import("./homePage/cmsPage/categoryPage"));

////notFundPage
const NotFundPage = lazy(() => import("./homePage/notFundPage/notFundPage"));

////menuPage
const MenuPage = lazy(() => import("./homePage/sysPage/menuPage/menuPage"));

const DealPage = lazy(() => import("./homePage/cmsPage/dealPage/dealPage"));
//MODERATE_AUTO_PAGE_LAZY_IMPORT:END

export const pageList = {
	HomePage,
	LoginPage,
	HelloPage,
	UserPage,
	RolePage,
	PageDevPage,
	PermissionPage,
	StoreDevPage,
	ApiDevPage,
	CategoryPage,
	NotFundPage,
	MenuPage,
	DealPage,
};
