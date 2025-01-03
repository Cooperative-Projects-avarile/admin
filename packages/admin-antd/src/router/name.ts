import { PLUGIN_ROUTE_NAME } from "plugins/config/router/name";
import { enumToObject } from "src/common/utils";

export enum NAME {
	HomePage,
	LoginPage,
	NotFundPage,
	ErrorPage,
	LoadingPage,
	// Deal
	Deal,
	DealList,
	DealApproval,
	DealRank,
	DealEdit,
	CategoryPage,
	CategoryListPage,
	SubsPage,
	SubsListPage,
}

export const ROUTE_NAME = { ...NAME, ...PLUGIN_ROUTE_NAME };
export const ROUTE_ID = enumToObject(ROUTE_NAME);
