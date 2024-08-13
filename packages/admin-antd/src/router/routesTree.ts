import { ROUTE_ID } from "./name";
import { RoutesStructDataItem } from "./types";

// MODERATE_AUTO:START
export const ROUTE_STRUCT_CONFIG: RoutesStructDataItem[] = [
  { id: ROUTE_ID.Error },
  {
    id: ROUTE_ID.Home,
    children: [
      {
        id: ROUTE_ID.Dev,
        children: [
          { id: ROUTE_ID.PageDev },
          { id: ROUTE_ID.StoreDev },
        ],
      },
      { id: ROUTE_ID.Hello },
      { id: ROUTE_ID.Loading },
      { id: ROUTE_ID.NotFund },
      {
        id: ROUTE_ID.Plugins,
        children: [{ id: ROUTE_ID.PluginList }],
      },
      {
        id: ROUTE_ID.Deal,
        children: [
            { id: ROUTE_ID.DealApproval },
            { id: ROUTE_ID.DealList },
            { id: ROUTE_ID.DealRank },
        ],
    },
    ],
  },
  { id: ROUTE_ID.Login },
];
// MODERATE_AUTO:END