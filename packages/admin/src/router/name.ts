import { PLUGIN_ROUTE_NAME } from "plugins/config/router/name";
import { enumToObject } from "src/common/utils";

export enum NAME {
    Home,
    Login,
    Hello,
    Dev,
    PageDev,
    StoreDev,
    NotFund,
    Error,
    Loading,
    Plugins,
    PluginList,
    // Deal
    Deal,
	DealList,
	DealApproval,
	DealRank,
}

export const ROUTE_NAME = { ...NAME, ...PLUGIN_ROUTE_NAME };
export const ROUTE_ID = enumToObject(ROUTE_NAME);
