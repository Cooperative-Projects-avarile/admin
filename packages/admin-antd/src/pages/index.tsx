import { pageList as pluginsPages } from "plugins/config/pages";
import { lazy } from "react";

// MODERATE_AUTO_PAGE_LAZY_IMPORT:START
const HomePage = lazy(() => import("./HomePage"));
const LoginPage = lazy(() => import("./LoginPage"));
const HelloPage = lazy(() => import("./HomePage/DealPage/DealEditPage"));
////notFundPage
const NotFundPage = lazy(() => import("./HomePage/NotFundPage"));
const ErrorPage = lazy(() => import("./HomePage/NotFundPage"));

//menuPage
const LoadingPage = lazy(() => import("./HomePage/LoadingPage"));

const DealPage = lazy(() => import("./HomePage/DealPage"));
const DealListPage = lazy(() => import("./HomePage/DealPage/DealListPage"));
const DealApprovalPage = lazy(
	() => import("./HomePage/DealPage/DealApprovalPage"),
);
const DealRankPage = lazy(() => import("./HomePage/DealPage/DealRankPage"));
const DealEditPage = lazy(() => import("./HomePage/DealPage/DealEditPage"));

const CategoryPage = lazy(() => import("./HomePage/CategoryPage"));
const CategoryListPage = lazy(
	() => import("./HomePage/CategoryPage/CategoryListPage"),
);

const SubsPage = lazy(() => import("./HomePage/SubsPage"));
const SubsListPage = lazy(() => import("./HomePage/SubsPage/SubsListPage"));
//MODERATE_AUTO_PAGE_LAZY_IMPORT:END
export type PageKey = keyof typeof pageList;
export const pageList = {
	...pluginsPages,
	HomePage,
	LoginPage,
	HelloPage,
	NotFundPage,
	ErrorPage,
	LoadingPage,
	DealPage,
	DealListPage,
	DealApprovalPage,
	DealRankPage,
	DealEditPage,
	CategoryPage,
	CategoryListPage,
	SubsPage,
	SubsListPage,
};
