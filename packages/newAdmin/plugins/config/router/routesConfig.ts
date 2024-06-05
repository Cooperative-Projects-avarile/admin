import { PLUGIN_ROUTE_ID_KEY, PluginRouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
	[key in PLUGIN_ROUTE_ID_KEY]: PluginRouteItem;
} = {};
