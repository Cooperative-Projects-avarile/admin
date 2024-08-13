import { PLUGIN_ROUTE_ID_KEY, PluginRouteItem } from "./types";

export const ROUTE_CONFIG_MAP: {
  [key in PLUGIN_ROUTE_ID_KEY]: PluginRouteItem;
} = {
  Winbox: {
    id: "Winbox",
    meta: { title: "WinboxPage" },
    isNoAuth: true,
    component: "WinboxPage",
  },
  Rive: {
    id: "Rive",
    meta: { title: "Rive" },
    isNoAuth: true,
    component: "RivePage",
  },
  PdfPage: {
    id: "PdfPage",
    meta: { title: "PdfPage:PdfPageTitle" },
    isNoAuth: true,
    component: "PdfPage",
  }
};
