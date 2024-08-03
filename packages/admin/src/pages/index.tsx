import { pageList as pluginsPages } from "plugins/config/pages";
import { lazy } from "react";

const isProd = process.env.NODE_ENV == "production";
// MODERATE_AUTO_PAGE_LAZY_IMPORT:START
const HomePage = lazy(() => import("./HomePage"));
const LoginPage = lazy(() => import("./LoginPage"));
const HelloPage = lazy(() => import("./HomePage/HelloPage"));
//storeDevPage
const StoreDevPage = isProd
    ? null
    : lazy(() => import("./HomePage/DevPage/StoreDevPage"));
// 页面管理
const PageDevPage = isProd
    ? null
    : lazy(() => import("./HomePage/DevPage/PageDevPage"));
////notFundPage
const NotFundPage = lazy(() => import("./HomePage/NotFundPage"));
const ErrorPage = lazy(() => import("./HomePage/NotFundPage"));

//PluginsPage
const PluginsPage = lazy(() => import("./HomePage/PluginsPage"));

//PluginListPage
const PluginListPage = lazy(
    () => import("./HomePage/PluginsPage/PluginListPage")
);
const LoadingPage = lazy(() => import("./HomePage/LoadingPage"));

const DealPage = lazy(() => import("./HomePage/DealPage"));
const DealListPage = lazy(() => import("./HomePage/DealPage/DealListPage"));
const DealApprovalPage = lazy(
	() => import("./HomePage/DealPage/DealApprovalPage"),
);
const DealRankPage = lazy(() => import("./HomePage/DealPage/DealRankPage"));

//MODERATE_AUTO_PAGE_LAZY_IMPORT:END
export type PageKey = keyof typeof pageList;
export const pageList = {
    ...pluginsPages,
    HomePage,
    LoginPage,
    HelloPage,
    PageDevPage,
    StoreDevPage,
    NotFundPage,
    PluginsPage,
    PluginListPage,
    ErrorPage,
    LoadingPage,
    DealPage,
	DealListPage,
	DealApprovalPage,
	DealRankPage,
};
