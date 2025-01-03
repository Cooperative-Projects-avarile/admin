import { ROUTE_ID } from "./name";
import { RoutesStructDataItem } from "./types";

// MODERATE_AUTO:START
export const ROUTE_STRUCT_CONFIG: RoutesStructDataItem[] = [
	{ id: ROUTE_ID.ErrorPage },
	{
		id: ROUTE_ID.HomePage,
		children: [
			{ id: ROUTE_ID.LoadingPage },
			{ id: ROUTE_ID.NotFundPage },
			{
				id: ROUTE_ID.Deal,
				children: [
					{ id: ROUTE_ID.DealApproval },
					{ id: ROUTE_ID.DealList },
					{ id: ROUTE_ID.DealRank },
					{ id: ROUTE_ID.DealEdit },
				],
			},
			{
				id: ROUTE_ID.CategoryPage,
				children: [{ id: ROUTE_ID.CategoryListPage }],
			},
			{
				id: ROUTE_ID.SubsPage,
				children: [{ id: ROUTE_ID.SubsListPage }],
			},
		],
	},
	{ id: ROUTE_ID.LoginPage },
];
// MODERATE_AUTO:END
