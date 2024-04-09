import { ROUTE_ID_KEY, RouteItem } from "src/config/types";
export type RoutesConfigMap = { [key in ROUTE_ID_KEY]: RouteItem };
export interface StoreState {
	routesConfig: RouteItem[];
	routesConfigMap: RoutesConfigMap; // 配置数据字典，直接通过id获取配置数据
}
