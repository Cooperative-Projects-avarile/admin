import { RouteItem } from "@/config/types";
import type { Location } from "react-router-dom";

export interface RouterStoreState {
  routesData: RouteItem[];
  tabsHistory: { [key: PropertyKey]: Location };
  defaultPermissions:string[]
  routesConfigMap: { [key: string]: RouteItem }; // 配置数据字典，直接通过id获取配置数据
  defaultRoutesData: RouteItem[];
  defaultRouteKeys:string[]
}
